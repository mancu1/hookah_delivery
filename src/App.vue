<template>
  <v-app>
    <Header />
    <FirstScreen />
  </v-app>
</template>

<script>
import FirstScreen from "./components/FirstScreen";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Header,
    FirstScreen
  },

  data: () => ({
    //
  })
};
</script>
