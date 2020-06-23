<template>
  <q-intersection transition="scale">
    <q-card
      @click="openCountryModal"
      style="cursor: pointer; width: 100%"
      class="my-card q-pa-xs"
      square
      flat
      bordered
    >
      <q-card-section class="q-pa-xs">
        <div class="row items-center no-wrap q-pa-none">
          <div class="col">
            <span
              v-if="countriesLength <= 25"
              class="flag-icon big"
              :class="'flag-icon-' + country.CountryCode.toLowerCase()"
            ></span>

            <span
              v-else
              class="flag-icon"
              :class="'flag-icon-' + country.CountryCode.toLowerCase()"
            ></span>

            <div class="text-h5 text-weight-medium">{{ country.Country }}</div>
          </div>

          <div class="col-auto">
            <q-btn
              @click="openCountryModal"
              size="sm"
              flat
              round
              color="primary"
              icon="visibility"
            />
          </div>
        </div>
      </q-card-section>
      <q-card-section horizontal>
        <q-card-section class="col-4 bg-primary text-white text-center">
          <div class="text-subtitle2">CASES</div>
          <div class="text-weight-bold">{{ numberWithCommas(country.TotalConfirmed) }}</div>
          <div class="text-body2">+ {{ numberWithCommas(country.NewConfirmed) }} new</div>
        </q-card-section>

        <q-card-section class="col-4 bg-positive text-white text-center">
          <div class="text-subtitle2">RECOVERED</div>
          <div class="text-weight-bold">{{ numberWithCommas(country.TotalRecovered) }}</div>
          <div class="text-body2">+ {{ numberWithCommas(country.NewRecovered) }} new</div>
        </q-card-section>

        <q-card-section class="col-4 bg-negative text-white text-center">
          <div class="text-subtitle2">DEATHS</div>
          <div class="text-weight-bold">{{ numberWithCommas(country.TotalDeaths) }}</div>
          <div class="text-body2">+ {{ numberWithCommas(country.NewDeaths) }} new</div>
        </q-card-section>
      </q-card-section>
    </q-card>
    <q-dialog v-model="countryModal">
      <singlecountry :country="singlecountry" />
    </q-dialog>
  </q-intersection>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    countryModal: false
  }),
  props: {
    country: {
      type: Object,
      required: true
    },
    countriesLength: {
      type: Number
    }
  },
  computed: {
    ...mapGetters("countries", ["singlecountry"])
  },
  components: {
    singlecountry: () => import("./SingleCountry")
  },
  methods: {
    ...mapActions("countries", [
      "setCountry",
      "fetchSingleCountry",
      "fetchCountryDetails"
    ]),
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    setCountryObj(country) {
      this.setCountry(country);
      this.$router.push(`/country/${this.country.Slug}`);
    },
    getCountryDetails() {
      return new Promise((resolve, reject) => {
        this.loading1 = true;
        this.fetchSingleCountry(this.country.Slug)
          .then(() => {
            this.setCountry(this.country);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    openCountryModal() {
      this.showLoading();
      this.getCountryDetails().then(() => {
        this.hideLoading();
        this.countryModal = true;
      });
    },
    showLoading() {
      this.loading = true;
      this.$q.loading.show();
    },
    hideLoading() {
      this.loading = false;
      this.$q.loading.hide();
    }
  }
};
</script>

<style lang="scss" scoped>
.my-card {
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: none;
  }

  .flag-icon {
    font-size: 1.5em;
    border-radius: 5px;
    border: 1px solid #eee;
    &.big {
      font-size: 2.3em;
    }
  }
}
@media (max-width: 400px) {
  .my-card {
    .text-subtitle2 {
      font-size: 8px;
    }

    .text-weight-bold {
      font-size: 12px;
    }
  }
}

.example-item {
  // display: inline-block;
  padding: 0;
}
</style>
