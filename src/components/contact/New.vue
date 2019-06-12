<template>
  <div>
    <h1>Create New Contact</h1>
    <Form submitButtonText="Create Contact" @submit="submit" />
  </div>
</template>

<script>
import Form from "./Form";

export default {
  name: "New",
  components: {
    Form
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    submit(data) {
      this.$root.contacts.record(data);
      console.log(data);
    }
  }
};
</script>

<style></style>
