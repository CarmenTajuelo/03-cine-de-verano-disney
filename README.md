# 🎬 Disney Summer Cinema

Un proyecto mágico de cine de verano para gestionar películas Disney con estilo y encanto.

## ✨ Características

- **Diseño inspirado en Disney**: Colores vibrantes, animaciones suaves y una estética mágica
- **Header atractivo**: Con logo animado, título con efecto dorado brillante y fondo con patrón de estrellas
- **Navbar funcional**: Navegación sticky con indicador visual del elemento activo
- **Footer personalizado**: Con información del proyecto y créditos educativos
- **Gestión completa de películas**: Crear, leer, actualizar y eliminar películas
- **Interfaz responsive**: Adaptable a dispositivos móviles, tablets y escritorio
- **Animaciones encantadoras**: Efectos visuales que dan vida a la aplicación
- **Scroll suave**: Navegación fluida entre secciones

## 🎨 Características del diseño

### Header
- Degradado azul-morado con efecto de patrón animado
- Logo de película con animación flotante
- Título "Disney" con efecto de brillo dorado
- Subtítulo elegante con estrellas

### Navbar
- Menú de navegación sticky que permanece visible al hacer scroll
- Indicador visual del elemento activo
- Iconos emoji para cada sección
- Efectos hover con gradientes y transformaciones
- Responsive: se convierte en menú vertical en móviles

### Secciones
- **Películas**: Grid responsive de tarjetas con hover 3D
- **Añadir Película**: Formulario estilizado con validación
- **Sobre el Proyecto**: Información y stack tecnológico

### Footer
- Diseño profesional con degradado
- Borde superior en color mint green
- Información del proyecto y créditos
- Tipografía Segoe UI como especificado
- Reconocimiento a Mari Carmen y Femcoders - Factoría F5

## 📂 Estructura de archivos

```
proyecto/
├── index.html          # Estructura HTML con header, nav y footer
├── style.css           # Estilos CSS completos con tema Disney
├── src/
│   └── services.js     # Lógica JavaScript para el CRUD
└── README.md          # Este archivo
```

## 🚀 Cómo usar

1. **Estructura de carpetas**:
   ```
   tu-proyecto/
   ├── index.html
   ├── style.css
   ├── src/
   │   └── services.js
   ```

2. **Iniciar el servidor backend**:
   - Asegúrate de tener un servidor JSON corriendo en `http://localhost:3000/films`
   - Puedes usar `json-server` con el siguiente comando:
     ```bash
     json-server --watch db.json --port 3000
     ```

3. **Abrir la aplicación**:
   - Abre `index.html` en tu navegador
   - O utiliza un servidor local como Live Server de VS Code

4. **Funcionalidades disponibles**:
   - **Ver películas**: Se cargan automáticamente al iniciar
   - **Crear película**: Rellena el formulario y haz clic en "Crear Película"
   - **Editar película**: Haz clic en "Editar" en cualquier tarjeta
   - **Eliminar película**: Haz clic en "Eliminar" (se pedirá confirmación)
   - **Navegación**: Usa el menú superior para moverte entre secciones

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animaciones, Gradientes)
- JavaScript ES6+ (Async/Await, Fetch API, DOM Manipulation)
- Google Fonts (Poppins, Quicksand, Segoe UI)

## 🎭 Elementos visuales

- **Header animado** con degradado azul-morado y patrón de estrellas
- **Navbar sticky** con navegación activa y efectos hover
- **Tarjetas de película** con efectos hover 3D y bordes coloridos
- **Formulario estilizado** con bordes redondeados, sombras y emoji flotante
- **Botones interactivos** con gradientes y animaciones
- **Footer profesional** con borde superior mint green
- **Decoraciones**: Estrellas parpadeantes, brillos y emojis animados
- **Scroll suave**: Transiciones fluidas al navegar

## 📱 Responsive

El diseño se adapta perfectamente a:
- 📱 Móviles pequeños (< 480px)
- 📱 Móviles y tablets (< 768px)
- 💻 Escritorio (> 768px)

### Adaptaciones responsivas:
- Navbar se convierte en vertical en móviles
- Grid de películas pasa a 1 columna
- Tamaños de fuente ajustados
- Espaciados optimizados
- Botones se apilan en pantallas pequeñas

## 🌟 Paleta de colores

- **Azul Disney**: #0063D3
- **Azul claro**: #4A9EE0
- **Púrpura**: #6B5B95
- **Dorado**: #FFD700
- **Rosa**: #FF69B4
- **Mint Green**: #4ECDC4 (footer)
- **Fondos**: Gradientes pastel suaves

## 📝 Notas técnicas

- La aplicación requiere un servidor backend activo en el puerto 3000
- Los datos se almacenan en la base de datos del servidor (JSON Server)
- Las animaciones están optimizadas para rendimiento
- El diseño prioriza la experiencia de usuario
- La navegación activa se actualiza automáticamente con el scroll
- Los formularios incluyen validación HTML5
- Scroll suave implementado con `scroll-behavior: smooth`

## 👩‍💻 Créditos

**Proyecto realizado por Mari Carmen**  
Para el Bootcamp Fullstack (Femcoders – Factoría F5)

Todos los contenidos tienen fines educativos y de divulgación.

## 🎉 ¡Disfruta de la magia Disney!

Donde los sueños se hacen realidad ✨

---

© 2025 Disney Summer Cinema