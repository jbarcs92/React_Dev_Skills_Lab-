import SkillList from "./SkillList.jsx";
import NewSkillForm from "./NewSkillForm.jsx";
import "./App.css";

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

export default function App() {
  return (
    <div className="App teal-text padding-0">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr></hr>
      <NewSkillForm />
    </div>
  );
}