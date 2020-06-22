<template>
  <div>
    <q-card-section
      class="bg-positive text-center text-white"
      v-if="topic == 'no'"
    >
      <div class="text-subtitle2 text-weight-bolder">RECOVERED</div>
      <div class="text-h1 text-weight-bolder">{{ recovery }}</div>
    </q-card-section>
    <q-card-section
      class="bg-negative text-center text-white"
      v-if="topic == 'no'"
    >
      <div class="text-subtitle2 text-weight-bolder">DEATHS</div>
      <div class="text-h1 text-weight-bolder">{{ fatality }}</div>
    </q-card-section>

    <q-card-section
      class="bg-positive text-center text-white"
      v-if="topic == 'rate'"
    >
      <!-- <div class="text-subtitle2 text-weight-bolder">RECOVERY RATE</div> -->
      <circularprogress :value="recovery" />
    </q-card-section>
    <q-card-section
      class="bg-negative text-center text-white"
      v-if="topic == 'rate'"
    >
      <!-- <div class="text-subtitle2 text-weight-bolder">FATALITY RATE</div> -->
      <circularprogress :value="fatality" />
    </q-card-section>
  </div>
</template>

<script>
export default {
  props: ["recovery", "fatality", "topic"],
  components: {
    circularprogress: () => import("../Universal/Elements/CircularProgress")
  }
};
</script>
