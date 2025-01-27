import movieDev from "../assets/images/movieDev.webp";
import contries from "../assets/images/countries.webp";
import mypacient from "../assets/images/mypacient.png";
import shop from "../assets/images/shop.png";
import pomodoro from "../assets/images/pomodoro.png";
const proyects = [
  {
    title: "MovieDev",
    description:
      "Movie Dev es una página de búsqueda de películas, con integraciones de API para mostrar detalles de cada título, y un diseño responsive que se adapta a todos los dispositivos.",
    link: "https://movie-dev-one.netlify.app",
    image: movieDev,
    technologies: ["css", "html", "javascript", "react", "tailwind"],
  },
  {
    title: "Contries",
    description:
      "Contries es una aplicación interactiva que permite explorar y buscar información sobre diferentes países. La interfaz muestra datos de cada país, como su nombre, capital, etc.",
    link: "https://countries-darckis28.netlify.app/",
    image: contries,
    technologies: ["css", "html", "javascript", "astro", "tailwind"],
  },
  {
    title: "Mi paciente",
    description:
      "Es una aplicación diseñada para ayudar a los médicos a gestionar de manera fácil y rápida la información de sus pacientes. Tiene una función de búsqueda rápida usando el DNI del paciente.",
    link: "https://mypacientperu.netlify.app/",
    image: mypacient,
    technologies: ["css", "html", "javascript", "react", "tailwind"],
  },
  {
    title: "Pomodoro.dev",
    description:
      "Este es un proyecto de un temporizador Pomodoro que te ayudará a mejorar tu productividad gestionando tu tiempo de trabajo y descanso.",
    link: "https://pomodorodev.netlify.app/",
    image: pomodoro,
    technologies: ["css", "html", "javascript", "react", "tailwind"],
  },
  // {
  //   title: "Shop.pe",
  //   description: "Es una aplicación para emular un ecommers",
  //   link: "https://shop-pe.netlify.app/",
  //   image: shop,
  //   technologies: ["css", "html", "javascript", "react", "tailwind"],
  // },
];
export default proyects;
