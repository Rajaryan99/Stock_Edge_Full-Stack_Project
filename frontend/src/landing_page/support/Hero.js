function Hero() {
    return ( 
            <section className='container-fluid'id="supportHero">
            <div className=' p-3  ' id="supportwrapper">
                <h3 className=" mt-4">Support Portal</h3>
                <a href="" className="mt-4 pe-5">Track Ticket</a>
            </div> 
            <div className=" row p-3 ">
                <div className="col-5 p-3 ps-5 " id="supportSearch">
                    <h1 className="fs-4  mb-4">Search for an answer or browse help topic to create a ticket</h1>
                    <input type="text" class="input-field" placeholder="Eg. how do I activate F&Q"/> <br/>
                    <a href="">Track account opening</a> &nbsp;
                    <a href="">Track segment activation</a>&nbsp; <br/>
                    <a href="">Intraday margins</a>&nbsp;&nbsp;
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-2"></div>
                <div className="col-5 p-3 ps-5 " id="supportSearch">
                    <h1 className="fs-4 mb-4">Feature</h1>
                    <ol className="mb-5">
                        <li ><a href="" className="">Current Takeover and Delisting - January 2025</a></li> <br/>
                        <li><a href="" className="">Latest Intraday leverage -MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;