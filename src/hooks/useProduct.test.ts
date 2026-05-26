import { renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useProducts } from './useProduct'
import { products } from '../data/products'

describe('useProducts', () => {
  it('returns the complete list of products', () => {
    const { result } = renderHook(() => useProducts())

    expect(result.current.products).toEqual(products)
  })
})