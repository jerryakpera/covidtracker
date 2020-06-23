<template>
  <q-card class="my-card" flat bordered>
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">{{info.title}}</div>
      <div class="text-subtitle2">{{info.subtitle}}</div>
    </q-card-section>

    <q-separator />

    <q-card-section class>
      <q-item v-ripple v-for="text in info.text" :key="text">
        <q-item-section>{{text}}</q-item-section>
      </q-item>
    </q-card-section>

    <q-card-section class="q-mt-none q-pt-none" v-if="info.list">
      <q-card-section class="q-pa-none q-ma-none" v-for="list in info.list" :key="list.title">
        <q-list class="q-mt-sm" :class="'bg-' + list.color" dark>
          <q-item-label header>{{list.title}}</q-item-label>
          <q-item dense v-for="item in list.symptoms" :key="item">
            <q-item-section>
              <q-item-label>{{item}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card-section>

    <q-card-actions align="right">
      <a :href="info.link" target="_blank">
        <q-btn flat icon="link">Learn More</q-btn>
      </a>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>