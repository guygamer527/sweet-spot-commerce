import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Cake, MessageSquare } from 'lucide-react';

const CustomCake = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft hover-lift">
              <img
                src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80"
                alt="Beautiful custom decorated cake with intricate designs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Cake className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Custom Orders</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Design Your
              <span className="block text-primary">Dream Cake</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it's a birthday, wedding, or any special celebration, our expert bakers will bring your vision to life. From elegant tiered cakes to whimsical designs, we create edible masterpieces tailored just for you.
            </p>

            <ul className="space-y-3">
              {[
                "Personalized designs for any occasion",
                "Wide variety of flavors & fillings",
                "Dietary accommodations available",
                "Free consultation with our cake artist"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/products">
                <Button size="lg" className="group shadow-soft">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Request Custom Cake
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCake;
