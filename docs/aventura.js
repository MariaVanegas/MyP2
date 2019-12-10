class Aventura {
  constructor(lang = 'en',options) {
    this.lang = (lang === 'en' || lang === 'es') ? lang : undefined;
    if (!this.lang) {console.log('Incorrect language / lenguaje incorrecto')}
    this.options = {
      typewriterSpeed: 0
    }
    if (options) {this.options = Object.assign(this.options,options)}
  }

  setScenes(scenes) {
    let keys = Object.keys(scenes);
    this.scenes = scenes;
    for (let i=0;i<keys.length;i++) {
      this.scenes[keys[i]].key = keys[i];
    }
  }

  domAdventure() {
    if (this.lang === undefined) {console.log("Tura.js: Language undefined / lenguaje indefinido");return}
    document.title = this.scenes.cover.title.toUpperCase();

    this.scenes.cover.text = `${this.scenes.cover.title}<br>${this.scenes.cover.subtitle}`;
    this.scenes.intro.continuation = 'start';
    this.scenes.end.continuation = 'credits';
    let credits = this.scenes.credits.text;
      for (let a in this.scenes.credits.authors) {
        credits+=`<br>${this.scenes.credits.authors[a]}`;
      }
      credits+=`<br>${this.scenes.credits.year}`
    this.scenes.credits.text = credits;
    this.goToScene_dom(this.scenes.cover,'MAIN',()=>{this.continueButton(this.scenes.intro,'continue')});
  }

  goToScene_dom(s,textType,callback) {
    // Delete previous div containing story display
    let generaldiv = document.getElementById("storygeneraldiv");
    let prevdiv = document.getElementById("storydiv");
    if (prevdiv) {generaldiv.removeChild(prevdiv)};

    let storydiv = document.createElement("div");
    storydiv.id = "storydiv";
    generaldiv.appendChild(storydiv);

    let text;
    let imagePath;
    if (textType == 'MAIN') {
      text = s.text;
      imagePath = s.image;
    } else if (textType == 'A') {
      text = s.messageA;
      imagePath = s.imageA;
    } else if (textType == 'B') {
      text = s.messageB;
      imagePath = s.imageB;
    }

    // TEXTO
    let pdiv = document.createElement("div");
    pdiv.className = imagePath == undefined ? "pdiv_long" : "pdiv_short";
    storydiv.appendChild(pdiv);

    let p = document.createElement("p");
    p.className = textType=='MAIN' ? "storyp" : "storyp_message";
    p.innerHTML = "";
    pdiv.appendChild(p);
    if (s.key == 'intro' || s.key == 'end') {
      p.classList.add("longtext");
    }

    // IMAGEN
    if (imagePath != undefined) {
      let idiv = document.createElement("div");
      idiv.className = "idiv";
      storydiv.appendChild(idiv);
      let image = document.createElement("img");
      image.className = "storyimage";
      image.src = imagePath;
      idiv.appendChild(image);
    }

    // BOTÓN
    text = text.replace(/\n/g,'<br>');
    if (this.options.typewriterSpeed > 0) {
      let i = 0;
      let interval = setInterval(()=>{
        let textpart = text.substring(0,i);
        p.innerHTML = textpart;
        i++;
        if (i>text.length) {
          clearInterval(interval);
          if (s.key!='credits') {callback()};
        }
      },this.options.typewriterSpeed);
    } else {
      p.innerHTML = text;
      if (s.key!='credits') {callback()};
    }
  }

  optionButtons(s) {
    let storydiv = document.getElementById("storydiv");

    // #CC3332 Rojo
    // #38BFC3 Azul
    // #533E35 Café

    let bdiv = document.createElement("div");
    bdiv.className = "bdiv_double";
    storydiv.appendChild(bdiv);

    let optionAButton = document.createElement("button");
    optionAButton.className = "storybutton";
    optionAButton.innerHTML = s.optionA;
    optionAButton.style.background = "#CC3332";
    bdiv.appendChild(optionAButton);
    optionAButton.addEventListener("click",()=>{
      let buttonType = s.sceneA == 'end' ? 'continue' : 'options';
      this.goToScene_dom(s,'A',()=>{this.continueButton(this.scenes[s.sceneA],buttonType)});
    });

    let optionBButton = document.createElement("button");
    optionBButton.className = "storybutton";
    optionBButton.innerHTML = s.optionB;
    optionBButton.style.background = "#38BFC3";
    bdiv.appendChild(optionBButton);
    optionBButton.addEventListener("click",()=>{
      let buttonType = s.sceneB == 'end' ? 'continue' : 'options';
      this.goToScene_dom(s,'B',()=>{this.continueButton(this.scenes[s.sceneB],buttonType)});
    });
  }

  continueButton(s,buttonType = "options") {
    let storydiv = document.getElementById("storydiv");
    let continueText = this.lang === 'en' ? "Continue" : "Continuar";

    let bdiv = document.createElement("div");
    bdiv.className = "bdiv_double";
    storydiv.appendChild(bdiv);

    let empty = document.createElement("div");
    bdiv.appendChild(empty);

    let continueButton = document.createElement("button");
    continueButton.className = "storybutton";
    continueButton.innerHTML = continueText;
    continueButton.style.background = "#533E35";
    bdiv.appendChild(continueButton);
    continueButton.addEventListener("click",()=>{
      if (buttonType == 'continue') {
        this.goToScene_dom(s,'MAIN',()=>{this.continueButton(this.scenes[s.continuation])});
      }  else {
        this.goToScene_dom(s,'MAIN',()=>{this.optionButtons(s)});
      }
    });
  }
}