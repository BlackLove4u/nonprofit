import React from 'react';

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        description: string;
        price: number;
        imageUrl: string;
    };
    onAddToCart: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(product.id)} className="add-to-cart-button">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;