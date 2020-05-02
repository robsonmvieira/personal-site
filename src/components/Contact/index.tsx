import React from 'react'
import { Container } from './styles'

const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <h2>Contact Me</h2>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="" id="name" placeholder="Your name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Your email" />
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input type="text" name="" id="subject" placeholder="Your Subject" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            cols={30}
            rows={10}
            id="message"
            placeholder="Your Message"
          />
        </div>
        <button type="button">Send Message</button>
      </form>
    </Container>
  )
}
export default Contact
