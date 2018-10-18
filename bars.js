const bars = document.querySelectorAll('.bar');
const progress = document.querySelectorAll('.progress');
// bars[1].style.width = '50%';
// console.log(bars[1].style.width);

bars.forEach((bar, index) => {
  const randomWidth = Math.floor((Math.random() * 65) + 20);
  bar.style.width = `${randomWidth}%`;

  progress[index].addEventListener('mouseover', () => {
    const randomTiming = Math.floor((Math.random() * 3) + 2);
    console.log(randomTiming);
    bar.style.transitionDuration = `${randomTiming}s`;
    bar.style.width = '100%';
  });
})
