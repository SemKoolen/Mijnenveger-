class MijnenvegerView{
  constructor(){
    this.canvas=document.getElementById('myCanvas');
    this.context=this.canvas.getContext('2d');
    this.toonSpeelveld(5,5);
  }

  toonSpeelveld(rijLength, kolomLength){
    this.context.beginPath();
    var canvas = document.getElementsByTagName('canvas')[0];
    canvas.width  = (rijLength * 50) + 2;
    canvas.height = (kolomLength * 50) + 2;
    this.context.rect(1,1,kolomLength * 50, rijLength * 50);
    this.context.fillStyle = 'lightgray';
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = 'black';
    this.context.stroke();
    for (var i = 0; i<rijLength;i++){
    this.context.moveTo(0,i*50);
    this.context.lineTo(rijLength*50,i*50);
    }
    for (var i = 0; i<kolomLength;i++){
    this.context.moveTo(i*50,0);
    this.context.lineTo(i*50,kolomLength*50);
    }
    this.context.moveTo(50,0);
    this.context.lineTo(50,250);
    this.context.moveTo(100,0);
    this.context.lineTo(100,250);
    this.context.stroke();
  }

  getGekliktePlek(event){
    var kolom=Math.floor((event.pageX-document.getElementById('myCanvas').offsetLeft)/50);
    var rij=Math.floor((event.pageY-document.getElementById('myCanvas').offsetTop)/50);

    return {rij:rij, kolom:kolom};
  }

  toonMededeling(msg){
    document.querySelector('footer').innerHTML=msg;
   }

  toonZet(positie){
    var startX=positie.kolom*50;
    var startY=positie.rij*50;
    this.context.beginPath();
    this.context.rect(startX+2,startY+2,47,47);
    this.context.fillStyle="white";
    this.context.fill();
   }
 }
