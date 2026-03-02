let raio = 7.5;
let xBolinha = 100;
let yBolinha = 200;
let diametro = raio * 2;

let velocidadeXbolinha = 6;
let velocidadeYBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;

let XRaqueteOponente = 585;
let YRaqueteOponente = 150;

let meusPontos = 0;
let pontosOponente = 0;

function setup(){
  createCanvas(600, 400)
}

function draw(){
  background(0);
  movimentoBolinha();
  raquetes(xRaquete, yRaquete)
  raquetes(xraqueteoponente, yraqueteoponente)
  npc(dificuldade);
}

if(keyIsDown(UP_ARROW)){
  yRaquete -= 10
}

if(keyIsDown(DOWN_ARROW)){
  yRaquete += 10
}

if(xBolinha -raio < xRaquete + 10 & yBolinha-raio< yRaquete + 90 & yBolinha +raio > yRaquete){
  velocidadeXBolinha *= -1;
  raquetada.play()
}
if(xBolinha + raio > xRaqueteOponente &   yBolinha - raio < yRaqueteOponente + 90 & yBolinha + raio > yRaqueteOponente) {
  velocidadeXBolinha *= -1
  raqueta.play()
}

function movimentoBolinha(){
  circle(xBolinha,yBolinha,diametro);
 
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha
  if(XBolinha + raio > width || xBolinha-raio < 0){
    velocidadeXBolinha *= -1;
  };
  if(yBolinha + raio > height || YBolinha -raio < 0){
    velocidadeYBolinha *= -1}}

function raquetes(XRaquete, yRaquete){
  rect(xRaquete,yRaquete,10,90)
}
