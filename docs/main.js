let escenas = {
  cover: {
    title: "¿Qué funciona mejor para el objeto en proceso de diseño:",
    subtitle: "madera maciza o un derivado?",
    image: "assets/test.jpeg"
  },
  intro:{
    text: "La madera es un material muy versátil. Sin embargo, es importante conocer algunas de las características que hacen que la decisión resulte en un objeto de mejor calidad, de mayor durabilidad o acorde con el uso.",
    image: "assets/test.jpeg"
  },
  start: {
    image: "assets/test.jpeg",
    text: "¿Cuál es el TAMAÑO del objeto?",
    optionA: "Sí",
    optionB: "No",
    sceneA: "end",
    sceneB: "end",
    messageA: "El señor Stark se alegra y decide contarme en qué consiste el encargo.",
    messageB: "El señor Stark, muy decepcionado, me dice que me largue... Ahora que lo pienso, me habrían venido bien las cincuenta guineas."
  },
  end: {
    image: "assets/test.jpeg",
    text: "Has completado la historia... ¿Crees que pudo haber tomado un rumbo diferente? Si quieres, prueba de nuevo."
  },
  credits: {
    text: "Por:",
    authors: ["María Catalina Vanegas"],
    year: 2019
  }
}

const aventura = new Aventura('es');
aventura.setScenes(escenas);
aventura.domAdventure();