
import Link from 'next/link'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

type VariantStyles = {
  primary: string
  secondary: string
}

const variantStyles: VariantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

type ButtonVariant = keyof typeof variantStyles

type ButtonBaseProps = {
  variant?: ButtonVariant
  className?: string
}

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonBaseProps> & {
    href?: undefined
  }

type ButtonAsLinkProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof ButtonBaseProps | 'href'> & {
    href: string
  }

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant = 'primary', className, ...props }, ref) {
    const classes = clsx(
      'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
      variantStyles[variant],
      className
    )

    if ('href' in props) {
      const { href, ...restProps } = props as ButtonAsLinkProps
      return <Link href={href} className={classes} ref={ref as React.Ref<HTMLAnchorElement>} {...restProps} />
    }

    return <button className={classes} ref={ref as React.Ref<HTMLButtonElement>} {...props} />
  }
)

Button.displayName = 'Button'