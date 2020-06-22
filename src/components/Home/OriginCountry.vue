<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="col-12 col-md-3">
        <span class="flag-icon" :class="'flag-icon-' + country.CountryCode.toLowerCase()"></span>
        <div class="text-h5 q-mt-sm q-mb-xs">{{country.Country}}</div>
        <!-- <div class="text-caption text-grey">{{country}}</div> -->
      </q-card-section>
      <q-card-section class="col-12 col-md-3">
        <q-chip color="primary" text-color="white" size="md">
          <q-badge
            class="q-mr-sm"
            color="white"
            text-color="primary"
            :label="country.NewConfirmed"
          />New Cases
        </q-chip>
      </q-card-section>
      <q-card-section class="col-12 col-md-3">
        <q-chip color="positive" text-color="white" size="md">
          <q-badge
            class="q-mr-sm"
            color="white"
            text-color="positive"
            :label="country.NewRecovered"
          />New Recovered
        </q-chip>
      </q-card-section>
    </q-card-section>
    <q-card-actions>
      <q-btn flat color="dark" label="View" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  data: () => ({
    expanded: false
  }),
  props: {
    country: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
.flag-icon {
  font-size: 3.5em;
  border-radius: 5px;
  &.big {
    font-size: 2.3em;
  }
}
</style>