import { useState } from 'react'
import Footer from './Footer'

function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted!');
    }

    return(
        <>
            <div style={{height: '80%', width: '90%', margin: '0 auto', backgroundColor: 'lightblue', border: '2px darkblue solid', padding: '15px'}}>
                <h1 style={{color: 'darkblue'}}>Contact Us</h1>
                <form onSubmit={handleSubmit} style={{margin: '0 auto'}}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ display: 'block', margin: '10px 0', backgroundColor: 'white' , color: 'black', border: 'none', borderRadius: '5px', padding: '5px', marginLeft: '45px'}}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ display: 'block', margin: '10px 0', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '5px', padding: '5px', marginLeft: '45px' }}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ display: 'block', margin: '10px 0', backgroundColor: 'white' , color: 'black', border: 'none', borderRadius: '5px', padding: '5px', marginLeft: '45px' }}
                    />
                    <button 
                        type="submit"
                        style={{backgroundColor: 'darkblue'}}
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Contact;