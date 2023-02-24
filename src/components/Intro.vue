<template>
        <v-container>
    <v-row no-gutters>
      <v-col
       class="pa-2 align-self-center"
        cols="12"
        sm="6"
      >
      <h2 >HELLO, I AM AHMED WAEL</h2>
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
      </v-col>
      <v-col
        class="align-self-cente"
        cols="12"
        sm="6"
      >
      <div id="box"></div>
    <!-- <canvas width="960" height="600" ></canvas> -->
      </v-col>
    </v-row>
  </v-container>
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
  background:url("https://www.pngkit.com/png/detail/36-364227_contact-digital-world-map-png.png");
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