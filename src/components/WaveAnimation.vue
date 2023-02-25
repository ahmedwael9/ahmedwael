<template>
  <div class="containerwave">
    <svg viewBox="0 0 120 28">
 <defs> 
   <mask id="xxx">
     <circle cx="7" cy="12" r="40" fill="#fff" />
   </mask>
   <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
  	</filter>
    
    <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
  </defs> 

   <use id="wave3" class="wave" xlink:href="#wave" x="0" y="-2" ></use> 
   <use id="wave2" class="wave" xlink:href="#wave" x="0" y="0" ></use>
  <div class="topball">
    <img class="ball" src="https://cdn3.iconfinder.com/data/icons/iconic-1/32/arrow_up_alt1-512.png" width="50"/>
  </div> 
  
  <circle class="drop drop1" cx="20" cy="2" r="1.8"  />
  <circle class="drop drop2" cx="25" cy="2.5" r="1.5"  />
  <circle class="drop drop3" cx="16" cy="2.8" r="1.2"  />
  
  <use id="wave1" class="wave" xlink:href="#wave" x="0" y="1" />
</svg> 
  
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700");

body {
  font-family: Lato, sans-serif;
  margin: 0;
}

.containerwave {
  width:100vw;
}
.containerwave div {
  background-color:#5C5C5C;
  margin: -5px 0px 0px 0px;
  padding:0px;
  color: #fff;
  text-align:center;
}
svg {
  width:100%;
}
.topball {
  background: none;
  position: absolute;
  right: 200px;
  bottom: 250px;
  animation: ball 1s ease-in-out;
  animation-iteration-count:infinite;
  animation-direction: alternate;
  animation-delay: 0.3s;
  cursor:pointer;
}
.drop {
  fill: transparent;
  animation: drop 5s ease infinite normal;
  stroke: #9E9E9E;
  stroke-width:0.5;
  opacity:.6; 
  transform: translateY(80%);
}
.drop1 {
  transform-origin: 20px 3px;
}
.drop2 {
  animation-delay: 3s;
  animation-duration:3s;
  transform-origin: 25px 3px;
}
.drop3 {
  animation-delay: -2s;
  animation-duration:3.4s;
  transform-origin: 16px 3px;
}
.wave {
  animation: wave 8s linear;
  animation-iteration-count:infinite;
  fill: #C0BFBF;
}
#wave2 {
  animation-duration: 10s;
  animation-direction: reverse;
  opacity: .6
}
#wave3 {
  animation-duration: 13s;
  opacity:.3;
}
@keyframes drop {
  0% {
    transform: translateY(80%); 
    opacity:.6; 
  }
  80% {
    transform: translateY(80%); 
    opacity:.6; 
  }
  90% { 
    transform: translateY(10%) ; 
    opacity:.6; 
  }
  100% { 
    transform: translateY(0%) scale(1.5);  
    stroke-width:0.2;
    opacity:0; 
  }
}
@keyframes wave {
  to {transform: translateX(-100%);}
}
@keyframes ball {
  to {transform: translateY(20%);}
}


</style>