var slider = document.getElementById('slider'),
    root = document.getElementsByTagName( 'html' )[0],
    op = document.getElementById('op');

slider.onchange = function () {
  root.style.fontSize = this.value + 'px';
  op.innerHTML = this.value + 'px';
}