import { AdminButtonI, AdminSectionI } from "../../utils/interfaces/interfaces";

export default function AdminButton({ adminButton, handleClick }: AdminButtonI ) {
  return (
    <button 
      type="button"
      className="admin-section"
      name={adminButton} 
      onClick={handleClick}
    >
      {adminButton}
    </button>
  )
}