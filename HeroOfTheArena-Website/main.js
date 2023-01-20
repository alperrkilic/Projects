

const animateIdle = (charName) => `image/Character Gifs/${charName}/idle.gif`;
const animateAtk = (charName) => `image/Character Gifs/${charName}/atk.gif`;

const addAnimation = () => {
  const charImgs = [
    document.getElementById('fire-knight'),
    document.getElementById('leaf-archer'),
    document.getElementById('water'),
    document.getElementById('wind'),
    document.getElementById('ground-monk'),
    document.getElementById('blade-keeper'),
  ];
  const charNames = ['Fire-Knight', 'Leaf-Archer', 'Water', 'Wind', 'Ground-Monk', 'Blade-Keeper'];
  for (let index = 0; index < charImgs.length; index++) {
    charImgs[index].addEventListener('mouseenter', () => {
      charImgs[index].src = animateAtk(charNames[index]);
    });
    charImgs[index].addEventListener('mouseleave', () => {
      charImgs[index].src = animateIdle(charNames[index]);
    });
  }
};

addAnimation();

// bladeKeeper.addEventListener('mouseenter', () => {
//   bladeKeeper.src = 'image/Character Gifs/Blade-Keeper/atk.gif';
// });

// bladeKeeper.addEventListener('mouseleave', () => {
//   bladeKeeper.src = 'image/Character Gifs/Blade-Keeper/idle.gif';
// });

// const head = document.querySelector('.main');
// const items = [...head.children];

// const getLayer = (item) => `image/background/Hills/Hills Layer 0${item}.png`;

// const initLeftAndRightLayers = () => {
//   for (let i = 0; i < 3; i += 2) {
//     for (let j = 0; j < 6; j++) {
//       const layer = new Image();
//       layer.src = getLayer(j + 1);
//       layer.className += 'bg-image';
//       items[i].appendChild(layer);
//     }
//   }
// };

// const initMidLayer = () => {
//   for (let i = 0; i < 2; i++) {
//     const div = document.createElement('div');
//     div.className += 'wrap';

//     for (let j = 0; j < 6; j++) {
//       const layer = new Image();
//       layer.src = getLayer(j + 1);
//       layer.className += 'bg-image';
//       layer.style.transform = `translateX(0)`;
//       div.appendChild(layer);
//     }
//     items[1].appendChild(div);
//   }
// };

// initLeftAndRightLayers();
// initMidLayer();

// /* TODO
// const firstWrap = document.querySelectorAll('.wrap')[0];
// const secondWrap = document.querySelectorAll('.wrap')[1];

// const moveLayerToRight = () => {
//   let lastPosition = firstWrap.children[0].style.transform.split('(')[1].split('px')[0];
//   firstWrap.children[0].style.transform = `translateX(${parseInt(lastPosition) + 1}px)`;

//   if (lastPosition > 400) {
//     firstWrap.children[0].style.transform = `translateX(0px)`;
//   }

//   lastPosition = secondWrap.children[0].style.transform.split('(')[1].split('px')[0];
//   secondWrap.children[0].style.transform = `translateX(${parseInt(lastPosition) + 1}px)`;

//   if (lastPosition > 400) {
//     secondWrap.children[0].style.transform = `translateX(-160px)`;
//   }
// };
// */
