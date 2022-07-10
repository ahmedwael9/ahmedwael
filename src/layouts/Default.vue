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
          <a @click="sum"  id="lang" class=" nav-link " href="#">{{data.navbar_language}}</a>
        </li>
        
         <li id="theme" class="nav-item visually-hidden">
           <div class="nav-link bg-light mx-3" id="chang">
            <div class="d-flex align-items-center">
             <div class=""><button @click="secondary" type="button" class="btn btn-secondary p-2 mx-1"></button></div>
             <div class=""><button @click="primary" type="button" class="btn btn-primary p-2 mx-1"></button></div>
             <div id="warning"><button @click="warning" type="button" class="btn btn-warning p-2 mx-1"></button></div>
             <div class=""><button @click="danger" type="button" class="btn btn-danger p-2 mx-1"></button></div>
            </div>
          </div>
        </li> 
        
        <li class="nav-item">
          <div>
           <button v-if="isTheme==true" type="button" @click="ChangeTheme" class="btnth nav-link btn btn-outline-secondary h-100 "><i class="bi bi-brush"></i></button>
          <button v-else @click="CloseOptin" type="button" class="btnth nav-link btn btn-outline-secondary h-100 "><i class="bi bi-x"></i></button> 
         
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
import jsonen from '../lang/en.json'
import jsonar from '../lang/ar.json'
export default {
  metaInfo: {
    title: 'header'
  },
  
  data() {
    return {
      isTheme:true,
       lang:(localStorage.getItem('lang')!="true"&&localStorage.getItem('lang')!="false")?true:localStorage.getItem('lang'),
      data:(localStorage.getItem('lang')=="true")?jsonen:jsonar,
     
    }
  },
   

   mounted() {
    this.data=(localStorage.getItem('lang')=="true")?jsonen:jsonar
    this.project=(localStorage.getItem('lang')=="true")?jsonen.myProjects:jsonar.myProjects
    this.EXPERIENCE=(localStorage.getItem('lang')=="true")?jsonen.work_exp:jsonar.work_exp
  },

   methods: {
     sum()  {
      this.lang=!this.lang
      localStorage.setItem('lang',this.lang)
      this.data=(localStorage.getItem('lang')=="true")?jsonen:jsonar
      this.project= data.myProjects
      this.EXPERIENCE=this.data.work_exp
     },
      ChangeTheme(){
      this.isTheme=!this.isTheme
      document.getElementById("theme").classList.remove("visually-hidden");
     },
     CloseOptin(){
      this.isTheme=!this.isTheme
      document.getElementById("theme").classList.add("visually-hidden");
     },
     warning(){
        document.querySelectorAll('.themetext').forEach(function (elem) {
        elem.classList.remove('text-primary');
        elem.classList.remove('text-danger');
        elem.classList.remove('text-dark');
      	elem.classList.add('text-warning');
       });
        document.querySelectorAll('.themebg').forEach(function (elem) {
          elem.classList.remove('bg-primary');
          elem.classList.remove('bg-danger');
          elem.classList.remove('bg-secondary');
      	elem.classList.add('bg-warning');
       });
        document.querySelectorAll('.themebtn').forEach(function (elem) {
      	elem.classList.remove('btn-primary');
      	elem.classList.remove('btn-danger');
        elem.classList.remove('btn-secondary');
        elem.classList.remove('btn-secondary');
      	elem.classList.add('btn-warning');
       });
    },
    danger(){
        document.querySelectorAll('.themetext').forEach(function (elem) {
        elem.classList.remove('text-primary');
      	elem.classList.remove('text-warning');
      	elem.classList.remove('text-dark');
      	elem.classList.add('text-danger');
       });
        document.querySelectorAll('.themebg').forEach(function (elem) {
          elem.classList.remove('bg-primary');
          elem.classList.remove('bg-warning');
          elem.classList.remove('bg-secondary');
      	elem.classList.add('bg-danger');
       });
        document.querySelectorAll('.themebtn').forEach(function (elem) {
      	elem.classList.remove('btn-primary');
        elem.classList.remove('btn-secondary');
      	elem.classList.remove('btn-warning');
      	elem.classList.remove('btn-secondary');
        elem.classList.add('btn-danger');
       });
    },
    primary(){
        document.querySelectorAll('.themetext').forEach(function (elem) {
      	elem.classList.remove('text-warning');
      	elem.classList.remove('text-danger');
      	elem.classList.remove('text-dark');
      	elem.classList.add('text-primary');
       });
        document.querySelectorAll('.themebg').forEach(function (elem) {
      	elem.classList.remove('bg-warning');
      	elem.classList.remove('bg-danger');
      	elem.classList.remove('bg-secondary');
      	elem.classList.add('bg-primary');
       });
        document.querySelectorAll('.themebtn').forEach(function (elem) {
      	elem.classList.remove('btn-warning');
        elem.classList.remove('btn-secondary');
        elem.classList.remove('btn-danger');
      	elem.classList.add('btn-primary');
       });
    },
    secondary(){
        document.querySelectorAll('.themetext').forEach(function (elem) {
      	elem.classList.remove('text-warning');
      	elem.classList.remove('text-danger');
      	elem.classList.remove('text-primary');
      	elem.classList.add('text-dark');
       });
        document.querySelectorAll('.themebg').forEach(function (elem) {
      	elem.classList.remove('bg-warning');
      	elem.classList.remove('bg-danger');
      	elem.classList.remove('bg-primary');
      	elem.classList.add('bgsecondary');
       });
        document.querySelectorAll('.themebtn').forEach(function (elem) {
      	elem.classList.remove('btn-warning');
        elem.classList.remove('btn-primary');
        elem.classList.remove('btn-danger');
      	elem.classList.add('btn-secondary');
       });
    },
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
