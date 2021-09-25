import { CardProps } from 'antd'
import { FC } from 'react'

type CardType = 'product'

interface Props extends CardProps {
  cardType: CardType
}

const Card: FC<Props> = (props) => {
  const { children, cardType } = props

  const cardTypeClasses = {
    product: 'max-w-xs',
  }

  return (
    <Card
      className={`hover:shadow-lg transition-shadow duration-200 ${cardTypeClasses[cardType]}`}
      {...props}
    >
      {children}
    </Card>
  )
}

export default Card
