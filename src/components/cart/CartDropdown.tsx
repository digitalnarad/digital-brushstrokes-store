import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

export const CartDropdown = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Cart Icon Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={toggleCart}
        className="relative glass-effect border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
      >
        <ShoppingCart className="h-5 w-5" />
        {state.itemCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs min-w-5"
          >
            {state.itemCount}
          </Badge>
        )}
      </Button>

      {/* Cart Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Content */}
          <Card className="absolute right-0 top-12 w-96 z-50 glass-effect border-primary/30 shadow-2xl shadow-primary/10">
            <CardContent className="p-0">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/20">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  Shopping Cart ({state.itemCount})
                </h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Cart Items */}
              <div className="max-h-96 overflow-y-auto">
                {state.items.length === 0 ? (
                  <div className="p-8 text-center">
                    <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground">Your cart is empty</p>
                    <p className="text-sm text-muted-foreground mt-1">Add some amazing artwork!</p>
                  </div>
                ) : (
                  <div className="p-4 space-y-4">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 p-3 rounded-lg glass-effect border border-border/20 hover:border-primary/30 transition-all duration-300">
                        {/* Item Image */}
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/30 rounded-lg flex items-center justify-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-accent/50 rounded-md"></div>
                        </div>
                        
                        {/* Item Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground truncate">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                          <p className="text-sm font-semibold text-primary">${item.price}</p>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {state.items.length > 0 && (
                <div className="p-4 border-t border-border/20 space-y-4">
                  {/* Total */}
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span className="text-foreground">Total:</span>
                    <span className="text-primary">${state.total.toFixed(2)}</span>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                    <Button 
                      className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary"
                      onClick={() => {
                        setIsOpen(false);
                        // TODO: Navigate to checkout
                      }}
                    >
                      Checkout
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};