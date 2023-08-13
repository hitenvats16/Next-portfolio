import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import Fonts from '../Font'
import { FontPropTypes } from '../Types'
import { BoldnessToFontWeightMap } from '../constants'

interface HeadingPropsType
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >, FontPropTypes {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading: React.FC<HeadingPropsType> = ({
  className,
  children,
  variant,
  boldness = 500,
  italic = false,
  underline = false,
  fontFamily = 'poppins',
  ...restProps
}) => {
  const props = {
    ...restProps,
    className: cn(
      Fonts[fontFamily],
      VariantToStyleMap[variant],
      BoldnessToFontWeightMap[boldness],
      {
        underline: underline,
        italic: italic,
      },
      'text-blue-900 dark:text-yellow-50',
      className
    ),
  }
  switch (variant) {
    case 'h1':
      return <h1 {...props}>{children}</h1>
    case 'h2':
      return <h2 {...props}>{children}</h2>
    case 'h3':
      return <h3 {...props}>{children}</h3>
    case 'h4':
      return <h4 {...props}>{children}</h4>
    case 'h5':
      return <h5 {...props}>{children}</h5>
    case 'h6':
      return <h6 {...props}>{children}</h6>
  }
}

const VariantToStyleMap = {
  h1: 'text-6xl md:text-8xl',
  h2: 'text-5xl md:text-7xl',
  h3: 'text-4xl md:text-6xl',
  h4: 'text-3xl md:text-5xl',
  h5: 'text-2xl md:text-4xl',
  h6: 'text-xl md:text-3xl',
}

export default Heading
