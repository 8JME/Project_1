console.log('index.js connected');

// This last page visited button is connected to ai-research.html
const goBackToLastPage = () => {
  history.back();
}
const animatedRobot = document.getElementById("back-btn");
animatedRobot.addEventListener("click",goBackToLastPage);
// This hints the user to click the animated robot to go to the previous page visited.
const buttonHint = () => {
  let ua = navigator.userAgentData.platform;
  if (ua == '') {
    ua = 'friendly';
  }
  alert(`Hi ${ua} user, click the ${'🤖'} above to go back, not me ${'😬'}`);
}
const btnHintText = document.getElementById("gb-text");
btnHintText.addEventListener("click", buttonHint);