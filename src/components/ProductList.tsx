import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../hooks/useProduct'
import { ProductCard } from './ProductCard'
import type { Product } from '../types/Product'

export function ProductList() {
  const { getAll } = useProducts()
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    setProducts(getAll())
  }, [])

  function handleCardClick(id: number) {
    navigate(`/products/${id}`)
  }

  return (
    <div className="product-list">
      <h1>Product Catalog</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  )
}
