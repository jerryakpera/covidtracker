<template>
  <div>
    <q-tree :nodes="cases" node-key="label" />
  </div>
</template>

<script>
export default {
  data: () => ({
    cases: [
      {
        label: "Cases",
        children: []
      }
    ]
  }),
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    processTree() {
      const total = {
        label: "Total",
        icon: "donut_small",
        children: [
          {
            label: `Cases: ${this.numberWithCommas(
              this.country.TotalConfirmed
            )}`
          },
          {
            label: `Recovered: ${this.numberWithCommas(
              this.country.TotalRecovered
            )}`
          },
          {
            label: `Deaths: ${this.numberWithCommas(this.country.TotalDeaths)}`
          }
        ]
      };
      const newCases = {
        label: "New",
        icon: "fiber_new",
        children: [
          {
            label: `Cases: ${this.numberWithCommas(this.country.NewConfirmed)}`
          },
          {
            label: `Recovered: ${this.numberWithCommas(
              this.country.NewRecovered
            )}`
          },
          { label: `Deaths: ${this.numberWithCommas(this.country.NewDeaths)}` }
        ]
      };

      this.cases[0].children = [newCases, total];
    }
  },
  created() {
    this.processTree();
  }
};
</script>