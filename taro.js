const cartas = [
  { nombre: "El Loco", img: "00_Fool", mensaje: "Nuevos comienzos", invertido: "Inmadurez" },
  { nombre: "El Mago", img: "01_Magician", mensaje: "Poder personal", invertido: "Manipulación" },
  { nombre: "La Sacerdotisa", img: "02_High_Priestess", mensaje: "Sabiduría interior", invertido: "Confusión" },
  { nombre: "La Emperatriz", img: "03_Empress", mensaje: "Abundancia", invertido: "Bloqueo" },
  { nombre: "El Emperador", img: "04_Emperor", mensaje: "Estabilidad", invertido: "Control excesivo" },
  { nombre: "El Hierofante", img: "05_Hierophant", mensaje: "Tradición", invertido: "Rebeldía" },
  { nombre: "Los Enamorados", img: "06_Lovers", mensaje: "Relaciones", invertido: "Ruptura" },
  { nombre: "El Carro", img: "07_Chariot", mensaje: "Victoria", invertido: "Descontrol" },
  { nombre: "La Fuerza", img: "08_Strength", mensaje: "Coraje", invertido: "Debilidad" },
  { nombre: "El Ermitaño", img: "09_Hermit", mensaje: "Búsqueda interior", invertido: "Soledad" },
  { nombre: "La Rueda de la Fortuna", img: "10_Wheel_of_Fortune", mensaje: "Cambio", invertido: "Bloqueo" },
  { nombre: "La Justicia", img: "11_Justice", mensaje: "Equilibrio", invertido: "Injusticia" },
  { nombre: "El Colgado", img: "12_Hanged_Man", mensaje: "Perspectiva", invertido: "Estancamiento" },
  { nombre: "La Muerte", img: "13_Death", mensaje: "Transformación", invertido: "Resistencia al cambio" },
  { nombre: "La Templanza", img: "14_Temperance", mensaje: "Armonía", invertido: "Desequilibrio" },
  { nombre: "El Diablo", img: "15_Devil", mensaje: "Apegos", invertido: "Liberación" },
  { nombre: "La Torre", img: "16_Tower", mensaje: "Caos necesario", invertido: "Negación del cambio" },
  { nombre: "La Estrella", img: "17_Star", mensaje: "Esperanza", invertido: "Pérdida de fe" },
  { nombre: "La Luna", img: "18_Moon", mensaje: "Intuición", invertido: "Engaño" },
  { nombre: "El Sol", img: "19_Sun", mensaje: "Éxito", invertido: "Ego" },
  { nombre: "El Juicio", img: "20_Judgement", mensaje: "Renacimiento", invertido: "Autoengaño" },
  { nombre: "El Mundo", img: "21_World", mensaje: "Finalización", invertido: "Incompleto" }
];

const imagenBase = "https://upload.wikimedia.org/wikipedia/commons/thumb";
const imagenFallo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tarot_blank_card.png/480px-Tarot_blank_card.png";

function tirarCartas() {
  const seleccion = [];
  while (seleccion.length < 3) {
    let i = Math.floor(Math.random() * cartas.length);
    if (!seleccion.includes(i)) seleccion.push(i);
  }

  const posiciones = ["Pasado", "Presente", "Futuro"];
  const contenedor = document.getElementById("cartas");
  contenedor.innerHTML = "";

  seleccion.forEach((i, idx) => {
    const carta = cartas[i];
    const invertida = Math.random() < 0.5;
    const descripcion = invertida ? carta.invertido : carta.mensaje;
    const rotar = invertida ? ' style="transform: rotate(180deg);"' : "";

    const div = document.createElement("div");
    div.className = "card";

    const inner = document.createElement("div");
    inner.className = "inner-card";
    inner.onclick = () => div.classList.toggle("flip");

    inner.innerHTML = `
      <div class="front">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/${getImagePath(carta.img)}" onerror="this.src='${imagenFallo}'"${rotar}>
      </div>
      <div class="back">
        <h3>${posiciones[idx]}</h3>
        <strong>${carta.nombre}${invertida ? " (invertida)" : ""}</strong><br>
        <em>${descripcion}</em>
      </div>
    `;

    div.appendChild(inner);
    contenedor.appendChild(div);
  });
}

function getImagePath(name) {
  return {
    "00_Fool": "9/90/RWS_Tarot_00_Fool.jpg/480px-RWS_Tarot_00_Fool.jpg",
    "01_Magician": "d/de/RWS_Tarot_01_Magician.jpg/480px-RWS_Tarot_01_Magician.jpg",
    "02_High_Priestess": "8/88/RWS_Tarot_02_High_Priestess.jpg/480px-RWS_Tarot_02_High_Priestess.jpg",
    "03_Empress": "d/d2/RWS_Tarot_03_Empress.jpg/480px-RWS_Tarot_03_Empress.jpg",
    "04_Emperor": "c/c3/RWS_Tarot_04_Emperor.jpg/480px-RWS_Tarot_04_Emperor.jpg",
    "05_Hierophant": "8/8d/RWS_Tarot_05_Hierophant.jpg/480px-RWS_Tarot_05_Hierophant.jpg",
    "06_Lovers": "3/3a/RWS_Tarot_06_Lovers.jpg/480px-RWS_Tarot_06_Lovers.jpg",
    "07_Chariot": "3/3d/RWS_Tarot_07_Chariot.jpg/480px-RWS_Tarot_07_Chariot.jpg",
    "08_Strength": "f/f5/RWS_Tarot_08_Strength.jpg/480px-RWS_Tarot_08_Strength.jpg",
    "09_Hermit": "4/4d/RWS_Tarot_09_Hermit.jpg/480px-RWS_Tarot_09_Hermit.jpg",
    "10_Wheel_of_Fortune": "3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/480px-RWS_Tarot_10_Wheel_of_Fortune.jpg",
    "11_Justice": "c/c0/RWS_Tarot_11_Justice.jpg/480px-RWS_Tarot_11_Justice.jpg",
    "12_Hanged_Man": "2/2b/RWS_Tarot_12_Hanged_Man.jpg/480px-RWS_Tarot_12_Hanged_Man.jpg",
    "13_Death": "d/d7/RWS_Tarot_13_Death.jpg/480px-RWS_Tarot_13_Death.jpg",
    "14_Temperance": "f/f8/RWS_Tarot_14_Temperance.jpg/480px-RWS_Tarot_14_Temperance.jpg",
    "15_Devil": "9/96/RWS_Tarot_15_Devil.jpg/480px-RWS_Tarot_15_Devil.jpg",
    "16_Tower": "5/53/RWS_Tarot_16_Tower.jpg/480px-RWS_Tarot_16_Tower.jpg",
    "17_Star": "d/db/RWS_Tarot_17_Star.jpg/480px-RWS_Tarot_17_Star.jpg",
    "18_Moon": "7/7f/RWS_Tarot_18_Moon.jpg/480px-RWS_Tarot_18_Moon.jpg",
    "19_Sun": "1/17/RWS_Tarot_19_Sun.jpg/480px-RWS_Tarot_19_Sun.jpg",
    "20_Judgement": "d/dd/RWS_Tarot_20_Judgement.jpg/480px-RWS_Tarot_20_Judgement.jpg",
    "21_World": "f/ff/RWS_Tarot_21_World.jpg/480px-RWS_Tarot_21_World.jpg"
  }[name];
}
