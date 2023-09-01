<template>
  <div>
    <header>
      <div class="" style="background-color: rgba(255,253,250)">
        <div class="container">
          <nav class="navbar navbar-expand-lg ">
            <div class="container p-0">
              <a class="navbar-brand fw-bold d-flex" style="color: rgb(255,169,43);" href="#">
                {{ Logo.substring(0,5)}}
                <span class="text-dark px-1 d-flex align-items-center">{{Logo.substring(5)}}
                  <i class="material-icons" color="dark">code</i>
                </span>
              </a>
              <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button> -->
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Resume</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div class="row align-items-center">
                <div class="col-auto">
                  <a class="nav-link" href="#">DARK MODE</a>
                </div>
                <div class="col">
                  <div class="text-white py-1 px-4" style="background-color: rgb(255,169,43);border-radius: 20px;border: 2px solid #0000001B;">العربية</div>
                </div>
              </div>
            </div>
          </nav>
          <div class="row align-items-center justify-content-between py-3" style="min-height: 50vh;">
               <div class="col-md-6 col-sm-12">
                  <div class="fs-1 logo fw-bold">
                     FRONT END DEVELOPER
                  </div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nihil iure molestiae quibusdam illo ipsum, culpa asperiores aut 
                    temporibus quam aperiam velit veniam voluptatem aspernatur a? Debitis nobis corporis adipisci.
                  </p>
                  <div class="">
                        <button type="button" style="background-color: rgb(255,169,43);" class="btn text-white px-5">Secondary</button>
                  </div>
               </div>
               <div class="col-md-5 col-sm-12">
                  <img class="py-5" style="mix-blend-mode: multiply;width: 100%;"  src="https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7B%0A%20%20type%3A%20%27doughnut%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data%3A%20%5B94%2C%2025%2C%2072%2C%2070%2C%2014%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%2099%2C%20132)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%20159%2C%2064)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%20205%2C%2086)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(75%2C%20192%2C%20192)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(54%2C%20162%2C%20235)%27%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20label%3A%20%27Dataset%201%27%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20labels%3A%20%5B%27Red%27%2C%20%27Orange%27%2C%20%27Yellow%27%2C%20%27Green%27%2C%20%27Blue%27%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20title%3A%20%7B%0A%20%20%20%20%20%20display%3A%20true%2C%0A%20%20%20%20%20%20text%3A%20%27Chart.js%20Doughnut%20Chart%27%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D%0A" height="100%" alt="...">
              </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
<script setup>
  const Logo = 'AHMED WAEL';
</script>

<style lang="scss">

.logo::after{
  content: '';
  display: block;
  margin-bottom: 15px;
  transform: translate(0px,-9px);
  width: 230px;
  height: 4px;
  background-color:  rgb(255,169,43);
}

.line{
  height: 1.5px;
  background-color:  rgba(255, 170, 43, 0.293);
}


</style>