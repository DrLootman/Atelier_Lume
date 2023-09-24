import { FormDataI } from "../utils/interfaces/interfaces";
import { FormEvent, ChangeEvent } from "react";

type PropsI = {
  handleChangeFields: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  formData: FormDataI;
}

export default function ContactForm({ handleChangeFields, handleSubmit, formData }: PropsI) {
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Votre nom :</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          onChange={handleChangeFields}
          value={formData.name}
          autoComplete="off" 
          required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Votre adresse email :</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          onChange={handleChangeFields}
          value={formData.email}
          autoComplete="off" 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Votre besoin :</label>
        <textarea 
          id="message" 
          name="message" 
          onChange={handleChangeFields}
          value={formData.message}
          autoComplete="off" 
          required 
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  )
}