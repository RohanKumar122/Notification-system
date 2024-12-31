import React from 'react'
import { useEffect, useState } from 'react'
import {useFirebase} from '../context/firebase';


const Home = () => {
    const firebase = useFirebase();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.listAllBooks().then((books) => {
            console.log(books.docs.map((a) => a.data()));
            setBooks(books.docs.map((doc) => doc.data()));
        })
    }, [firebase]);

  return (
    <div>
        <h1 className='mx-4 p-4 justify-center flex font-semibold text-red-600'>Your Books</h1>
        <div className='flex flex-row mx-4'>
            {books.map((book) => (
                <div className='gap-4 rounded-lg  flex-col mx-4 bg-gray-400 p-4 md:w-1/2 sm:w-1/2 lg:w-1/5' key={book.id}>
                    {/* <h3 >Book<span className='font-bold justify-center flex'>{book.name}</span></h3> */}
                    <p className=''>Book : <span className=' text-black font-bold font-mono'>{book.name}</span></p>
                    <p className=''>ISBN : <span className=' text-gray-700'>{book.isbn}</span></p>
                    <p>Price : {book.price}</p>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Home