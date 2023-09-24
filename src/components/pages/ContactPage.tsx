import ContactForm from "../ContactForm";
import { useToasts } from "../toast/ToastContext";
import { useState } from "react";
import { FormDataI } from "../../utils/interfaces/interfaces";
import Joi from 'joi';
import DOMPurify from 'dompurify';

const schema = Joi.object({
  name: Joi.string().required().pattern(new RegExp(/^[A-Za-z]+$/)).min(3).max(15),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  message: Joi.string().required(),
});

export default function ContactPage() {
  const { pushToast } = useToasts();
  const [formData, setFormData] = useState<FormDataI>({
    name: "",
    email: "",
    message: ""
  });

  function handleChangeFields(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prevFormData) => ({
      ...prevFormData, [e.target.name]: e.target.value
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cleanedMessage = DOMPurify.sanitize(formData.message);

    const { error } = schema.validate({
      ...formData,
      message: cleanedMessage,
    });

    if (error) {
      pushToast({
        type: "danger",
        title: "Validation échouée !",
        content: "Veuillez remplir le formulaire correctement.",
        duration: 7
      });
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        pushToast({
          type: "success",
          title: "Envoi réussi !",
          content: "Votre email a bien été envoyé !",
          duration: 7
        });

        // Réinitialisez le formulaire
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        throw new Error('Échec de la requête HTTP');
      }
    } catch (error) {
      pushToast({
        type: "danger",
        title: "Echec de l'envoi !",
        content: "Une erreur est survenue lors de l'envoi !",
        duration: 7
      });
    }
  }

  return (
    <main>
      <section className="contact-page">
        <ContactForm 
          handleSubmit={handleSubmit}
          handleChangeFields={handleChangeFields}
          formData={formData}
        />
      </section>
    </main>
  )
}