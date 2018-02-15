class MijnenvegerController {
   constructor() {
      this.myModel = new MijnenvegerModel();
      this.myView = new MijnenvegerView();
      this.myView.toonMededeling("klik op start om het spel te beginnen");
      document.querySelector('nav>button')
      .addEventListener("click", (e) => this.reageerOpClickStart())

      document.getElementById("myCanvas")
      .addEventListener("click", (e) => this.reageerOpClickSpeelveld(e));

      this.myView.toonSpeelveld(document.getElementById('rowSize').value, document.getElementById('kolomSize').value);
    }

    reageerOpClickStart() {
       this.myModel.maakNieuwSpel();
       this.myView.toonSpeelveld(document.getElementById('rowSize').value, document.getElementById('kolomSize').value);
       this.myView.toonMededeling("spel gestart");
     }

     reageerOpClickSpeelveld(event) {
        if (this.myModel.isSpelActief() === true)
        { var plek;
          plek = this.myView.getGekliktePlek(event);
           var result=this.myModel.doeZet(plek); if(result==true)
           {
             this.myView.toonZet(plek);
           }
        this.myView.toonMededeling(this.myModel.getScore() + " Punten");
        }
      }
    }
