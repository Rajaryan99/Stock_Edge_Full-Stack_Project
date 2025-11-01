import React from 'react'

function Stats() {
    return ( 
        <div className='container mt-5 p-3'>
                <div className='row p-3 '>
                    <div className='col-6 p-3'>
                        <h2 className='mb-5'>Trust with confidence</h2>
                        <h2 className='fs-3'>Customer-first always</h2>
                        <p className='mb-5 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                        <h2 className='fs-3'>No spam or gimmicks</h2>
                        <p className='mb-5 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#">Our philosophies.</a> </p>
                        <h2 className='fs-3'>The Zerodha universe</h2>
                        <p className='mb-5 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        <h2 className='fs-3'>Do better with money</h2>
                        <p className='mb-5 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                    <div className='col-6 p-2 pt-0'>
                        <img src="media/images/ecosystem.png" alt="States image" style={{width:'110%'}} />

                        <div className='text-center'>
                            <a href="" className='mx-5' >Explore  our product <i class="fa-solid fa-arrow-right"></i></a>
                            <a href="">Try Kite</a>
                        </div>
                    </div>
                </div>
        </div>
     );
}

export default Stats;