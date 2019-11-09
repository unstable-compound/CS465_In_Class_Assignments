function updateWindowSize() {
  fun = () => {
    const heightOutput = document.querySelector("#height");
    const widthOutput = document.querySelector("#width");

    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
  };
  return fun;
}
