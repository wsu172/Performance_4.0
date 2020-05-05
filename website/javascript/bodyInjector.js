
     var  updateInfo = function () {
         console.log('in body injector');
         document.getElementById('oldBody').innerHTML = '';
         var xhttp = new XMLHttpRequest();

         xhttp.open("GET", "/homePage", false);
         xhttp.send();
         document.getElementById('oldBody').innerHTML = xhttp.responseText;

     }