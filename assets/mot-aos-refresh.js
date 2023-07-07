window.addEventListener('scroll', throttle(aosRefresh, 2000));

function throttle(fn, wait) {
  var time = Date.now();

  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function aosRefresh() {
  if (window.AOS) {
    AOS.refresh();
  }
}