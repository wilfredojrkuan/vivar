window.addEventListener('load', function() {
    setTimeout(function() {
        insertCopyBtn();
    }, 5000);
});

function insertCopyBtn() {
  var exIntPopElem = document.getElementById("exitp");

  if (exIntPopElem) {
    var discountCodeElement = exIntPopElem.querySelector("h1:last-child");

    if (discountCodeElement) {
      discountCodeElement.style["margin-bottom"] = "18px";
      discountCodeElement.style["padding-bottom"] = "0!important";

      var newCopyBtn = document.createElement('button');
    
      newCopyBtn.innerHTML = "CODE KOPIEREN";
      newCopyBtn.style["border"] = "solid 1px #ffffff";
      newCopyBtn.style["font-size"] = "12px";
      newCopyBtn.style["padding"] = "7px";

      newCopyBtn.onclick = function() {
        navigator.clipboard.writeText(discountCodeElement.innerHTML.trim());
        
        newCopyBtn.innerHTML = 'CODE KOPIERT!<span style="margin-left: 10px; color: green;"><b>✓</b></span>';
      }

      discountCodeElement.parentNode.insertBefore(newCopyBtn, discountCodeElement.nextSibling);
    }
  }
}