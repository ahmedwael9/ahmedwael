<template>
  <Layout>
 <section > 
      <div class="animation-area">
        <ul class="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
<div class="container">
  <div class="row  py-5">
    <div class="col-12 col-sm-4 flex-fill " >
      <h1 data-text="AHMED ABU DAQQA" class="fw-bold ">AHMED ABU DAQQA</h1>
      <p class=" fs-4">{{data.intro_description}}</p>
      <button  type="button" :class="`btn-${currentTheme}`" class="btn px-5">{{data.intro_buttonresume}}</button>
    </div>
    <div class="col-12 col-sm-4 flex-fill py-4">
      <g-image src="/images/Untitled-1.svg" height="400" width="800" class="w-100 position-relative"></g-image>
    </div>
  </div>

    <div class="text-center">
      <h3 class=" text-uppercase">{{data.intro_ido}}</h3>
    </div>
    <div class="row text-center my-5">

      <div class="col-12 col-sm-6 col-md-3 my-2">
        <div class="cardser card p-3">
         <div class=""><i class="bi fs-1 bi-laptop"></i></div>
          <div class="card-body">
              <h5 class=" card-title">{{data.card_titleweb}}</h5>
               <p class=" card-text">{{data.card_descriptionweb}}</p>
           </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3 my-2">
         <div class="cardser card p-3">
         <div class=""><i class="bi fs-1 bi-tablet"></i></div>
          <div class="card-body">
              <h5 class=" card-title">{{data.card_titlemobile}}</h5>
               <p class=" card-text">{{data.card_descriptionmobile}}</p>
           </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3 my-2">
         <div class="cardser card p-3">
         <div class=""><i class="bi fs-1 bi-brush"></i></div>
          <div class="card-body">
              <h5 class=" card-title">{{data.card_titleapp}}</h5>
               <p class=" card-text">{{data.card_descriptionapp}}</p>
           </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3 my-2">
         <div class="cardser card p-3" >
         <div class=""><i class="bi fs-1 bi-people"></i></div>
          <div class="card-body">
              <h5 class=" card-title">{{data.card_database}}</h5>
               <p class=" card-text">{{data.card_desdatabase}}</p>
           </div>
        </div>
      </div>
    </div>
</div>

  </section>

  <section class="position-relative my-5">
    <div :class="`bg-${currentTheme}-light`" class="container-fluid">

       <div class="container">
        
      <div class="animation-area">
        <ul class="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
          <div class="text-center py-3">
           <h3 class="text-uppercase">{{data.intro_exp}}</h3>
          </div>
        <div class="row py-5">
         <div v-for="exp in EXPERIENCE" :key="exp.id" class="col-12 col-sm-12 col-md-6 mt-1 ">
           <div class="excard card p-4">
          <h4 class="fw-bold">{{exp.title}}</h4>
          <h6 class=" fw-normal">{{exp.comp}}</h6>
          <h6 class=" fw-normal">{{exp.date}}</h6>
           <ul v-for="expwork in exp.edu" :key="expwork.id">
               <li>{{expwork.li}}</li>
          </ul>
          </div>
       </div>
        </div>
       
      </div>
      </div>
  </section>

    
    <section>
  <div class="container">
      <div class="text-center my-5">
      <h3 class="text-uppercase">{{data.intro_mywork}}</h3>
      </div>
      <div class="row ">
        <div v-for="work in project" :key="work.id" class="col-12 col-sm-6 col-md-4 my-2">
         <div class="card">
          <div  :style="`backgroundImage: url(${work.image})`" class="card-img-top"></div>
          <div class="cardbody card-body">
           <div class="">
            <h5 class="text-uppercase card-title">{{work.title}}</h5>
           <p class="card-text">{{work.description}}</p>
           </div>
           <g-link :to="`/projects/${work.id}`" :class="`btn-${currentTheme}`" class="seeprofile btn mt-4">{{data.projects_seemore}}</g-link>
           </div>
        </div>
        </div>

      </div>
    </div>
    
  </section>

  <section>

    <div class="container position-relative">
      
      <div class="row py-5 position-relative">
        
        <div class="col-6">
           <g-image src="https://cdn.freebiesupply.com/images/thumbs/1x/apex-legends-symbol.png" height="400" width="600" class="img w-100"></g-image>
        </div>
        <div class="col-6">
          <form> 
            <input class="form-control form-control-lg my-4" type="text" placeholder="YOUR NAME" aria-label=".form-control-lg example">
            <input class="form-control form-control-lg my-4" type="text" placeholder="YOUR EMAIL" aria-label=".form-control-lg example">
          </form>
        </div>
      </div>
    </div>
  </section>   
  </Layout>
