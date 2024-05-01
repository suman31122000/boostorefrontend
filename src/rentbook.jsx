import React, { useState } from 'react';
import axios from 'axios';
import Api from './api';

const BookRentingForm = () => {
  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [bookname, setBookTitle] = useState('');
  const [admin, setAdminName] = useState('');
  const [author, setAuthorName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const getResponse = await axios.get(`${Api}/delete/${bookname}`);
      if (getResponse.status === 200) {
        const response = await axios.post(`${Api}/user`, {
          username,
          useremail,
          bookname,
          admin,
          author,
        });
        if (response.status === 200) {
          setSuccessMessage('Book rented successfully');
          setUserName('');
          setUserEmail('');
          setBookTitle('');
          setAdminName('');
          setAuthorName('');
          setError('');
        } else {
          throw new Error(response.data.message);
        }
      } else {
        setError('Book not found');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className='bg-slate-700 h-screen w-full '>
    <div className="max-w-md mx-auto border-2 p-4 text-xl bg-slate-200">
      <h2 className="text-2xl mb-4 text-2xl font-bold">Rent a Book</h2>
      {error && <div className="text-red-500 mb-4">Book not found</div>}
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">User Name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block">User Email:</label>
          <input
            type="email"
            value={useremail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block">Book Title:</label>
          <input
            type="text"
            value={bookname}
            onChange={(e) => setBookTitle(e.target.value)}
            required
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block">Admin Name:</label>
          <input
            type="text"
            value={admin}
            onChange={(e) => setAdminName(e.target.value)}
            required
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block">Author Name:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthorName(e.target.value)}
            required
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <button className="bg-blue-700 rounded-md h-10 w-32 font-semibold text-white mt-4">Rent</button>
      </form>
    </div>
    </div>
  );
};

export default BookRentingForm;
