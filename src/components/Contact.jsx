import { useState } from "react"
import { motion } from "framer-motion"

//Assets
import "./Contact.css"

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                access_key: 'c8853188-b3f7-409f-8e57-53c952a6c256',
               ...formData
            })
        })

        if (response.ok) {
            alert('Message sent!')
            setFormData({ name: '', email: '', message: '' })
        }
    }


    return (
        <section className="contact" id="contact">
            <motion.div
                initial={{ transform: "translateY(100px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut"}}
                viewport={{ once: true }}>
                
                <h2 className="contact-heading">What's next? You tell me!</h2>
            </motion.div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
                <div  className="form-group">  
                    <label className="form-label" htmlFor="name">Your name:</label><br />
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required/>
                </div>

                <div  className="form-group">  
                    <label className="form-label" htmlFor="email">Your email:</label><br />
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required/>
                </div>

                <div className="form-group">  
                    <label className="form-label" htmlFor="message">Your message:</label><br />
                    <textarea name="message" id="message" value={formData.message} onChange={handleChange} required/>
                </div>
                <button className="contact-btn" type="submit">Send</button>
            </form>
        </section>
    )
}

export default Contact