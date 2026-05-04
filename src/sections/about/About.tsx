import SectionTitle from "../../component/common/section-title/SectionTitle"
import "./About.css"

const About = () => {
  return (
    <section className="about">
      <div id="about" className="about-container">
        <div className="about-content">
          <SectionTitle className="about-title">About Me</SectionTitle>
          <p className="about-text">
            Hi, I'm Fadila Razhya, but you can call me Acha. I'm a junior
            frontend web developer passionate about crafting clean,
            user-friendly interfaces. I'm continuously learning and improving,
            especially in building seamless and accessible web experiences.
          </p>
          <p className="about-text">
            UI/UX design also excites me—I love exploring ways to make digital
            products not just functional, but visually engaging. Always eager to
            grow, I'm excited to keep refining my skills.
          </p>
          <p className="about-text">
            And when I'm not coding, you'll probably find me buried in Japanese
            literature or vibing to Seventeen as a proud Carat!
          </p>
        </div>
        <div className="about-image-wrapper">
          <div className="about-image-container">
            <div className="about-image-overlay">
              <img
                className="about-image"
                src="./img/cha.jpg"
                alt="Acha"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About