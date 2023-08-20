import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="./eddy.jpeg" alt="Eddy Chen" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Eddy Chen</h1>
      <p>
        I am a Taiwanese student now studing in Japan. Since I love Japan and
        want to stay in Japan for the rest of my life, now I am working hard to
        learn Japanese and pursue my dream of becoming a front-end enginner.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="👌" color="blue" />
      <Skill skill="JavaScript" emoji="🤞" color="orangered" />
      <Skill skill="React" emoji="🐣" color="red" />
      <Skill skill="Adobe Illustrator" emoji="👍" color="green" />
      <Skill skill="Adobe Photoshop" emoji="👌" color="grey" />
      <Skill skill="Figma" emoji="👌" color="purple" />
      <Skill skill="Graphic Design" emoji="👍" color="pink" />
      <Skill skill="Web Design" emoji="👌" color="cyan" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
