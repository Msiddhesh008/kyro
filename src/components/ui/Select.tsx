import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react'

import styles from './Select.module.css'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  id?: string
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
  disabled?: boolean
  'aria-label'?: string
  className?: string
  variant?: 'field' | 'pill'
}

export function Select({
  id,
  value,
  options,
  onChange,
  disabled = false,
  'aria-label': ariaLabel,
  className = '',
  variant = 'field',
}: SelectProps) {
  const generatedId = useId()
  const listboxId = `${generatedId}-listbox`
  const rootRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const selected = options.find((option) => option.value === value) ?? options[0]
  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  )

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
    }
  }, [open])

  useEffect(() => {
    if (open) {
      setActiveIndex(selectedIndex)
    }
  }, [open, selectedIndex])

  const selectValue = (next: string) => {
    onChange(next)
    setOpen(false)
  }

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return

    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setOpen(true)
      return
    }

    if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const onListKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      setOpen(false)
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((index) => Math.min(options.length - 1, index + 1))
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((index) => Math.max(0, index - 1))
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      const option = options[activeIndex]
      if (option) {
        selectValue(option.value)
      }
    }
  }

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${styles[variant]} ${className}`.trim()}
    >
      <button
        id={id}
        type="button"
        className={styles.trigger}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={ariaLabel}
        onClick={() => {
          if (!disabled) {
            setOpen((value) => !value)
          }
        }}
        onKeyDown={onTriggerKeyDown}
      >
        <span className={styles.value}>{selected?.label ?? ''}</span>
        <span className={styles.chevron} aria-hidden="true">
          ▾
        </span>
      </button>

      {open ? (
        <ul
          id={listboxId}
          className={styles.list}
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={`${listboxId}-option-${activeIndex}`}
          onKeyDown={onListKeyDown}
          ref={(node) => {
            node?.focus()
          }}
        >
          {options.map((option, index) => {
            const isSelected = option.value === value
            const isActive = index === activeIndex
            return (
              <li
                key={option.value}
                id={`${listboxId}-option-${index}`}
                role="option"
                aria-selected={isSelected}
                className={`${styles.option} ${isActive ? styles.optionActive : ''} ${
                  isSelected ? styles.optionSelected : ''
                }`}
                onMouseEnter={() => {
                  setActiveIndex(index)
                }}
                onClick={() => {
                  selectValue(option.value)
                }}
              >
                {option.label}
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
