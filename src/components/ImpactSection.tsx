
import { Leaf, Droplets, Zap, TreePine } from 'lucide-react';

const impactStats = [
  {
    icon: Leaf,
    value: "2.1M",
    unit: "kg CO₂",
    label: "Carbon Emissions Saved",
    description: "Equivalent to planting 95,000 trees"
  },
  {
    icon: Droplets,
    value: "45M",
    unit: "liters",
    label: "Water Conserved",
    description: "Enough to fill 18 swimming pools"
  },
  {
    icon: Zap,
    value: "890K",
    unit: "kWh",
    label: "Energy Saved",
    description: "Powers 80 homes for a month"
  },
  {
    icon: TreePine,
    value: "15K",
    unit: "items",
    label: "Diverted from Landfills",
    description: "Giving clothes a second life"
  }
];

const ImpactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-accent/10">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Community's
            <span className="text-primary block">Environmental Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Together, we're creating a more sustainable future. Every shared item makes a difference 
            for our planet and community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                    <span className="text-base font-normal text-muted-foreground ml-1">
                      {stat.unit}
                    </span>
                  </div>
                  <h3 className="font-semibold">{stat.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/5 rounded-full px-6 py-3">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">
              Every item shared prevents 1.4kg of CO₂ emissions on average
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
