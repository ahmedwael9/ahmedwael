<template>
   <v-container class="my-10">
     <div class="text-center">
      <h3>What I Can Do</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit quos voluptates nostrum ex</p>
     </div>
     <v-row no-gutters>
      <v-col
       class="pa-2"
        cols="12"
        sm="6"
      >
      
      <img width="550" src="https://quickchart.io/chart?c=%7B%0A%20%20type%3A%20%27doughnut%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data%3A%20%5B10%2C%2020%2C%2015%2C%205%2C%2050%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%2099%2C%20132)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%20159%2C%2064)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%20205%2C%2086)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(75%2C%20192%2C%20192)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(54%2C%20162%2C%20235)%27%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20labels%3A%20%5B%27Red%27%2C%20%27Orange%27%2C%20%27Yellow%27%2C%20%27Green%27%2C%20%27Blue%27%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20plugins%3A%20%7B%0A%20%20%20%20%20%20datalabels%3A%20%7B%0A%20%20%20%20%20%20%20%20formatter%3A%20(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(value%20%3C%2015)%20return%20%27%27%3B%0A%20%20%20%20%20%20%20%20%20%20return%20value%20%2B%20%27%25%27%3B%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D&v=2.9.4&w=500&h=300&bkg=white">
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
          <div class="mt-2"  style='height:15px;width: 15px;background-color: red;border-radius: 50%;'> </div>
            </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Front End Development</v-list-item-title>
          <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <div class="mt-2"  style='height:15px;width: 15px;background-color: orange;border-radius: 50%;'> </div>
            </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Back End Development</v-list-item-title>
          <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action>
          <div class="mt-2"  style='height:15px;width: 15px;background-color: blue;border-radius: 50%;'> </div>
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
export default {

}
</script>

<style>

</style>