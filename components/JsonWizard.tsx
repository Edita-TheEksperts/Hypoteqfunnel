'use client'
import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type AnyObj = Record<string, any>

function flattenAny(comps: AnyObj[]): AnyObj[] {
  const acc: AnyObj[] = []
  const walk = (nodes?: AnyObj[]) => {
    if (!nodes) return
    for (const c of nodes) {
      if (!c || typeof c !== 'object') continue
      if (Array.isArray(c.columns)) { for (const col of c.columns) walk(col?.components) }
      if (Array.isArray(c.rows)) { for (const row of c.rows) for (const col of row) walk(col?.components) }
      if (Array.isArray(c.components)) walk(c.components)
      if (c.input || ['file','reviewpage','datagrid','editgrid'].includes(c.type)) acc.push(c)
    }
  }
  walk(comps)
  return acc
}
const isReq = (f:any)=>{ const v=f.validate; return !!(v && (v.required || v.unique || v.minLength>0)) }
const readOptions=(c:any)=> Array.isArray(c.values)? c.values : (c.data && Array.isArray(c.data.values)? c.data.values : [])
const sanitizeNumber = (raw: string) => {
  if (raw == null) return ''
  let v = raw.replace(/[^0-9.,-]/g, '')
  v = v.replace(/(?!^)-/g, '')
  v = v.replace(/,/g, '.')
  const parts = v.split('.')
  if (parts.length > 2) v = parts[0] + '.' + parts.slice(1).join('')
  return v
}
const numericAllowedKeys = new Set(['Backspace','Delete','Tab','ArrowLeft','ArrowRight','Home','End'])

