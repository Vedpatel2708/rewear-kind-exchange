
import { ArrowRight, Heart, Leaf, Recycle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Give clothes a
                <span className="text-primary block">second life</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Join your local community in creating a sustainable fashion future. 
                Share, exchange, and discover pre-loved clothes with neighbors who care.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Sharing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Browse Items
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold">1,200+</div>
                <div className="text-sm text-muted-foreground">Community Members</div>
              </div>
              <div className="text-center space-y-2">
                <Recycle className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold">5,800</div>
                <div className="text-sm text-muted-foreground">Items Exchanged</div>
              </div>
              <div className="text-center space-y-2">
                <Heart className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Happy Exchanges</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="earth-gradient rounded-3xl p-8 gentle-shadow">
              <div className="bg-background/90 rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Your Impact</h3>
                    <p className="text-sm text-muted-foreground">This month</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Clothes Shared</span>
                    <span className="font-semibold">12 items</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">CO₂ Saved</span>
                    <span className="font-semibold text-primary">45 kg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Water Conserved</span>
                    <span className="font-semibold text-primary">1,200 L</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
