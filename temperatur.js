window.onload = raknaUtMedelvarde;

function raknaUtMedelvarde(){

  var tabell = document.getElementById("temperaturtabell");
  var rader = tabell.getElementsByTagName("tr");

  for (var i = 1; i < rader.length; i++){
    var tabellceller = rader[i].getElementsByTagName("td");
    var medel = medelVarde(tabellceller);

    var medelText = document.createTextNode(medel);
    var medelelement = tabellceller[tabellceller.length-1];
    medelelement.appendChild(medelText);

  }
}

function medelVarde(celler){
  var summa = 0;
  for(var i = 1; i < celler. length -1; i++){
    var nuvarandeVarde = celler[i].firstChild.nodeValue;
    summa += parseInt(nuvarandeVarde);
  }
  var medel = summa / 5;
  return medel;
}

function hitta(){
  rensa();
  var  varde = parseInt(document.getElementById("varde").value);
  var tabell = document.getElementById("temperaturtabell");
  var rader = tabell.getElementsByTagName("tr");

  for ( var i = 0; i < rader.length; i++ ) {
    var tabellceller = rader[i].getElementsByTagName("td");
    if( harVarde(varde, tabellceller)){
      rader[i].className = "emp";
    }
  }
}

function harVarde(varde, celler){
  var harVarde = false;
  for ( var i = 0; i < celler.length - 1; i++ ){
    var nuvarandeVarde = parseInt(celler[i].firstChild.nodeValue);
    if(nuvarandeVarde >= varde){
      harVarde = true;
      celler[i].className = "emptd";
    }
  }
  return harVarde;
}

function rensa() {
  var tabell = document.getElementById("temperaturtabell");
  var rader = tabell.getElementsByTagName("tr");

  for( var i = 0; i < rader.length; i++ ){
    rader[i].className = "";
    var celler = rader[i].getElementsByTagName("td");
    for (var j = 1; j < celler.length - 1; j++){
      celler[j].className = "";
    }
  }
}
