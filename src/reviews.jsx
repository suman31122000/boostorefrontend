import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Api from './api';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
    const navigate=useNavigate();
    const handlereview=()=>{
        navigate('/addcomment')
    }
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${Api}/api/v1/getcomment`); 
                // const response=  await axios.get('http://localhost:8000/api/v1/getcomment')
                setReviews(response.data.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <div id="classes" className="h-[75vh] w-full overflow-hidden bg-slate-100">
            <div className="max-w-4xl break-words h-[10%] w-full pl-20 text-red-950">
                <span className="text-4xl font-bold">Customer Reviews</span>
                <button className="bg-blue-700 rounded-md h-10 w-32 font-semibold text-white mt-4 ml-4" onClick={handlereview}>Add Review</button>

            </div>
            <div className="h-[70%] w-full flex flex-nowrap overflow-x-scroll no-scrollbar p-4 ">
                {reviews.map((review, index) => (
                    <div id='index' class="container flex items-center justify-center">
                    <div class="card group relative flex justify-center cursor-pointer w-[22em] max-w-[80%] py-8 bg-white shadow-md transition-all ease-in-out duration-350">
                        <div class="absolute top-0 left-0 w-full h-[4px] bg-orange-500 transition-all ease-in-out duration-350 opacity-0 group-hover:w-full group-hover:opacity-100 group-hover:delay-500"></div>
                        <div class="absolute top-0 left-0 w-full h-[4px] bg-white transition-all ease-in-out duration-500 group-hover:w-0 group-hover:opacity-0"></div>
                
                        <div class="content w-[18em] max-w-[80%]">
                            <div class="logo mb-4 w-[10.625em] transition-all ease-in-out duration-350 group-hover:mb-2">
                            </div>
                
                            <h6 class="h6 text-gray-500 font-semibold uppercase tracking-wider  mb-0 text-2xl">{review.bookname}</h6>
                            <h6 class="h6 text-gray-500 font-semibold uppercase tracking-wider text-sm mb-0">By:{review.user}</h6>
                
                            <div class="hover_content overflow-hidden max-h-0 transform translate-y-4 transition-all ease-in-out duration-550 group-hover:max-h-[10em] group-hover:translate-y-0">
                                <p class="text-gray-600 text-base leading-7 mt-6">{review.comment}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                ))}
            </div>
        </div>
    );
}

export default Reviews;
