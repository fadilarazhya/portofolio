import SectionTitle from "../../component/common/section-title/SectionTitle"
import SectionDescription from "../../component/common/section-description/SectionDescription"
import Button from "../../component/common/button/Button"
import "./Contact.css"

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <SectionTitle>Get in Touch</SectionTitle>
                <SectionDescription>
                    I'm currently open to new opportunities, and my inbox is always open.
                    Feel free to reach out—whether you have a question or just want to say
                    hi, I'll do my best to respond!
                </SectionDescription>
                <Button href="mailto:fadilarazhya03@gmail.com" variant="outline">
                    Say Hello
                </Button>
            </div>
        </section>
    )
}

export default Contact