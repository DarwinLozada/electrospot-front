import { Image } from 'types/general/image'

export type ProductRating = 0 | 1 | 2 | 3 | 4 | 5

export interface ProductReviews {
  rating: ProductRating
  reviewsAmount: number
}

export interface CardProductData {
  title: string
  shipping: string
  isLimitedEdition?: boolean
  hasDiscount: boolean
  price: number
  currency: string
  discount?: {
    percentage: number
    finalPrice: number
  }
  saving?: string
  rating: ProductReviews
  image: Image
}
