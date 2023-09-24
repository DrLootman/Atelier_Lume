const backendUrl = import.meta.env.VITE_BACKEND_URL;

export function restoreUser() {
  const token = localStorage.getItem("token");

  if (token) {
    fetch(`${backendUrl}/api/verifyToken`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      if (!data.valid) {
        localStorage.removeItem("token")
      }
    })
    .catch(err => {
      console.error("Error while validating the token: ", err);
    })
  }
}