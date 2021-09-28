import Ribbon, { RibbonProps } from 'antd/lib/badge/Ribbon'
import { FC } from 'react'

interface Props extends RibbonProps {
  show: boolean
}

const RibbonWrapper: FC<Props> = ({ children, show, ...ribbonProps }) => {
  if (!show) return <>{children}</>

  return <Ribbon {...ribbonProps}>{children}</Ribbon>
}

export default RibbonWrapper
