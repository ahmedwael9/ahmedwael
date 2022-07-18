<template>
  <div class="layout">
    
<header class="header">
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand " href="#">
      <div class="">
          <g-link class="link" to="/">
            <h3 :class="`text-${currentTheme}`" class="logo fs-4 fw-bolder" >AHMAD WAEL</h3>
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
        

        <li class="nav-item position-relative">
          <div :class="{ 'opened' : showThemes }" class="show-theme">
            <button @click="setTheme('danger')" type="button" class="btn btn-danger position-absolute end-0 bottom-0 top-0 start-0"></button>
            <button @click="setTheme('primary')" type="button" class="btn btn-primary position-absolute end-0 bottom-0 top-0 start-0"></button>
            <button @click="setTheme('warning')" type="button" class="btn btn-warning position-absolute end-0 bottom-0 top-0 start-0"></button>
            <button @click="setTheme('secondary')" type="button" class="btn btn-secondary position-absolute end-0 bottom-0 top-0 start-0"></button>
          </div>
          <button @click="showThemes = !showThemes" type="button" class="btn btn-outline-secondary position-relative" ><i class="bi bi-brush"></i></button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</header>
    <slot/>

    <footer :class="`bg-${currentTheme}-light`" class="">
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
import themeMixin from '@/mixin/theme'

export default {
  metaInfo: {
    title: 'header'
  },

  mixins:[themeMixin],

  data() {
    return {
      showThemes: true,
      toggle:true,
      isActive: true,
      hasError: false,
      data: jsonen,
    }
  },
   methods: {
  },
}
</script>

<style lang="scss">
.show-theme {
  button {
    transition: .3s;
    opacity: 0;
  }
  &.opened {
    button {
      opacity: 1;
      &:nth-child(1) {
        transform: translateY(50px);
      }
      &:nth-child(2) {
        transform: translateY(100px);
      }
      &:nth-child(3) {
        transform: translateY(150px);
      }
      &:nth-child(4) {
        transform: translateY(200px);
      }
    }
  }

}

.link , .link:hover{
   text-decoration: inherit;
   color: inherit;
   cursor: auto;
}
li{
  list-style: none;
}
 
.navbar{
  background:#FFFFFF !important ;
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
