import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <section className="hero bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Discover Your Style</h1>
          <p className="text-xl mt-2">Find the latest trends in fashion</p>
          <Button className="mt-4" onClick={() => navigate('/shop')}>Shop Now</Button>
        </div>
      </section>

      <section className="featured-products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((product) => (
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

      <section className="newsletter-signup text-center py-8 bg-gray-100">
        <h2 className="text-2xl font-bold">Stay Updated</h2>
        <p className="mt-2">Sign up for our newsletter to get the latest news and offers</p>
        <div className="mt-4 flex justify-center">
          <Input type="email" placeholder="Enter your email" className="max-w-xs" />
          <Button className="ml-2">Subscribe</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;