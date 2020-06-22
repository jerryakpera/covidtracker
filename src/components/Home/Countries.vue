<template>
  <q-table
    grid
    :card-container-class="cardContainerClass"
    title
    :data="countries"
    :columns="columns"
    row-key="name"
    :filter="filter"
    hide-header
    :pagination.sync="pagination"
    :rows-per-page-options="rowsPerPageOptions"
  >
    <template v-slot:top>
      <q-input
        outlined
        square
        dense
        debounce="300"
        v-model="filter"
        placeholder="Search"
        style="width: 100%;"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        <template v-slot:append v-if="filter.length > 0">
          <q-icon name="close" @click="filter = ''" style="cursor: pointer" />
        </template>
      </q-input>
    </template>
    <template v-slot:item="props">
      <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
        <countrycard :country="props.row" :countriesLength="props.length" />
      </div>
    </template>
  </q-table>
</template>

<script>
export default {
  data() {
    return {
      filter: "",
      pagination: {
        page: 1,
        rowsPerPage: this.getItemsPerPage()
      },
      columns: [
        { name: "country", label: "Country", field: "Country" },
        { name: "slug", label: "Slug", field: "Slug" }
      ]
    };
  },

  props: {
    countries: {
      type: Array,
      required: true
    }
  },

  computed: {
    cardContainerClass() {
      if (this.$q.screen.gt.xs) {
        return (
          "grid-masonry grid-masonry--" + (this.$q.screen.gt.sm ? "3" : "2")
        );
      }

      return void 0;
    },

    rowsPerPageOptions() {
      if (this.$q.screen.gt.xs) {
        return this.$q.screen.gt.sm ? [3, 6, 9] : [3, 6];
      }

      return [3];
    }
  },

  watch: {
    "$q.screen.name"() {
      this.pagination.rowsPerPage = this.getItemsPerPage();
    }
  },

  components: {
    countrycard: () => import("./CountryCard")
  },

  methods: {
    getItemsPerPage() {
      const { screen } = this.$q;
      if (screen.lt.sm) {
        return 3;
      }
      if (screen.lt.md) {
        return 6;
      }
      return 9;
    }
  }
};
</script>
