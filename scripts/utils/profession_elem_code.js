// get DOM element for profession
export const text = document.querySelector(".profession-list-css");
export const textBefore = window.getComputedStyle(text, '::before')

export let duration = 5000;


export const professionList = [
  {
    skill: "Web Developer",
    width: "400px",
    duration: 0,
  },
  {
    skill: "Software Engineer",
    width: "510px",
    duration: 5000,
  },
];

// getting canvas element from DOM
export const canvas = document.querySelector(".canvas2");
export const canvasContainer = document.querySelector(
  ".profession-canva2-container"
);


export const textLoad = () => {
  professionList.forEach((profession, index) => {
    
    setTimeout(() => {
      text.textContent = profession.skill;
      text.style.setProperty('--widthBefore', profession.width)
      canvas.style.setProperty('--canvas2Width', profession.width);
      canvasContainer.style.setProperty('--widthCanva2Container', profession.width);
      text.style.setProperty('--startAnimation', 'animate 5s steps(1000) infinite;')

    }, duration * index)
  });

  // requestAnimationFrame(textLoad)
};

textLoad();
setInterval(textLoad, 10000);

// matrix code animation
// getting the body element from DOM

// creating an instance of 2d context object to change canvas settings and call all drawing methods
export const ctx = canvas.getContext("2d");

// creating object template for  variables
export class Symbol {
  // this class will create and draw individual symbol object - create and manage individual symbol
  // initializing constructor
  constructor(x, y, fontSize, canvasHeight) {
    // - x, y coordinates select the position for the symbol on canvas

    this.characters =
      "丹日亡句ヨ乍呂廾工勹片し冊几回尸甲尺己卞凵レ山メと乙ﾑ乃ᄃり乇ｷムんﾉﾌズﾚﾶ刀のｱゐ尺丂ｲひ√Ｗﾒﾘ乙ค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.text = ""; // this will be the currently active symbol and contain a random character from above
    this.bottom = canvasHeight // for imaginary bottom    
  }

  // class method - randomize characters and draw it on the canvas at a specific position
  draw(context) {
    // - context specify what canvas we want to draw on
    // select a character at random
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );

    // draw symbol on canvas
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    // (text, x-coordinate, y-coordinate)

    // check if imaginary bottom is at the top
    if (this.bottom <= 20) {
      this.bottom = this.canvasHeight;
      this.y = -100;
    } else {
      this.bottom = this.bottom
    }
   
    //if symbols reach bottom return up
    if (this.y * this.fontSize >= this.bottom && Math.random() > 0.98) {
      this.y = 0;
      this.bottom = this.bottom - 20
      this.bottom = 0;
    } else {
        
      this.y++; // give the falling effect
      
    }   
    
  }
}

export class Effect {
  // this class is the main wrapper for the entire rain effect - manage all the symbols at once

  // initializing constructor
  constructor(canvasWidth, canvasHeight) {
    // - canvasWidth, canvasHeight are needed so the symbols can span entire area

    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 5;
    this.columns = this.canvasWidth / this.fontSize;
    // - to get the numbers of columns that can fit into the canvas

    this.symbols = [];
    // - to hold all individual symbol object

    // calling private method to initiate automatically
    this.#initialize();
  }

  // using abstraction to wrap variables and related functions
  #initialize() {
    // - automatically executes once instance of effects class is created

    // fill symbol array [] with symbol objects created
    for (let i = 0; i <= this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
      // - i is the x coordinate and y coordinate is 0 which will increase to give falling effect
      // - y
    }
  }

  // function to make column fill screen upon resize
  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
}

// creating the instance of Effect class
export const effect = new Effect(canvas.width, canvas.height);

// creating a variable that will keep track of time stamp
export let lastTime = 1;

export const fps = 50; // frame per sec

// how long before the next frame
export const nextFrame = 500 / fps; // 15 frames per second

// set timer
export let timer = 166.66; // 5 sec

// animation loop to run 60 times per sec - update and draw effect to create animation
export function animate(timeStamp) {
  // calculating the deltaTime - difference in milli sec between prev animation frame and the current frame
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  // slow down or speed up animation
  if (timer > nextFrame) {
    // make old symbol slowly fade away
    ctx.fillStyle = "rgba(0,0,0,0.05)";

    // align all text to the middle
    ctx.textAlign = "center";

    // draw rectangle across the entire canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // color symbols green
    ctx.fillStyle = "#0aff0a";

    // seting canvas font propety
    ctx.font = effect.fontSize + "px monospace";
    // - moonospace font has the same amoount of horizontal space

    // call class to draw character from symbol
    effect.symbols.forEach((symbol) => symbol.draw(ctx));

    // reset timer back to 0
    timer = 166.66;
  } else {
    timer += deltaTime;
  }

  // animate the function to create endless animation loop
  requestAnimationFrame(animate); // name of its parent function
  // Note: requestAnimationFrame() has autogenerated timeStamp
}

export let startPosition = 0;

animate(startPosition);

// making fps responsive
window.addEventListener("resize", () => {
  // set canvas width and height based on window
  canvas.width = window.innerWidth;
  canvas.height = rectForBody.height; // window.innerHeight;

  effect.resize(canvas.width, canvas.height);
});
