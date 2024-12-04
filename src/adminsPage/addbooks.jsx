import React, { useState } from 'react';
import axios from 'axios';
import Api from '../api';

const AddBookForm = () => {
    const [bookData, setBookData] = useState({
        title: '',
        description: '',
        author: '',
        image: '',
        price: 0,
        quantity: 0,
        category: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setBookData({ ...bookData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(bookData);
            const response = await axios.post(`${Api}/api/v1/addbook`, bookData);
            if(response.status === 200) alert(response.data.message);
            setBookData({
                title: '',
                description: '',
                author: '',
                image: '',
                price: 0,
                quantity: 0,
                category: ''
            });
        } catch (error) {
            console.error('Error adding book:', error);
            alert('An error occurred while adding the book.');
        }
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="flex flex-col bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
                    {/* Heading */}
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-800 text-blue-500">Add Book</h1>
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="flex flex-col">
                            <label htmlFor="title" className="text-gray-950 mb-2">Name of the Book</label>
                            <input
                                type="text"
                                id="title"
                                value={bookData.name}
                                onChange={handleChange}
                                className="p-2 border-none shadow-2xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Book name"
                            />
                        </div>

                        {/* Description */}
                        <div className="flex flex-col">
                            <label htmlFor="description" className="text-gray-950 mb-2">Description</label>
                            <input
                                type="text"
                                id="description"
                                value={bookData.description}
                                onChange={handleChange}
                                className="p-2 pl-4 border-none shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Description"
                            />
                        </div>

                        {/* Author */}
                        <div className="flex flex-col">
                            <label htmlFor="author" className="text-gray-950 mb-2">Author</label>
                            <input
                                type="text"
                                id="author"
                                value={bookData.author}
                                onChange={handleChange}
                                className="p-2 pl-4 border-none shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Author"
                            />
                        </div>

                        {/* Publication */}
                        <div className="flex flex-col">
                            <label htmlFor="publication" className="text-gray-950 mb-2">Publication</label>
                            <input
                                type="text"
                                id="publication"
                                value={bookData.publication}
                                onChange={handleChange}
                                className="p-2 pl-4 border-none shadow-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Publication"
                            />
                        </div>

                        {/* Price */}
                        <div className="flex flex-col">
                            <label htmlFor="price" className="text-gray-950 mb-2">Price</label>
                            <input
                                type="number"
                                id="price"
                                value={bookData.price}
                                onChange={handleChange}
                                className="p-2 pl-4 border-none shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Price"
                            />
                        </div>

                        {/* Quantity */}
                        <div className="flex flex-col">
                            <label htmlFor="quantity" className="text-gray-950 mb-2">Quantity</label>
                            <input
                                type="number"
                                id="quantity"
                                value={bookData.quantity}
                                onChange={handleChange}
                                className="p-2 pl-4 border-none shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Quantity"
                            />
                        </div>

                        {/* Image */}
                        <div className="flex flex-col">
                            <label htmlFor="image" className="text-gray-950 mb-2">Image URL</label>
                            <input
                                type="text"
                                id="image"
                                value={bookData.image}
                                onChange={handleChange}
                                className="p-2 pl-4 border-none shadow-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Image URL"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="mt-4 p-5 w-40 bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200 h-10"
                            >
                                Add Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export  {AddBookForm};
