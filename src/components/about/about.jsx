import React from "react"
import { AboutShowCase } from "../showcase/showcase"
import Header from "../main/main_header"
import { SocialIcon } from "react-social-icons"
import styles from '../../stylesheets/root.scss'

const About = props => (
  <>
    {!props.component ? 
    <header>
      <Header />
      <div id="pagespacer"></div>
    </header> : <div id="pagespacer"></div>}
    <div id='lowerwrapper' className={!props.component ? 'page' : 'component'}>
      <h2 id='aboutadrian'>About Adrian</h2>
      <div className="about-wrap">
        <section id="img-txt">
          <div id='imgdiv'>
            <img src="https://www.gravatar.com/avatar/c9e419e9130716352aa68a35c275fa39?s=300" alt="Adrian's Gravatar" />
            <div id='socialabout'>
              <div id="socialicon">
                <SocialIcon url="https://github.com/darothmedia" bgColor={styles.tc} style={{ width: 35, height: 35, margin: 0, marginRight: 8 }} />
              </div>
              <div id="socialicon">
                <SocialIcon url="https://www.linkedin.com/in/adrian-rothschild/" bgColor={styles.tc} style={{ width: 35, height: 35, margin: 0, marginRight: 8 }} />
              </div>
              <div id="socialicon">
                <SocialIcon url="https://angel.co/u/adrian-rothschild" bgColor={styles.tc} style={{ width: 35, height: 35, margin: 0 }} />
              </div>
            </div>
          </div>
          <div id='txtdiv'>
            <p>
              I am a Full-Stack Software Engineer, Product Manager, and award-winning creative in digital media.
              I have worked on top rated shows & apps for Nickelodeon, MTV, Paramount+,
              and Amazon Kids, produced immersive games available on mobile and voice devices,
              and pitched creative for prototype digital & physical products that span several
              emerging technologies.
              <br />
              <br />
              I have experience in JavaScript, Ruby, C#, TypeScript, React, Redux, Rails, 
              Node.JS, Express.js, Unity, PostgreSQL, SQLite, MongoDB, Axios, 
              Cheerio, Websockets, Webhooks, Flux, HTML, CSS, SASS / SCSS, RSpec, 
              Mongoose, Git, GitHub, Webpack, jQuery, Object Oriented Programming (OOP), 
              and other languages & frameworks.
              <br />
              <br />
              Throughout my career in media, I have worked with several nonprofits, charities,
              and schools. I currently volunteer with the Children's Media Association,
              a non-profit bringing together the children's media community through
              networking events, mentorship, regional job boards and creative partnerships
              in NYC, LA, and the Bay Area.
              <br />
              <br />
              I am always open to new concepts, fresh inspiration, and good conversation.
              I thrive on creative energy and big ideas.
            </p>

          </div>
        </section>
      </div>
      <AboutShowCase />
    </div>
  </>
)

export default About