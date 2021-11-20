import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS
} from "../actions/categoriesActions";

const initialState = {
    fetchLoadingCategories: false,
    categories: [],
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return {...state, fetchLoadingCategories: true};
        case FETCH_CATEGORIES_SUCCESS:
            return {...state,  fetchLoadingCategories: false, categories: action.payload};
        case FETCH_CATEGORIES_FAILURE:
            return {...state, fetchLoading: false};
        default:
            return state;
    }
};

export default categoriesReducer;