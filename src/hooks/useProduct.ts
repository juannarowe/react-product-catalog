import { useState } from 'react'
import { products } from '../data/products'
import type { Product } from '../types/Product'

export function useProducts() {
  const [productsState] = useState<Product[]>(products)

  function getAll(): Product[] {
    return productsState
  }

  function getById(id: number): Product | null {
    return productsState.find(products => products.id === id) ?? null
  }

  return { products: productsState, getAll, getById }
}
