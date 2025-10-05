import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-background to-secondary py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Freshly Baked
              <span className="block text-primary">Every Morning</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Indulge in our handcrafted breads, pastries, and cakes made with premium ingredients and traditional techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="group">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 animation-smooth" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
                alt="Fresh bakery products"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <p className="text-sm font-semibold">Daily Fresh</p>
              <p className="text-2xl font-bold">100+ Items</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
