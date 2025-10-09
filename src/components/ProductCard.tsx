import { Link } from 'react-router-dom';
import type { Product } from '@/hooks/useProducts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden hover-lift shadow-soft border-0 bg-white dark:bg-card">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted/30">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 animation-smooth"
          />
        </div>
      </Link>
      <CardContent className="p-6">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-xl mb-2 group-hover:text-primary animation-smooth">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-3 capitalize">{product.category}</p>
        <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => addToCart(product)}
          className="w-full group shadow-soft"
          size="lg"
        >
          <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 animation-smooth" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
