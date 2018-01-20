import React, { Component } from "react";
import brackets from "./icons/brackets.svg";
import photoshop from "./icons/photoshop.svg";
import illustrator from "./icons/illustrator.svg";
import css from "./icons/css.svg";
import html5logo from './icons/html5logo.svg';
import './Skill.css'

class Skill extends Component {
  render() {
      return <div className="container">
          <h2>Skills</h2>
          <h4 className="">These are some dope skillz that I haz</h4>
          <div className="skills-container">
            <div className="skill">
              <div className="icon-holder">
                <img src={brackets} alt="" className="icon" />
              </div>
              <h4 className="heading">This is my Skill</h4>
              <p className="description">
                A elementum ligula lacus ac quam ultrices a scelerisque
              </p>
            </div>
            <div className="skill">
              <div className="icon-holder">
                <img src={photoshop} alt="" className="icon" />
              </div>
              <h4 className="heading">This is my Skill</h4>
              <p className="description">
                A elementum ligula lacus ac quam ultrices a scelerisque
              </p>
            </div>
            <div className="skill">
              <div className="icon-holder">
                <img src={illustrator} alt="" className="icon" />
              </div>
              <h4 className="heading">This is my Skill</h4>
              <p className="description">
                A elementum ligula lacus ac quam ultrices a scelerisque
              </p>
            </div>
            <div className="skill">
              <div className="icon-holder">
                <img src={css} alt="" className="icon" />
              </div>
              <h4 className="heading">This is my Skill</h4>
              <p className="description">
                A elementum ligula lacus ac quam ultrices a scelerisque
              </p>
            </div> <div className="skill">
              <div className="icon-holder">
                <img src={html5logo} alt="" className="icon" />
              </div>
              <h4 className="heading">This is my Skill</h4>
              <p className="description">
                A elementum ligula lacus ac quam ultrices a scelerisque
              </p>
            </div>
            <div className="skill">
              <div className="icon-holder">
                <img src={brackets} alt="" className="icon" />
              </div>
              <h4 className="heading">This is my Skill</h4>
              <p className="description">
                A elementum ligula lacus ac quam ultrices a scelerisque
              </p>
            </div>
          </div>

          <div class="footer">
            Icons made by <a href="http://www.freepik.com" title="Freepik">
              Freepik
            </a> from <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">
              CC 3.0 BY
            </a>
          </div>
        </div>;
  }
}

export default Skill;
      
