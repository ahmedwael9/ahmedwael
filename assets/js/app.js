AOS.init({
    duration: 900,
    once: true,
    mirror: true
});


// Save EN default language
if (!document.cookie.indexOf("language=") >= 0) {
  // set a new cookie
  expiry = new Date();
  expiry.setTime(expiry.getTime()+(10*60*36000)); // Ten minutes
  document.cookie = "language=en; expires=" + expiry.toGMTString();
}


$.getJSON(`assets/lang/${getCookie("language")}.json`, function(data) {
    setTextLang(data);
});


//change language ON CLICK
document.querySelector('[data-button="langChange"]').addEventListener('click',function(){
    let currentLanguage = getCookie("language");
    // Get time
    expiry = new Date();
    expiry.setTime(expiry.getTime()+(10*60*36000)); // Ten minutes
    if(currentLanguage=='en'){
        document.cookie = "language=ar; expires=" + expiry.toGMTString();
    }
    else {
        document.cookie = "language=en; expires=" + expiry.toGMTString();
    }
    $.getJSON(`assets/lang/${getCookie("language")}.json`, function(data) {
        setTextLang(data);
    });
});


function setTextLang(data){
    document.querySelector('[data-text="navbar-homepage"]').innerHTML=data.navbar_homepage;
    

}


function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}



// document.getElementById('name');
// document.getElementsByClassName('name');
// document.getElementsByTagName('p');


// // document.querySelectorAll('p');
// var p = document.querySelectorAll('p');
// p.style.color="red"
// console.log(p);

// function show(){
//     alert("cfhcfh");
// }

// document.getElementById("obay").addEventListener('click', function(){
//     show();
// })

// function getname() {
//     p.forEach(element => {
//         element.innerHTML = "<h1>obay</h1>";
//     });
// }

