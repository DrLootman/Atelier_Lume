export default function LoginPage() {
  return (
    <main className="login-page">
      <section aria-label="login section">
        <img
          src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Interior design"
        />
        <form>
          <label htmlFor="email">
            <input type="text" name="email" placeholder="Email" />
          </label>
          <label>
            <input type="password" name="password" placeholder="Mot de passe" />
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </main>
  );
}