export default function JsonWizard({
  version,
  mandatory
}: {
  version: 'lite' | 'full'
  mandatory: 'all' | 'some'
}) {
  const [schema, setSchema] = useState<AnyObj | null>(null)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<AnyObj>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [showErrors, setShowErrors] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const fieldRefs = useRef<Record<string, HTMLInputElement|HTMLTextAreaElement|null>>({})
  const storageKeyAns = `hypoteq.${version}.${mandatory}.answers`
  const storageKeyStep = `hypoteq.${version}.${mandatory}.step`

  const hardReset = useCallback(() => {
    try {
      localStorage.removeItem(storageKeyAns)
      localStorage.removeItem(storageKeyStep)
    } catch {}
    setAnswers({})
    setStep(0)
    setSubmitted(false)
    setShowErrors(false)
    setTouched({})
  }, [storageKeyAns, storageKeyStep])

  useEffect(()=>{
    const nav = (performance.getEntriesByType('navigation')[0] as any)
    if (nav?.type === 'reload') {
      hardReset()
    }
    const cached = localStorage.getItem(storageKeyAns); if (cached) setAnswers(JSON.parse(cached))
    const stepCached = localStorage.getItem(storageKeyStep); if (stepCached) setStep(Number(stepCached) || 0)
  }, [hardReset, storageKeyAns, storageKeyStep])

  useEffect(() => {
    const url = version === 'full' ? '/schemas/hypoteqmockform30.json' : '/schemas/beraterVersionForm30.json'
    fetch(url).then(r=>r.json()).then(j=>{
      const formKey = version === 'full' ? 'hypoteqmockform30' : 'beraterVersionForm30'
      const form = j.forms?.[formKey]
      if (form && mandatory === 'some') {
        flattenAny(form.components).forEach((f:any)=>{
          if (f.validate) f.validate.required = false
        })
        const mustFields = ['email','firstName','lastName']
        flattenAny(form.components).forEach((f:any)=>{
          if (mustFields.includes(f.key) && f.validate) {
            f.validate.required = true
          }
        })
      }
      setSchema(j)
    })
  }, [version, mandatory])

  const form = schema?.forms?.[version === 'full' ? 'hypoteqmockform30' : 'beraterVersionForm30']
  const allPanels = useMemo(()=> form ? (form.components||[]).filter((c:any)=>c?.type==='panel') : [], [form])

  const evalCond=(c:any)=>{
    const cond=c.conditional
    if (!cond || !Array.isArray(cond.conditions) || cond.conditions.length===0) return true
    const check=(rule:any)=>{
      const left=answers?.[rule.component], op=rule.operator, right=rule.value
      switch(op){ case 'isEqual': return left===right; case 'notEqual': return left!==right; case 'in': return Array.isArray(right)? right.includes(left):false; case 'notIn': return Array.isArray(right)? !right.includes(left):false; case 'gte': return Number(left)>=Number(right); case 'lte': return Number(left)<=Number(right); case 'exists': return left!==undefined && left!==null && String(left) !== ''; case 'notExists': return left===undefined || left===null || String(left)===''; default: return true }
    }
    const res=cond.conditions.map(check); const all=(cond.conjunction??'all')==='all'; return all? res.every(Boolean): res.some(Boolean)
  }
  const evalCustom=(code?:string)=>{
    if(!code) return true
    try{ const fn=new Function('data', `let show=false;\n${code}\n; return !!show;`); return !!fn(answers||{}) }catch{return true}
  }

  const visiblePanels=useMemo(()=> allPanels.filter((p:any)=> (!p.conditional || evalCond(p)) && evalCustom(String(p.customConditional||''))), [allPanels, answers])
  useEffect(()=>{ if (step>visiblePanels.length-1) setStep(Math.max(0, visiblePanels.length-1)) }, [visiblePanels, step])

  const panel = visiblePanels[step]
  const fields = useMemo(()=>{
    if (!panel) return []
    const flat=flattenAny(panel.components||[])
    return flat.filter((f:any)=> f.input || ['file','datagrid','editgrid'].includes(f.type)).filter((f:any)=> evalCond(f) && evalCustom(String(f.customConditional||'')))
  }, [panel, answers])

  useEffect(()=>{
    if (!fields.length) return
    const firstKey = fields[0]?.key
    const el = firstKey ? fieldRefs.current[firstKey] : null
    if (el && typeof el.focus === 'function') {
      el.focus()
    }
  }, [fields])

  const progress = useMemo(()=>{
    const reqAll = visiblePanels.flatMap(p=> flattenAny(p.components||[])).filter((f:any)=> f.input || ['file','datagrid','editgrid'].includes(f.type)).filter(evalCond).filter((f:any)=> evalCustom(String(f.customConditional||''))).filter(isReq)
    const total=reqAll.length; const filled=reqAll.filter((f:any)=>{ const v=answers?.[f.key]; return Array.isArray(v)? v.length>0 : (v!==undefined && v!==null && String(v)!=='') }).length
    return total? Math.round((filled/total)*100):0
  }, [visiblePanels, answers])

  const setAnswer = useCallback((k:string, v:any)=>{
    setAnswers(prev=> (prev[k] === v ? prev : { ...prev, [k]: v }))
    setTouched(prev=> ({ ...prev, [k]: true }))
  }, [])

  const errors = useMemo(()=>{
    const errs:string[]=[]; for (const f of fields){ if (isReq(f)){ const v=answers?.[f.key]; const ok=Array.isArray(v)? v.length>0 : (v!==undefined && v!==null && String(v)!==''); if(!ok) errs.push(f.key) } } return errs
  }, [fields, answers])

  const shouldMarkInvalid = (f:any) => {
    if (!isReq(f)) return false
    const v = answers?.[f.key]
    const empty = Array.isArray(v) ? v.length===0 : (v===undefined || v===null || String(v)==='')
    if (!empty) return false
    return showErrors || !!touched[f.key]
  }

  const scrollToFirstError = () => {
    if (errors.length === 0) return
    const key = errors[0]
    const el = fieldRefs.current[key]
    if (el && typeof el.focus === 'function') {
      el.focus()
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const DateBox = ({value, setValue, invalid, inputRef}:{ value:any; setValue:(v:any)=>void; invalid:boolean; inputRef:(el:any)=>void }) => {
    return (
      <div className="date-wrap">
        <input ref={inputRef} className={`input-base ${invalid?'input-invalid':''}`} type="date" value={value ?? ''} onChange={(e)=>setValue(e.target.value)} aria-invalid={invalid} />
        <button type="button" className="date-btn" onClick={(e)=>{
          const parent = (e.currentTarget.parentElement as HTMLElement)
          const input = parent.querySelector('input[type="date"]') as any
          if (input && typeof input.showPicker === 'function') input.showPicker()
          else input?.focus()
        }} aria-label="Open calendar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor"/><path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor"/></svg>
        </button>
      </div>
    )
  }

  const InputControl=({ field, value, setValue }:{ field:any; value:any; setValue:(v:any)=>void })=>{
    const isInvalid = shouldMarkInvalid(field)
    const common='input-base ' + (isInvalid ? 'input-invalid' : '')
    const refCb = (el: any) => { fieldRefs.current[field.key] = el }
    const onBlur = () => setTouched(prev=>({ ...prev, [field.key]: true }))
    const t=field.type
    if (t==='textarea') return <textarea ref={refCb} className={common} rows={4} value={value??''} onChange={e=>setValue(e.target.value)} onBlur={onBlur} aria-invalid={isInvalid} />
    if (t==='email') return <input ref={refCb} className={common} type='email' value={value??''} onChange={e=>setValue(e.target.value)} onBlur={onBlur} aria-invalid={isInvalid} />
    if (t==='phoneNumber' || t==='textfield') return <input ref={refCb} className={common} type='text' value={value??''} onChange={e=>setValue(e.target.value)} onBlur={onBlur} aria-invalid={isInvalid} />
    if (t==='number' || t==='currency') {
      const onKeyDown=(e: React.KeyboardEvent<HTMLInputElement>)=>{
        const key=e.key
        if (numericAllowedKeys.has(key) || (e.ctrlKey||e.metaKey)) return
        if ((key>='0' && key<='9') || key==='.' || key===',' || (key==='-' && (e.currentTarget.selectionStart===0))) return
        e.preventDefault()
      }
      return <input ref={refCb} className={common} type='text' inputMode='decimal' pattern='[0-9.,-]*' value={value??''} onKeyDown={onKeyDown} onChange={e=>setValue(sanitizeNumber(e.target.value))} onBlur={onBlur} aria-invalid={isInvalid} />
    }
    if (t==='day' || t==='datetime' || t==='date') {
      return <DateBox value={value} setValue={setValue} invalid={isInvalid} inputRef={refCb} />
    }
    if (t==='checkbox') return <label className={'inline-flex items-center gap-2 ' + (isInvalid?'label-invalid':'')}>
      <input ref={refCb} type='checkbox' checked={!!value} onChange={e=>setValue(e.target.checked)} onBlur={onBlur} aria-invalid={isInvalid} />
      <span className='text-sm'>{field.label}</span>
    </label>
    if (t==='radio'){ const opts=readOptions(field); return <div className={'flex flex-wrap gap-3 ' + (isInvalid?'label-invalid':'')}>
      {opts.map((opt:any)=>(<label key={String(opt.value)} className='inline-flex items-center gap-2'>
        <input ref={refCb} type='radio' name={field.key} checked={value===opt.value} onChange={()=>setValue(opt.value)} onBlur={onBlur} aria-invalid={isInvalid} />
        <span className='text-sm'>{opt.label}</span>
      </label>))}
    </div> }
    if (t==='select'){ const opts=readOptions(field); return <select ref={refCb} className={common} value={value??''} onChange={e=>setValue(e.target.value)} onBlur={onBlur} aria-invalid={isInvalid}>
      <option value=''>Bitte wählen…</option>{opts.map((opt:any)=>(<option key={String(opt.value)} value={String(opt.value)}>{opt.label}</option>))}
    </select> }
    if (t==='selectboxes'){ const opts=readOptions(field); const cur=value||{}; return <div className={'flex flex-col gap-2 '+(isInvalid?'ring-2 ring-red-500 rounded-xl p-2':'')}>
      {opts.map((opt:any)=>(<label key={String(opt.value)} className='inline-flex items-center gap-2'>
        <input type='checkbox' checked={!!cur[opt.value]} onChange={e=>setValue({ ...cur, [opt.value]: e.target.checked })} onBlur={onBlur} />
        <span className='text-sm'>{opt.label}</span>
      </label>))}
    </div> }
    if (t==='file'){ const onFile=async(f?:File|null)=>{ if(!f){ setValue(''); return } const fd=new FormData(); fd.append('file', f); try{ const res=await fetch('/api/upload',{method:'POST', body:fd}); const j=await res.json(); if(j?.ok) setValue(j.url||f.name); else setValue(f.name) }catch{ setValue(f.name) } }; return <input ref={refCb} className={common} type='file' onChange={e=>onFile(e.target.files?.[0]||null)} onBlur={onBlur} aria-invalid={isInvalid} /> }
    if (t==='datagrid' || t==='editgrid'){ const rows:Array<any>=Array.isArray(value)? value:[]; const inner:Array<any>=Array.isArray(field.components)? field.components:[]
      const updateCell=(i:number,k:string,v:any)=>{ const next=rows.map((r,idx)=> idx===i? {...r,[k]:v}:r); setValue(next) }
      const addRow=()=>{ const blank:any={}; inner.forEach((c:any)=> blank[c.key]=''); setValue([...(rows||[]), blank]) }
      const removeRow=(i:number)=> setValue(rows.filter((_,idx)=> idx!==i))
      return (<div className={'space-y-3 '+(isInvalid?'ring-2 ring-red-500 rounded-xl p-2':'')}>
        {rows.map((row,i)=>(<div key={i} className='rounded-xl border p-3 space-y-2'>
          {inner.map((f:any)=>(<label key={f.key} className='block'>
            <span className='block text-sm mb-1'>{f.label}</span>
            <InputControl field={f} value={row?.[f.key]} setValue={(v:any)=>updateCell(i,f.key,v)} />
          </label>))}
          <button type='button' className='text-xs underline' onClick={()=>removeRow(i)}>Zeile entfernen</button>
        </div>))}
        <button type='button' className='rounded-lg border px-3 py-1 text-sm' onClick={addRow}>+ Zeile hinzufügen</button>
      </div>)
    }
    return <input ref={refCb} className={common} type='text' value={value??''} onChange={e=>setValue(e.target.value)} onBlur={onBlur} aria-invalid={isInvalid} />
  }

  const FieldRow=({ field, value, setValue }:{ field:any; value:any; setValue:(v:any)=>void })=>{
    const invalid = shouldMarkInvalid(field)
    if (field.type==='checkbox') return <div className={'py-1 ' + (invalid?'ring-2 ring-red-500 rounded-xl p-2':'')}><InputControl field={field} value={value} setValue={setValue} /></div>
    return (<label className='block'>
      <span className={'block text-sm mb-1 ' + (invalid?'label-invalid':'')}>{field.label}{isReq(field)&&<span className='text-red-600'> *</span>}</span>
      <InputControl field={field} value={value} setValue={setValue} />
    </label>)
  }

  const hasReview = useMemo(()=> allPanels.some((p:any)=> flattenAny(p.components||[]).some((c:any)=> c.type==='reviewpage')), [allPanels])

  const slide = (dir: 1|-1) => {
    if (dir === 1) {
      setShowErrors(true)
      if (errors.length>0) { scrollToFirstError(); return }
      setShowErrors(false)
    }
    setStep(s=> Math.max(0, Math.min(visiblePanels.length-1, s+dir)))
    setTimeout(scrollToFirstError, 0)
  }

  async function handleSubmit(includeAll=false){
    setShowErrors(true)
    if (errors.length>0) { scrollToFirstError(); return }
    setSubmitting(true)
    try {
      const payload = { version, mandatory, data: buildPayload(includeAll), submittedAt: new Date().toISOString() }
      const res = await fetch('/api/lead', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error(String(res.status))
      setSubmitted(true)
    } catch (e) {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  function buildPayload(includeAll=false){
    if (includeAll) return { ...answers }
    const keys=new Set<string>(); visiblePanels.forEach(p=> flattenAny(p.components||[]).forEach((f:any)=> f.key && keys.add(f.key)))
    const out:any={}; keys.forEach(k=>{ const v=answers?.[k]; const ok=Array.isArray(v)? v.length>0 : (v!==undefined && v!==null && String(v)!==''); if(ok) out[k]=v })
    return out
  }

  return (
    <div>
      <div className='mb-4'>
        <div className='flex items-center justify-between text-sm text-gray-600 mb-2'>
          <span>{visiblePanels[step]?.title ?? visiblePanels[step]?.label}</span>
          <div className='flex items-center gap-3'>
            <button type='button' onClick={hardReset} className='underline text-gray-500 hover:text-gray-800'>Neu beginnen</button>
            <span>{progress}%</span>
          </div>
        </div>
        <div className='progress'>
          <div className='progress-bar' style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className='card p-6'>
        <AnimatePresence mode='wait' initial={false}>
          <motion.div key={String(step)+String(submitted)} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{ duration: 0.2, ease: 'easeOut' }} className='min-h-[300px] space-y-4'>
            {submitted ? (
              <div className='text-center py-10'>
                <h2 className='text-2xl font-semibold mb-2'>Vielen Dank!</h2>
                <p className='text-gray-600'>Wir melden uns in Kürze bei Ihnen.</p>
              </div>
            ) : (!hasReview && step===visiblePanels.length-1) ? (
              <div>
                <h2 className='text-2xl font-semibold mb-4'>Zusammenfassung</h2>
                <p className='text-gray-600 text-sm mb-2'>Überprüfen Sie Ihre Angaben und senden Sie dann das Formular ab.</p>
              </div>
            ) : (
              <div className='space-y-4'>
                {fields.length===0 ? <p className='text-gray-600 text-sm'>Keine Eingabefelder in diesem Schritt.</p> :
                  fields.map((f:any)=>(<FieldRow key={f.key} field={f} value={answers?.[f.key]} setValue={(v:any)=>setAnswer(f.key, v)} />))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        {showErrors && errors.length>0 && (
          <div className='mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700'>
            <div className='font-medium mb-1'>Bitte füllen Sie die markierten Felder aus.</div>
            <ul className='list-disc pl-5 space-y-1'>{errors.map((k,i)=><li key={i}>{k}</li>)}</ul>
          </div>
        )}
        {!submitted && (
          <div className='mt-6 flex items-center justify-between gap-2'>
            <button type='button' onClick={()=>slide(-1)} disabled={step===0 || submitting} className='btn-secondary disabled:opacity-50'>Zurück</button>
            {step === visiblePanels.length - 1 ? (
              <button type='button' onClick={()=>handleSubmit(false)} disabled={submitting} className='btn-primary disabled:opacity-50'>{submitting?'Senden…':'Senden'}</button>
            ) : (
              <button type='button' onClick={()=>slide(1)} disabled={submitting} className='btn-primary disabled:opacity-50'>Weiter</button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
