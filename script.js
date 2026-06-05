
function bound(id) {
  const targetText = document.getElementById(id);
  if (!targetText) return;

  const chars = targetText.textContent.split('');
  targetText.textContent = '';

  const spanElements = [];

  chars.forEach((char, index) =>{
    const span = document.createElement('span');
    if (char === ' ') {
      span.innerHTML = '&nbsp;';
    } else {
      span.textContent = char;
    }

    span.style.display = 'inline-block';
    targetText.appendChild(span);
    spanElements.push(span);
  });

  let time = 0;
  const jumpDuration = Math.PI;

  function animate() {
    time += 0.1;

    spanElements.forEach((span, index) => {
      const startTime = index * jumpDuration/3;

      const progress = time - startTime;

      let bounce = 0;

      if (progress >= 0 && progress <= jumpDuration) {
        bounce = Math.sin(progress) * 10;
      }

      span.style.transform = `translateY(${-bounce}px)`;
    });

    const totalDuration = (spanElements.length - 1) * jumpDuration/3 + jumpDuration;
    if (time > totalDuration+50) {
      time = 0;
    }

    requestAnimationFrame(animate);
  }

  animate();
}

bound('myName', 0.1);