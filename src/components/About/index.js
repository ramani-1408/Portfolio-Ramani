import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import profileImage from './image.jpeg';
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
         <div className="text-content">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
                I am a machine learning expert, SDE, and web developer with a passion for challenging and diverse projects. 
          I am confident in my skills and am always looking to improve my knowledge and abilities. I am also a curious and open-minded individual who is always willing to try new things.
          looking for a role in an established IT company with the opportunity to work with the latest
          technologies.
          </p>
          <p align="LEFT">
                I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
                If I need to define myself in one sentence that would be a family
            person, a sports fanatic,a singer,photography enthusiast, and tech-obsessed!!!
          </p>
          </div>
          <div>
           <a href="https://drive.google.com/drive/u/0/folders/1pifZ7gL08kCAgWQ5Fc5EeZD-1oJN9Mcz" class="flat-button">MY RESUME</a>
           </div>
        </div> 
        <div className="image-container">
              <img src={profileImage} alt="Profile" className="profile-image" />
            </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
