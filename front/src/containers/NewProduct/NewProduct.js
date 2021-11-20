import React, {useEffect, useState} from 'react';
import './NewPost.css'
import {useDispatch, useSelector} from "react-redux";
import {createProduct} from "../../store/actions/productsActions";
import {fetchCategories} from "../../store/actions/categoriesActions";

const NewProduct = ({history}) => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        title: "",
        category: "",
        price: "",
        description: "",
        file: null,
        userId: ""
    });

    const submitFormHandler = async e => {
        e.preventDefault();

        await dispatch(createProduct(state));
        history.replace('/');
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setState(prevState => {
            return {...prevState, [name]: file};
        });
    };

    const categories = useSelector(state => state.categories.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const printCategories = () => {
        return categories.map(categories => {
            return (
                <option key={categories._id}>{categories.category}</option>
            )
        })
    }

    return (
        <div>
            <form onSubmit={submitFormHandler} className="newPost">
                <h2>Add new post</h2>
                <input value={state.title} onChange={e => (inputChangeHandler(e))} name="title" type="text" placeholder="Title"/>
                <textarea value={state.description} onChange={e => (inputChangeHandler(e))} name="description" cols="30" rows="10" placeholder="Description">d</textarea>
                <input value={state.file} onChange={e => (inputChangeHandler(e))} name="file" type="file"/>
                <select value={state.category} onChange={e => (inputChangeHandler(e))} name="category">
                    {printCategories()}
                </select>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default NewProduct;