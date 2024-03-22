window.onload = init;

let π = 3.14;
    function init(){
      let btn = document.getElementById("btn");
        btn.onclick= preview;
      
      
   };    
   function bgUpdate(canvas, context){
    let bg = document.getElementById("bColor");
     let index = bg.selectedIndex;
      let bgClr = bg[index].value;
   
      context.fillStyle = bgClr;
       context.fillRect(0, 0, canvas.width, canvas.height);

       
 } 
  

   function preview(){
    let canvas = document.getElementById("canvas");
     let context = canvas.getContext("2d");
    let obj = document.getElementById("shapes");
      bgUpdate(canvas, context);

    let index = obj.selectedIndex;

      let shape= obj[index].value;
      console.log(shape)
      if(shape== "squares"){
         for(let i=0; i<20; i++){
           drawSquare(canvas, context);
         }
      }
     else if (shape == "circle"){
        for (let i=0; i<20; i++){
           drawCircle(canvas, context);
        }
     }

   }


  

   function drawSquare(canvas, context){

    
      let w = Math.floor(Math.random() * 40);

       let x =Math.floor(Math.random() * canvas.width);
   
       let y = Math.floor(Math.random() * canvas.height );
         console.log(x);
       context.fillStyle = "lightBlue";
       context.fillRect(x, y, w, w);
   
      };
       

      
      function drawCircle(canvas, context){
         let r = Math.floor(Math.random() * 40);
          let x = Math.floor(Math.random() * canvas.width);
           let y = Math.floor(Math.random() * canvas.height);


           context.beginPath();
            context.arc(x, y, r, 0, degreeR(360), false);
             context.fillStyle= "lightBlue";
              context.fill();
      };
       
       function degreeR(deg){
         return (deg * π) / 180;
      }