import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-full shadow-soft">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Handcrafted with Love</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Fresh Artisan
              <span className="block text-primary mt-2">Baked Daily</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
              Experience the warmth of freshly baked pastries, breads, and cakes made with premium ingredients and traditional techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="group shadow-soft text-base">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 animation-smooth" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="text-base">
                  View Our Menu
                </Button>
              </Link>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Daily Items</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5★</p>
                <p className="text-sm text-muted-foreground">Customer Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-auto">
            <div className="relative aspect-[4/5] max-w-lg rounded-3xl overflow-hidden shadow-glow hover-lift">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
                alt="Fresh artisan bakery products including breads and pastries"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-6 rounded-2xl shadow-soft backdrop-blur-sm">
              <p className="text-sm font-semibold text-muted-foreground">Baked Fresh</p>
              <p className="text-3xl font-bold text-primary">Every Morning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
