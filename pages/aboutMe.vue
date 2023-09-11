<template>
  <div class="container py-5" style="min-height: 100vh;">
    <div class="d-flex align-items-center">
        <div class="" style="height:4px;width:100%;background-color:#6D9886 ;"></div>
        <div class="">
            <div class="p-1 bg-circle" style="width: 70px;height: 70px;background-color: #bfbfbf;border-radius: 50%;">
                <div style="width: 100%;height: 100%;;background-color: #ffffff;border-radius: 50%;" class="d-flex justify-content-center align-items-center">
                    <div class="fw-bold fs-7">Feb</div>
                </div>
            </div>
        </div>
        <div class="" style="height:4px;width:100%;background-color:#bfbfbf ;"></div>
        <div class="">
            <div class="p-1" style="width: 70px;height: 70px;background-color: #bfbfbf;border-radius: 50%;">
                <div style="width: 100%;height: 100%;;background-color: #ffffff;border-radius: 50%;" class="d-flex justify-content-center align-items-center">
                    <div class="fw-bold fs-7">Oct</div>
                </div>
            </div>
        </div>
        <div class="" style="height:4px;width:100%;background-color:#bfbfbf ;"></div>
        <div class="">
            <div class="p-1" style="width: 70px;height: 70px;background-color: #bfbfbf;border-radius: 50%;">
                <div style="width: 100%;height: 100%;;background-color: #ffffff;border-radius: 50%;" class="d-flex justify-content-center align-items-center">
                    <div class="fw-bold fs-7">Jun</div>
                </div>
            </div>
        </div>
        <div class="" style="height:4px;width:100%;background-color:#bfbfbf ;"></div>
    </div>
    <!-- ------------------------------------------------------------------------------------------------- -->
    <div class="d-flex align-items-center mb-4 mt-5">
        <div class="w-100" >
             <div class="fw-bold" style="text-transform: uppercase;color: #6D9886;">
                Tahaluf Elamarat Company
             </div>
            <div class="w-100 text-dark">Feb 2020 / Oct 2020</div>
        </div>
        <div class="d-flex">
            <div class="p-1" style="width: 45px;height: 45px;background-color: #bfbfbf;border-radius: 50%;">
                <div style="width: 100%;height: 100%;;background-color: #ffffff;border-radius: 50%;" class="d-flex justify-content-center align-items-center">
                    <div class="fw-bold fs-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z" fill="#1C274C"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="p-1 mx-2" style="width: 45px;height: 45px;background-color: #bfbfbf;border-radius: 50%;">
                <div style="width: 100%;height: 100%;;background-color: #ffffff;border-radius: 50%;" class="d-flex justify-content-center align-items-center">
                    <div class="fw-bold fs-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z" fill="#1C274C"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-for="n in 3">
        <div class="d-flex align-items-center">
            <!-- <div style="height: 4px;width: 40px;background-color: #6D9886;"></div> -->
            <div class="card-info mb-3 p-4" style="background-color: #F7F7F7;border-radius: 120px;">
                <ul>
                    <li>
                        <div class="fw-bold" style="text-transform: uppercase;">Tahaluf Elamarat Company</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto voluptatem, sit dolore magnam dolores aperiam vero eaque. Veniam laboriosam minus quas, dolorum, fugit soluta, officia iste dolorem cupiditate perferendis voluptas.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>    
</template>
<style lang="css">
.bg-circle{
  background-color: #6D9886 !important;
  animation: movimiento 1s infinite;
}

.card-info{
    transition: 0.3s;
}

@keyframes movimiento {
  0% {
    background-color: antiquewhite !important;
  }
  100% { 
    background-color: rgb(251, 144, 3) !important;
  }
}

</style>