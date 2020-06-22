<template>
  <q-spinner-audio :color="color" size="2em" />
</template>
<script>
export default {
  props: {
    color: {
      type: String
    }
  }
};
</script>
