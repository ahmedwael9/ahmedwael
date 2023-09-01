<template>
  <div>
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="text-center pb-5 ">
            <div class="fs-2 fw-bold">
              SERVICE
            </div>
            <div  style="display: inline-block;">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. At neque, eaque ipsam aut quos necessitatibus tempore odio ab voluptates
            </div>
          </div>
           <div class="col-md-8 col-lg-8 col-sm-12">
              <div class="row">
                <div v-for="n in 3" :key="n" class="col-md-4 col-lg-4 col-sm-12 mb-4">
                <div class="p-4 d-flex align-items-center card-service" style="background-color:  rgba(255,253,250);min-height: 330px;border-radius: 4px;border: 1.5px solid  rgba(255, 170, 43, 0.293);">
                   <div class="">
                      <div class="">
                         <div class="mb-3 d-flex align-items-center justify-content-center icon-circle" style="height:60px;width:60px;border-radius: 50%;background-color:rgb(255,169,43);color: #ffffff;">
                            <i class="material-icons"  color="white">menu</i>
                        </div>
                      </div>
                      <div class="fs-4 fw-bold title">
                        Front End 
                        <div class="">Developer.</div>
                      </div>
                      <div class="f-6 py-3 description">Lorem ipsum dolor sit amet consectetur, adipisicing elit</div>
                   </div>
                </div>
              </div>
              </div>
           </div>
        </div>
      </div>
      <div v-for="(project,index) in projects">
          <div :class="'slide'+index" :style="{backgroundColor:project.bgColor}">
              <div class="container">
                  <div style="height: 100vh;" class="row justify-content-between align-items-center text-white">
                  <div class="col-md-6 col-sm-12">
                      <div class="fs-1 fw-bold"> {{ project.name }}</div>
                      <p class="">{{ project.description }}</p>
                      <div class="">
                          <button type="button" class="btn btn-outline-light px-5">Secondary</button>
                      </div>
                  </div>
                    <div class="col-md-5 col-sm-12">
                      <img src="https://visualhunt.com/img/no-photo-available.png" style="width: 100%"  alt="...">
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="text-center pb-4">
            <div class="fs-2 fw-bold">
              CONTACT ME
            </div>
            <div style="display: inline-block;">
               Lorem ipsum, dolor sit amet consectetur adipisicing 
            </div>
          </div>
           <div class="col-md-8 col-lg-8 col-sm-12">
              <div class="row">
                <div class="">
                  <form class="was-validated">
                    <div class="mb-3">
                      <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                      <div class="invalid-feedback">
                        Please enter a message in the textarea.
                      </div>
                    </div>
                    <div class="mb-3">
                      <select class="form-select" required aria-label="select example">
                        <option value="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div class="invalid-feedback">Example invalid select feedback</div>
                    </div>
                    <div class="mb-3 text-center">
                      <button type="submit" style="background-color: rgb(255,169,43);" class="btn text-white px-5">Secondary</button>
                    </div>
                  </form>
                </div>
              </div>
           </div>
        </div>
      </div>
  </div>
</template>

<script setup>

const projects=[
  {
    name:'UOP CENTER',
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nihil iure molestiae quibusdam illo ipsum, culpa asperiores aut 
                 temporibus quam aperiam velit veniam voluptatem aspernatur a? Debitis nobis corporis adipisci.`,
    bgColor:'#363636',
    img:'',
    link:''
  },
  {
    name:'BNT ALKALEG',
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nihil iure molestiae quibusdam illo ipsum, culpa asperiores aut 
                 temporibus quam aperiam velit veniam voluptatem aspernatur a? Debitis nobis corporis adipisci.`,
    bgColor:'#222222',
    img:'',
    link:''
  }
]

</script>
<style>
.card-service{
  transition: all 0.5s;
}
 .card-service:hover{
  transform: translateY(-15px);
  background-color:rgb(255,169,43) !important;
  .title , .description{
    color: rgb(255, 255, 255);
  }
  .icon-circle{
    background-color:rgb(255, 255, 255) !important;
    color: rgb(255,169,43) !important;;
  }
 }

</style>