import { useState } from "react";
import SkillList from "./SkillList.jsx";
import NewSkillForm from "./NewSkillForm.jsx";
import "./App.css";

const mySkills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 }
];

export default function App() {
  const [skills, setSkills] = useState(mySkills);
    
  function addSkill(skill) {
    setSkills([...skills, skill]);
  }
  return (
    <div className="App teal-text padding-0">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}