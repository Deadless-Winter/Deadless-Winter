
  const Button1 = document.getElementById('but1');
  const Button2 = document.getElementById('but2');
  const Button3 = document.getElementById('but3');
  const text1 = document.getElementById('t1');
  const text2 = document.getElementById('t2');
  const text3 = document.getElementById('t3');
  const bl1 = document.getElementById('bl1')
  const bl2 = document.getElementById('bl2')
  const rp = document.getElementById('rp')
  const worldz = document.getElementById('worldz')
Button1.addEventListener('click',()=>{
  text1.style.display = 'flex'
  text2.style.display = 'none'
  text3.style.display = 'none'
})
Button2.addEventListener('click',()=>{
  text1.style.display = 'none'
  text2.style.display = 'flex'
  text3.style.display = 'none'
})
Button3.addEventListener('click',()=>{
  text1.style.display = 'none'
  text2.style.display = 'none'
  text3.style.display = 'flex'
})
rp.addEventListener('click',()=>{
  bl2.style.display = 'none'
  bl1.style.display = 'flex'
})
worldz.addEventListener('click',()=>{
  bl1.style.display = 'none'
  bl2.style.display = 'flex'
})