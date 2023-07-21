import SkillListItem from "./SkillListItem";
import "./SkillList.css";

export default function SkillList({ skills }) {
    return (
      <ul className="SkillList">
        {skills.map(t => <SkillListItem skill={t} />)}
      </ul>
    );
  }