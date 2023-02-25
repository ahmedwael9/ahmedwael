<template>
  <v-container class="py-10">
    <div class="py-16 text-center">
      <h3>Contact Me</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit quos voluptates nostrum ex</p>
     </div>
   <v-row>
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
        <v-card-text>
            <v-text-field
            label="Full Name"
            placeholder="Dense & Rounded"
            filled
            rounded
            dense
          ></v-text-field>
            <v-text-field
            label="Email"
            placeholder="Dense & Rounded"
            filled
            rounded
            dense
          ></v-text-field>
          <v-textarea
          filled
          auto-grow
          label="Hint"
          rows="4"
          row-height="30"
          rounded
          dense
        ></v-textarea>
       
        </v-card-text>
        <v-card-actions>
          <v-btn text>
            Cancel
          </v-btn>
        </v-card-actions>
    </v-col>
    <v-col>
<img src="/images/Untitled-1.svg">

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