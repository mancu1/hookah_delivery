<template>
  <div>
    <FirstScreen />
    <delivery id="scroll" class="mx-auto" />
    <Footer class="mt-10" />
  </div>
</template>

<script>
import FirstScreen from "@/components/FirstScreen";
import delivery from "@/components/FourthScreenDir/Delivery";
import Footer from "@/components/Footer";
export default {
  name: "services",
  components: {
    delivery,
    Footer,
    FirstScreen,
  },
};
</script>
