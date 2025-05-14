# 📋 Listado de Proveedores - Proyecto Minero

Este proyecto es una aplicación web desarrollada en **React** con un backend en **Node.js + Express**, diseñada para gestionar un listado de proveedores con una temática visual inspirada en la industria minera.

## 🚀 Tecnologías Utilizadas

### Frontend
- React
- React Router
- Axios
- CSS personalizado con temática minera

### Backend
- Node.js
- Express
- MongoDB (a través de Mongoose)

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
  ├── server.js
```

## 🔧 Funcionalidades

- ✅ Ver listado de proveedores
- ✅ Crear nuevo proveedor
- ✅ Editar proveedor existente
- ✅ Eliminar proveedor
- ✅ Validaciones básicas
- ✅ Protección de rutas privadas
- ✅ Interfaz visual adaptada a la temática minera

## 🌐 Endpoints del Backend

- `GET /api/data`: Listar todos los proveedores
- `GET /api/data/:id`: Obtener un proveedor por ID
- `POST /api/data`: Crear proveedor
- `PUT /api/data/:id`: Actualizar proveedor
- `DELETE /api/data/:id`: Eliminar proveedor

## 🛠️ Instalación y Uso

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

> Asegúrate de que el backend se ejecuta en `http://localhost:2222` (o actualiza `axios` en el frontend si usas otro puerto).

## 🎨 Tema Visual

El diseño está inspirado en entornos industriales/mineros:
- Colores oscuros y terrosos
- Iconografía relacionada con minería
- Layout simple con enfoque en funcionalidad

## 🙋 Autor

- 👷 Mauricio Sinelli
- 💼 Estudiante
- 📧 sinellimauricio@gmail.com

## 📄 Licencia

Este proyecto está bajo la licencia ISC.
