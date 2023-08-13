import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const Container: React.FC<ContainerProps> = ({
  skipParentContainer = false,
  parentClassName,
  className,
  children,
}) => {
  return (
    <ParentContainer
      skipParentContainer={skipParentContainer}
      className={parentClassName}>
      <div
        className={cn(
          ' w-full max-w-container px-7 sm:px-10 md:px-16',
          className
        )}>
        {children}
      </div>
    </ParentContainer>
  )
}

export default Container

const ParentContainer: React.FC<ParentContainerProps> = ({
  skipParentContainer,
  children,
  className,
}) => {
  if (skipParentContainer) {
    return children
  }
  return (
    <section className={cn('w-full grid place-items-center', className)}>
      {children}
    </section>
  )
}

interface ContainerProps {
  skipParentContainer?: Boolean
  parentClassName?: string
  className?: string
  children: any
}

interface ParentContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  skipParentContainer?: Boolean
}
