<template>
  <div class="layout">
    
<header class="header">
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand " href="#">
      <div class="">
          <g-link class="link" to="/#/" >
            <h3 class="themetext logo  fs-4 fw-bolder" >AHMAD WAEL</h3>
            <div class=" logo-des fs-7 fw-lighter">FullStack Developer</div>
          </g-link>
      </div>
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a  class="nav-link active "  href="#">{{data.navbar_homepage}}</a>
        </li>
        <li class="nav-item">
          <a  class="nav-link Projects " href="#"  >{{data.navbar_projects}}</a>
        </li>
        
        <li class="nav-item">
          <a id="lang" class=" nav-link " href="#">{{data.navbar_language}}</a>
        </li>
        
         <li id="theme" class="nav-item visually-hidden">
           <div class="nav-link bg-light mx-3" id="chang">
            <div class="d-flex align-items-center">
             <div class=""><button  type="button" class="btn btn-secondary p-2 mx-1"></button></div>
             <div class=""><button  type="button" class="btn btn-primary p-2 mx-1"></button></div>
             <div id="warning"><button  type="button" class="btn btn-warning p-2 mx-1"></button></div>
             <div class=""><button  type="button" class="btn btn-danger p-2 mx-1"></button></div>
            </div>
          </div>
        </li> 
        
        <li class="nav-item">
          <div>
           <button v-if="isTheme==true" type="button" class="btnth nav-link btn btn-outline-secondary h-100 "><i class="bi bi-brush"></i></button>
          <button v-else  type="button" class="btnth nav-link btn btn-outline-secondary h-100 "><i class="bi bi-x"></i></button> 
         
          </div>
        </li>

      </ul>
    </div>
  </div>
</nav>
</header>

    <slot/>

    <footer class="">

      <div class="container-fluid p-5 text-center ">
      <div class="container">
        <div class="d-flex justify-content-center">
        <div><i class="bi mx-1 fs-2 bi-facebook"></i></div>
        <div><i class="bi mx-1 fs-2 bi-instagram"></i></div>
        <div><i class="bi mx-1 fs-2 bi-linkedin"></i></div>
      </div>
      <small>Copyright © 2022</small>
      </div>
    </div>
    </footer>


  </div>
</template>
<script>
import jsonen from '@/lang/en.json'

export default {
  metaInfo: {
    title: 'header'
  },
  data() {
    return {
      isTheme:true,
      data: jsonen,
    }
  },
}
</script>

<style>

.link , .link:hover{
   text-decoration: inherit;
   color: inherit;
   cursor: auto;
}
.navbar{
  /* background:#6AD6DE !important ; */
  position: fixed;
  width: 100%;
}
footer{
  background-color: rgba(128, 128, 128, 0.378);
}

.header{
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1;
}


</style>
