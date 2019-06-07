<template>
  <ul v-if="any" style="padding: 0; list-style: none">
    <Item v-for="item in items" :key="item.id">
      <router-link :to="{ name: type, params: { id: item.id } }" :class="type">
        {{ item[itemKey] }}
      </router-link>
    </Item>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    itemKey: {
      type: String,
      default: "value"
    },
    type: {
      type: String,
      default: "item"
    }
  },
  components: {
    Item: {
      name: "Item",
      render(createElement) {
        return createElement("li", this.$slots.default);
      }
    }
  },
  computed: {
    any() {
      return this.items.length > 0;
    }
  }
};
</script>

<style></style>
