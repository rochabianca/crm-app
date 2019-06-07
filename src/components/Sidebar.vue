<template>
  <div id="sidebar" class="flex-1">
    Render Contacts
    <list :items="contacts" itemKey="name" type="contact" />
  </div>
</template>

<script>
import List from "@/components/general/List";

export default {
  name: "Sidebar",
  components: {
    List
  },
  props: {
    contacts: Array
  }
};
</script>
