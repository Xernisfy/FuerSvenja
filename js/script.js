'use strict';
(() => {
  document.addEventListener('DOMContentLoaded', () => {
    function s(e, as) {
      for (let a in as) {
        if (as[a].constructor.name === 'Object') {
          s(e[a], as[a]);
        } else {
          e[a] = as[a];
        }
      }
    }
    function c(t, p, a) {
      let e = document.createElement(t);
      if (p) {
        p.appendChild(e);
      }
      if (a) {
        s(e, a);
      }
      return e;
    }
    s(document.body, {
      style: {
        fontFamily: 'Dancing Script',
        backgroundColor: 'lightPink',
        overflow: 'hidden'
      }
    });
    let spawnInterval, roses, phrase1, phrase2, phrase3, phrase1Timeout, phrase2Timeout, phrase3Timeout;
    const cont = c('div', document.body);
    class Rose {
      constructor() {
        this.tag = c('img', cont, {
          id: 'rose',
          src: 'png/rose.png',
          style: {
            position: 'absolute',
            left: (Math.random() * (window.innerWidth - 490)) + 'px',
            top: (Math.random() * (window.innerHeight - 410)) + 'px',
            opacity: '0',
            zIndex: '0'
          }
        });
      }
    }
    function resize() {
      clearInterval(spawnInterval);
      clearTimeout(phrase1Timeout);
      clearTimeout(phrase2Timeout);
      clearTimeout(phrase3Timeout);
      cont.innerHTML = '';
      phrase1Timeout = setTimeout(() => {
        phrase1 = c('p', cont, {
          className: 'phrase',
          innerText: 'Weißt du, was mich glücklich macht?',
          style: {
            top: '10vh',
            position: 'absolute',
            width: '100%',
            fontSize: '6vw',
            fontWeight: 'normal',
            textShadow: '0px 0px 4px white',
            textAlign: 'center',
            zIndex: '1'
          }
        });
      }, 3000);
      phrase2Timeout = setTimeout(() => {
        phrase2 = c('p', cont, {
          className: 'phrase',
          innerText: 'Dann lies das zweite Wort nochmal  :D',
          style: {
            whiteSpace: 'pre',
            top: '25vh',
            position: 'absolute',
            width: '100%',
            fontSize: '6vw',
            fontWeight: 'normal',
            textShadow: '0px 0px 4px white',
            textAlign: 'center',
            zIndex: '1'
          }
        });
      }, 8000);
      phrase3Timeout = setTimeout(() => {
        phrase3 = c('h1', cont, {
          className: 'phrase',
          innerText: 'Alles Gute zum Valentinstag Svenja',
          style: {
            top: '50vh',
            position: 'absolute',
            width: '100%',
            color: 'gold',
            fontSize: '6vw',
            fontWeight: 'normal',
            textShadow: '2px 2px 2px black',
            textAlign: 'center',
            zIndex: '1'
          }
        });
      }, 15000);
      roses = [];
      roses.push(new Rose());
      spawnInterval = setInterval(() => {
        if (roses.length < 12) {
          roses.push(new Rose());
        } else {
          delete roses[0];
          roses.shift();
          roses.push(new Rose());
        }
      }, 2000);
    }
    window.addEventListener('resize', resize);
    resize();
  });
})();
