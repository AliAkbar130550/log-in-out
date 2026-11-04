const topp = document.querySelector('.top');
const bottom = document.querySelector('.bottom')
const signUp = document.querySelector('.signUp')
const signIn = document.querySelector('.signIn')


signUp.addEventListener('click', () => {
    topp.classList.toggle('active');
    bottom.classList.toggle('active');
})
signIn.addEventListener('click', () => {
    topp.classList.toggle('active');
    bottom.classList.toggle('active');
})