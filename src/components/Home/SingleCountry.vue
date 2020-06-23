<template>
  <q-card style="width: 100%;">
    <q-toolbar>
      <q-toolbar-title class="text-subtitle2">Updated: {{this.formatDate(country.details.Date)}}</q-toolbar-title>
      <q-btn size="sm" flat v-close-popup round dense icon="close" />
    </q-toolbar>

    <q-card-section>
      <countrydetailsbox :country="country" />
    </q-card-section>
    <q-card-section>
      <tree :country="country.details" />
    </q-card-section>
    <q-card-section>
      <countryrates :country="country.details" />
    </q-card-section>
    <q-card-section>
      <timeline :cases="country.cases.cases" />
    </q-card-section>
  </q-card>
</template>

<script>
const moment = require("moment");
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    loading1: false
  }),
  props: {
    country: {
      type: Object
    }
  },
  components: {
    countrydetailsbox: () => import("../Country/CountryDetailsBox.vue"),
    tree: () => import("../Country/Tree.vue"),
    countrycases: () => import("../Country/CountryCases.vue"),
    countryrates: () => import("../Country/CountryRates.vue"),
    loading: () => import("../Universal/Elements/Loading"),
    timeline: () => import("../Charts/Timeline")
  },
  methods: {
    formatDate(dateStr) {
      return moment(dateStr).format("dddd, MMMM Do YYYY, h:mm:ss a");
    }
  }
};
</script>