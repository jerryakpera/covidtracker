<template>
  <q-page>
    <!-- <div class="row q-px-md bg-white q-py-sm">
      
    </div>-->
    <div class="row absolute-center">
      <loading v-if="loading1" color="primary" />
    </div>
    <q-card flat square v-if="!loading1" bordered class="q-pa-sm">
      <!-- <q-card-section class="bg-dark text-white">
        <q-btn flat round color="white" icon="arrow_back" @click="goBack" />
        {{ country.details.Country }}
        <span class="text-subtitle1">({{ country.info.capital }})</span>
      </q-card-section>-->
      <q-card-section class="q-pa-none">
        <div class="row q-pa-none">
          <div class="q-pa-xs col-xs-12 col-sm-12 col-md-3">
            <countrydetailsbox :country="country" />
            <tree :country="country.details" />
          </div>
          <div class="q-pa-xs col-xs-12 col-sm-12 col-md-3">
            <countryrates :country="country.details" />
          </div>
          <div class="q-pa-xs col-xs-12 col-sm-12 col-md-6">
            <timeline :cases="country.cases.cases" />
          </div>
        </div>
      </q-card-section>
    </q-card>
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
          console.log(0, err);
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
    refreshCountrt() {
      this.getCountryDetails();
    },
    triggerNegative(message) {
      this.$q.notify({
        type: "negative",
        message: message
      });
    },
    goBack() {
      this.$router.push("/");
    }
  },
  created() {
    if (!this.country.details.CountryCode) this.$router.push("/");
    this.getCountryDetails();
  }
};
</script>
