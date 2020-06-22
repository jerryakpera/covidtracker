<template>
  <q-card flat square>
    <!-- <cardheader title="Country Info" color="primary" /> -->
    <q-card-section class="q-pa-sm">
      <span
        class="flag-icon big"
        :class="'flag-icon-' + country.details.CountryCode.toLowerCase()"
      ></span>
      <div class="text-subtitle2 q-mt-sm">
        <span class="text-negative">
          Population:
        </span>
        {{ numberWithCommas(country.info.population) }}
      </div>
      <div class="text-subtitle2 q-mt-sm">
        <span class="text-negative">
          First Incedence:
        </span>
        {{ formatDate(country.cases.firstIncedenceDate) }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
const moment = require("moment");
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  components: {
    loading: () => import("../Universal/Elements/Loading"),
    cardheader: () => import("../Universal/Elements/CardHeader")
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
  font-size: 5.4em;
  border-radius: 5px;
  border: 1px solid #eee;
}
</style>
