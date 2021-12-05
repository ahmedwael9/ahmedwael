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
  if(getCookie("language")=="en"){
    document.querySelector('body').setAttribute("dir", "ltr");
    document.querySelector('#bootstrap').setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
  }
  else {
    document.querySelector('body').setAttribute("dir", "rtl")
    document.querySelector('#bootstrap').setAttribute("href", "https://cdn.rtlcss.com/bootstrap/v4.5.3/css/bootstrap.min.css");
  }
  document.querySelector('[data-text="navbar-logo"]').innerHTML=data.navbar_logo;
  document.querySelector('[data-text="navbar-homepage"]').innerHTML=data.navbar_homepage;
  document.querySelector('[data-text="navbar-projects"]').innerHTML=data.navbar_projects;
  document.querySelector('[data-text="navbar-language"]').innerHTML=data.navbar_language;
  // If homepage
  if(document.querySelector('[data-text="intro-name"]')) {
    document.querySelector('[data-text="intro-name"]').innerHTML=data.inrto_name;
    document.querySelector('[data-text="intro-myname"]').innerHTML=data.inrto_myname;
    document.querySelector('[data-text="intro-jop"]').innerHTML=data.intro_jop;
    document.querySelector('[data-text="intro-description"]').innerHTML=data.intro_description;
    document.querySelector('[data-text="intro-description"]').innerHTML=data.intro_description;
    document.querySelector('[data-text="intro-buttonWork"]').innerHTML=data.intro_buttonWork;
    document.querySelector('[data-text="intro-buttonresume"]').innerHTML=data.intro_buttonresume;
    document.querySelector('[data-text="intro-ido"]').innerHTML=data.intro_ido;
    document.querySelector('[data-text="intro-idoDescription"]').innerHTML=data.intro_idoDescription;
    document.querySelector('[data-text="card-titleapp"]').innerHTML=data.card_titleapp;
    document.querySelector('[data-text="card-descriptionapp"]').innerHTML=data.card_descriptionapp;
    document.querySelector('[data-text="card-titlemobile"]').innerHTML=data.card_titlemobile;
    document.querySelector('[data-text="card-descriptionmobile"]').innerHTML=data.card_descriptionmobile;
    document.querySelector('[data-text="card-titleweb"]').innerHTML=data.card_titleweb;
    document.querySelector('[data-text="card-descriptionweb"]').innerHTML=data.card_descriptionweb;
  }
   // Show projects in homepage
    if(document.querySelector('[data-container="projects"]')){
        const container = document.querySelector('[data-container="projects"]');
    
        let allCards = "";
        data.myProjects.forEach(project => {
            allCards += `
            <div class="col-12 col-sm-6 col-md-4 my-2" data-aos="fade-up" data-aos-delay="200" >
                <div class="card">
                    <div class="mockup"style="background-image: url(${project.image});"></div>
                    <div class="cardbody card-body">
                    <div>
                    <h4 class="text-orange text-uppercase card-title">${ project.title} </h4>
                    <p class="description card-text">${project.description}</p>
                    
                    </div>
                        <a href="/project.html?id=${project.id}" class="seeprofile btn btn-danger mt-2">See Profile</a>
                    </div>
                </div>
            </div>`;
        });
        container.innerHTML = allCards;
    }

    // Show project data
    var url_string = window.location.href; 
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    id--;

     document.querySelector('[data-text="projectTitle"]').innerHTML= data.myProjects[id].title;
     document.querySelector('[data-text="projectDescription"]').innerHTML= data.myProjects[id].description;
    const containerMedia=document.querySelector('[data-container="media"]');
    let imges="";
    imges+=`<div data-aos="fade-up"><img src="${data.myProjects[id].image}" class="w-100 py-2" alt=""></div>`;
    data.myProjects[id].media.forEach(element => {
        imges+=`<img src="${element}" class="w-100 py-2" alt="">`;
    });
     containerMedia.innerHTML= imges
}

window.onload = function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })
};

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

