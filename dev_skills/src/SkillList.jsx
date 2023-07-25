import SkillListItem from "./SkillListItem";
import "./SkillList.css";

export default function SkillList({ skills }) {
    return (
      <ul className="SkillList">
        {skills.map((t, idx) => <SkillListItem skill={t} key={idx} />)}
      </ul>
    );
  }