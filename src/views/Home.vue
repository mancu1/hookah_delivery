<template>
  <div>
    <FirstScreen />
    <SecondScreen id="service" />
    <ThirdScreen id="price" />
    <FourthScreen id="delivery" />
    <FifthScreen id="form" />
    <Footer />
  </div>
</template>

<script>
import FirstScreen from "../components/FirstScreen";
import SecondScreen from "../components/SecondScreenDir/SecondScreen";
import ThirdScreen from "../components/ThirdScreen";
import FourthScreen from "../components/FourthScreenDir/FourthScreen";
import FifthScreen from "../components/FifthScreen";
import Footer from "../components/Footer";

export default {
  name: "Header",
  components: {
    Footer,
    FifthScreen,
    FourthScreen,
    ThirdScreen,
    SecondScreen,
    FirstScreen
  }
};
</script>
<style scoped></style>
