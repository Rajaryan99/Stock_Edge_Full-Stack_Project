import React from 'react'

function Pricing() {
    return (
        <div className='container' style={{ marginTop: '6rem' }}>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='fs-3 mb-3'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className='' >See pricing <i class="fa-solid fa-arrow-right fs-6"></i></a>

                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5 '>
                    <div className='row text-center'>
                        <div className='col border p-3'>
                            <h1 className='mb-4'> <i class="fa-solid fa-indian-rupee-sign fs-3"></i> 0</h1>
                            <p>Free equity delivery and <br /> direct mutule funds</p>
                        </div>
                        <div className='col border p-3'>
                            <h1 className='mb-4'><i class="fa-solid fa-indian-rupee-sign fs-3"></i> 20</h1>
                            <p> Intraday and
                                F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;