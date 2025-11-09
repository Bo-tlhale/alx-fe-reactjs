import Footer from './Footer'

function About(){
    return(
        <>
            <div style={{height: '50%', width: '50%', margin: '0 auto', backgroundColor: 'lightblue', border: '2px darkblue solid', padding: '15px'}}>
                <h1 style={{color: 'darkblue'}}>About Us</h1>
                <p>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
            </div>
            <Footer/>
        </>
    )
}

export default About;