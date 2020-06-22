<template>
  <q-page>
    <div class="row absolute-center">
      <h1>Global Pages</h1>
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
    ...mapGetters("countries", ["country", "countryDetails"])
  },
  components: {
    countrydetailsbox: () =>
      import("../components/Country/CountryDetailsBox.vue"),
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
          this.fetchCountryDetails(this.countryName)
            .then(() => {
              this.loading1 = false;
            })
            .catch(err => {
              console.log(1, err);
            });
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
