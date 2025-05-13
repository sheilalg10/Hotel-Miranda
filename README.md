# 🌴 Hotel Miranda — Sitio Web

Este proyecto **Hotel Miranda**, una marca del sector hotelero. El sitio está enfocado en mostrar la oferta del hotel, sus servicios, habitaciones y permitir a los usuarios realizar reservas.

## 🛠️ Tecnologías utilizadas

- **HTML5** – Estructura del contenido.
- **SASS (SCSS)** – Estilos organizados, reutilizables y escalables.
- **JavaScript** – Funcionalidades dinámicas e interactividad.

![HTML](https://img.shields.io/badge/HTML-5-orange?style=for-the-badge&logo=html5) ![SCSS](https://img.shields.io/badge/SCSS-CSS3-blueviolet?style=for-the-badge&logo=sass) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/sheilalg10/Hotel-Miranda.git
cd Hotel-Miranda
```

### 2️⃣ Instalar dependencias (Sass)
```sh
npm install -g sass
```

### 3️⃣ Compilar SCSS a CSS
Si usas Sass CLI, puedes compilar los archivos SCSS con:
```sh
sass --watch ./styles/sass/style.scss:./styles/css/style.css
```


## 📁 Estructura del proyecto
```sh
📁 Hotel-Miranda
├── index.html
├── 📁 styles/
│ ├── 📁 css/    
|    ├── style.css
│ └── 📁 sass/
|    ├── 📁 rooms
|        ├── 📁 roomsDetails
│            ├── _ameneties.scss
│            ├── _check.scss
|            ├── _sectionClient.scss
│            ├── _sectionDetails.scss
│            └── _sectionReleated.scss
│        └── _sectionRooms.scss
│    ├── 📁 aboutUs
│        ├── _sectionCounter.scss
│        ├── _sectionRestaurant.scss
│        └── _sectionVideo.scss
│    ├── 📁 common
│        ├── _facilities.scss
│        ├── _footer.scss
│        ├── _header.scss
│        └── _titleSetion.scss
│    ├── 📁 offers
│        ├── _popularRooms.scss
│        └── _sectionOffers.scss
│    ├── 📁 home
│         ├── _aboutUs.scss
│         ├── _food.scss
|         ├── _info.scss
│         ├── _rooms.scss
│         ├── _statistics.scss
│         └── _video.scss
|    ├── style.scss
│    ├── _variables.scss
│    └── _mixins.scss
├── 📁 js/
│    ├── script.js
│    ├── hamburguerMenu.js
│    ├── facilities.js
│    └── swiper.js
├── 📁 pages/
|    ├── 📁 rooms
|        ├── roomsDetails.html
│    ├── aboutUs.html
│    ├── contact.html
│    ├── offers.html
│    └── rooms.html
├── 📁 assets/
│    ├── 📁 images/
|         ├── 📁 icons/
│         └── 📁 video/
│ └── 📁 fonts/
└── README.md
```

---
✍️ **Autor:** [Sheila Lara García](https://github.com/sheilalg10)
