import { PersonnalInfosI } from "../../utils/interfaces/interfaces";

type PropsI = {
  profileInfos: PersonnalInfosI[];
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
}

export default function AdminProfileParagraph({ profileInfos, handleChange, handleSubmit }: PropsI) {
  return (
    <div className="admin_information_modal_paragraph">
      <textarea
        name="profile_paragraph"
        value={profileInfos[0].profile_paragraph}
        onChange={handleChange}>
      </textarea>

      <button
        type="submit"
        onClick={handleSubmit}
      >
        Modifier
      </button>
    </div>
  )
}