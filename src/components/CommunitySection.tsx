
import { Users, MessageCircle, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const communityMembers = [
  {
    name: "Sarah Johnson",
    role: "Top Contributor",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b96c?w=150&h=150&fit=crop&auto=format",
    items: 45,
    impact: "127kg CO₂ saved"
  },
  {
    name: "Mike Chen",
    role: "Community Helper",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format",
    items: 32,
    impact: "89kg CO₂ saved"
  },
  {
    name: "Emma Rodriguez",
    role: "Sustainability Champion",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format",
    items: 38,
    impact: "105kg CO₂ saved"
  }
];

const CommunitySection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Join a Community That
                <span className="text-primary block">Cares About Tomorrow</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Connect with neighbors who share your values. Build friendships, 
                reduce waste, and create positive change in your local community.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Local Focus</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Connect with people in your neighborhood for easy exchanges
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Safe Chat</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Secure messaging system for coordinating exchanges
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Trust System</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ratings and reviews keep our community safe and reliable
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Impact Tracking</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  See the environmental difference you're making
                </p>
              </div>
            </div>
            
            <Button size="lg" className="text-lg px-8">
              Join the Community
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-background rounded-2xl p-6 gentle-shadow">
              <h3 className="font-semibold mb-4 flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                Community Champions
              </h3>
              <div className="space-y-4">
                {communityMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{member.items} items</p>
                          <p className="text-xs text-primary">{member.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
