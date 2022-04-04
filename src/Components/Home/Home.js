import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Home.css'
const Home = () => {


    const [reviews, setReviews] = useReviews();

    const displayReviews = reviews.slice(0, 3);

    return (
        <main>
            <section className="laptop-container">
                <div className="laptop-details">
                    <h1 className='text-4xl font-bold text-slate-800 mt-2'>COOL LAPTOP ZONE</h1>
                    <h1 className='text-2xl font-bold text-slate-500 mt-4'>CHOSSE BEST FOR U</h1>
                    <p className='mt-4 text-xl '>
                        Laptops combine all the input/output components and capabilities of a desktop computer, including the display screen, small speakers, a keyboard, data storage device, sometimes an optical disc drive.
                    </p>
                    <button className='text-xl font-semibold bg-blue-300 rounded px-6 py-4 mt-8 hover:bg-cyan-300'>Choose more</button>
                </div>

                {/* image section start */}
                <div className='image-container'>
                    <img src="../../laotop.jpg" alt="" />
                </div>
            </section>




            {/* customer review section */}



            <section>
                <h1 className='text-5xl font-bold text-cyan-900 text-center'>Customer Reviews(3)</h1>

                <div className='reviews-container'>
                    {
                        displayReviews.map(review => <ReviewDetails
                            review={review}
                            key={review.id}

                        ></ReviewDetails>)
                    }
                </div>

            </section>

            <div className=' w-full text-center'>
                <Link to={'/reviews'}>
                    <button className='bg-slate-800 font-bold text-blue-100 px-8 p-2 rounded hover:bg-black m-8'>see all reviews --</button>
                </Link>
            </div>

        </main >
    );
};

export default Home;