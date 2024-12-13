interface ProductCardProps {
    product: {
      id: number;
      name: string;
      price: number;
      image: string;
    };
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <div className="border p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover mb-2"
        />
        <h2 className="font-bold">{product.name}</h2>
        <p>${product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  