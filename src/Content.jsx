import React, { useEffect, useState } from 'react';

const Content = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className="card bg-base-100 shadow-xl">
                    <figure className="bg-white h-48 p-3">
                        <img src={product.image} alt={product.title} className="object-contain h-full w-full" />
                    </figure>
                    <div className="card-body">
                        <h2>{product.title}</h2>
                        <p>{product.price} €</p>
                    </div>
                    <div className="card-actions flex justify-end items-center">
                        <a className="no-underline hover:underline text-xs" href={`/category/${product.category}`}>
                            Browse category
                        </a>
                        <button className="btn btn-primary">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Content;