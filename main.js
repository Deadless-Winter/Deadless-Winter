
  const toggleButton1 = document.getElementById('obch');
  const toggleButton2 = document.getElementById('game');
  const toggleButton3 = document.getElementById('predi');
  const textContainer1 = document.getElementById('t1');
  const textContainer2 = document.getElementById('t2');
  const textContainer3 = document.getElementById('t3');

  toggleButton1.addEventListener('click', () => {
    if (textContainer1.style.display === 'none') {
      textContainer1.style.display = 'flex'; // Показываем текст
      textContainer2.style.display = 'none'; // Скрываем текст
      textContainer3.style.display = 'none'; // Скрываем текст
    } else {
      textContainer2.style.display = 'none'; // Скрываем текст
      textContainer3.style.display = 'none'; // Скрываем текст
    }
  });
 toggleButton2.addEventListener('click', () => {
    if (textContainer2.style.display === 'none') {
      textContainer2.style.display = 'flex'; // Показываем текст
      textContainer1.style.display = 'none'; // Скрываем текст
      textContainer3.style.display = 'none'; // Скрываем текст
    } else {
      textContainer1.style.display = 'none'; // Скрываем текст
      textContainer3.style.display = 'none'; // Скрываем текст
    }
  });
 toggleButton3.addEventListener('click', () => {
    if (textContainer3.style.display === 'none') {
      textContainer3.style.display = 'flex'; // Показываем текст
      textContainer1.style.display = 'none'; // Скрываем текст
      textContainer2.style.display = 'none'; // Скрываем текст
    } else {
      textContainer1.style.display = 'none'; // Скрываем текст
      textContainer2.style.display = 'none'; // Скрываем текст
    }
  });
  