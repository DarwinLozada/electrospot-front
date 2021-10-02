import { Card } from 'components'
import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="mx-4 md:mx-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {[false, false, true, true, false, true, true, false, false, false].map(
            (hasDiscount, index) => (
              <Card
                key={index}
                cardType="product"
                data={{
                  price: 39.99,
                  currency: 'U$S',
                  hasDiscount: hasDiscount,
                  discount: {
                    percentage: 9,
                    finalPrice: 36.39,
                  },
                  title: 'Graphic Card 3090 Nvidia dwdwdwdwdwd',
                  shipping: 'Free Shipping',
                  rating: {
                    rating: 4,
                    reviewsAmount: 123,
                  },
                  image: {
                    src: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                    width: '427',
                    height: '613',
                    alt: 'Bag',
                  },
                }}
              />
            )
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
