import React from 'react'

function Universe() {
    return ( 
         <div className='container mt-5 mb-5'>
           <p className='fs-4 text-center mb-5'>Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/">Zerodha.tech</a>  blog.</p>
        <br/> <br/> <br/>
            <h3 className=' text-center mb-4 '>The Zerodha Universe</h3>
                <p className=' text-center  '>Extend your trading and investment experience even further with our partner platforms</p>
        
           <div className='row mt-5 mb-5'>
               
            <div className='col-4 ps-5 pe-5'>
                <img src="media/images/zerodhaFundhouse.png" alt="" style={{width:'60%'}} />
                <p className='small text-center pe-5 text-muted mt-3'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.


</p>
            </div>
            <div className='col-4 ps-5 pe-5'>
                <img src="media/images/streakLogo.png" alt="" style={{width:'60%'}} />
                <p className='small text-center pe-5 text-muted mt-3'>Systematic trading platform
that allows you to create and backtest
strategies without coding.

</p>
            </div>
            <div className='col-4 ps-5 pe-5'>
                <img src="media/images/sensibullLogo.svg" alt="" style={{width:'60%'}} />
                <p className='small text-center pe-5 text-muted  mt-3'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

</p>
            </div>   
           </div>
<br/>
            <div className='row mt-5'>
               
            <div className='col-4 ps-5 pe-5'>
                <img src="media/images/tijori.svg" alt="" className='d-flex justify-content-center' style={{width:'60%'}}/>
                <p className='small text-center pe-5 text-muted  mt-3'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>
            </div>
            <div className='col-4 ps-5 pe-5'>
                <img src="media/images/smallcaseLogo.png" alt="" style={{width:'60%'}} />
                <p className='small text-center pe-5 text-muted  mt-3'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
            </div>
            <div className='col-4 ps-5 pe-5'>
                <img src="media/images/dittoLogo.png" alt="" style={{width:'60%'}}/>
                <p className='small text-center pe-5 text-muted  mt-3'>Personalized advice on life
and health insurance. No spam
and no mis-selling.
</p>
            </div>   
           </div>

           
        </div>
     );
}

export default Universe;