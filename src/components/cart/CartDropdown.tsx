import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

export const CartDropdown = () => {
  const { state } = useCart();

  return (
    <Button
      variant="outline"
      size="icon"
      asChild
      className="relative glass-effect border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
    >
      <Link to="/cart">
        <ShoppingCart className="h-5 w-5" />
        {state.itemCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs min-w-5"
          >
            {state.itemCount}
          </Badge>
        )}
      </Link>
    </Button>
  );
};