<template>
    <div style="background-color: rgba(250, 235, 215, 0.707);" class="pb-2">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand m-0" href="#">
                <div class="text-warning fw-bold logo">
                    AHMED<span class="text-dark">WAEL</span>
                    <span class="material-icons icon">code</span>
                </div>
                </a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav px-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div class="nav-link text-dark px-3" href="#">
                          DarkMode
                        </div>
                    </li>
                    <li>
                        <div @click="changeLanguage" style="border-radius: 50px;border: 2.5px solid #0000000e;cursor: pointer;" class="text-white text-center bg-warning px-2 py-1" href="#">
                        {{ locale=='en'?'AR':'EN' }}
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div style="height: 50vh" class="container">
             <div class="row justify-content-between align-items-center h-100">
                <div class="col-6">
                    <div class="">
                        <div class="fs-2 fw-bold">FEONT END DEVELOPER</div>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit itaque vel voluptas. Iusto quia quas consequatur, expedita veritatis eum ipsam at earum quae perspiciatis debitis voluptas voluptates modi alias similique?
                        </p>
                        <button class="btn btn-warning px-5 text-white" type="button" >
                            RESUME
                        </button>
                    </div>
                </div>
                <div class="col-5">
                  <img style="mix-blend-mode: multiply;" class="w-100" src="https://quickchart.io/chart?c=%7B%0A%20%20type%3A%20%27doughnut%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data%3A%20%5B10%2C%2020%2C%2015%2C%205%2C%2050%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%2099%2C%20132)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%20159%2C%2064)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%20205%2C%2086)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(75%2C%20192%2C%20192)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(54%2C%20162%2C%20235)%27%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20labels%3A%20%5B%27Red%27%2C%20%27Orange%27%2C%20%27Yellow%27%2C%20%27Green%27%2C%20%27Blue%27%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20plugins%3A%20%7B%0A%20%20%20%20%20%20datalabels%3A%20%7B%0A%20%20%20%20%20%20%20%20formatter%3A%20(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20value%20%2B%20%27%25%27%3B%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D&v=2.9.4&w=500&h=300&bkg=white">
                </div>
             </div>
        </div>
        <div style="height: 10px;background-color: rgb(255, 255, 255);"></div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const changeLanguage = () => {
  const newLocale = locale.value === 'en' ? 'ar' : 'en';
  locale.value = newLocale;
};
</script>
<style lang="scss">
.logo,.icon{
    transition: 0.3s;
}
.logo:hover{
  transform:scale(1.05);
  .icon{
    transform: rotate(220deg);
  }
 }    
</style>