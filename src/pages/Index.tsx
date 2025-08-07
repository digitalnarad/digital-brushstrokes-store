import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Star, Truck, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">ArtCanvas</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="outline" className="border-primary/20 hover:bg-primary hover:text-primary-foreground">
            Shop Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/20" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              Premium Digital Art Collection
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent leading-tight">
              Transform Your Space with
              <br />
              <span className="text-foreground">Digital Art</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover stunning digital artwork ready to print on canvas. High-quality designs that bring life to any room.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Browse Collection
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/20 hover:bg-primary hover:text-primary-foreground">
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border/40 shadow-sm hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Instant Download</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get your digital art instantly after purchase. No waiting, start printing immediately.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/40 shadow-sm hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">High Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  300 DPI resolution artwork perfect for large canvas prints up to 24x36 inches.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/40 shadow-sm hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Commercial License</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use our artwork for personal and commercial projects with included licensing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Gallery Preview */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Artwork</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of digital art perfect for canvas printing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group overflow-hidden border-border/40 hover:shadow-xl transition-all duration-500">
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/30 to-muted/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg mb-1">Abstract Canvas #{item}</h3>
                    <p className="text-sm opacity-90">Modern digital art</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Digital Art #{item}</h3>
                      <p className="text-sm text-muted-foreground">24x36 inches ready</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">$29</span>
                      <p className="text-xs text-muted-foreground">Instant download</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary hover:text-primary-foreground">
              View All Artwork
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Ready to Decorate?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our complete collection and find the perfect digital art for your space
          </p>
          <Button size="lg" className="text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
            Start Shopping
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Palette className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">ArtCanvas</span>
              </div>
              <p className="text-muted-foreground">
                Premium digital art for canvas printing. Transform your space with beautiful artwork.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Shop</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Abstract Art</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Nature Prints</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Modern Art</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Custom Sizes</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Printing Guide</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ArtCanvas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
