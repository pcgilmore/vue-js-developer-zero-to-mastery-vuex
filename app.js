// const { createApp } = Vue;

// createApp({
//   data() {
//     return {
//       message: "Hello Vue!",
//     };
//   },
// }).mount("#app");

const vm = Vue.createApp({
  data() {
    return {
      firstName: "Paul",
      lastName: "Gilmore",
      url: "https://www.google.com",
      rawUrl: '<a href="https://www.google.com" target="_blank">Link</a>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
  },
}).mount("#app");

console.log(vm.$data);
setTimeout(() => {
  vm.firstName = "Paul";

  console.log(vm.$data);
}, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: "Adam",
//       lastName: "Lallana",
//     };
//   },
// }).mount("#app2");
