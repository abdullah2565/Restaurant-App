let bodyy = document.getElementById('bodydiv')

let btnn = document.getElementById('explorebtn')

let loder = document.getElementById('loder')

let main = document.getElementById('main')

btnn.addEventListener('click' , function loader(){
  main.style.display= 'none';
  loder.style.display = 'flex'
  bodyy.style.backgroundColor = ' rgba(0, 0, 0, 0.9)';

  setTimeout(function(){
     window.location.href = 'burger.html'

  },3500)
})
