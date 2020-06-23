<template>
  <q-card class="my-card" flat bordered>
    <q-card-section class="text-white" :class="'bg-' + card.color">
      <div class="text-h6 text-center">{{card.title}}</div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <div class="text-h4 text-weight-bold text-center">{{this.numberWithCommas(card.number)}}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>