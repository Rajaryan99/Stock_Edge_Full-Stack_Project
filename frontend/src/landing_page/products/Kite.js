import React from 'react'

function Kite() {
    return ( 
        <div className='container border-top '>
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/images/kite.png" alt="" style={{width:'100%'}}/>
                </div>
                <div className='col  mt-5' style={{marginLeft:'100px', lineHeight:'1.8'}}>
                    <h3>Kite</h3>
                    <p className='mt-4 fs-5'>Our ultra-fast flagship trading platform with <br/> streaming market data, advanced charts, an <br/> elegant UI, and more. Enjoy the Kite <br/> experience seamlessly on your Android and <br/> iOS devices.</p>
                    <a href="" className='' style={{fontSize:'18px'}}>Try demo <i class="fa-solid fa-arrow-right"></i>  </a>
                    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="" className='' style={{fontSize:'18px'}}>Learn more <i class="fa-solid fa-arrow-right"></i> </a>
                    
                    <div className='row'>
                        <div className='col'>
                            <img src="media/images/googlePlayBadge.svg" alt="" />
                        </div>
                        <div className='col'>
                             <img src="media/images/appstoreBadge.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Kite;