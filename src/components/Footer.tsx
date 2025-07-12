
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-primary">ReWear</span>
            </div>
            <p className="text-background/80 text-sm">
              Building sustainable communities through clothing exchange. 
              One item at a time, one neighbor at a time.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Community</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Community Rules</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Support</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Report Issue</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Feedback</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Impact</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Sustainability Report</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Environmental Facts</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Partner Organizations</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Carbon Calculator</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-background/60">
            © 2024 ReWear. All rights reserved. Made with ♡ for our planet.
          </p>
          <div className="flex space-x-6 text-sm text-background/60 mt-4 sm:mt-0">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
