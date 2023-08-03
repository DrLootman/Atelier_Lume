export default function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Votre nom :</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Votre adresse email :</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Votre besoin :</label>
        <textarea id="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  )
}