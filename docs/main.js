let escenas = {
  cover: {
    title: "¿Qué funciona mejor para el objeto en proceso de diseño:",
    subtitle: "madera maciza o un derivado?",
  },
  intro:{
    text: "La madera es un material muy versátil. Sin embargo, es importante conocer algunas de las características que hacen que la decisión resulte en un objeto de mejor calidad, de mayor durabilidad o acorde con el uso.",
  },
  start: {
    image: "assets/test.jpeg",
    text: "¿De qué tamaño es el objeto?",
    optionA: "Grande",
    optionB: "Pequeño ó mediano",
    sceneA: "detalles",
    sceneB: "tecnica",
    messageA: "Objetos relacionados en forma y tamaño con los espacios arquitectónicos. Por lo general ocupan un espacio fijo.",
    messageB: "Objetos de escala manual o corporal: se pueden manipular y transportar con facilidad por el usuario."
  },
  detalles: {
    image: "assets/test.jpeg",
    text: "¿Qué tipo de detalles tiene este objeto?",
    optionA: "Torneados, tallas, ensambles",
    optionB: "Planos unidos con herrajes",
    sceneA: "end",
    sceneB: "entorno",
    messageA: "La <b>madera maciza</b> funciona bien en procesos de transformación donde la resistencia y el comportamiento de las fibras permite generar diversas formas por corte, tanto con herrramientas manuales como eléctricas.\n\nMuchos de estos elementos tienen un caracter más decorativo que estrictamente funcional. Los ensambles cumplen con ambas exigencias y son un recurso común para generar uniones más resistentes que aquellas que dependen de adhesivos o elementos como tornillos ó puntillas.",
    messageB: "USA UN DERIVADO\nSi bien es posible realizar superficies de gran tamaño a partir de madera maciza, en la actualidad los derivados como el contrachapado, el aglomerado ó el MDF son lo más usado en este tipo de aplicaciones, pues son fabricados en formatos de láminas de gran tamaño. Igualmente, existe un amplio conjunto de tornillos, insertos y muchos otros herrajes que hacen posible la unión y articulación de piezas en estos materiales."
  },
  tecnica: {
    image: "assets/test.jpeg",
    text: "¿Cuál es el tipo de fabricación principal por el cual se puede obtener el objeto?",
    optionA: "Fabricación artesanal ó semiartesanal",
    optionB: "Fabricación industrial",
    sceneA: "detalles",
    sceneB: "visual",
    messageA: "Este tipo de producción se caracteriza por producir pequeñas cantidades de cada objeto y por el uso de materiales obtenidos en el mismo espacio geográfico donde trabaja el artesano, por ello lo más común es el uso de materiales no estandarizados y la exploración formal a partir de las cualidades inherentes al material en su estado natural, es decir, la madera maciza, nueva, recuperada, reciclada o restaurada. Las fibras naturales también pueden ser tenidas en cuenta en esta opción.",
    messageB: "Series masivas de productos que se repiten prácticamente sin variaciones, gracias al uso de modelos CAD y análogos, plantillas, guías, maquinaria automatizada,  producción CNC. Coherentemente con la expectativa de obtener productos idénticos, es común el uso de derivados de origen industrial: contrachapados y aglomerados de diferentes densidades. La decisión en este caso depende del acabado esperado en el objeto."
  },
  entorno: {
    image: "assets/test.jpeg",
    text: "¿Este objeto está destinado para el uso en lugares con humedad?",
    optionA: "Sí, posiblemente mayor a la del ambiente",
    optionB: "No, su uso será interior",
    sceneA: "humedad",
    sceneB: "visual",
    messageA: "El objeto se verá sometido al contacto con agua directa o indirectamente. Sin embargo, podríamos considerar dos tipos de humedad. A cuál corresponde el entorno imaginado del objeto?",
    messageB: `Se suele evitar el uso de aglomerados ó contrachapados en aplicaciones que estarán a la intemperie o en ambientes húmedos, dada la alta capacidad de absorción de las fibras procesadas. Existen algunas excepciones de materiales que cuentan con "ingredientes" llamados aditivos para mejorar su desempeño en este aspecto. Ahora, hay que considerar...`
  },
  visual: {
    image: "assets/test.jpeg",
    text: "¿Cuál es la apariencia del objeto",
    optionA: `Tendrá un color de acabado "plástico" y cubriente`,
    optionB: "Se desea que el material tenga ó simule el aspecto de la madera maciza",
    sceneA: "",
    sceneB: "",
    messageA: "",
    messageB: ""
  },
  vacio: {
    image: "assets/test.jpeg",
    text: "",
    optionA: "",
    optionB: "",
    sceneA: "",
    sceneB: "",
    messageA: "",
    messageB: ""
  },
  end: {
    image: "assets/test.jpeg",
    text: "FIN"
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