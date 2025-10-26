//This displays the "Contact Me" section with a for for user input
export default function ContactMe(){
    return (
        //section container with id for easy css styling and navigation
        <section id="Contact" className="contact--section">

            {/*Heading and subtitle*/}
            <div>
                <h2 className="contact--section--heading">Contact Me</h2>
                <p className="contact--sub--title">What do you need help with?</p>
            </div>

            {/*Form container*/}
            <form className="contact--form--container">

                {/*Name, email and phone number*/}
                <div className="contact--container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input 
                        type="text"
                        className="contact--input text-md"
                        name="first-name"
                        id="first-name"
                        required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input 
                        type="text"
                        className="contact--input text-md"
                        name="last-name"
                        id="last-name"
                        required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input 
                        type="email"
                        className="contact--input text-md"
                        name="email"
                        id="email"
                        required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input 
                        type="number"
                        className="contact--input text-md"
                        name="phone-number"
                        id="phone-number"
                        required
                        />
                    </label>
                </div>

                {/*Dropdown for choosing a topic*/}
                <label htmlFor="choose-topic" className="contact--label">
                        <span className="text-md">Choose Topic</span>
                        <select id="choose-topic" className="contact--input text-md">
                            <option>Select One...</option>
                            <option>Basic Programming Projects</option>
                            <option>Web Development Basics</option>
                            <option>3D modelling in Blender</option>
                        </select>
                    </label>
                    
                    {/*Message input*/}
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <input 
                        className="contact--input text-md"
                        id="message"
                        rows="8"
                        placeholder="Type your message here..."
                        />
                    </label>

                    {/*Checkbox for terms acceptance*/}
                    <label label className="checkbox--label" htmlFor="checkbox--label">
                        <input type="checkbox" required name="checkbox" id="checkbox" />
                        <span className="text-sm">I accept the terms</span>
                    </label>
                    <div>
                        <button className="btn btn-primary contact--form--btn">Submit</button>
                    </div>
            </form>
        </section>
    )
}