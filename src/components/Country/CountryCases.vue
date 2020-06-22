<template>
  <q-card square flat>
    <cardheader title="Recorded Cases" color="black" />
    <q-card-section horizontal class="text-center bg-blue-grey-2">
      <q-card-section class="col-3"> </q-card-section>
      <q-card-section class="col-3">
        <div class="text-subtitle2">CASES</div>
      </q-card-section>
      <q-card-section class="col-3">
        <div class="text-subtitle2">RECOVERED</div>
      </q-card-section>
      <q-card-section class="col-3">
        <div class="text-subtitle2">DEATHS</div>
      </q-card-section>
    </q-card-section>
    <q-card-section horizontal class="text-center bg-blue-grey-1">
      <q-card-section class="col-3">
        <div class="text-subtitle2">NEW</div>
      </q-card-section>
      <q-card-section class="col-3">
        <div class="text-h6">{{ numberWithCommas(country.NewConfirmed) }}</div>
      </q-card-section>
      <q-card-section class="col-3">
        <div class="text-h6">{{ numberWithCommas(country.NewRecovered) }}</div>
      </q-card-section>
      <q-card-section class="col-3">
        <div class="text-h6">{{ numberWithCommas(country.NewDeaths) }}</div>
      </q-card-section>
    </q-card-section>
    <q-card-section horizontal class="text-center bg-blue-grey-2">
      <q-card-section class="col-3">
        <div class="text-subtitle2">TOTAL</div>
      </q-card-section>
      <q-card-section class="col-3">
        <div class="text-subtitle2">
          <div class="text-h6">
            {{ numberWithCommas(country.TotalConfirmed) }}
          </div>
        </div>
      </q-card-section>
      <q-card-section class="col-3">
        <div class="text-subtitle2">
          <div class="text-h6">
            {{ numberWithCommas(country.TotalRecovered) }}
          </div>
        </div>
      </q-card-section>
      <q-card-section class="col-3">
        <div class="text-subtitle2">
          <div class="text-h6">{{ numberWithCommas(country.TotalDeaths) }}</div>
        </div>
      </q-card-section>
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
  font-size: 2.3em;
  border-radius: 5px;
  border: 1px solid #eee;
}
</style>
