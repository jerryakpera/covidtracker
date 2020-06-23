<template>
  <q-page>
    <!-- <div class="row q-px-md bg-white q-py-sm">
      
    </div>-->
    <div class="row absolute-center">
      <loading v-if="loading1" color="primary" />
    </div>
    <div class="row">
      <div class="q-pa-xs col-xs-12 col-sm-12 col-md-3">
        <div class="column">
          <countrydetailsbox :country="country" />
          <tree :country="country.details" />
        </div>
      </div>
      <div class="q-pa-xs col-xs-12 col-sm-12 col-md-3">
        <countryrates :country="country.details" />
      </div>
      <div class="q-pa-xs col-xs-12 col-sm-12 col-md-6">
        <timeline :cases="country.cases.cases" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    loading1: false
  }),
  props: {
    countryName: {
      type: String
    }
  },
  computed: {
    ...mapGetters("countries", ["country"])
  },
  components: {
    countrydetailsbox: () =>
      import("../components/Country/CountryDetailsBox.vue"),
    tree: () => import("../components/Country/Tree.vue"),
    countrycases: () => import("../components/Country/CountryCases.vue"),
    countryrates: () => import("../components/Country/CountryRates.vue"),
    loading: () => import("../components/Universal/Elements/Loading"),
    timeline: () => import("../components/Charts/Timeline")
  },
  methods: {
    ...mapActions("countries", ["fetchSingleCountry", "fetchCountryDetails"]),
    getCountryDetails() {
      this.loading1 = true;
      this.fetchSingleCountry(this.countryName)
        .then(() => {
          this.loading1 = false;
        })
        .catch(err => {
          this.hideLoading();
          this.triggerNegative("Well, this is embarrassing");
        });
    },
    showLoading() {
      this.loading = true;
      this.$q.loading.show();
    },
    hideLoading() {
      this.loading = false;
      this.$q.loading.hide();
    },
    triggerNegative(message) {
      this.$q.notify({
        type: "negative",
        message: message
      });
    },
    goBack() {
      this.$router.push("/");
    },
    triggerNegative(message) {
      this.$q.notify({
        type: "negative",
        message: message
      });
    }
  },
  created() {
    if (!this.country.details.CountryCode) this.$router.push("/");
    this.getCountryDetails();
  }
};
</script>
