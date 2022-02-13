import React from 'react'
import '../css/About.css'
import brand from './svgs/my_image.png'

const About = () => {
  return (
    <>
      <div className="about_container">
        <section>
          <div className="about_image">
            <img
              style={{
                borderRadius: '100%',
                border: '#ffffff 7px solid',
                maxWidth: '60%',
                display: 'block',
                height: 'auto',
              }}
              src={brand}
              alt="Prit dev"
              className="my-logo"
            />
          </div>
          <br />
        </section>
        <section>
          <div>
            <h2>😎 About Me</h2>
            <p className="about_body">
              Hi 👋, I'm <span className="hi-code">Preet Suthar</span>. I've
              been building websites for over five years. I'm 16 years old
              Programmer and
              <strong> constantly</strong> learning new things every day. I've
              learned so many things in the past five years of experience.
              Self-taught developer and no one can stop me from learning 🔥!
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
