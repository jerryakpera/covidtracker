<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          COVID-19 Tracker
          <q-btn flat dense round icon="home" aria-label="Home" to="/" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-1"
      :width="250"
      overlay
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/Universal/Navigation/EssentialLink";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: "Home",
          caption: "All countries",
          icon: "home",
          link: "/"
        },
        {
          title: "Global",
          caption: "Global statistics",
          icon: "bar_chart",
          link: "/stats"
        }
      ]
    };
  }
};
</script>
