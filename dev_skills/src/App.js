import { useState } from "react";
import SkillList from "./SkillList.jsx";
import NewSkillForm from "./NewSkillForm.jsx";
import "./App.css";

export default function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);
  const [showSkills, setShowSkills] = useState(true);
  return (
    <div className="App teal-text padding-0">
      <h1>React Dev Skills</h1>
      {showSkills && <SkillList skills={skills} />}
      <hr></hr>
      <NewSkillForm />
    </div>
  );
}