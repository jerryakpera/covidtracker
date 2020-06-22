<template>
  <q-card square flat class="q-pa-none" bordered>
    <q-tabs
      v-model="tab"
      class="bg-white text-black"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      dense
    >
      <q-tab name="number" label="No" />
      <q-tab name="rate" label="Rate" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="number" class="q-pa-none">
        <ratesbox
          topic="no"
          :recovery="numberWithCommas(country.TotalRecovered)"
          :fatality="numberWithCommas(country.TotalDeaths)"
        />
      </q-tab-panel>

      <q-tab-panel name="rate" class="q-pa-none">
        <ratesbox
          topic="rate"
          :recovery="country.recoveryRate"
          :fatality="country.fatalityRate"
        />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
const moment = require("moment");
export default {
  data: () => ({
    tab: "number"
  }),
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  components: {
    loading: () => import("../Universal/Elements/Loading"),
    ratesbox: () => import("./RatesBox")
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    formatDate(dateStr) {
      return moment(dateStr).format("dddd, MMMM Do YYYY");
    }
  }
};
</script>

<style lang="scss" scoped>
.flag-icon {
  font-size: 2.3em;
  border-radius: 5px;
  border: 1px solid #eee;
}
</style>
