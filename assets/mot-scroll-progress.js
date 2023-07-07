window.addEventListener('scroll', throttle(processScroll, 5));

function throttle(fn, wait) {
  var time = Date.now();

  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function processScroll() {
  let docElem = document.documentElement, 
      docBody = document.body,
      scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
      scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
      scrollPercent = scrollTop / scrollBottom * 100,
      scrollPercentStr = scrollPercent + '%';

  var progBar = document.getElementById("progress-bar");
  
  if (progBar && scrollPercent > 3) {
    progBar.style.setProperty("--scrollAmount", scrollPercentStr);
  } else {
    progBar.style.setProperty("--scrollAmount", '0%');
  }
}