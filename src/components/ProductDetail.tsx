import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProducts } from '../hooks/useProduct'
import type { Product } from '../types/Product'

export function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const { getById } = useProducts()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Product | null>(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const found = getById(Number(id))
    if (found) {
      setProduct(found)
    } else {
      setNotFound(true)
    }
  }, [id])

  if (notFound) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    )
  }

  if (!product) {
    return null
  }

  return (
    <div className="product-detail">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back
      </button>
      <div className="detail-content">
        <img src={product.image} alt={product.title} />
        <div className="detail-info">
          <span className="category">{product.category}</span>
          <h1>{product.title}</h1>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="description">{product.description}</p>
        </div>
      </div>
    </div>
  )
}
