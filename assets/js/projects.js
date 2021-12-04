
$.getJSON("data.json", function(data) {

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
});