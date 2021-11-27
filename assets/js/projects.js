
$.getJSON("data.json", function(data) {

    // Show projects in homepage
    if(document.querySelector('[data-container="projects"]')){
        const container = document.querySelector('[data-container="projects"]');
    
        let allCards = "";
        data.myProjects.forEach(project => {
            allCards += '<div class="col-12 col-sm-6 col-md-4 my-2" data-aos="fade-up" data-aos-delay="200" ><div class="card"><img class="card-img-top" src="'+project.image+'" alt="Card image" /><div class="card-body"><h4 class="text-orange text-uppercase card-title">' + project.title + '</h4><p class="de card-text">'+project.description+'</p><a href="/project.html?id='+project.id+'" class="btn btn-danger">See Profile</a></div></div></div>';
        });
        container.innerHTML = allCards;
    }

    // Show project data
    var url_string = window.location.href; 
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    console.log(id);

    document.querySelector('[data-text="title"]').innerHTML= data.myProjects[id-1].title;
});