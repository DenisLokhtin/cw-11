import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../../../store/actions/userActions";

const UserMenu = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.users.user);

    return (
        <div>
            Hello, <b>{user}</b>! <Link to="/posts/new" className="link">Add new post</Link> or <span onClick={() => dispatch(logoutUser())} className="link">Logout</span>
        </div>
    );
};

export default UserMenu;