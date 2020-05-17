<template>
  <v-app>
    <navBar />
  </v-app>
</template>

<script>
import navBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    navBar
  },
  data: () => ({
    //
  })
};
</script>
