<template>
  <div id="sidebar" class="flex-1">
    Render Contacts
    <list :items="contacts.all()" itemKey="name" type="contact" />
  </div>
</template>

<script>
import List from "@/components/general/List";
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  components: {
    List
  },
  computed: {
    ...mapGetters(["contacts"])
  }
};
</script>
