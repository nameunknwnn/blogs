import { forwardRef, ReactNode, HTMLAttributes } from 'react'
import clsx from 'clsx'

interface OuterContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
}

const OuterContainer = forwardRef<HTMLDivElement, OuterContainerProps>(function OuterContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

interface InnerContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
}

const InnerContainer = forwardRef<HTMLDivElement, InnerContainerProps>(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
})

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

// Define the Container component and extend it with the Outer and Inner properties
type ContainerComponent = React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>> & {
  Outer: typeof OuterContainer
  Inner: typeof InnerContainer
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
}) as ContainerComponent

// Assign static properties
Container.Outer = OuterContainer
Container.Inner = InnerContainer
