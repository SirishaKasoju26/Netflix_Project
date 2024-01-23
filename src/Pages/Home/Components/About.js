import React from 'react';


const About = ({heading}) => {
  return (
    <>
      <h1 className="heading">{heading}</h1>
      <section className="about">
        <img src={require("../../../Assets/AboutImg.jpg")} alt=""/>

        <div className="content">
          <h2>Enjoy on your TV</h2>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>

          
        </div>

        
      </section>
    </>

  )
}

export default About