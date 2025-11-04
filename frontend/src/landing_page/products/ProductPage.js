import React from 'react'

import Hero from './Hero';


import Universe from './Universe';
import LeftSection from './LeftSection';
import RightSection from './RightSection';


function ProductPage() {
    return ( 
        <>
            
            <Hero/>
           <LeftSection imageURL="media/images/kite.png" 
           productTitle="Kite" 
           productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
           tryDemo="" 
           learnMore="" 
           googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN" 
           appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802" />

            <RightSection/>

             <LeftSection imageURL="media/images/coin.png" 
           productTitle="Coin" 
           productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
           tryDemo="" 
           learnMore="" 
           googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN" 
           appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802" />

            <RightSection/>

             <LeftSection imageURL="media/images/varsity.png" 
           productTitle="Varsity mobile" 
           productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
           tryDemo="" 
           learnMore="" 
           googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN" 
           appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802" />
           
            <Universe/>
            
        </>
     );
}

export default ProductPage;