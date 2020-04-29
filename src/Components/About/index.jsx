import React from 'react';
import './About.scss';
import WhiteboardLg from '../WhiteboardLg';
import WhiteboardMd from '../WhiteboardMd';
import WhiteboardSm from '../WhiteboardSm';
import profilePic from "../../images/profile/david_profile_pic_square_800.jpg";

function About() {
  return (
    <WhiteboardLg className="About">
      <div className="About-profile-image-container">
        <img  src={profilePic} alt="headshot of david sommers" height="800px" width="800px"/>
      </div>
      <WhiteboardMd >
        <WhiteboardSm id="wb-1">
          <h3>What do I do?</h3>
          <p>I'm a software engineer based in the San Francisco Bay Area.
            I love creating cleanly coded, well tested, buttery smooth web apps.
            My go to tech stack is React, Node / Express, and PostgreSQl. I've also
            built apps with Python / Flask as well as Ruby on Rails.
          </p>
        </WhiteboardSm>
        <WhiteboardSm id="wb-3">

          <p>This is board 3</p>
        </WhiteboardSm>
      </WhiteboardMd>
      <WhiteboardMd id="wbh-2">
        <WhiteboardSm id="wb-2">
          <h3>What have I done?</h3>
          <p>I studied humanities at Pepperdine to explore the big ideas.
            Graduated Summa Cum Laude. Then, in search of an adventure, an opportunity to help people, and a secure career path,  I became an EMT. Say what? Yeah. First, I worked on an ambulance, then in SF General's emergency department. Along the way, I had the privilege of working with tons of awesome people.
          </p>
          <p>
          Then, in search of passion, I looked into software engineering. Did some self-study to confirm I loved it, then dove into Rithm School's full stack immersive bootcamp. Towards the end, I got an internship with JumpOffCampus, overhauling a decade-old Ruby on Rails site from v2 to v5 and incorporating React into the frontend.
          </p>
          <p>
          Now, I'm on the hunt for new coding opportunities!
          </p>
          {/* <p>
            I was climbing the ladder to become a nurse, but was yearning for a career I intrinsically enjoyed. Computer science had always seemed intriguing, so I gave some free online courses a shot and loved it! Thus, this time in pursuit of passion, I became a software engineer.
          </p>
          <p>
            I went to Rithm's full stack immersive bootcamp in SF, focusing on JavaScript, Python, Flask, Node, Express, PostgreSQL, React, and data structures / algorithms.
          </p>
          <p>  
            Towards the end of Rithm, I had the privilege of interning with JumpOffCampus, Inc, helping to overhaul the nearly decade old website from Ruby on Rails v2 to v5 and incorporating React into the frontend. Given that Ruby on Rails was new to me, it was exciting to see I could pick up new tech and contribute quickly to an existing codebase.
          </p>
          <p>
            Now I'm on the hunt for new opportunities in software engineering. 
          </p> */}
        </WhiteboardSm>
        <WhiteboardSm id="wb-4">
          <h3>What else do I do?</h3>
          <p>
            I enjoy playing basketball and volleyball, particularly the dunking and spiking parts. 
            I enjoy lifting weights. 
            I am a board game enthusiast (and have been known to dabble in the video type as well). 
            I enjoy escape rooms. 
            I enjoy ice cream.
            And I enjoy being a husband.
          </p>
        </WhiteboardSm>
      </WhiteboardMd>
    </WhiteboardLg>
  )
}

export default About;