import React, {useEffect} from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../store/actions/productsActions";
import './Products.css';
import Category from "../../components/Category/Category";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const printProducts = () => {
        return products.map(product => {
            return (
                <ProductCard
                    key={product._id}
                    id={product._id}
                    price={product.price}
                    title={product.title}
                    image={product.file}
                />
            )
        })
    };

    return (
        <div className="main">
            <div className="main-category">
                <Category/>
            </div>
            <div className="products">
                {printProducts()}
            </div>
        </div>
    );
};

export default Products;