import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Palette, Star, Truck, Shield } from "lucide-react";
import { CartDropdown } from "@/components/cart/CartDropdown";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { ModeToggle } from "@/components/mode-toggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Palette className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
              ArtCanvas
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/collections" className="relative text-foreground hover:text-primary transition-all duration-300 group">
              Collections
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a href="#gallery" className="relative text-foreground hover:text-primary transition-all duration-300 group">
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative text-foreground hover:text-primary transition-all duration-300 group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-foreground hover:text-primary transition-all duration-300 group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <CartDropdown />
            <Button 
              variant="outline" 
              className="relative overflow-hidden border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
            >
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 aurora-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/50 to-accent/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{animationDelay: '-3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl floating" style={{animationDelay: '-1.5s'}}></div>
        
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="secondary" className="mb-8 px-6 py-2 text-sm font-medium glass-effect border-primary/30 text-primary hover:scale-105 transition-transform duration-300">
              ✨ Premium Digital Art Collection
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
                Transform Your Space
              </span>
              <br />
              <span className="relative inline-block">
                <span className="text-foreground">with Digital Art</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl -z-10 scale-110"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover stunning digital artwork ready to print on canvas. High-quality designs that bring life to any room with artistic elegance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-12 py-6 rounded-2xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary hover:scale-105 transition-all duration-300 glow-effect group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Browse Collection
                  <div className="w-5 h-5 bg-white/20 rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
                </span>
                <div className="absolute inset-0 shimmer"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-12 py-6 rounded-2xl glass-effect border-primary/30 hover:border-primary hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  View Gallery
                  <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Artworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">300</div>
                <div className="text-sm text-muted-foreground">DPI Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Choose ArtCanvas?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of quality, convenience, and creativity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass-effect border-border/20 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                    <Truck className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Instant Download</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get your digital art instantly after purchase. No waiting, start printing immediately and transform your space today.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-border/20 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                    <Star className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Premium Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  300 DPI resolution artwork perfect for large canvas prints up to 24x36 inches with crystal-clear details.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-border/20 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                    <Shield className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Commercial License</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use our artwork for personal and commercial projects with comprehensive licensing included.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Gallery Preview */}
      <section id="gallery" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 px-4 py-2 glass-effect border-primary/30 text-primary">
              🎨 Featured Collection
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
              Stunning <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Artwork</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our curated collection of digital art perfect for canvas printing. Each piece is crafted with artistic excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group overflow-hidden glass-effect border-border/20 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/30 to-muted/40 relative overflow-hidden">
                  {/* Artwork Preview */}
                  <div className="absolute inset-4 bg-gradient-to-br from-primary/40 via-accent/50 to-primary/30 rounded-2xl opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-white/10 to-white/5 rounded-xl backdrop-blur-sm border border-white/20"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Content on Hover */}
                  <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-bold text-xl mb-2">Abstract Canvas #{item}</h3>
                    <p className="text-sm opacity-90 mb-3">Modern digital art • Ready to print</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30">
                        Preview
                      </Button>
                      <AddToCartButton
                        item={{
                          id: `artwork-${item}`,
                          title: `Digital Art #${item}`,
                          price: 29,
                          image: `/artwork-${item}.jpg`,
                          category: 'Abstract'
                        }}
                        size="sm"
                        className="bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border border-primary/30"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Price Badge */}
                  <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-semibold text-sm">$29</span>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-gradient-to-b from-card to-card/50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        Digital Art #{item}
                      </h3>
                      <p className="text-sm text-muted-foreground">24x36 inches • 300 DPI</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">$29</span>
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Star className="w-4 h-4" />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Instant download</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-effect border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground px-12 py-6 text-lg rounded-2xl group"
            >
              <span className="flex items-center gap-2">
                View All Artwork
                <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10"></div>
        <div className="absolute inset-0 aurora-bg opacity-30"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-8 px-6 py-2 glass-effect border-primary/30 text-primary">
              🚀 Ready to Transform?
            </Badge>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
                Ready to Decorate
              </span>
              <br />
              <span className="text-foreground">Your Space?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Browse our complete collection and find the perfect digital art that speaks to your style and transforms your space into an artistic sanctuary.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="text-xl px-16 py-8 rounded-2xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary hover:scale-105 transition-all duration-300 glow-effect group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Shopping
                  <div className="w-6 h-6 bg-white/20 rounded-full group-hover:translate-x-2 transition-transform duration-300"></div>
                </span>
                <div className="absolute inset-0 shimmer"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-xl px-16 py-8 rounded-2xl glass-effect border-primary/30 hover:border-primary hover:scale-105 transition-all duration-300"
              >
                Explore Gallery
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary" />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
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
