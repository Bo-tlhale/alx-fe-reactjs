import Footer from './Footer'

function Services(){
    return(
        <>
            <div style={{height: '50%', width: '75%', margin: '0 auto', backgroundColor: 'lightblue', border: '2px darkblue solid', padding: '15px'}}>
                <h1 style={{color: 'darkblue'}}>Our Services</h1>
                <ul style={{padding: '10px', listStyleType: 'none'}}>
                    <li style={{backgroundColor: 'blue', height: '25px', borderRadius: '5px', margin: '5px'}}>Technology Consulting</li>
                    <li style={{backgroundColor: 'blue', height: '25px', borderRadius: '5px', margin: '5px'}}>Market Analysis</li>
                    <li style={{backgroundColor: 'blue', height: '25px', borderRadius: '5px', margin: '5px'}}>Product Development</li>
                </ul>
            </div>
            <Footer/>
        </>
    )
}

export default Services;