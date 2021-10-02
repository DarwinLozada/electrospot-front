import Link, { LinkProps } from 'next/link'
import { FC } from 'react'

type LinkPropsWithoutHref = Omit<LinkProps, 'href'>

interface Props extends LinkPropsWithoutHref {
  wrap: boolean
  href?: LinkProps['href']
}

const LinkWrapper: FC<Props> = ({ children, wrap, href, ...linkProps }) => {
  if (!wrap || !href) return <>{children}</>

  return (
    <Link href={href} {...linkProps}>
      <a>{children}</a>
    </Link>
  )
}

export default LinkWrapper
