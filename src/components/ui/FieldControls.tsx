import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

import styles from './FieldControls.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement>

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string
}

export function Input({ className = '', ...props }: InputProps) {
  return <input className={`${styles.control} ${className}`.trim()} {...props} />
}

export function Textarea({ className = '', ...props }: TextareaProps) {
  return (
    <textarea className={`${styles.control} ${styles.textarea} ${className}`.trim()} {...props} />
  )
}

export function Checkbox({ label, className = '', id, ...props }: CheckboxProps) {
  const inputId = id ?? props.name
  return (
    <label className={`${styles.checkRow} ${className}`.trim()} htmlFor={inputId}>
      <input id={inputId} type="checkbox" className={styles.checkbox} {...props} />
      <span>{label}</span>
    </label>
  )
}
