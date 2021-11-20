import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../store/actions/categoriesActions";

const Category = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const printCategories = () => {
        return categories.map(categories => {
            return (
                <p className="link" key={categories._id}>{categories.category}</p>
            )
        })
    }

    return (
        <div>
            {printCategories()}
        </div>
    );
};

export default Category;