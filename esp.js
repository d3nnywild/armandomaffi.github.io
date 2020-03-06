const imgContent = document.querySelectorAll('.img-content-hover');
document.addEventListener('mousemove', showImgContent);

function showImgContent(event) {
  for(var i = 0; i < imgContent.length; i++) {
    imgContent[i].style.left = event.mouseX + 'px';
    imgContent[i].style.top = event.mouseY + 'px';
  }
};

console.log('bruh');

