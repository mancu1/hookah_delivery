<template>
  <v-app>
    <Header />
    <FirstScreen />
    <SecondScreen id="service" />
    <ThirdScreen id="price" />
    <FourthScreen id="delivery" />
    <FifthScreen id="form" />
    <Footer />
  </v-app>
</template>

<script>
import FirstScreen from "./components/FirstScreen";
import Header from "./components/Header";
import SecondScreen from "./components/SecondScreenDir/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";
import FourthScreen from "./components/FourthScreenDir/FourthScreen";
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
