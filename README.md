# Cine de Verano - Gestión de Películas Disney

Este es un proyecto sencillo de aplicación web para gestionar una lista de películas. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) interactuando con una API local simulada con `json-server`.

## ✨ Funcionalidades

- **Ver listado de películas**: Muestra todas las películas disponibles desde la base de datos.
- **Añadir nueva película**: Permite añadir una nueva película a través de un formulario.
- **Editar película**: Carga los datos de una película en el formulario para poder modificarla.
- **Eliminar película**: Borra una película de la lista.

## 🚀 Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### Prerrequisitos

Asegúrate de tener Node.js y npm instalados.

### Instalación

1.  **Clona el repositorio:**
    ```sh
    git clone https://github.com/CarmenTajuelo/03-cine-de-verano-disney.git
    cd 03-cine-de-verano-disney
    ```

2.  **Instala `json-server`** (si no lo tienes ya):
    ```sh
    npm install -g json-server
    ```

3.  **Inicia el servidor de la API:**
    En la terminal, dentro de la carpeta del proyecto, ejecuta:
    ```sh
    json-server --watch server/db.json
    ```
    Esto iniciará un servidor local en `http://localhost:3000`.

4.  **Abre la aplicación:**
    Abre el archivo `index.html` en tu navegador web. ¡Y listo!

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- json-server
