import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface AddToCartButtonProps {
  item: {
    id: string;
    title: string;
    price: number;
    image: string;
    category: string;
  };
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export const AddToCartButton = ({ 
  item, 
  variant = "default", 
  size = "default", 
  className = "" 
}: AddToCartButtonProps) => {
  const { addItem, state } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  
  const isInCart = state.items.some(cartItem => cartItem.id === item.id);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    try {
      addItem(item);
      
      toast({
        title: "Added to cart!",
        description: `${item.title} has been added to your cart.`,
      });
      
      // Brief delay to show the success state
      setTimeout(() => {
        setIsAdding(false);
      }, 1000);
    } catch (error) {
      setIsAdding(false);
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`transition-all duration-300 ${className} ${
        isAdding ? 'bg-green-500 hover:bg-green-500' : ''
      }`}
    >
      {isAdding ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Added!
        </>
      ) : isInCart ? (
        <>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add More
        </>
      ) : (
        <>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </>
      )}
    </Button>
  );
};