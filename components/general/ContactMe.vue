<template>
  <div class="py-5 container">
    <div class="text-center pb-3">
      <h4 class="fw-bold m-0" style="text-transform: uppercase">{{ $t("contactMe") }}</h4>
      <p class="fs-6">{{ $t("lorem") }}</p>
    </div>
    <div class="row justify-content-center mt-3 mx-0">
      <div class="col-11 col-sm-8">
        <form class="needs-validation" @submit.prevent="submitForm" novalidate>
          <div>
            <input
              v-model="formData.email"
              type="email"
              class="form-control"
              id="validationCustom01"
              style="border-radius: 20px 20px 0px 0px"
              required
            />
            <div class="invalid-feedback">Please provide a valid email.</div>
          </div>
          <div class="mt-2">
            <textarea
              v-model="formData.description"
              type="textarea"
              rows="4"
              class="form-control"
              id="validationCustom02"
              style="border-radius: 0px 0px 20px 20px"
              required
            ></textarea>
            <div class="invalid-feedback">Please provide a description.</div>
          </div>
          <div class="text-center mt-3">
            <button class="btn btn-light px-5" type="submit">
              {{ $t("sendTheMessage") }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  email: "",
  description: "",
});

const submitForm = async () => {
  const form = document.querySelector(".needs-validation");

  if (form.checkValidity()) {
    const response = await fetch("https://formspree.io/f/mlezryoz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      console.log("Form submitted successfully");
      formData.value.description = "";
      formData.value.email = "";
    } else {
      console.error("Form submission failed");
    }
  } else {
    console.error("Form is not valid");
  }
};
</script>
