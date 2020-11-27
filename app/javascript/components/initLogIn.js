
  console.log("loaded log-in");
  let sighnUpButton = document.querySelector('#signUp');
let sighnInButton = document.querySelector('#signIn');
let container = document.querySelector('#container');

if (sighnUpButton) {
  sighnUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
   });
}
if (sighnInButton) {
  sighnInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
   });
}


