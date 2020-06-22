<template>
  <q-input square outlined v-model="search" label="Search" dense class="q-mb-sm">
    <template 
      v-slot:prepend
    >
      <q-icon
        name="search" 
      />
    </template>
    <template v-slot:append>
      <q-icon
        v-if="search.trim().length > 0"
        name="close"
        @click="text = ''"
        class="cursor-pointer" 
      />
    </template>
  </q-input>
</template>
<script>
export default {
  data: () => ({
    search: ""
  })
};
</script>