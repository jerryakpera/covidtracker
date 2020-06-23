<template>
  <q-page>
    <q-card class="my-card" flat square>
      <q-card-section class="bg-white text-black">
        <div class="text-h3 text-center">Worldwide Covid-19 Stats</div>
        <div class="text-h6 text-center text-grey-8">({{this.formatDate(this.globalStats.date)}})</div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4" v-for="card in cards" :key="card.title">
            <globalcard :card="card" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
const moment = require("moment");
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    loading: false,
    cards: []
  }),
  computed: {
    ...mapGetters("countries", ["globalStats"])
  },
  components: {
    globalcard: () => import("../components/Global/GlobalCard.vue")
  },
  methods: {
    ...mapActions("countries", ["fetchAllCountries"]),
    getAllCountries() {
      this.showLoading();
      this.fetchAllCountries()
        .then(() => {
          this.processGlobalStats();
          this.hideLoading();
        })
        .catch(err => {
          if (err != "undefined") this.triggerNegative(err);
          this.hideLoading();
          return;
        });
    },
    processGlobalStats() {
      const newCases = {
        title: "New Cases",
        number: this.globalStats.data.NewConfirmed,
        color: "primary"
      };
      const newRecovered = {
        title: "New Recovered",
        number: this.globalStats.data.NewRecovered,
        color: "positive"
      };
      const newDeaths = {
        title: "New Deaths",
        number: this.globalStats.data.NewDeaths,
        color: "negative"
      };
      const totalCases = {
        title: "Total Cases",
        number: this.globalStats.data.TotalConfirmed,
        color: "primary"
      };
      const totalRecovered = {
        title: "Total Recovered",
        number: this.globalStats.data.TotalRecovered,
        color: "positive"
      };
      const totalDeaths = {
        title: "Total Deaths",
        number: this.globalStats.data.TotalDeaths,
        color: "negative"
      };

      this.cards = [
        newCases,
        newRecovered,
        newDeaths,
        totalCases,
        totalRecovered,
        totalDeaths
      ];
    },
    formatDate(dateStr) {
      return moment(dateStr).format("dddd, MMMM Do YYYY, h:mm:ss a");
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
    }
  },
  created() {
    this.getAllCountries();
  }
};
</script>
