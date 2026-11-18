import type { ImgHTMLAttributes } from 'react'

interface ResilientImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string
}

export function ResilientImage({
  fallbackSrc = '/borehole-field-1.jpg',
  onError,
  ...props
}: ResilientImageProps) {
  return (
    <img
      {...props}
      onError={(event) => {
        onError?.(event)
        if (event.defaultPrevented) {
          return
        }

        const image = event.currentTarget
        if (image.dataset.fallbackAttempted === 'true') {
          image.style.visibility = 'hidden'
          return
        }

        image.dataset.fallbackAttempted = 'true'
        image.src = fallbackSrc
      }}
    />
  )
}
