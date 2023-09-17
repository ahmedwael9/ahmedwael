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
        <form @submit.prevent="submitForm">
          <div>
            <input
              v-model="formData.email"
              type="text"
              class="form-control"
              id="validationCustom01"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="mt-2">
            <textarea
              v-model="formData.desription"
              type="textarea"
              row="12"
              class="form-control"
              id="validationCustom02"
              required
            ></textarea>
            <div class="valid-feedback">Looks good!</div>
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
const formData = ref({
  email: "",
  desription: "",
});

const submitForm = async () => {
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
};
</script>
