# Aplicación Backend: Backend Avanzado II

Este proyecto es una aplicación backend que implementa diversas tecnologías modernas, tales como **Express**, **MongoDB**, **Handlebars**, **Mongoose**, **JSON Web Token (JWT)**, **bcrypt** y **Passport**. La aplicación está basada en un **CRUD de usuarios**, donde se permite a los usuarios **registrarse**, **iniciar sesión** y **cerrar sesión**.

## Tecnologías Utilizadas

- **Express:** Framework de Node.js para crear el servidor.
- **MongoDB:** Base de datos NoSQL para almacenar la información de los usuarios.
- **Handlebars:** Motor de plantillas para renderizar las vistas.
- **Mongoose:** ODM (Object Data Modeling) para MongoDB, que permite modelar los datos de la aplicación.
- **JSON Web Token (JWT):** Para la autenticación de usuarios mediante tokens.
- **bcrypt:** Para encriptar las contraseñas de los usuarios.
- **Passport:** Middleware para la autenticación de usuarios.

## Funcionalidades Principales

1. **Registro de Usuario:**  
   Los usuarios pueden registrarse proporcionando su información básica (nombre, correo electrónico y contraseña). Las contraseñas se almacenan de forma segura utilizando **bcrypt** para encriptarlas.

2. **Inicio de Sesión:**  
   Los usuarios pueden iniciar sesión proporcionando su correo y contraseña. Si las credenciales son correctas, se genera un **JWT** que se almacena en una cookie para validar las futuras peticiones del usuario.

3. **Cierre de Sesión:**  
   Los usuarios pueden cerrar sesión eliminando la cookie que contiene el token JWT.

4. **Protección de Rutas:**  
   Algunas rutas están protegidas y solo se puede acceder a ellas si el usuario está autenticado. Esto se logra verificando el **JWT** almacenado en la cookie.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Martin-Domenech/Backend2-Preentrega1.git

2. Instala las dependencias necesarias:

   ```bash
   npm install

3. Configura las variables de entorno (en el archivo .env.example estan las variables de entorno)

4. Ejecuta la aplicación:

    ```bash
    npm start


## Endpoints Principales

- `POST /api/sessions/register`: Registro de usuarios.
- `POST /api/sessions/login`: Inicio de sesión.
- `POST /api/sessions/logout`: Cierre de sesión.
- `GET /current`: Ruta protegida que devuelve los datos del usuario autenticado.

## Vistas

El proyecto utiliza **Handlebars** para renderizar las vistas del frontend:

- `login.hbs`: Formulario de inicio de sesión.
- `register.hbs`: Formulario de registro de usuarios.
- `profile.hbs`: Página de perfil de usuario donde se puede ver la información del usuario autenticado.