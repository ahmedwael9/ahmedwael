<template>
<Layout>
<div >
  <div class="container-fluid " style="background-image: url('/images/9.png');height: 300px; background-size:cover;background-position:center">
</div>
<div class="container">
    <div class="row  py-5">
    <div class="col-12 col-sm-4 flex-fill " >
      <h1 class="fw-bold themetext ">UOP CENTER APP</h1>
      <p class=" fs-4">Graduation project, providing student services Graduation project, providing student servicesGraduation project, providing student servicesGraduation project, providing student services</p>
    </div>
    <div class="col-12 col-sm-4 flex-fill">
      <g-image src="/images/2385.png" width="800" class="w-100 position-relative"></g-image>
    </div>
  </div>
  <div class="my-5 pb-5">
    <div class="row">
      <div class="col-12 col-sm-4 flex-fill">
        <g-image src="/images/2385.png" class="w-100 imgcard position-relative"></g-image>
      </div>
      <div class="col-12 col-sm-4 flex-fill">
        <g-image src="/images/9.png" class="w-100 imgcard position-relative"></g-image>
      </div>
      <div class="col-12 col-sm-4 flex-fill">
        <g-image src="/images/mokup.png" class="w-100 imgcard position-relative"></g-image>
      </div>
    </div>
  </div>

  <div class="my-5">
    <h3 class=" text-uppercase mb-5">others projects</h3>
    <div class="row ">
        <div v-for="work in project" :key="work.id" class="col-6 col-sm-6 col-md-4">
         <div class="card">
          <!-- :style="{ backgroundImage: `url(${require('@/assets/images/9.png')})` }" -->
          <div  :style="`background-image: url(${work.image})`" class="card-img-top"></div>
          <div class="cardbody card-body">
           <div class="">
            <h5 class="text-uppercase card-title">{{work.title}}</h5>
           <p class="card-text">{{work.description}}</p>
           </div>
           <a href="Projects" class="themebtn seeprofile btn btn-secondary mt-4">{{data.projects_seemore}}</a>
           </div>
        </div>
        </div>

      </div>
  </div>
</div>
</div>

</Layout>
</template>

<script>
import jsonen from '~/lang/en.json'
import jsonar from '@/lang/ar.json'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
    return {
      data: jsonen,
      project:jsonen.myProjects, 
      EXPERIENCE:jsonen.work_exp,
      isTheme:true
    }
  },
   methods: {
     
  },

  mounted() {
    // this.data=(localStorage.getItem('lang')=="true")?jsonen:jsonar
    let x = jsonen.myProjects.find(item => item.id == this.$route.params.id);
    console.log(x)
    this.data=jsonen
    this.project=jsonar.myProjects
    
  },
}
</script>
<style scoped>
.container{
  max-width: 1000px;
}
.cardbody {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.card{
  height:100%;
}
.seeprofile{
        width: fit-content;
    }
.card-img-top{
  height: 0;
        background-position:center;
        background-size: cover;
        padding-top: 100%;
}
.imgcard{
  transition: 0.5s;
}
.imgcard:hover{
  transform: scale(1.1);

}
</style>