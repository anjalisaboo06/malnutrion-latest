class Form{
constructor(){
this.input = createElement("name");
this.button = createButton('Play!');
//this.select = createSelect();
this.greeting = createElement('h2');
this.title= createElement('h1');
this.reset = createButton('Reset')
}
hide(){
    this.button.hide();
  //  this.select.hide();
    this.greeting.hide();
    this.title.hide();
    this.input.hide();
   
}

display(){

this.title.html("gameName");
this.title.position(displayHeight/2, 0);


this.greeting.position(displayWidth/2 - 40 , displayHeight/2 - 80);
this.button.position(displayWidth/2 + 30, displayHeight/2+50);
//this.select.position(displayWidth/2+10, displayHeight/2);

this.reset.position(displayWidth-100,20);

//this.select.option('boy');
//this.select.option('girl');
//this.select.selected('girl');
if(this.button.mousePressed){
    gameState="play";
}
this.button.mousePressed(()=>{
   this.input.hide();
    this.button.hide();
    this.title.hide();
   // this.greeting.html("Hello")
  //  this.greeting.position(displayWidth/2 - 70, displayHeight/4);
  });

  this.reset.mousePressed(()=>{
 

  });

}
}
