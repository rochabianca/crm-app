<template>
  <div id="app" class="container">
    <sidebar :contacts="contacts.all()" />
    <app-content />
  </div>
</template>
<script>
import AppContent from "@/components/AppContent.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "App",
  components: {
    AppContent,
    Sidebar
  },
  data() {
    return {};
  },
  computed: {
    contacts() {
      return this.$root.contacts;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/page.scss";
</style>
