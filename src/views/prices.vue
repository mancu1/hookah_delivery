<template>
  <div>
    <FirstScreen />
    <price id="scroll" />
    <Footer />
  </div>
</template>

<script>
import price from "@/components/ThirdScreen";
import FirstScreen from "@/components/FirstScreen";
import Footer from "@/components/Footer";
export default {
  name: "services",
  components: {
    price,
    FirstScreen,
    Footer,
  },
};
</script>
