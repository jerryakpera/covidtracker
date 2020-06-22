<template>
  <q-card-section :class="'bg-' + color" class="text-white">
    <div class="text-h6">{{ title }}</div>
  </q-card-section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
};
</script>
