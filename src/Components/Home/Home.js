import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <main>
            <section className="laptop-container">
                <div className="laptop-details">
                    <h1 className='text-5xl font-bold text-slate-800 mt-2'>YOUR COOL LAPTOP</h1>
                    <h1 className='text-4xl font-bold text-slate-500 mt-2'>COOL PLACE FOR U</h1>
                    <p className='mt-8 text-xl font-semibold'>
                        Laptops combine all the input/output components and capabilities of a desktop computer, including the display screen, small speakers, a keyboard, data storage device, sometimes an optical disc drive, pointing devices (such as a touch pad or pointing stick), with an operating system .
                    </p>
                    <button className='text-xl font-semibold bg-blue-300 rounded px-6 py-4 mt-8 hover:bg-cyan-300'>Choose more</button>
                </div>

                {/* image section start */}
                <div className='image-container'>
                    <img src="../../laotop.jpg" alt="" />
                </div>
            </section>

        </main>
    );
};

export default Home;