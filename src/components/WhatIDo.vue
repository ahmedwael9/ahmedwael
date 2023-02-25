<template>
   <v-container class="my-10">
     <div class="py-10 text-center">
      <h3>What I Can Do</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit quos voluptates nostrum ex</p>
     </div>
     <v-row no-gutters>
      <v-col
       class="pa-10"
        cols="12"
        sm="6"
      >
      <canvas width="300" height="300" id="myChart"></canvas>

    </v-col>
      <v-col
      class="pa-2 align-self-center"
        cols="12"
        sm="6"
      >
      <v-list
      three-line
    >
      <v-list-item>
        <v-list-item-action>
          <div class="mt-2"  style='height:15px;width: 15px;background-color: #FF6384;border-radius: 50%;'> </div>
            </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Front End Development</v-list-item-title>
          <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <div class="mt-2"  style='height:15px;width: 15px;background-color: #FFCD56;border-radius: 50%;'> </div>
            </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Back End Development</v-list-item-title>
          <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action>
          <div class="mt-2"  style='height:15px;width: 15px;background-color: #36A2EB;border-radius: 50%;'> </div>
            </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>App Development</v-list-item-title>
          <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
  mounted(){
     const ctx = document.getElementById('myChart');
     const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
    },
);

myChart;

},

}
</script>

<style>

</style>