function showAlert() {
  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    // 👉️ can use alert()
  } else {
    console.log('You are on the server')
    // 👉️ can't use alert()
  }
  alert("今日も楽しく開発しよう！");  // alertでエラーが出る
}

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'test1') {
    showAlert();
  } else if (command === 'test2') {
    showAlert();
  }
});