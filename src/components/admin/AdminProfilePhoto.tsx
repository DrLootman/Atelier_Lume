import { ChangeEvent, Dispatch } from "react";
import useGet from "../../utils/useGet";
import { useState, SetStateAction } from "react";
import { PersonnalInfosI } from "../../utils/interfaces/interfaces";
import Loader from "../loader/Loader";

type HandleFileType = {
  handleFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  profilePhoto: PersonnalInfosI[];
  photoUpdated: boolean;
  setProfilePhoto: Dispatch<SetStateAction<PersonnalInfosI[]>>
}

export default function AdminProfilePhoto({ handleFile, profilePhoto, photoUpdated, setProfilePhoto }: HandleFileType) {
  return (
    <div className="admin_information_modal_photo">
      {!photoUpdated ? (
        <>
          <img src={`${import.meta.env.VITE_BACKEND_URL}${profilePhoto[0]?.photo_url}`} alt="profile picture" />

          <label htmlFor="profile" className="custom-file-label">
            Importer une photo
            <input
              id="profile"
              type="file"
              name="profile"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFile}
            />
          </label>
        </>
      ) : (
        <Loader />
      )
      }
    </div>
  )
}