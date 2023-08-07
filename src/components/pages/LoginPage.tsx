import { useState } from "react";
import { UserDataI } from "../../utils/interfaces/interfaces";
import { useToasts } from "../toast/ToastContext";

export default function LoginPage() {
  const { pushToast } = useToasts();
  const [userData, setUserData] = useState<UserDataI>({
    email: "",
    password: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData((prevUserData) => ({
      ...userData, [e.target.name]: e.target.value
    }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetch("http://localhost:8000/api/admin/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then((res) => res.json())
      .then(({ token }) => {
        if (!token) {
          console.log("J'attends un toast")
          pushToast({
            type: "danger",
            title: "Erreur",
            content: "Les données renseignées sont invalides",
            duration: 3
          })
        }

        localStorage.setItem("token", token);

        setUserData({
          email: "",
          password: ""
        })
      })
  }

  return (
    <main className="login-page">
      <section aria-label="login section">
        <img
          src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Interior design"
        />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input 
              type="text" 
              name="email" 
              value={userData.email} 
              placeholder="Email" 
              onChange={handleChange}
            />
          </label>
          <label>
            <input 
              type="password" 
              name="password" 
              value={userData.password} 
              placeholder="Mot de passe"
              onChange={handleChange}
            />
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </main>
  );
}
