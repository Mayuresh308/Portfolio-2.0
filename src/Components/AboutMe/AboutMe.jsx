import myImage from "../../assets/images/naruto.png"
import "./AboutMe.css"

function AboutMe() {
    const d = new Date 
    let years = d.getFullYear() - 2021
  return (
    <section className="about">
        <div className="about-me-inner">
            <h1 id="about">ABOUT ME</h1>

            <div className="about-me-container">
                <img src={myImage} alt="image" />

                <div className="about-me-text-content">
                    <p>
                    Hii my name is Mayuresh Devadkar <br />
                    I am a Mechanical Engineering graduate turned passionate web developer with expertise in the MERN stack (HTML, CSS, JavaScript, React, Node.js, MongoDB, Express.js). After completing a Full Stack Development course at Coding Ninja, I worked on projects like a social media application, a real estate platform, and a responsive todo app, applying my skills to real-world scenarios. I thrive in collaborative, fast-paced environments and aim to create impactful, user-friendly web solutions while continuously enhancing my expertise in full-stack development.
                    </p>

                    <a href="mailto:mayureshmayuresh56@gmail.com" target="_blank"><button>Send me a message</button></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe