const bars = document.querySelectorAll('.bar');
const progress = document.querySelectorAll('.progress');

bars.forEach((bar, index) => {
  const randomWidth = Math.floor((Math.random() * 65) + 10);
  bar.style.width = `${randomWidth}%`;

  progress[index].addEventListener('mouseover', () => {
    const randomTiming = Math.floor((Math.random() * 2) + 2);
    console.log(randomTiming);
    bar.style.transitionDuration = `${randomTiming}s`;
    bar.style.width = '100%';
  });
})
