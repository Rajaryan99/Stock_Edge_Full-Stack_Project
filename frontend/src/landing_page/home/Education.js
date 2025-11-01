import React from 'react'

function Education() {
    return ( 
          <div className='container ' style={{marginTop:'6rem'}}>
            <div className='row'>
                <div className='col-6 '>
                   <img src="media/images/education.svg" alt="" />
                </div>
                <div className='col-6'>
                    <h1 className='fs-3 mb-3'>Free and open market education</h1>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" className='' >Varsity <i class="fa-solid fa-arrow-right fs-6"></i></a>

                    <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" className='' >TradingQ&A <i class="fa-solid fa-arrow-right fs-6"></i></a>


                </div>
                
            </div>
        </div>
     );
}

export default Education;