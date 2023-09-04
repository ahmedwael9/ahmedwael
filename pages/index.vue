<template>
    <div class="container">
        <!-- <p>{{ $t('welcome') }}</p> -->
        <div class="py-5">
            <div>
                <div class="text-center">
                    <h4 class="fw-bold m-0" @click="changeLanguage">SERVISES</h4>
                    <div class="">Lorem, ipsum dolor sit amet consectetur adipisicing officiis accusamus in optio, voluptatem labore </div>
                </div>
                <div class="row justify-content-center">
                   <div class="col-10">
                      <div class="row mt-5">
                         <div v-for="n in 3" class="col-4">
                            <div style="background-color: rgba(250, 235, 215, 0.707);;" class="w-100 p-4 card-service my-auto">
                                 <div class="mb-3" style="display: inline-block;">
                                    <div class="bg-white circle p-3 "></div>
                                 </div>
                                 <div class="fw-bold fs-4 w-50">Front End Developer </div>
                                 <p class="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                            </div>
                         </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
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
.card-service{
    transition: transform 0.3s;
}
.circle{
    transition: 0.3s;
    border-radius: 50%;
    height:70px;
    width:70px;
    outline: 2.5px dashed rgba(250, 235, 215, 0.707);
    outline-offset:-7px;
}
.card-service:hover{
    outline: 2.5px solid rgb(255, 255, 255);
    outline-offset:-7px;
    transform: translateY(-18px);
    .circle{
        outline: 2.5px dashed rgb(255, 255, 255);
        outline-offset: 7px !important;
        animation:  8s linear 0s infinite alternate mymove;
    }
}

@keyframes mymove {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

</style>