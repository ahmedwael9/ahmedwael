<template>
  <div class="py-5">
    <div class="text-center">
      <h4 class="fw-bold m-0">CONTACT ME</h4>
      <div class="fs-6 text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </div>
    </div>
    <div class="row justify-content-center mt-3 mx-0">
      <div class="col-8">
        <form class="needs-validation" @submit.prevent="submitForm" novalidate>
          <div>
            <input
              v-model="formData.email"
              type="email"
              class="form-control"
              id="validationCustom01"
              required
            />
            <div class="invalid-feedback">Please provide a valid email.</div>
          </div>
          <div class="mt-2">
            <textarea
              v-model="formData.description"
              type="textarea"
              rows="8"
              class="form-control"
              id="validationCustom02"
              required
            ></textarea>
            <div class="invalid-feedback">Please provide a description.</div>
          </div>
          <div class="text-center mt-3">
            <button
              style="background-color: #393e46; border-radius: 18px"
              class="btn text-light px-5"
              type="submit"
            >
              Submit form
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
      // Handle successful form submission (e.g., show a success message)
      console.log("Form submitted successfully");
    } else {
      // Handle form submission error (e.g., show an error message)
      console.error("Form submission failed");
    }
  } else {
    // Form is not valid, you can handle this case as needed
    console.error("Form is not valid");
  }
};
</script>
