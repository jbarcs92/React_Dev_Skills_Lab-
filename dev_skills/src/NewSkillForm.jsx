

export default function NewSkillForm() {
    return (
        <form>
            <label>Skill
                <input type="text" />
            </label>
            <label>Level
                <select>
                    <option value="1">1</option>
                    <option value="2">1</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <button type="submit">ADD SKILL</button>
        </form>
    );
}