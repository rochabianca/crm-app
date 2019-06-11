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
    <div class="flex">
      <div class="flex-1 pr-2">
        <div class="input-block">
          <label class="input-label" for="details"
            >Details about first contact:</label
          >
          <input class="input" type="text" v-model="contactDetails" />
        </div>
        <div class="input-block">
          <label class="input-label">Notes:</label>
          <textarea class="input" v-model="contactNotes" rows="10"></textarea>
        </div>
        <div class="input-block">
          <label class="input-label">Relationship Quality</label>
          <div class="flex">
            <label for="good" class="flex-1 option bg-green-light">
              <input type="radio" id="good" value="good" v-model="quality" />
              <span>Good</span>
            </label>
            <label for="okay" class="flex-1 option bg-orange-light">
              <input type="radio" id="okay" value="okay" v-model="quality" />
              <span>Okay</span>
            </label>
            <label for="barely" class="flex-1 option bg-red-lightest">
              <input
                type="radio"
                id="barely"
                value="barely"
                v-model="quality"
              />
              <span>Barely</span>
            </label>
          </div>
        </div>
      </div>
      <div class="flex-1 pl-2">
        <template v-for="(src, key) in contact.main">
          <div class="input-block" :key="key">
            <label :for="`contact.${key}`">{{ src.placeholder }}</label>
            <input
              type="text"
              v-model="src.value"
              class="input"
              :placeholder="src.placeholder"
              :id="`contact.${key}`"
            />
            <a :href="links[key]" target="_blank"> {{ src.value }} </a>
          </div>
        </template>
      </div>
    </div>
    <button type="submit" class="btn">{{ submitButtonText }}</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      name: "",
      contact: {
        main: {
          mail: {
            value: "",
            placeholder: "Email Address"
          },
          phone: {
            value: "",
            placeholder: "Phone Number"
          },
          twitter: {
            value: "",
            placeholder: "Twitter Handle"
          }
        }
      },
      tags: "",
      contactDetails: "",
      contactNotes: "",
      quality: ""
    };
  },
  props: {
    submitButtonText: String
  },
  computed: {
    links() {
      return {
        mail: `mailto:${this.contact.main.mail.value}`,
        phone: `tel:${this.contact.main.phone.value}`,
        twitter: `https://twitter.com/${this.contact.main.twitter.value}`
      };
    }
  },
  methods: {
    submit() {
      this.$emit("submit", this.$data);
    }
  }
};
</script>

<style></style>
