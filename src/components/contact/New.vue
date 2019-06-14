<template>
  <div>
    <h1>Create New Contact</h1>
    <Form submitButtonText="Create Contact" @submit="submit" />
  </div>
</template>

<script>
import Form from "./Form";
import { mapActions } from "vuex";

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
    ...mapActions(["addContact"]),
    submit(data) {
      this.addContact(data);
      // this.$store.dispatch("addContact", data);
      // console.log(data);
    }
  }
};
</script>

<style></style>
