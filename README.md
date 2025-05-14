# 📋 Listado de Proveedores - Proyecto Minero

Este proyecto es una aplicación web desarrollada con **React** en el frontend y **Node.js + Express** en el backend. Está diseñada para gestionar un listado de proveedores, con una interfaz visual sobria y sencilla para dar versatilidad a la navegación. La información se almacena en una base de datos **MongoDB**, utilizando **Mongoose** para su manipulación.

---

## 🚀 Tecnologías Utilizadas

### Frontend
- React
- React Router
- Axios
- CSS 

### Backend
- Node.js
- Express
- MongoDB (con Mongoose)

---

## 📁 Estructura del Proyecto

```
/frontend
  ├── public
  ├── src
  │   ├── components
  │   ├── pages
  │   ├── App.jsx
  │   ├── index.js
  │   └── styles
  │       └── mining-theme.css
/backend
  ├── models
  ├── routes
  ├── controllers
  └── server.js
```

---

## 🔧 Funcionalidades

- ✅ Visualización del listado de proveedores  
- ✅ Alta de nuevos proveedores  
- ✅ Edición de proveedores existentes  
- ✅ Eliminación de proveedores  
- ✅ Validaciones básicas de formularios  
- ✅ Rutas privadas protegidas mediante autenticación  
- ✅ Interfaz visual con temática minera

El sistema de autenticación permite a los usuarios registrarse e iniciar sesión. Una vez autenticado, el usuario accede a una tarjeta con opciones para agregar un nuevo proveedor o visualizar el listado completo. Desde esta lista se pueden editar o eliminar los proveedores registrados.

---

## 🌐 Endpoints del Backend

- `GET /api/data` → Listar todos los proveedores  
- `GET /api/data/:id` → Obtener un proveedor por ID  
- `POST /api/data` → Crear un nuevo proveedor  
- `PUT /api/data/:id` → Actualizar un proveedor existente  
- `DELETE /api/data/:id` → Eliminar un proveedor  

---

## 🛠️ Instalación y Uso

### Backend

```bash
cd backend
npm install
npm run dev
```
Dependencias utilizadas: Mongoose y Zod

### Frontend

```bash
cd frontend
npm install
npm start
```

Dependencias utilizadas: React-Router-Dom / Axios / React-icons / react-toastify

> Los puertos donde funciona la aplicación pueden ser definidos en el archivo de configuracion .env; asi como tambien la clave de la encriptación.

---

## 🧩 Base de Datos (MongoDB)

Se utilizan dos colecciones principales:

- **Users**: para la gestión de usuarios y autenticación  
- **Datas**: para almacenar la información de los proveedores  

---

## 🔮 Posibles Mejoras Futuras

Se planea incorporar un sistema de roles y permisos, para permitir que algunos usuarios solo puedan consultar proveedores, mientras que otros con mayor nivel puedan editarlos, agregarlos o eliminarlos.

---

## 🙋 Autor

- 👷 **Mauricio Sinelli**  
- 💼 Estudiante  
- 📧 sinellimauricio@gmail.com

---

## 📄 Licencia

Este proyecto está licenciado bajo los términos de la **ISC License**.

