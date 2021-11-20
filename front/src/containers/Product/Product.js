import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../../store/actions/productsActions";
import './Product.css'

const Product = (props) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.product);

    useEffect(() => {
        dispatch(fetchProduct(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const printProduct = () => {
        if (product) {
            return (
                <div className="product">
                    <h2>{product.title}</h2>
                    <div className="flex-cont">
                        <p>{product.description}</p>
                        <img src={'http://localhost:8000/public/uploads/' + product.file} alt="img"/>
                    </div>
                    <p>{product.price} Cом</p>
                </div>
            )
        }
        return <div></div>
    };


    return (
        printProduct()
    );
};

export default Product;