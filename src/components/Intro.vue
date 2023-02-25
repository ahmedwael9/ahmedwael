<template>
      <v-container class="px-16">
      <v-row >
      <v-col
       class="align-self-center"
        cols="12"
        sm="6"
      >
      <div>
        <div class="containeranimation">
        <div class="typewriter">HELLO, I AM AHMED WAEL</div>
      </div>
      <p>
        Productive Front End developer for Web and Mobile Apps, builds exceptional UI designs with awesome animations, focusing on the quality in the first place.
      </p>
      <div>
    <v-btn
      rounded
      dark
    >
      MY WORK
    </v-btn>
    <v-btn
      outlined
      rounded
      class="mx-1"
    >
      SHOW RESUM
    </v-btn>
  </div>
      </div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <div id="box"></div>
    <!-- <canvas width="960" height="600" ></canvas> -->
      </v-col>
    </v-row>
        </v-container>
  <!-- <div class="custom-shape-divider-bottom-1677242913">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div> -->
  
</template>

<script>
export default {
  mounted(){
    'use strict'
var canvas = d3.select("canvas"),
    width = canvas.property("width"),
    height = canvas.property("height"),
    context = canvas.node().getContext("2d");

var projection = d3.geoOrthographic()
    .scale((height - 10) / 2)
    .translate([width / 2, height / 2])
    .precision(0.5);

var path = d3.geoPath()
    .projection(projection)
    .context(context);
var graticule=d3.geoGraticule()()

var count=0;

var circle=[]
for(let i=0; i<41; i++){
  circle.push([Math.sin(2*Math.PI*0.002778*(i*9)),Math.cos(2*Math.PI*0.002778*(i*9))])
}


d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json", function(data) {
    for(var i=0;i<data.features.length;i++){
    if(data.features[i].geometry){
      data.features[i].geometry.type='Polygon';
      let fa=parseInt(data.features[i].properties.mass)
      if(!fa||fa<10000){
        fa=0.2
      }
      else if(fa<50000){
        fa=0.6
      }
      else if(fa<100000){
        fa=1
      }
      else if(fa<200000){
        fa=2
      }
      else if(fa<400001){
        fa=5
      }
      else if(fa<800001){
        fa=8
      }
      else{
        fa=12
      }
      let fo=data.features[i].geometry.coordinates[0]
      let fv=data.features[i].geometry.coordinates[1]
      let foo=[[]]
      for(let j of circle){
        foo[0].push([fo+fa*j[0],fv+fa*j[1]*((180-fv-fa)*0.0056)])
      }
      data.features[i].geometry.coordinates=foo;
      }
    }
$.get('https://unpkg.com/world-atlas@1/world/110m.json',function(data2,status){
  var  land = topojson.feature(data2, data2.objects.countries);
  d3.timer(function(){
    context.clearRect(0,0,width,height)
    projection.rotate([count*0.5,20,20])
    context.beginPath(), path(data), context.strokeStyle='rgba(255,0,0,0.3)',context.stroke()
    context.beginPath(), path(graticule),context.strokeStyle='rgba(100,100,120,1)', context.stroke(),context.strokeStyle='rgba(0,0,0,0.3)';
    context.beginPath(), path(land), context.fillStyle='rgba(20,20,80,0.2)',context.fill(), context.stroke()
    projection.rotate([-count*0.5,200,200])
    
    context.beginPath(), path(graticule),context.strokeStyle='rgba(100,100,120,1)', context.stroke();
    context.beginPath(), path(land), context.fillStyle='rgba(20,20,80,1)',context.fill(), context.stroke()
    context.beginPath(), path(data), context.strokeStyle='red',context.stroke()
    count+=0.6
  })
})
});
  }

}
</script>

<style>
canvas{
  margin: 0px auto;
  transform: translateZ(0);
}

body {

animation: stars 205s linear alternate;
}

#box {
background:url(https://www.pngkit.com/png/detail/36-364227_contact-digital-world-map-png.png);
background-size:cover;
border:2px solid #000;
border-radius:50%;
width:200px;
height:200px;
animation: movimiento 5s linear 0s infinite;
box-shadow:0 0 25px RGBA(255,200,200, 0.10),
           -8px -8px 15px #000 inset,
           2px 2px 25px #000 inset,
           -45px -45px 25px RGBA(0,0,0, 0.05) inset, 
           25px 25px 45px RGBA(0,0,0, 0.05) inset;
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
.containeranimation {
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem, 2.1vw, 3rem);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
}

.typewriter {
	width: 21.5ch;
	white-space: nowrap;
	overflow: hidden;
	border-right: 4px solid #919191;
	animation: cursor 1s step-start infinite, 
    text 5s steps(18) alternate infinite;
}

@keyframes cursor {
	0%, 100% { 
    border-color: #9E9E9E; 
  }
}

@keyframes text {
	0% { 
    width: 0; 
  }
	100% { 
    width: 23.5ch; 
  }
}
</style>