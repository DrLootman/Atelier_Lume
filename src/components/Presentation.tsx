// import avatar from "../assets/Profile_Img.jpg";

import { PersonnalInfosI } from "../utils/interfaces/interfaces";

function Presentation({ photo_url, profile_paragraph }: PersonnalInfosI) {
  return (
    <section className="presentation">
      <img src={`${import.meta.env.VITE_BACKEND_URL}/${photo_url}`} alt="avatar" />
      <p>{profile_paragraph}</p>
    </section>
  );
}

export default Presentation;
