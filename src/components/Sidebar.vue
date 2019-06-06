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
  data() {
    return {
      contacts: [
        {
          name: "Jane Doe",
          id: 1
        },
        {
          name: "John Doe",
          id: 2
        }
      ]
    };
  }
};
</script>
