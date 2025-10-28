//Displays the services section with skills/services I can offer
export default function Services() {
    return (
        //Main section container with id for easy css styling and navigation
    <section id="services--section" className="services--section">
        
        {/*Container for heading and service cards*/}
        <div className="services--container">

            {/*Section heading*/}
             <h2 className="services--section--heading">What I can do for you?</h2>


            {/*Container holding all service cards*/}
            <div className="services--section--container">

                {/*Service card 1*/}
                <div className="services--section--card">
                    {/*Service icon*/}
                    <div className="services--section--icon">
                        <img src="/img/Basic Programming.png" alt="Basic Programming" />
                    </div>
                    {/*Service title*/}
                    <h3 className="services--section--title">Basic Programming Projects</h3>
                    {/*Service description*/}
                    <p className="services--section--description">
                        I can create small to medium-sized programming projects in languages like C#, Python, and Java. These projects may include console applications, data storage tools, OOP or small interactive programs.
                    </p>
                </div>

                {/*Service card 2*/}
                <div className="services--section--card">
                    {/*Service icon*/}
                    <div className="services--section--icon">
                        <img src="/img/Web Development.png" alt="Web Development" />
                    </div>
                    {/*Service title*/}
                    <h3 className="services--section--title">Web Development Basics</h3>
                    {/*Service description*/}
                    <p className="services--section--description">
                        I offer help in creating simple web pages using HTML, CSS, and basic JavaScript. This includes building structured layouts, adding forms, and linking external stylesheets. 
                    </p>
                </div>

                {/*Service card 3*/}
                <div className="services--section--card">
                    {/*Service icon*/}
                    <div className="services--section--icon">
                        <img src="/img/3D modelling.png" alt="3D modelling" />
                    </div>
                     {/*Service title*/}
                    <h3 className="services--section--title">3D modelling in Blender</h3>
                     {/*Service description*/}
                    <p className="services--section--description">
                        I can design simple 3D models using Blender, ranging from objects to basic scenes. With over 70 hours of practice, I understand the fundamentals of creating, texturing, and adjusting models. 
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
}
