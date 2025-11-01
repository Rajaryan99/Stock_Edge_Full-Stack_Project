import React from 'react'

function Award() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src="./media/images/largestbroker.svg" alt="" />
            </div>
            <div className='col-6 p-5'>
                <h1 className='mt-3'>Largest stock broker in India</h1>
                <p className='mb-5'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India. </p>
                <div className='row'>
                    <div className='col-6'>
                         <ul>
                    <li>
                        <p>Futures and Options</p>
                    </li>
                    <li>
                        <p>Commodity derivatives</p>
                    </li>
                    <li>
                        <p>Currency derivatives</p>
                    </li>
                    
                </ul>
                    </div>
                    <div className='col-6'>
                         <ul>
                    <li>
                        <p>Stocks & IPOs</p>
                    </li>
                    <li>
                        <p>Direct mutual funds</p>
                    </li>
                    <li>
                        <p>Bond and Govt. Securities</p>
                    </li>
                    
                </ul>
                    </div>
                </div>
               <img src="media\images\pressLogos.png" alt=""  style={{width: "90%"}}/>
            </div>
        </div>
       </div>
     );
}

export default Award;