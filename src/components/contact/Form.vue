<template>
  <form @submit.prevent="submit">
    <h1>Add new contacts</h1>
    <input
      type="text"
      class="input"
      placeholder="Contact Name"
      required="true"
      v-model="name"
    />
    <button type="submit" class="btn">{{ submitButtonText }}</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      name: ""
    };
  },
  props: {
    submitButtonText: String
  },
  methods: {
    submit() {
      this.$emit("submit", this.$data);
    }
  }
};
</script>

<style></style>
