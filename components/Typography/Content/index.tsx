import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { BoldnessToFontWeightMap } from '@/Constants/typography'
import { FontPropTypes } from '@/Types/typography'

import { FontToClassMap } from '../Font'

const Content: React.FC<ContentPropType> = ({
  children,
  boldness = 500,
  italic = false,
  underline = false,
  fontFamily = 'manrope',
  className,
  size = 'lg',
  ...restProps
}) => {
  return (
    <p
      {...restProps}
      className={cn(
        {
          underline: underline,
          italic: italic,
        },
        FontToClassMap[fontFamily],
        BoldnessToFontWeightMap[boldness],
        SizeToStyleMap[size],
        'text-blue-900 dark:text-yellow-50 ease-in-out duration-300',
        className
      )}>
      {children}
    </p>
  )
}

export default Content

interface ContentPropType
  extends FontPropTypes,
    DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    > {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
}

const SizeToStyleMap = {
  xs: 'text-[8px] md:text-xs',
  sm: 'text-[10px] md:text-sm',
  base: 'text-xs md:text-base',
  lg: 'text-sm md:text-lg',
  xl: 'text-lg md:text-xl',
}
