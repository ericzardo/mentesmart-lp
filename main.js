import { toggleAnswer } from "./src/utils/toggleAnswer.js";
import { updateTimer } from "./src/utils/updateTimer.js";
import { updateForIOS } from "./src/utils/updateForIOS.js";
import { observer } from "./src/utils/observer.js";

document.addEventListener('DOMContentLoaded', function () {

  const offerTimerSeconds = 60 * 13 + 37;
  updateTimer(offerTimerSeconds);

  window.addEventListener('resize', updateForIOS);
  updateForIOS()

  document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
      toggleAnswer(question);
    });
  });

  const hiddenLeftElements = document.querySelectorAll(".hidden-left");
  hiddenLeftElements.forEach((el) => observer.observe(el));

  const hiddenRightElements = document.querySelectorAll(".hidden-right");
  hiddenRightElements.forEach((el) => observer.observe(el));

  const hiddenBottomElements = document.querySelectorAll(".hidden-bottom");
  hiddenBottomElements.forEach((el) => observer.observe(el));

  const hiddenTopElements = document.querySelectorAll(".hidden-top");
  hiddenTopElements.forEach((el) => observer.observe(el));
  
});

