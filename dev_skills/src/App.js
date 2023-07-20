import "./App.css";
import SkillList from "./SkillList.jsx";
import NewSkillForm from "./NewSkillForm.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr></hr>
      <NewSkillForm />
    </div>
  );
}