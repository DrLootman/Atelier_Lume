import { useEffect, useState } from "react";
import { OptionSelectorI, AdminInformationModalProps, PersonnalInfosI, NewParagraphI } from "../../utils/interfaces/interfaces";
import AdminProfilePhoto from "./AdminProfilePhoto";
import { useConfirm } from "../confirmModal/ConfirmContext";
import { useToasts } from "../toast/ToastContext";
import useGet from "../../utils/useGet";
import AdminProfileParagraph from "./AdminProfileParagraph";

export default function AdminInformationModal({ options }: AdminInformationModalProps): JSX.Element {
  const [mySelectedOption, setMySelectedOption] = useState("");
  const [photoUpdated, setPhotoUpdated] = useState<boolean>(false);
  const [profileInfos, setProfileInfos] = useState<PersonnalInfosI[]>([]);
  const [mySelectedFile, setMySelectedFile] = useState<undefined>(undefined);

  const { confirm } = useConfirm();
  const { pushToast } = useToasts();

  function handleClick(e: React.ChangeEvent<HTMLSelectElement>) {
    setMySelectedOption(e.target.value);
  }

  // function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
  //   setProfileInfos((previousVal) => ({
  //     ...previousVal, [e.target.name]: e.target.value
  //   }))
  // }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const updatedProfileInfos = [...profileInfos];
  
    updatedProfileInfos[0] = { ...updatedProfileInfos[0], profile_paragraph: e.target.value };
  
    setProfileInfos(updatedProfileInfos);
  }

  async function handleSubmit() {
    if (await confirm({ title: "Veux-tu confirmer cette modification ?" })) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/personnalInfos/paragraph`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(profileInfos[0])
      })
        .then(() => {
          pushToast({
            type: "success",
            title: "Opération réussie !",
            content: "Ton paragraphe de présentation a bien été mis à jour !",
            duration: 5
          });

          setTimeout(() => {
            window.location.reload();
          }, 5000);
        })
        .catch((err) => {
          console.error(err);
        })
    }
  }

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return pushToast({
        type: "danger",
        title: "Erreur",
        content: "Aucun fichier n'a été détecté",
        duration: 3
      })
    }

    const data = new FormData();
    data.append("image", e.target.files[0])

    if (await confirm({ title: "Voulez-vous confirmer ?" })) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/upload`, {
        headers: {
          Accept: 'multipart/form-data'
        },
        method: 'POST',
        body: data
      })
        .then(() => {
          pushToast({
            type: "success",
            title: "Opération réussie !",
            content: "Ta photo de profil a bien été mise à jour !",
            duration: 5
          });
          setPhotoUpdated((prev: boolean) => !prev)

          setTimeout(() => {
            window.location.reload();
          }, 5000);
        })
        .catch((err) => {
          console.error(err);
        })
    } else {
      console.log("Ca ne fonctionne pas du tout")
    }
  }

  useGet("api/personnalInfos", setProfileInfos);

  return (
    <section className="admin_information_modal">
      <div className="admin_information_modal_selector">
        <p>Que veux-tu modifier ?</p>
        <select onChange={handleClick}>
          <option>...</option>
          {options?.map((el: OptionSelectorI, index: number) => {
            return (
              <option key={index}>{el.option}</option>
            )
          })
          }
        </select>
      </div>
      {mySelectedOption === "Ma photo de profil" &&
        <AdminProfilePhoto
          handleFile={handleFile}
          profilePhoto={profileInfos}
          setProfilePhoto={setProfileInfos}
          photoUpdated={photoUpdated}
        />
      }
      {mySelectedOption === "Mon paragraphe de présentation" &&
        <AdminProfileParagraph
          profileInfos={profileInfos}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      }
    </section>
  )
}