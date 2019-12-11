let escenas = {
  cover: {
    title: "¿Qué funciona mejor para el objeto en proceso de diseño:",
    subtitle: "madera maciza o un derivado?",
  },
  intro:{
    text: "La madera es un material muy versátil. Sin embargo, es importante conocer algunas de las características que hacen que la decisión resulte en un objeto de mejor calidad, de mayor durabilidad o acorde con el uso.",
  },
  start: {
    image: "assets/start.png",
    text: "¿De qué tamaño es el objeto?",
    optionA: "Grande",
    optionB: "Pequeño ó mediano",
    sceneA: "detalles",
    sceneB: "tecnica",
    messageA: "Los objetos <b>grandes</b> se relacionan en forma y tamaño con los espacios arquitectónicos. Por lo general ocupan un espacio fijo.\n¿Y cómo es este objeto? Cómo son sus detalles? Cómo se unen sus partes?...",
    messageB: "Los <b>objetos pequeños y medianos</b> son de escala manual o corporal: se pueden manipular y transportar con facilidad por el usuario.\nPensemos ahora en los medios que usaremos para obtener el objeto...",
  },
  detalles: {
    image: "assets/detalles.png",
    text: "¿Qué tipo de detalles tiene este objeto?",
    optionA: "Torneados, tallas, ensambles",
    optionB: "Planos unidos con herrajes",
    sceneA: "end",
    sceneB: "entorno",
    messageA: "Para un proyecto con tallas, torneados y/o ensambles tradicionales, la <b>madera maciza será lo mejor</b>: permite buena calidad en procesos de transformación para generar diversas formas y volúmenes decorativos. Los ensambles se usan para las <b>uniones más resistentes</b> que las de adhesivos, tornillos ó puntillas, con valor estético agregado.\n¡Prueba de nuevo con otras preguntas! ",
    recommendationA: "madera maciza",
    messageB: "Es posible realizar superficies de gran tamaño a partir de madera maciza; comercialmente existen los <b>tableros alistonados</b>. Sin embargo, <b>el contrachapado, el aglomerado y el MDF</b> son lo más usado en este tipo de aplicaciones por su <b>bajo costo</b> en comparación con los tableros.\nEscogiendo la opción barata, conviene pensar... cómo es el lugar en el que estará el objeto?."
  },
  tecnica: {
    image: "assets/tecnica.png",
    text: "¿Cuál es el tipo de fabricación principal por el cual se puede obtener el objeto?",
    optionA: "Fabricación artesanal ó semiartesanal",
    optionB: "Fabricación industrial",
    sceneA: "detalles",
    sceneB: "visual",
    messageA: "La fabricación artesanal ó semiartesanal se caracteriza por producir pequeñas cantidades de cada objeto y por el uso de materiales obtenidos en el mismo espacio geográfico donde trabaja el artesano, por ello lo más común es el uso de materiales no estandarizados y la exploración formal a partir de las cualidades inherentes al material en su estado natural, es decir, <b>la madera maciza</b>, nueva, recuperada, reciclada o restaurada. Las fibras naturales entran en esta opción.\n¡Prueba de nuevo con otras preguntas!",
    messageB: "La fabricación industrial corresponde a series masivas de productos que se repiten prácticamente sin variaciones: uso de modelos CAD y análogos, plantillas, guías, maquinaria automatizada, producción CNC. Por la idea de obtener productos idénticos, es común el uso de derivados de origen industrial: <b>contrachapados y aglomerados</b>.\nLa decisión en este caso depende del acabado esperado en el objeto..."
  },
  entorno: {
    image: "assets/entorno.png",
    text: "¿Este objeto está destinado para el uso en lugares con humedad?",
    optionA: "Sí, posiblemente mayor a la del ambiente",
    optionB: "No, su uso será interior",
    sceneA: "humedad",
    sceneB: "visual",
    messageA: "Los espacios por los que nos movemos contienen cierto grado de agua. Esto varía de acuerdo a la ubicación geográfica, al clima y a las estaciones. Si escogiste esta respuesta es porque <b>el objeto se verá sometido al contacto con más agua</b> que la que contiene el aire normalmente, entonces podríamos considerar dos tipos de humedad...",
    messageB: `Si el objeto está destinado a un lugar cubierto y seco, es posible usar con tranquilidad el <b>contrachapado, el aglomerado y el MDF</b>.\nAhora, hay que considerar el aspecto deseado en relación con la protección que requiere...`
  },
  visual: {
    image: "assets/visual.png",
    text: "¿Cuál es la apariencia del objeto",
    optionA: `Tendrá un color de acabado "plástico" y cubriente`,
    optionB: "Simula el aspecto de la madera maciza",
    sceneA: "end",
    sceneB: "end",
    messageA: " Puedes usar cualquier derivado cubierto con un polimero ó pintado. El uso de lacas, barnices y pinturas acrílicas permite obtener colores planos, de diferentes brillos y texturas usualmente lisas. Los materiales que mejor reciben estos acabados son el <b>MDF y el contrachapado</b>, requiriendo procesos de sellado previos. También está la opción de los recubrimientos plásticos, siendo el más común el melamínico sobre <b>aglomerado</b>.\nHas llegado al final del test. Repítelo para un objeto diferente!",
    recommendationA: "MDF, contrachapado o aglomerado",
    messageB: "<b>Puedes usar cualquier derivado</b>. Existen múltiples opciones para simular que un tablero de derivado es madera maciza. El más simple es usar un contrachapado y cubrir sus cantos (o lados que corresponden al grosor). Es común el uso de fórmicas, melaminas u otros recubrimientos laminados que imitan el color e incluso la textura de la madera real. Existe también la opción de enchapar: pegar chapas de madera maciza al material base.",
    recommendationB: "puedes usar cualquier derivado",
  },
  humedad: {
    image: "assets/humedad.png",
    text: "¿Dónde va a vivir este objeto?",
    optionA: "Exterior o zona húmeda",
    optionB: "Interior en área con uso de agua",
    sceneA: "end",
    sceneB: "end",
    messageA: "Si el objeto vivirá afuera, a la intemperie, o en un área interior pero muy húmeda, como algunas estructuras arquitectónicas, parques infantiles, decks (pisos) para saunas, piscinas o similares, se deben fabricar con especies de <b>madera maciza</b> que por su composición son resistentes a la humedad y a otros agentes naturales. Has llegado al final.\nPiensa en otra clase de objeto y repite el test!",
    recommendationA: "madera maciza",
    messageB: "El mobiliario de áreas como cocinas y baños se realiza de manera muy extendida en <b>láminas de aglomerado</b> recubiertas por todas sus caras con un revestimiento plástico desde la fábrica.\nPiensa en otra clase de objeto y repite el test!",
    recommendationB: "láminas de aglomerado"
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