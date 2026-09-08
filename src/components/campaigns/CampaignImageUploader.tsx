import { useId, useRef, useState } from 'react'

import formStyles from '../../styles/forms.module.css'
import styles from './CampaignImageUploader.module.css'

export const MAX_CAMPAIGN_IMAGES = 8

interface CampaignImageUploaderProps {
  images: string[]
  onChange: (images: string[]) => void
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result)
        return
      }
      reject(new Error('Could not read image'))
    }
    reader.onerror = () => {
      reject(new Error('Could not read image'))
    }
    reader.readAsDataURL(file)
  })
}

export function CampaignImageUploader({
  images,
  onChange,
}: CampaignImageUploaderProps) {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState('')

  const onFilesSelected = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) {
      return
    }
    setError('')
    const files = Array.from(fileList)
    const invalid = files.find((file) => !file.type.startsWith('image/'))
    if (invalid) {
      setError('Only image files can be uploaded.')
      return
    }
    const remaining = MAX_CAMPAIGN_IMAGES - images.length
    if (remaining <= 0) {
      setError(`You can add up to ${MAX_CAMPAIGN_IMAGES} photos.`)
      return
    }
    const toRead = files.slice(0, remaining)
    Promise.all(toRead.map(readFileAsDataUrl))
      .then((dataUrls) => {
        onChange([...images, ...dataUrls])
        if (files.length > remaining) {
          setError(`Only ${MAX_CAMPAIGN_IMAGES} photos allowed. Extra files were skipped.`)
        }
      })
      .catch(() => {
        setError('Could not read one or more images. Try again.')
      })
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const removeAt = (index: number) => {
    onChange(images.filter((_, i) => i !== index))
    setError('')
  }

  return (
    <div className={styles.wrap}>
      <label htmlFor={inputId}>Campaign photos</label>
      <p className={formStyles.hint}>
        Photos from your device (up to {MAX_CAMPAIGN_IMAGES}). First photo is
        the cover on browse cards.
      </p>
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept="image/*"
        multiple
        className={styles.fileInput}
        onChange={(event) => {
          onFilesSelected(event.target.files)
        }}
      />
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => {
          inputRef.current?.click()
        }}
      >
        Upload from device
      </button>

      {images.length > 0 ? (
        <ul className={styles.thumbs}>
          {images.map((src, index) => (
            <li key={`${index}-${src.slice(0, 32)}`} className={styles.thumb}>
              <img src={src} alt="" />
              {index === 0 ? (
                <span className={styles.coverBadge}>Cover</span>
              ) : null}
              <button
                type="button"
                className={styles.remove}
                aria-label={`Remove photo ${index + 1}`}
                onClick={() => {
                  removeAt(index)
                }}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={formStyles.hint}>
          Optional — a default cover is used if you skip photos.
        </p>
      )}
      {error ? <p className={formStyles.error}>{error}</p> : null}
    </div>
  )
}
