<template>
  <Layout>
    <div>
<Intro />
<!--  
  <v-container>
  <div  class="slidercontainer">
    <div style="background-image: url('/images/9.png') ;">
    </div>
    <div  style="background-image: url('/images/171.png') ;">
    </div>
    <div  style="background-image: url('/images/170.png') ;">
    </div>
    <div style="background-image: url('/images/Screenshot (9).png') ;">
    </div>
    <div style="background-image: url('/images/ah.jpg');">
    </div>
  </div>
</v-container> -->

 <WhatIDo />
  <!-- 575651 -->
<div style="background-color: #DFDFDF;min-height: 100vh;" class="">
<v-container >

<v-row  >
      <v-col
      style="height: 100vh;"
       class="align-self-center"
        cols="12"
        sm="6"
      >
        <v-img
        contain
        style="height: 100vh;width: 100vh;object-fit: cover;"
        src="/images/mokup.png"
      ></v-img>
      </v-col>
      <v-col
      align-self="center"
        cols="12"
        sm="6"
      >
      <div>
      <h2>A&M SHOP APP</h2>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error sit aliquam aut quas provident! Ipsum ipsam et accusantium quisquam commodi ea sint, beatae ab praesentium! Aliquam perferendis sit ab? 
      </p>
    <v-btn
      rounded
      dark
    >
      SHOW PRODUCT
    </v-btn>
  </div>
      </v-col>
    </v-row>
</v-container>
</div>
<div style="background-color: #333333;min-height: 100vh;" class="">
<v-container 
    class="fill-height">

<v-row no-gutters>
      <v-col
      align-self="center"
        cols="12"
        sm="6"
      >
      <v-theme-provider root>
      <div>
      <h2 style="color: white;">UOP CENTER APP</h2>
      <p style="color: white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error sit aliquam aut quas provident! Ipsum ipsam et accusantium quisquam commodi ea sint, beatae ab praesentium! Aliquam perferendis sit ab? 
      </p>
    <v-btn

      rounded
      
    >
      SHOW PRODUCT
    </v-btn>
  </div>
      </v-theme-provider>
      </v-col>
      <v-col
      style="height: 100vh;"
       class="align-self-center"
        cols="12"
        sm="6"
      >
        <v-img
        contain
        style="height: 100vh;width: 100vh;object-fit: cover;"
        src="/images/Screenshot (9).png"
      ></v-img>
      </v-col>
    </v-row>
</v-container>
</div>
<!-- <div style="background-color: orange;min-height: 100vh;" class=""></div>
<div style="background-color: grey;min-height: 100vh;" class=""></div> -->

</div>
  </Layout>
</template>

<script>

import WhatIDo from "../components/WhatIDo"
import Intro from "../components/Intro"
export default {
  
  components: { WhatIDo,Intro },
  name: 'Homepage',
  metaInfo: {
    title: 'Ahmad Wael - Portfolio'
  },
};
</script>

<style scoped>


.slidercontainer{
  display: flex;
  height: 20rem;
  gap:.4rem
}

.slidercontainer > div {
  flex:1;
 background-position: center;
 background-repeat: no-repeat;
 background-size: auto 100%;
 transition: all .8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slidercontainer > div:hover {
  flex: 4;
}


body {
  background:black url(http://fc01.deviantart.net/fs71/f/2012/160/b/9/stars_by_paulinemoss-d52un4e.jpg);
  animation: stars 205s linear alternate;
}

#box {
  background:url(https://cdn.rawgit.com/ManzDev/cursos-assets/gh-pages/css3/earth-2.jpg);
  background-size:cover;
  border:2px solid #000;
  border-radius:50%;
  width:200px;
  height:200px;
  animation: movimiento 5s linear 0s infinite;
  box-shadow:0 0 25px RGBA(255,255,255, 0.10),
             -8px -8px 15px #000 inset,
             2px 2px 25px #000 inset,
             -45px -45px 25px RGBA(0,0,0, 0.5) inset, 
             25px 25px 45px RGBA(0,0,0, 0.45) inset;
  margin:6em auto;
  transform:rotateX(6deg) rotateY(6deg) rotateZ(6deg);
}

@keyframes movimiento {
  0% { background-position:0 0 }
  100% { background-position:355px 0 }
}

@keyframes stars {
  0% { background-position:0 0 }
  100% { background-position:0 100% }
}
</style>
        <!-- <v-btn
        @click="$vuetify.theme.dark=true"
  elevation="2"
>ssss</v-btn> -->
