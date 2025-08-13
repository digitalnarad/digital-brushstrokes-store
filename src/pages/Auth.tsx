import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Palette, Mail, Lock, Loader2, ArrowLeft, Star, Shield, Zap } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { ModeToggle } from '@/components/mode-toggle';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'signin';
  
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = mode === 'signin' 
        ? await signIn(email, password)
        : await signUp(email, password);

      if (!error && mode === 'signin') {
        navigate('/');
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    const newMode = mode === 'signin' ? 'signup' : 'signin';
    setMode(newMode);
    setEmail('');
    setPassword('');
    // Update URL without causing navigation
    window.history.replaceState({}, '', `/auth?mode=${newMode}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-effect border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Palette className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
              ArtCanvas
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link to="/">
              <Button variant="ghost" size="sm" className="hover:bg-accent/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Marketing Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-6 px-4 py-2 glass-effect border-primary/30 text-primary">
                ✨ Join ArtCanvas Community
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
                  {mode === 'signin' ? 'Welcome Back' : 'Start Your Journey'}
                </span>
                <br />
                <span className="text-foreground">
                  {mode === 'signin' ? 'to ArtCanvas' : 'with Digital Art'}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {mode === 'signin' 
                  ? 'Access your collection and continue discovering stunning digital artwork for your space.'
                  : 'Join thousands of art lovers who transform their spaces with premium digital artwork.'
                }
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 glass-effect rounded-2xl border border-border/20">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Instant Access</h3>
                <p className="text-sm text-muted-foreground">Download immediately after purchase</p>
              </div>
              
              <div className="text-center p-6 glass-effect rounded-2xl border border-border/20">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">300 DPI resolution artwork</p>
              </div>
              
              <div className="text-center p-6 glass-effect rounded-2xl border border-border/20">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Full License</h3>
                <p className="text-sm text-muted-foreground">Commercial use included</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Artworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md glass-effect border-border/20">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                  {mode === 'signin' ? 'Sign In' : 'Create Account'}
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  {mode === 'signin' 
                    ? 'Enter your credentials to access your account'
                    : 'Join ArtCanvas and start your collection today'
                  }
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 glass-effect border-border/30 focus:border-primary h-12"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 glass-effect border-border/30 focus:border-primary h-12"
                          required
                          minLength={6}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-primary-foreground font-medium py-6 rounded-xl transition-all duration-300 hover:scale-105 glow-effect text-lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {mode === 'signin' ? 'Signing in...' : 'Creating account...'}
                      </>
                    ) : (
                      mode === 'signin' ? 'Sign In' : 'Create Account'
                    )}
                  </Button>
                  
                  <div className="text-center pt-6 border-t border-border/20">
                    <p className="text-sm text-muted-foreground">
                      {mode === 'signin' ? "Don't have an account?" : "Already have an account?"}
                      <button
                        type="button"
                        onClick={toggleMode}
                        className="ml-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200 underline underline-offset-2"
                      >
                        {mode === 'signin' ? 'Sign up here' : 'Sign in here'}
                      </button>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;