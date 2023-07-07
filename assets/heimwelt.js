document.addEventListener('page:loaded', function() {
  // Random Zahl kauf letzte 2 Monate
  
  // Überprüfen, ob das Element mit ID "demo" existiert
  if (document.getElementById("demo")) {
    // Überprüfen, ob die Zahl bereits im localStorage gespeichert ist
    if (localStorage.getItem("amountBoughtLastTwoMonth")) {
      // Wenn die Zahl im localStorage vorhanden ist, diese Zahl verwenden
      document.getElementById("demo").innerHTML = localStorage.getItem("amountBoughtLastTwoMonth");
    } else {
      // Wenn die Zahl noch nicht im localStorage vorhanden ist, eine zufällige Zahl zwischen 3000 und 10000 generieren und im localStorage speichern
      var amountBoughtLastTwoMonth = Math.floor(Math.random() * (10000 - 3000 + 1) + 3000);
      localStorage.setItem("amountBoughtLastTwoMonth", amountBoughtLastTwoMonth);
      document.getElementById("demo").innerHTML = amountBoughtLastTwoMonth;
    }
  }

  
});