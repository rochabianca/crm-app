<template>
  <div id="app" class="container">
    <sidebar :contacts="contacts.all()" />
    <app-content />
  </div>
</template>
<script>
import AppContent from "@/components/AppContent.vue";
import Sidebar from "@/components/Sidebar.vue";
import Model from "@codeship/modelist";

export default {
  name: "App",
  components: {
    AppContent,
    Sidebar
  },
  data() {
    return {
      contacts: new Model({
        setPrimaryKey: true,
        data: [
          {
            name: "Jane Doe"
          },
          {
            name: "John Doe"
          }
        ]
      })
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/page.scss";
</style>
