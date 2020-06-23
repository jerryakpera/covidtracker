<template>
  <q-card class="my-card q-pa-xs" square flat bordered>
    <q-card-section class="q-pa-xs">
      <div class="row items-center no-wrap q-pa-none">
        <div class="col">
          <span
            v-if="countriesLength <= 25"
            class="flag-icon big"
            :class="'flag-icon-' + country.CountryCode.toLowerCase()"
          ></span>

          <span v-else class="flag-icon" :class="'flag-icon-' + country.CountryCode.toLowerCase()"></span>

          <div class="text-h5 text-weight-medium">{{ country.Country }}</div>
        </div>

        <div class="col-auto">
          <q-btn
            :to="'/country/' + country.Slug"
            size="sm"
            flat
            round
            color="primary"
            icon="visibility"
            @click="setCountryObj(country)"
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
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    country: {
      type: Object,
      required: true
    },
    countriesLength: {
      type: Number
    }
  },
  methods: {
    ...mapActions("countries", ["setCountry"]),
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    setCountryObj(country) {
      this.setCountry(country);
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
</style>
