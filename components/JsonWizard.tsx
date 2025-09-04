'use client'
import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import StepPanel from './StepPanel'
import { flattenAny, isReq } from './utils'

type AnyObj = Record<string, any>

export default function JsonWizard({
  version
}: {
  version: 'internal' | 'external'
}) {
  const [schema, setSchema] = useState<AnyObj | null>(null)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<AnyObj>({})
  const [submitted, setSubmitted] = useState(false)
  const [showErrors, setShowErrors] = useState(false)

  // Load schema JSON
  useEffect(() => {
    const url =
      version === 'internal'
        ? '/schemas/hypoteqmockform30.json'
        : '/schemas/beraterVersionForm30.json'

    fetch(url)
      .then(r => r.json())
      .then(j => {
        const formKey =
          version === 'internal' ? 'hypoteqmockform30' : 'beraterVersionForm30'
        const form = j.forms?.[formKey]

        if (form) {
          // disable required për të gjitha fushat
          flattenAny(form.components).forEach((f: any) => {
            if (f.validate) f.validate.required = false
          })
        }

        setSchema(j)
      })
  }, [version])

  const form = schema?.forms?.[
    version === 'internal' ? 'hypoteqmockform30' : 'beraterVersionForm30'
  ]

  // Ruajmë të gjithë panels + sub-panels si listë e sheshtë
  const panels = useMemo(() => {
    if (!form) return []
    const all: AnyObj[] = []
    ;(form.components || []).forEach((c: AnyObj) => {
      if (c?.type === 'panel') {
        all.push(c)
        if (Array.isArray(c.components)) {
          c.components.forEach((sub: AnyObj) => {
            if (sub?.type === 'panel') {
              all.push(sub)
            }
          })
        }
      }
    })
    return all
  }, [form])

  const currentPanel = panels[step]

  const progress = useMemo(() => {
    type Panel = { components?: AnyObj[] }
    const reqAll = panels
      .flatMap((p: Panel) => flattenAny(p.components || []))
      .filter(isReq)
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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar */}
      <div className="md:col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm p-4">
        <h3 className="text-lg font-semibold mb-4">Chapters</h3>
        <ul className="space-y-2">
          {(form?.components || [])
            .filter((c: AnyObj) => c.type === 'panel')
            .map((p: AnyObj, i: number) => {
              const chapterIndex = panels.indexOf(p)
              return (
                <li key={i}>
                  <button
                    onClick={() => setStep(chapterIndex)}
                    className={`w-full text-left px-2 py-1 rounded-md ${
                      step === chapterIndex
                        ? 'bg-blue-600 text-white font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {p.title || `Chapter ${i + 1}`}
                  </button>

                  {/* Sub-chapters */}
                  {Array.isArray(p.components) &&
                    p.components
                      .filter((sub: AnyObj) => sub.type === 'panel')
                      .map((sub: AnyObj, j: number) => {
                        const subIndex = panels.indexOf(sub)
                        return (
                          <button
                            key={j}
                            onClick={() => setStep(subIndex)}
                            className={`ml-4 block w-full text-left px-2 py-1 rounded-md text-sm ${
                              step === subIndex
                                ? 'bg-blue-500 text-white font-medium'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            ▸ {sub.title || `Sub-chapter ${j + 1}`}
                          </button>
                        )
                      })}
                </li>
              )
            })}
        </ul>
      </div>

      {/* Main Content */}
      <div className="md:col-span-3">
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
                  <p className="text-gray-600">
                    Wir melden uns in Kürze bei Ihnen.
                  </p>
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
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className="btn-secondary"
              >
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
    </div>
  )
}
