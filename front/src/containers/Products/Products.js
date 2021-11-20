import React, {useEffect} from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";
import {useDispatch, useSelector} from "react-redux";
// import {fetchProducts} from "../../store/actions/productActions";
import './Products.css';

const Products = () => {
    // const dispatch = useDispatch();
    // const products = useSelector(state => state.products.products);

    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, [dispatch]);

    // const printProducts = () => {
    //     return products.map(product => {
    //         return (
    //             <ProductCard
    //                 key={product._id}
    //                 id={product._id}
    //                 date={product.date}
    //                 username={product.userId.username}
    //                 title={product.title}
    //                 image={product.file}
    //             />
    //         )
    //     })
    // };

    return (
        <div className="products">
            {/*{printProducts()}*/}
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
};

export default Products;