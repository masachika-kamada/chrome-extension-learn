function showAlert() {
  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    // ποΈ can use alert()
  } else {
    console.log('You are on the server')
    // ποΈ can't use alert()
  }
  alert("δ»ζ₯γζ₯½γγιηΊγγγοΌ");  // alertγ§γ¨γ©γΌγεΊγ
}

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'test1') {
    showAlert();
  } else if (command === 'test2') {
    showAlert();
  }
});