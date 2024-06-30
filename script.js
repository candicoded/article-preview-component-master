const shareBtnLight = document.querySelector('.share-icon-light');
const shareBtnDark = document.querySelector('.share-icon-dark');
const shareSection = document.querySelector('.share-section');
const authorSection = document.querySelector('.author-section');

shareBtnLight.addEventListener('click', () => {
  shareSection.classList.toggle("hidden")
  authorSection.classList.toggle("hidden")
})

shareBtnDark.addEventListener('click', () => {
  authorSection.classList.toggle("hidden")
  shareSection.classList.toggle("hidden")
})