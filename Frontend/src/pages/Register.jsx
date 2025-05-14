import { API } from "../api/apiInstance"
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()
    setMessage("")

    try {
      const res = await API.post("/auth/register", { username, password })
      console.log(res)
      toast.success("Usuario registrado con éxito")
      setUsername("")
      setPassword("")
    } catch (err) {
      const error = err.response?.data?.error
      const finalMsg = Array.isArray(error)
        ? error.map(e => e.message).join(" | ")
        : error || "Error al registrar"
      setMessage(finalMsg)
      toast.error(finalMsg)
    }
  }

  return (
    <>
      <form onSubmit={handleRegister} className="form">
        <h2>Registro</h2>

        <div className="form-group">
          <label htmlFor="reg-username">Usuario</label>
          <input
            id="reg-username"
            type="text"
            placeholder="Ingresá un nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="reg-password">Contraseña</label>
          <input
            id="reg-password"
            type="password"
            placeholder="Ingresá una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Registrar</button>

        {message && <p className="error">{message}</p>}
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  )
}

export default Register