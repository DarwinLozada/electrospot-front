import { Card as AntdCard, CardProps } from 'antd'
import { CardMeta, Ribbon, Text, Title } from 'components'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { CardType } from 'types/components/card'
import { CardProductData } from 'types/products'

interface Props extends CardProps {
  data: CardProductData
  cardType: CardType
  link?: string
}

const Card: FC<Props> = (props) => {
  const { cardType, data, link } = props

  const { image } = data

  const cardTypeClasses = {
    product: 'max-w-xs',
  }

  let CardContent = (
    <AntdCard
      className={`${cardTypeClasses[cardType]}`}
      hoverable
      cover={
        image.src ? (
          <div className="max-h-72 overflow-hidden p-6">
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          </div>
        ) : null
      }
    >
      <CardMeta
        title={
          <>
            <Title level={4}>
              {data.hasDiscount
                ? data.discount?.finalPrice + data.currency
                : data.price + data.currency}
            </Title>
            {data.hasDiscount ? (
              <Text disabled delete>
                {data.price + data.currency}
              </Text>
            ) : null}
          </>
        }
        description={data.title}
      />
    </AntdCard>
  )

  if (data.hasDiscount)
    CardContent = (
      <Ribbon text={`Save ${data.discount?.percentage}%`}>{CardContent}</Ribbon>
    )

  if (link) CardContent = <Link href={link}>{CardContent}</Link>

  return <>{CardContent}</>
}

export default Card