</template>

<script>
import jsonen from '@/lang/en.json'
import themeMixin from '@/mixin/theme'

export default {
  metaInfo: {
    title: 'Index'
  },
   mixins:[themeMixin],
  data() {
    return {
      data: jsonen,
      project:jsonen.myProjects, 
      EXPERIENCE:jsonen.work_exp,
      isTheme:true
    }
  },
  components:{
  },

   methods: {

     
  },

  mounted() {
  },
}
</script>

<style scoped>
.excard{
  transition: .3s;
}

.excard:hover{
  transform: scale(1.05);
  box-shadow: 0px 5px 15px rgb(153, 153, 153);
}

.box-area{
  position: absolute;
  top: 100;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.box-area li{
  position: absolute;
  display: block;
  list-style: none;
  width: 25px;
  height: 25px;
  background: rgba(0, 0, 0, 0.052);
  animation: bg 20s linear infinite  ;

}


.box-area li:nth-child(1){
  left:86%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;;
}
.box-area li:nth-child(2){
  left:12%;
  width: 30px;
  height: 30px;
  animation-delay: 1.5s;
  animation-duration: 10s;
}
.box-area li:nth-child(3){
  left:70%;
  width: 100px;
  height: 100px;
  animation-delay: 5.5s;
}
.box-area li:nth-child(4){
  left:70%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 15s;
}
.box-area li:nth-child(5){
  left:65%;
  width: 40px;
  height: 40px;
  animation-delay: 0s;
}
.box-area li:nth-child(6){
  left:15%;
  width: 110px;
  height: 110px;
  animation-delay: 3.5s;
}
@keyframes bg{
  0%{
    opacity: 1;
    transform:translateY(0) rotate(0deg);
  }
  100%{
    opacity: 0;
    transform:translateY(150px) rotate(360deg);
  }
}


.home-links a {
  margin-right: 1rem;
}
.img{
  transition: 0.3S;
  opacity: 1;
  animation:animateimg linear 3s infinite ;
}

input[type=text]{
  border: none !important;
  border-bottom: 2px solid black !important ;
}

textarea:focus, 
textarea.form-control:focus, 
input.form-control:focus, 
input[type=text]:focus, 
input[type=password]:focus, 
input[type=email]:focus, 
input[type=number]:focus, 
[type=text].form-control:focus, 
[type=password].form-control:focus, 
[type=email].form-control:focus, 
[type=tel].form-control:focus, 
[contenteditable].form-control:focus {
  box-shadow: inset 0 -1px 0 #ddd;
}
.cardbody {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.seeprofile{
        width: fit-content;
    }


.work{
  justify-content: center;
  align-content: center;
}
@keyframes animateimg{
  0%,10%,100%{
    opacity: 1;
    transform:scale(1.3);
  }
  70%,90%{
    opacity: 0.8;
    transform:scale(1.05) ;
  }
}

.container{
  max-width: 1000px;
}
.card-img-top{
  height: 0;
        background-position:center;
        background-size: cover;
        padding-top: 100%;
}
.container-fluid{
  padding: 0px;
}

h1{
  position: relative;
  color: rgb(255, 255, 255);
  -webkit-text-stroke: 0.1vw rgb(255, 255, 255);
}
.cardser{
  transition: .3s;
}
.cardser:hover{
  transform:scale(1.1);

}


h1::before{
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: rgb(7, 7, 7);
  -webkit-text-stroke: 0vw  red;
  border-right: 2px solid rgb(16, 16, 16);
  overflow: hidden;
  animation: animate 6s linear infinite ;

}

@keyframes animate{
  0%,10%,100%{
   width: 0;
  }
  70%,90%{
    width: 100% ;
  }
}

.card{
  height:100%;
}





</style>
