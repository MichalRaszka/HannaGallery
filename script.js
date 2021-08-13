
//Opening Site Animation

anime({
    targets: '.square',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 10},
      {value: 1, easing: 'easeInOutQuad', duration: 1200},
    ],
    delay: anime.stagger(30, {grid: [5, 5], from: 'center'})
  });


  
//Animate Squares


  anime({
    targets: '#s29',
    scale: [
      1, 1.15
    ],
    loop: true,
    duration: 500,
    direction: 'alternate',
    delay: 1000
  });

  anime({
    targets: '#s137, #s75',
    scale: [
      1, 1.15
    ],
    loop: true,
    duration: 500,
    direction: 'alternate',
    delay: 3000
  });

  anime({
    targets: '#s33',
    scale: [
      1, 1.15
    ],
    loop: true,
    duration: 500,
    direction: 'alternate',
    delay: 2000
  });

  anime({
    targets: '#s97',
    scale: [
      1, 1.15
    ],
    loop: true,
    duration: 500,
    direction: 'alternate',
    delay: 1500
  });

  anime({
    targets: '#s47',
    scale: [
      1, 1.15
    ],
    loop: true,
    duration: 500,
    direction: 'alternate',
    delay: 1600
  });

  anime({
    targets: '#s36',
    scale: [
      1, 1.15
    ],
    loop: true,
    duration: 500,
    direction: 'alternate',
    delay: 2500
  });


  //Animations on hover   

  var animation = anime({
    targets: '.square',
    translateX: 270,
    delay: function(el, i) { return i * 100; },
    direction: 'alternate',
    loop: true,
    autoplay: false,
    easing: 'easeInOutSine'
  });
  
  document.querySelector('.play-pause-demo .play').onmouseover = animation.play;
  document.querySelector('.play-pause-demo .pause').onmouseout = animation.pause;