function switchCartVisible() {
  const element = document.getElementById('OpenCart')
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}