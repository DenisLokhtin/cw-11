import React, {useEffect, useState} from 'react';
import './NewPost.css'
import {useDispatch} from "react-redux";
import {createProduct} from "../../store/actions/productsActions";

const NewProduct = ({history}) => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        title: "",
        userId: "",
        description: "",
        image: null,
        date: "",
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

    return (
        <div>
            <form onSubmit={submitFormHandler} className="newPost">
                <h2>Add new post</h2>
                <input name="title" type="text" placeholder="Title"/>
                <textarea name="description" cols="30" rows="10" placeholder="Description">d</textarea>
                <input type="file"/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default NewProduct;