import { useState, useContext } from "react";
import { TokenDecodedI, UserDataI } from "../../utils/interfaces/interfaces";
import { useToasts } from "../toast/ToastContext";
import { UserContext } from "../contexts/UserContext";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const { pushToast } = useToasts();

  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext not properly initialized");
  }

  const { setUser } = userContext;

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
          pushToast({
            type: "danger",
            title: "Erreur",
            content: "Les données renseignées sont invalides",
            duration: 3
          })
        }

        const decoded = jwt_decode<TokenDecodedI>(token);

        localStorage.setItem("token", token);
        setUser(decoded.payload);

        setUserData({
          email: "",
          password: ""
        })
      })
      .then(() => {
        pushToast({
          type: "success",
          title: `Bonjour Camille !`,
          content: "Les données renseignées sont valides",
          duration: 5
        })
        setTimeout(() => {
          navigate("/")
        }, 5000)
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
