document.addEventListener('click', function () {
  const shareButton = document.querySelector('.share-icon-bg');
  const shareSection = document.querySelector('.share');

  shareButton.addEventListener('click', function () {
    shareSection.classList.toggle('hidden');
  });
});