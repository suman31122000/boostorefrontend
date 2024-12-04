import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './home';
import Books from './books';
import { AddBookForm } from './adminsPage/addbooks';
import PostComment from './postreview';
import Dashboard from './dashboard';
import BookRentingForm from './rentbook';
import Searchbooks from './searchbooks';

const Server = () => {
    const navigate = useNavigate();

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/shop' element={<Books/>}/>
            <Route path='/sell' element={<AddBookForm/>}/>
            <Route path='/addcomment' element={<PostComment/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/rent' element={<BookRentingForm/>}/>
            <Route path='/searchbook/:query' element={<Searchbooks/>}/>
        </Routes>
    );
};

export default Server;
