<template>
  <div>
    <q-circular-progress
      show-value
      font-size="14px"
      :value="value * 1"
      size="58px"
      :thickness="0.25"
      color="white"
      track-color="grey-10"
      class="q-ma-md"
    >
      {{ value * 1 }}%
    </q-circular-progress>
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>
