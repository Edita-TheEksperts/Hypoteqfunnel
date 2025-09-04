import React, { useMemo } from 'react'
import FieldRow from './FieldRow'
import { flattenAny } from './utils'

export default function StepPanel({ panel, answers, onAnswer, showErrors }: any) {
  const fields = useMemo(() => {
    if (!panel) return []
    return flattenAny(panel.components || [])
  }, [panel])

  return (
    <div className="space-y-4">
      {fields.length === 0 ? (
        <p className="text-gray-600 text-sm">Keine Eingabefelder in diesem Schritt.</p>
      ) : (
        fields.map((f: any) => (
          <FieldRow
            key={f.key}
            field={f}
            value={answers[f.key]}
            setValue={(v: any) => onAnswer(f.key, v)}
            showErrors={showErrors}
          />
        ))
      )}
    </div>
  )
}
