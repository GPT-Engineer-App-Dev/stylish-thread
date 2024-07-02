import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();

  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="space-y-8">
      <section className="product-listing grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product}>
            <CardHeader>
              <img src={`/images/product-${product}.jpg`} alt={`Product ${product}`} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle>Product {product}</CardTitle>
              <p>$29.99</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => navigate(`/product/${product}`)}>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Shop;