import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Api from "./api";
import { motion } from 'framer-motion';

const Dashboard = () => {
   const navigate=useNavigate();
    const handledashboard=()=>{location.reload()}
    const handledsignout=()=>{navigate('/')}
    const [rentals, setRentals] = useState([]);
    const [state, setState] = useState([false, false, false, false, true]);

    const handleUpload = () => {
        setState(prevState => {
            const newState = prevState.map((value, index) => index === 0 ? !value : false);
            return newState;
        });
    };

    const handlemanage = () => {
        setState(prevState => {
            const newState = prevState.map((value, index) => index === 1 ? !value : false); 
            return newState;
        });
    };
    useEffect(() => {
    
        const fetchData = async () => {
            try {
                const response = await axios.get(`${Api}/rentuser`);
                setRentals(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const handleuser = () => {
        setState((prevState) => {
          const newState = prevState.map((value, index) =>
            index === 2 ? !value : false
          );
          return newState;
        });
      };
    
    const [bookData, setBookData] = useState({
        name: '',
        description: '',
        author: '',
        image: '',
        price: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${Api}/add`, bookData);
            alert('Book added successfully!');
            setBookData({
                name: '',
                description: '',
                author: '',
                image: '',
                price: 0,
                category:''
            });
        } catch (error) {
            console.error('Error adding book:', error);
            alert('An error occurred while adding the book.');
        }
    };

  const [formData, setFormData] = useState({
    bookTitle: '',
    image: '',
    author: '',
    bookCategory: '',
    description: '',
  });

  const handlemanageChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlemanageSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${Api}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Book updated successfully');
      } else {
        console.error('Failed to update book');
      }
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };
  const handlerent=()=>{
    navigate('/rent')
}
const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Sales',
            data: [100, 200, 150, 300, 250, 400, 350],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4
        }
    ]
};

const chartOptions = {
    scales: {
        x: {
            type: 'category',
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        }
    }
};



    return (
        <>

            <div className="h-screen w-full flex gap-20 p-10">
            <div className="flex flex-col h-[90%] w-[15%] gap-6 bg-slate-700 text-white font-semibold">
                <span className="pl-[40%] pt-10">bfdnb</span>
                <button onClick={handledashboard} className="hover:bg-slate-200 hover:text-black h-10">Dashboard</button>
                <button onClick={handleUpload} className="hover:bg-slate-200 hover:text-black h-10">Upload Book</button>
                <button onClick={handlemanage} className="hover:bg-slate-200 hover:text-black h-10">ManageBook</button>
                <button onClick={handlerent} className="hover:bg-slate-200 hover:text-black h-10">Rent Book</button>
                <button onClick={handleuser} className="hover:bg-slate-200 hover:text-black h-10">Users</button>

                <button onClick={handledsignout} className="hover:bg-slate-200 hover:text-black h-10">Sign Out</button>
            </div>
            <div className="bg-slate-200 h-full w-full">
                <div>
                {state[4] &&(
            <motion.div 
            className="max-w-screen-md mx-auto p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <header className="text-center mb-8">
                <motion.h1 
                    className="text-3xl font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Welcome to Your Bookstore Dashboard
                </motion.h1>
            </header>
            <section className="mb-8">
                <h2 className="text-2xl mb-4">Sales Overview</h2>
                <div className="bg-white border border-gray-300 p-4 rounded shadow">
                    {/* Placeholder for sales chart */}
                    <p>Insert sales chart here</p>
                </div>
            </section>
            <section>
                <h2 className="text-2xl mb-4">Top Sellers</h2>
                <div className="bg-white border border-gray-300 p-4 rounded shadow">
                    {/* Placeholder for top sellers list */}
                    <p>Insert top sellers list here</p>
                </div>
                
            </section>
            <footer className="text-center mt-8 text-sm">
                <p>© 2024 Your Bookstore</p>
            </footer>
        </motion.div>)}
        </div>
            {state[0] && (
                <form onChange={handleChange}>
                <div className="flex flex-col text-2xl items-center">
                    <div>
                        <span className="font-bold text-4xl">Upload A Book!</span>
                    </div>
                    <div className="flex mt-20 gap-8 font-semibold">
                        <div className="flex flex-col">
                            <span>Book Title</span>
                            <input type="text" name="name" className="border-2" />
                            <span>Book Image Url</span>
                            <input type="text" className="border-2" name="link"/>
                        </div>
                        <div className="flex flex-col">
                            <span>Author Name</span>
                            <input type="text" className="border-2" name="author"/>
                            <span>Book Category</span>
                            <input type="text" className="border-2" name="category"/>
                        </div>
                    </div>
                    <div className="flex flex-col font-semibold">
                        <span>Book Description</span>
                        <input type="text" className="border-2" name="description" />
                        <span>Book Pdf Link</span>
                        <input type="text" className="border-2" name="link" />
                    </div>
                    <button type="submit" onClick={handleSubmit} className="bg-blue-700 rounded-md h-10 w-32 font-semibold text-white mt-4">ADD</button>
                </div>
                </form>
            )}
            {state[1] && (
                <form onChange={handlemanageChange}>
                <div className="flex flex-col text-2xl items-center">
                    <div>
                        <span className="font-bold text-4xl">Manage Books</span>
                    </div>
                    <div className="mt-8">
                        <span className="font-bold text-2xl">Edit Book</span>
                        <div className="flex mt-4 gap-8 font-semibold">
                            <div className="flex flex-col">
                                <span>Book Title</span>
                                <input type="text" className="border-2" />
                                <span>Book Image Url</span>
                                <input type="text" className="border-2" />
                            </div>
                            <div className="flex flex-col">
                                <span>Author Name</span>
                                <input type="text" className="border-2" />
                                <span>Book Category</span>
                                <input type="text" className="border-2" />
                            </div>
                        </div>
                        <div className="flex flex-col mt-4 font-semibold">
                            <span>Book Description</span>
                            <input type="text" className="border-2" />
                            <span>Book Pdf Link</span>
                            <input type="text" className="border-2" />
                        </div>
                    </div>
                    <button onClick={handlemanageSubmit} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4">Add Book</button>

                </div>
                </form>
            )}
            {state[2] && rentals && rentals.length > 0 && (
  <div className=" w-full grid grid-cols-3 items-center bg-slate-200">
    {rentals.map((rental, index) => (
      <div key={index} className="flex flex-col items-center mb-4 border-4 ">
        <h2 className="text-2xl font-bold">{rental.username}'s Rented Books</h2>
        <ul className="list-disc pl-4">
            <li ><span className="text-2xl font-semibold">  bookname: </span> <span>{rental.bookname} </span></li>
            <li ><span className="text-2xl font-semibold">  author: </span> <span>{rental.author}</span></li>
            <li ><span className="text-2xl font-semibold">  issue Date: </span> <span>{rental.date}</span></li>
            
        </ul>
      </div>
    ))}
  </div>
)}


    </div>
        </div>
        </>
    );
}

export default Dashboard;
