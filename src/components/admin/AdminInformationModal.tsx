import { useEffect, useState } from "react";
import { OptionSelectorI, AdminInformationModalProps, PersonnalInfosI } from "../../utils/interfaces/interfaces";
import AdminProfilePhoto from "./AdminProfilePhoto";
import { useConfirm } from "../confirmModal/ConfirmContext";
import { useToasts } from "../toast/ToastContext";
import useGet from "../../utils/useGet";

export default function AdminInformationModal({ options }: AdminInformationModalProps): JSX.Element {
  const [mySelectedOption, setMySelectedOption] = useState("");
  const [photoUpdated, setPhotoUpdated] = useState<boolean>(false);
  const [profilePhoto, setProfilePhoto] = useState<PersonnalInfosI[]>([]);
  const [mySelectedFile, setMySelectedFile] = useState<undefined>(undefined);

  const { confirm } = useConfirm();
  const { pushToast } = useToasts();

  function handleClick(e: React.ChangeEvent<HTMLSelectElement>) {
    setMySelectedOption(e.target.value);
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

  useGet("api/personnalInfos", setProfilePhoto);

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
          profilePhoto={profilePhoto}
          setProfilePhoto={setProfilePhoto}
          photoUpdated={photoUpdated}
        />
      }
    </section>
  )
}