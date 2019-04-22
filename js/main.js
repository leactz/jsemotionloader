const btn = document.querySelectorAll('button');
for (let i = 0; i < btn.length; i++) {
  const emotion = btn[i].innerHTML.toLowerCase();
  btn[i].addEventListener('click', function loadEmotion(){
    window.scrollTo(0, 0);
    const expr = document.querySelector('.emoji');
    const status = document.querySelector('.status');
    expr.classList = "emoji"
    expr.classList.add(emotion);
    status.innerHTML = 'Bezil is ' + emotion + '!';
     if (emotion == 'obnoxious') {
       status.innerHTML += ' Please be reasonable, Bezil.';
     } else if ( emotion == 'excited') {
       status.innerHTML += ' Yay Bezil!';
     } else if (emotion == 'bored') {
       status.innerHTML += ' Zzz...';   
     }
  });
}
