import * as PIXI from "pixi.js";
import { setInterval } from "timers";

const app = new PIXI.Application();
// const renderer = PIXI.autoDetectRenderer();
const stage = new PIXI.Container();
document.body.appendChild(app.view);

const lemon = new PIXI.Sprite(
  (() => {
    return PIXI.Texture.from("./assets/lemon.png");
  })(),
);
app.stage.addChild(stage);
stage.addChild(lemon);

console.log('app.ticker', app.ticker);

const fadeIn = (sprite, time, callback) => {
  console.log('fadeIn');
  sprite.alpha = 0;
  const value = 1 / (time / app.ticker.deltaMS);
  const animate = (delta) => {
    sprite.alpha += value;
    if (sprite.alpha >= 1) {
      if(callback){
        console.log('callback');
        callback();
      }
      app.ticker.remove(animate);
    }
  };
  app.ticker.add(animate);
};

const fadeOut = (sprite, time, callback) => {
  sprite.alpha = 1;
  const value = 1 / (time / app.ticker.deltaMS);
  const animate = (delta) => {
    sprite.alpha -= value;
    if (sprite.alpha <= 0) {
      if(callback){
        console.log('callback');
        callback();
      }
      app.ticker.remove(animate);
    }
  };
  app.ticker.add(animate);
};

// fadeOut(lemon, 1000, () => {
//   console.log('Hello');
//   fadeIn(lemon, 1000);
// });

const translateX = (sprite, distance, time, callback) => {
  const direction = distance > 0 ? 1 : -1;
  const value = distance / (time / app.ticker.deltaMS);
  console.log('value', value);
  let x = 0;
  const animate = (delta) => {
    x += value;
    sprite.x += value;
    if (direction*x >= direction*distance) {
      if(callback && typeof callback === 'function'){
        callback();
      }
      app.ticker.remove(animate);
    }
  };
  app.ticker.add(animate);
};

// translateX(lemon, -100, 3000, () => {
//   console.log('Callback translateX');
// });


