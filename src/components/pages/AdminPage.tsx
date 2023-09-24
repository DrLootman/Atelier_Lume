import AdminButton from "../admin/AdminButton";
import { useState } from "react";
import { adminParts, personnalInformations } from "../../utils/samples";
import { AdminSectionI, AdminInformationModalProps } from "../../utils/interfaces/interfaces";
import AdminInformationModal from "../admin/AdminInformationModal";
import PrestationHeader from "../HeaderTitle";

export default function AdminPage() {
  const [buttonClicked, setButtonClicked] = useState<string>("")

  function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
    if (!buttonClicked) {
      setButtonClicked(e.target.name)
    } else {
      setButtonClicked("");
    }
  }

  return (
    <main className="admin_page">
      <PrestationHeader title={"Panel administrable"}/>

      <AdminButton 
        adminButton='Section "Informations Personnelles"' 
        handleClick={handleClick} />

      {buttonClicked === 'Section "Informations Personnelles"' &&
        <AdminInformationModal options={personnalInformations} />
      }
    </main>
  )
}