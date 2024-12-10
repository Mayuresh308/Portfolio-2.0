import email from "../../assets/icons/email-icon.svg" 
import arrow from "../../assets/icons/light-arrow.svg"
import linkdin from "../../assets/icons/linkedin.svg"
import github from "../../assets/icons/github-2-icon.svg"
import "./ContactMe.css"

function ContactMe() {
  return (
    <section className="contact">
        <div className="contact-inner">
            <h1 id="contact">CONTACT ME</h1>

            <div className="contact-container">
                <div className="email">
                    <div className="icon-container">
                        <img src={email} alt="email icon" />
                    </div>

                    <a title="mayureshmayuresh56@gmail.com" href="mailto:mayureshmayuresh56@gmail.com" target="_blank" className="email-link">
                        Send me an email <img src={arrow} alt="arrow" />
                    </a>
                </div>

                <div className="twitter">
                    <div className="icon-container">
                        <img src={linkdin} alt="linkdin" />
                    </div>

                    <a href="http://www.linkedin.com/in/mayuresh-devadkar-874403224" target="_blank" className="twitter-link">
                        Message me on Linkdin <img src={arrow} alt="arrow icon" />
                    </a>
                </div>

                <div className="github">
                    <div className="icon-container">
                        <img src={github} alt="github icon" />
                    </div>

                    <a target="_blank" href="https://github.com/Mayuresh308" className="github-link">
                        Check out my Github<img src={arrow} alt="arrow icon" />
                    </a>
                </div>
            </div>

            <p className="attr">
                Designed by Mayuresh Devadkar
            </p>
        </div>
    </section>
  )
}

export default ContactMe