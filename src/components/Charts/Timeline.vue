<template>
  <q-card flat bordered square>
    <cardheader title="Country Incedence Timeline" color="dark" />
    <q-card-section>
      <q-timeline color="primary" :layout="layout">
        <q-scroll-area
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          :visible="false"
          style="height: 220px;"
        >
          <q-timeline-entry
            v-for="incedence in cases"
            :key="incedence.Date"
            :subtitle="formatDate(incedence.Date)"
          >
            <div class="row">
              <div class="col-6">
                <div class="text-subtitle2 text-primary">
                  New cases: {{ numberWithCommas(incedence.Confirmed) }}
                </div>
                <div class="text-subtitle2 text-positive">
                  New recovered: {{ numberWithCommas(incedence.Recovered) }}
                </div>
                <div class="text-subtitle2 text-negative">
                  New deaths: {{ numberWithCommas(incedence.Deaths) }}
                </div>
              </div>
            </div>
          </q-timeline-entry>
        </q-scroll-area>
      </q-timeline>
    </q-card-section>
  </q-card>
</template>

<script>
const moment = require("moment");
export default {
  data: () => ({
    thumbStyle: {
      right: "4px",
      borderRadius: "5px",
      backgroundColor: "#027be3",
      width: "5px",
      opacity: 0.75
    },

    barStyle: {
      right: "2px",
      borderRadius: "9px",
      backgroundColor: "#027be3",
      width: "9px",
      opacity: 0.2
    }
  }),
  props: {
    cases: {
      type: Array
    }
  },
  components: {
    cardheader: () => import("../Universal/Elements/CardHeader")
  },
  computed: {
    layout() {
      return this.$q.screen.lt.sm
        ? "dense"
        : this.$q.screen.lt.md
        ? "comfortable"
        : "loose";
    }
  },
  methods: {
    formatDate(dateStr) {
      return moment(dateStr).format("dddd, MMMM Do YYYY");
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>
