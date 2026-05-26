import type { Product } from '../types/Product'

interface ProductCardProps {
  product: Product
  onClick: (id: number) => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      data-testid="product-card"
      className="product-card"
      onClick={() => onClick(product.id)}
    >
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
    </div>
  )
}
