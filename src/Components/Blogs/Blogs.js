import React from 'react';

const Blogs = () => {
    return (
        <div>
            <article className='bg-slate-400 p-8'>

                <h1 className='text-xl font-bold text-center mt-4'> What is semantic tag? </h1>
                <p className='mt-4 text-xl font-semibold p-4'>

                    1.	যে সকল tag কোনো  অর্থ বহন করে তাকে semantic tag বলে ।<br />
                    2.	এটি website এর  বিভিন্ন বিভাগকে ভালভাবে সংজ্ঞায়িত করে HTML কে আরও meaningful করে তোলে।<br />
                    3.	 Semantic tag  দিয়ে তৈরি code পড়া অনেক সহজ ।<br />
                    4.	Semantic tag. Such as article,main,header,footer,nav,aside ,section etc.

                </p>
            </article>

            <article className='bg-red-400 mt-3 p-8'>
                <h1 className='text-xl font-bold text-center mt-4'>Defference Between inline and block elements?</h1>
                <p className='mt-4 text-xl font-semibold p-4'>


                    1.Block elements পুরোপুরি area জুড়ে থাকে।<br />
                    2.Inline elements তার মূল content যতটুকু সেটুকু জুড়েই থাকে।<br />
                    3.inline –block elements এর behaviour দুই ধরনেরই হয়ে থাকে।<br />
                    4.block- elments: div, p, h1-h6, section,header,footer etc.
                    inline-elements:span,img,small,a,button etc.
                </p>

            </article>

        </div>
    );
};

export default Blogs;