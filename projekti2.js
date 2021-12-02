//luodaan tarvittavat muuttujat
var tekeminen,
    tunnit,
    kTunnit,
    ktTunnit,
    tyoTunnit,
    urheiluTunnit,
    muuharTunnit,
    muuTunnit;

//tallennetaan tekemisen arvo
$("select#tekeminen").change(function(){
    tekeminen = document.getElementById("tekeminen").value;
    console.log(tekeminen);
});

//vaihdetaan input-fieldin väriä siinä ollessa
$("input#tunnit").focus(function(){
    $("input#tunnit").css("background-color", "#ccc");
});

$("input#tunnit").blur(function(){
    $("input#tunnit").css("background-color", "#fff");
});

//tallennetaan tunnit local storageen
$("input#submit").click(function(){
    tunnit = document.querySelector("#tunnit").value;
    console.log(tunnit);

    if(localStorage.length > 0) {

        if(tekeminen === "koulu") {

            if(parseInt(localStorage.getItem("kTunnit" )) === 0 || localStorage.getItem("kTunnit") == null) {
                kTunnit = parseInt(tunnit);
                localStorage.setItem("kTunnit", kTunnit);
            } else if (parseInt(localStorage.getItem("kTunnit" )) === 1) {
                kTunnit = parseInt(tunnit) + 1;
                localStorage.setItem("kTunnit", kTunnit);
            } else if (localStorage.getItem("kTunnit") > 1){
                kTunnit = parseInt(localStorage.getItem("kTunnit"));
                kTunnit += parseInt(tunnit);
                localStorage.setItem("kTunnit", kTunnit);
            } else {
                localStorage.setItem("kTunnit", "0");
            }

            console.log(localStorage.getItem("kTunnit"));
        }

        if(tekeminen === "kotitehtavat") {

            if(parseInt(localStorage.getItem("ktTunnit" )) === 0 || localStorage.getItem("ktTunnit") == null) {
                ktTunnit = parseInt(tunnit);
                localStorage.setItem("ktTunnit", ktTunnit);
            } else if (parseInt(localStorage.getItem("ktTunnit" )) === 1) {
                ktTunnit = parseInt(tunnit) + 1;
                localStorage.setItem("ktTunnit", ktTunnit);
            } else if (localStorage.getItem("ktTunnit") > 1){
                ktTunnit = parseInt(localStorage.getItem("ktTunnit"));
                ktTunnit += parseInt(tunnit);
                localStorage.setItem("ktTunnit", ktTunnit);
            } else {
                localStorage.setItem("ktTunnit", "0");
            }

            console.log(localStorage.getItem("ktTunnit"));
        }

        if(tekeminen === "tyo") {

            if(parseInt(localStorage.getItem("tyoTunnit" )) === 0 || localStorage.getItem("tyoTunnit") == null) {
                tyoTunnit = parseInt(tunnit);
                localStorage.setItem("tyoTunnit", tyoTunnit);
            } else if (parseInt(localStorage.getItem("tyoTunnit" )) === 1) {
                tyoTunnit = parseInt(tunnit) + 1;
                localStorage.setItem("tyoTunnit", tyoTunnit);
            } else if (localStorage.getItem("tyoTunnit") > 1){
                tyoTunnit = parseInt(localStorage.getItem("tyoTunnit"));
                tyoTunnit += parseInt(tunnit);
                localStorage.setItem("tyoTunnit", tyoTunnit);
            } else {
                localStorage.setItem("tyoTunnit", "0");
            }

            console.log(localStorage.getItem("tyoTunnit"));
        }

        if(tekeminen === "urheilu") {

            if(parseInt(localStorage.getItem("urheiluTunnit" )) === 0 || localStorage.getItem("urheliTunnit") == null) {
                urheiluTunnit = parseInt(tunnit);
                localStorage.setItem("urheiluTunnit", urheiluTunnit);
            } else if (parseInt(localStorage.getItem("urheiluTunnit" )) === 1) {
                urheiluTunnit = parseInt(tunnit) + 1;
                localStorage.setItem("urheiluTunnit", urheiluTunnit);
            } else if (localStorage.getItem("urheiluTunnit") > 1){
                urheiluTunnit = parseInt(localStorage.getItem("urheiluTunnit"));
                urheiluTunnit += parseInt(tunnit);
                localStorage.setItem("urheiluTunnit", urheiluTunnit);
            } else {
                localStorage.setItem("urheiluTunnit", "0");
            }

            console.log(localStorage.getItem("urheiluTunnit"));
        }

        if(tekeminen === "muuHarrastus") {

            if(parseInt(localStorage.getItem("muuharTunnit" )) === 0 || localStorage.getItem("muuharTunnit") == null) {
                muuharTunnit = parseInt(tunnit);
                localStorage.setItem("muuharTunnit", muuharTunnit);
            } else if (parseInt(localStorage.getItem("muuharTunnit" )) === 1) {
                muuharTunnit = parseInt(tunnit) + 1;
                localStorage.setItem("muuharTunnit", muuharTunnit);
            } else if (localStorage.getItem("muuharTunnit") > 1){
                muuharTunnit = parseInt(localStorage.getItem("muuharTunnit"));
                muuharTunnit += parseInt(tunnit);
                localStorage.setItem("muuharTunnit", muuharTunnit);
            } else {
                localStorage.setItem("muuharTunnit", "0");
            }

            console.log(localStorage.getItem("muuharTunnit"));
        }

        if(tekeminen === "muu") {

            if(parseInt(localStorage.getItem("muuTunnit" )) === 0 || localStorage.getItem("muuTunnit") == null) {
                muuTunnit = parseInt(tunnit);
                localStorage.setItem("muuTunnit", muuTunnit);
            } else if (parseInt(localStorage.getItem("muuTunnit" )) === 1) {
                muuTunnit = parseInt(tunnit) + 1;
                localStorage.setItem("muuTunnit", muuTunnit);
            } else if (localStorage.getItem("muuTunnit") > 1){
                muuTunnit = parseInt(localStorage.getItem("muuTunnit"));
                muuTunnit += parseInt(tunnit);
                localStorage.setItem("muuTunnit", muuTunnit);
            } else {
                localStorage.setItem("muuTunnit", "0");
            }

            console.log(localStorage.getItem("muuTunnit"));
        }

    } 
});

//näytetään tehdyt tunnit
$("button#nayta").click(function(){
    $("#otsikko").empty();
    $("#otsikko").append("Tässä näet paljonko olet tehnyt mitäkin");

    $("#kouluNaytto").empty();
    $("#kouluNaytto").append("Käynyt koulua " + localStorage.getItem("kTunnit") + " tuntia");

    $("#ktNaytto").empty();
    $("#ktNaytto").append("Tehnyt kotitehtäviä " + localStorage.getItem("ktTunnit") + " tuntia");

    $("#tyoNaytto").empty();
    $("#tyoNaytto").append("Tehnyt töitä " + localStorage.getItem("tyoTunnit") + " tuntia");

    $("#urheiluNaytto").empty();
    $("#urheiluNaytto").append("Urheillut " + localStorage.getItem("urheiluTunnit") + " tuntia");

    $("#muuharNaytto").empty();
    $("#muuharNaytto").append("Tehnyt muita harrastuksia " + localStorage.getItem("muuharTunnit") + " tuntia");

    $("#muuNaytto").empty();
    $("#muuNaytto").append("Tehnyt jotain muuta " + localStorage.getItem("muuTunnit") + " tuntia");
});