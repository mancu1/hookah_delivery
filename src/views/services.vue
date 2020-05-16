<template
  ><div>
    <Services />
    <SecondScreen /></div
></template>

<script>
import Services from "@/components/SecondScreenDir/Services";
import SecondScreen from "@/components/SecondScreenDir/SecondScreen";
export default {
  name: "services",
  components: {
    Services,
    SecondScreen
  }
};
</script>
