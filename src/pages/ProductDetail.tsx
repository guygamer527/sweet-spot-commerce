import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container">
          <Link to="/products">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">{product.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-primary mb-6">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {product.ingredients && (
                <div>
                  <h3 className="font-semibold text-lg mb-3">Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <Badge key={index} variant="outline" className="flex items-center gap-1">
                        <Check className="h-3 w-3" />
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <Button
                size="lg"
                className="w-full group"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 animation-smooth" />
                Add to Cart
              </Button>

              <div className="border-t pt-6 space-y-3 text-sm text-muted-foreground">
                <p>✓ Fresh daily</p>
                <p>✓ Made with premium ingredients</p>
                <p>✓ Local pickup available</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
