'use client'
import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import StepPanel from './StepPanel'
import { flattenAny, isReq } from './utils'

type AnyObj = Record<string, any>

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
  const [showErrors, setShowErrors] = useState(false)

  // Load schema JSON
  useEffect(() => {
    const url = version === 'full' ? '/schemas/hypoteqmockform30.json' : '/schemas/beraterVersionForm30.json'
    fetch(url).then(r => r.json()).then(j => {
      const formKey = version === 'full' ? 'hypoteqmockform30' : 'beraterVersionForm30'
      const form = j.forms?.[formKey]
      if (form && mandatory === 'some') {
        flattenAny(form.components).forEach((f: any) => {
          if (f.validate) f.validate.required = false
        })
        const mustFields = ['email', 'firstName', 'lastName']
        flattenAny(form.components).forEach((f: any) => {
          if (mustFields.includes(f.key) && f.validate) f.validate.required = true
        })
      }
      setSchema(j)
    })
  }, [version, mandatory])

  const form = schema?.forms?.[version === 'full' ? 'hypoteqmockform30' : 'beraterVersionForm30']
  const panels = form ? (form.components || []).filter((c: any) => c?.type === 'panel') : []

  const currentPanel = panels[step]

  const progress = useMemo(() => {
    const reqAll = panels.flatMap(p => flattenAny(p.components || [])).filter(isReq)
    const total = reqAll.length
    const filled = reqAll.filter((f: any) => answers[f.key]).length
    return total ? Math.round((filled / total) * 100) : 0
  }, [panels, answers])

  const handleAnswer = useCallback((key: string, value: any) => {
    setAnswers(prev => ({ ...prev, [key]: value }))
  }, [])

  const next = () => {
    setShowErrors(true)
    setStep(s => Math.min(panels.length - 1, s + 1))
  }

  const back = () => {
    setStep(s => Math.max(0, s - 1))
  }

  const submit = () => {
    setSubmitted(true)
  }

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span>{currentPanel?.title}</span>
        <span>{progress}%</span>
      </div>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="card p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <h2 className="text-2xl font-semibold mb-2">Vielen Dank!</h2>
                <p className="text-gray-600">Wir melden uns in Kürze bei Ihnen.</p>
              </div>
            ) : (
              <StepPanel
                panel={currentPanel}
                answers={answers}
                onAnswer={handleAnswer}
                showErrors={showErrors}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {!submitted && (
          <div className="mt-6 flex justify-between">
            <button type="button" onClick={back} disabled={step === 0} className="btn-secondary">
              Zurück
            </button>
            {step === panels.length - 1 ? (
              <button type="button" onClick={submit} className="btn-primary">
                Senden
              </button>
            ) : (
              <button type="button" onClick={next} className="btn-primary">
                Weiter
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
