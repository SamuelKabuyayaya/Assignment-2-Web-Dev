//This displays a My Skills section that dynamically loads skills data from a JSON file
import data from "../../data/index.json"

export default function MySkills() {
    return (
        //section container with id for easy css styling and
        <section className="skills--section"id="mySkills">

            {/* Section heading and subtitle*/}
            <h2 className="skills--section--heading">What I can do with the skills I have so far</h2>
             <p className = "skills--section--subtitle">MySkills</p>

            {/*Skills cards container */}
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                <div key={index} className="skills--section--card">
                    
                    {/*Skills image*/}
                    <div className="skills--section--img">
                        <img src={item.src} alt= {item.title} />
                        </div>

                        {/*Skill title and description*/}
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p className="skills--section--description">{item.description}</p>
                         </div>
                   </div>
                ))}
                </div>
        </section>
   );
}