import { Measurement, Product } from '@/modules/products/domain'
import { createContext, useContext } from 'react'

type PropsProductContext = {
  measurements: Measurement[],
  products: Product[]
  findProducts: () => Promise<void>
}

export const ProductContext = createContext<PropsProductContext>({} as PropsProductContext)

export const useProductContext = (): PropsProductContext => useContext(ProductContext)
