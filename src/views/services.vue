<template
  ><div>
    <FirstScreen />
    <Services id="scroll" />
    <Footer />
  </div>
</template>

<script>
import Services from "@/components/SecondScreenDir/Services";
import FirstScreen from "@/components/FirstScreen";
import Footer from "@/components/Footer";
export default {
  name: "services",
  components: {
    Services,
    FirstScreen,
    Footer,
  },
};
</script>
