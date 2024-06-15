import React from 'react'
import './Contact.css'

export const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "dc19721d-7e18-4789-9c2a-27334650088e");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res)
            setResult(res.message)
            event.target.reset()
        } else {
            console.log("Error", res)
            setResult(res.message)
        }
    };






    return <>
        <div className="contact">
            <div className="contact-col">
                <h3>Send us A Message <img src="src/assets/message.svg" alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit omnis, perferendis commodi reiciendis unde ipsa iste dolor, repellat eaque laudantium illo debitis exercitationem maxime eligendi nemo dolorem officia quos nisi?</p>
                <ul>
                    <li> <img src="src/assets/message.svg" alt="" />Contact@GreatStack.com</li>
                    <li> <img src="src/assets/contact.svg" alt="" />+1 123-456-7890</li>
                    <li> <img src="src/assets/location.svg" alt="" />77 Massachusetts Ave, Combrage<br /> MA 02129 United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter Your Mobail' required />
                    <label htmlFor=""> Wirte Your Message Here</label>
                    <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    </>
}
