//This displays a Projects section that dynamically loads projects data from a JSON file
import data from "../../data/index.json";

export default function Projects(){
    return (

      //main container section with id for easy css styling and navigation
        <section className="projects--section" id="MyProjects">
            
            {/* Container with heading, subtitle and GitHub links*/}
            <div className="projects--container-box">
            <div className="projects--container">

              {/*Section heading*/}
            <h2 className="projects--section--heading">My Projects</h2>

            {/*Section Subtitle*/}
            <p className="section--title"> Recent Projects</p>
            </div>

            {/*Link to visit Github profile*/}
            <div>
                <a 
                href="https://github.com/SamuelKabuyayaya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github"
                >
             Visit My GitHub
          </a>
            </div>
          </div>

          {/*Container for all projects cards*/}
          <div className="projects--section--container">
            {data?.projects?.map((item, index) => (
            
            /*Single project card*/
            <div key={index} className="projects--section--card">
                
                {/*Project image*/}
                <div className="projects--section--img">
                    <img src={item.src} alt={item.title} /> 
                </div>

                {/*Project title, description, and GitHub link*/}
                <div className="projects--section--card--content">

                  {/*Project title*/}
                  <h3 className="projects--section--title">{item.title}</h3>

                  {/*Project description*/}
                  <p className="text-md">{item.description}</p>

                {/*Link to specific project on GitHub*/}    
                <a 
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github"
                >
              Visit My GitHub
          </a>
                </div>
            </div>
            ))}
          </div>
        </section>
    );
}