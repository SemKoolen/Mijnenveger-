class MijnenvegerModel{
  constructor(){
    this.vakjes = new Array(document.getElementById('kolomSize').value);
    for(var rij = 0; rij<this.vakjes.length; rij++){
      this.vakjes[rij] = new Array(document.getElementById('rowSize').value);
    }
    this.spelActief = false; this.score=0;
  }

  maakNieuwSpel(){
    for(var rij = 0; rij<this.vakjes.length;
      rij++){
        for(var kolom = 0; kolom< this.vakjes[0].length; kolom++){
          this.vakjes[rij][kolom] = "DICHT";
        }
      }
      this

      this.score=0;
      this.spelActief=true;
    }
    getRijSize(){
      return document.getElementById('rowSize').value;
    }

    getKolomSize(){
      return document.getElementById('kolomSize').value;
    }

    isSpelActief(){
      return this.spelActief;
    }

    doeZet(positie){
      if(this.vakjes[positie.rij][positie.kolom]==="DICHT")
      {
        this.vakjes[positie.rij][positie.kolom]="OPEN";
        this.score++;
        return true;
      }
      return false;
    }

    getScore(){
      return this.score;
    }
  }
