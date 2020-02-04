<template>
  <v-app>
    <Header />
    <FirstScreen />
    <SecondScreen />
    <ThirdScreen />
    <FourthScreen />
    <FifthScreen />
    <Footer />
  </v-app>
</template>

<script>
import FirstScreen from "./components/FirstScreen";
import Header from "./components/Header";
import SecondScreen from "./components/SecondScreenDir/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";
import FourthScreen from "./components/FourthScreen";
import FifthScreen from "./components/FifthScreen";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Footer,
    FifthScreen,
    FourthScreen,
    ThirdScreen,
    SecondScreen,
    Header,
    FirstScreen
  },

  data: () => ({
    //
  })
};
</script>
