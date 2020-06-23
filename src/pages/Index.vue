<template>
  <q-page class="q-pa-xs">
    <div v-if="!loading">
      <!-- <searchbar /> -->
      <div class="row q-px-md q-pt-md">
        <div class="col-11">
          <q-btn
            flat
            outline
            color="secondary"
            label="Sort by Cases"
            @click="casesSort"
          />
        </div>
        <div class="col">
          <q-btn
            flat
            round
            color="secondary"
            icon="refresh"
            @click="casesSort"
            class="align-right"
          />
        </div>
      </div>
      <countries :countries="sortedCountries" :originCountry="originCountry" />
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    sortedByCases: {
      state: false,
      direction: "down"
    },
    loading: false,
    weatherData: null,
    lat: null,
    lon: null,
    apiUrl: "http://api.openweathermap.org/data/2.5/weather",
    apiKey: "9affab1cf5f625b80c3c0255c482728d",
    originCountry: null,
    sortedCountries: null
  }),
  name: "PageIndex",
  components: {
    searchbar: () => import("../components/Home/SearchBar"),
    countries: () => import("../components/Home/Countries"),
    origincountry: () => import("../components/Home/OriginCountry")
  },
  computed: {
    ...mapGetters("countries", ["countries"])
  },
  methods: {
    ...mapActions("countries", ["fetchAllCountries"]),
    getAllCountries() {
      this.showLoading();
      this.fetchAllCountries()
        .then(() => {
          this.casesSort();
          this.hideLoading();
        })
        .catch(err => this.triggerNegative(err));
    },
    casesSort() {
      const toSort = [...this.countries];

      var sorted = [];
      if (this.sortedByCases.direction == "down") {
        sorted = toSort.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
        this.sortedByCases.direction = "up";
      } else {
        sorted = toSort.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed);
        this.sortedByCases.direction = "down";
      }
      this.sortedCountries = [...sorted];

      return;
    },
    showLoading() {
      this.loading = true;
      this.$q.loading.show();
    },
    hideLoading() {
      this.loading = false;
      this.$q.loading.hide();
    },
    refreshCountries() {
      this.getAllCountries();
    },
    triggerNegative(message) {
      this.$q.notify({
        type: "negative",
        message: message
      });
    }
  },
  created() {
    this.getAllCountries();
    this.casesSort();
  }
};
</script>
