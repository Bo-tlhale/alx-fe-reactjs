import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <>
            <div style={{backgroundColor: 'lightblue', height: '10%', width: '100%', padding: '5px', position: 'fixed', top: '0', left: '0'}}>
                <ul style={{display: 'flex', listStyleType: 'none', position: 'relative', right: '25px', marginTop: '10px', marginBottom: '10px', justifyContent: 'center'}}>
                    <li style={{padding: '5px', margin: '2.5px', border: '2px white solid', textAlign: 'center'}}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li style={{padding: '5px', margin: '2.5px', border: '2px white solid', textAlign: 'center'}}>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li style={{padding: '5px', margin: '2.5px', border: '2px white solid', textAlign: 'center'}}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li style={{padding: '5px', margin: '2.5px', border: '2px white solid', textAlign: 'center'}}>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;