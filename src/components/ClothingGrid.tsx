
import { Heart, MapPin, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const clothingItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    condition: "Like New",
    size: "M",
    distance: "0.5km",
    user: "Sarah M.",
    userRating: 4.9,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=500&fit=crop&auto=format",
    category: "Outerwear",
    gender: "Women",
    description: "Beautiful vintage-style denim jacket, worn only a few times."
  },
  {
    id: 2,
    title: "Cozy Knit Sweater",
    condition: "Good",
    size: "L",
    distance: "1.2km",
    user: "Mike R.",
    userRating: 4.7,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&auto=format",
    category: "Tops",
    gender: "Unisex",
    description: "Warm and comfortable wool blend sweater perfect for fall."
  },
  {
    id: 3,
    title: "Summer Floral Dress",
    condition: "Excellent",
    size: "S",
    distance: "0.8km",
    user: "Emma L.",
    userRating: 5.0,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&auto=format",
    category: "Dresses",
    gender: "Women",
    description: "Light and airy summer dress with beautiful floral pattern."
  },
  {
    id: 4,
    title: "Classic White Sneakers",
    condition: "Good",
    size: "42",
    distance: "1.8km",
    user: "Alex K.",
    userRating: 4.8,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&auto=format",
    category: "Shoes",
    gender: "Unisex",
    description: "Comfortable white sneakers, some wear but lots of life left."
  },
  {
    id: 5,
    title: "Leather Crossbody Bag",
    condition: "Like New",
    size: "OS",
    distance: "0.3km",
    user: "Lisa W.",
    userRating: 4.9,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&auto=format",
    category: "Accessories",
    gender: "Women",
    description: "Genuine leather bag in excellent condition, barely used."
  },
  {
    id: 6,
    title: "Casual Button-Up Shirt",
    condition: "Good",
    size: "L",
    distance: "2.1km",
    user: "David H.",
    userRating: 4.6,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop&auto=format",
    category: "Tops",
    gender: "Men",
    description: "Versatile cotton shirt, great for work or casual wear."
  }
];

const getConditionColor = (condition: string) => {
  switch (condition) {
    case 'Like New': return 'bg-green-100 text-green-800';
    case 'Excellent': return 'bg-blue-100 text-blue-800';
    case 'Good': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const ClothingGrid = () => {
  return (
    <section className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Available in Your Area</h2>
        <p className="text-muted-foreground">{clothingItems.length} items found</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {clothingItems.map((item) => (
          <div key={item.id} className="group bg-card rounded-xl overflow-hidden gentle-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-3 right-3 bg-background/80 hover:bg-background"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className={`absolute top-3 left-3 ${getConditionColor(item.condition)}`}>
                {item.condition}
              </Badge>
            </div>
            
            <div className="p-4 space-y-3">
              <div className="space-y-1">
                <h3 className="font-semibold line-clamp-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Size {item.size}</span>
                <Badge variant="outline">{item.category}</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{item.distance}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span>{item.userRating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-primary">
                      {item.user.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.user}</span>
                </div>
                <Button size="sm" className="h-8">
                  Request
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          Load More Items
        </Button>
      </div>
    </section>
  );
};

export default ClothingGrid;
