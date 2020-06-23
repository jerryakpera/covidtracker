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
          <q-btn to="/">COVID-19 Tracker</q-btn>
          <!-- <q-btn flat dense round icon="home" aria-label="Home" to="/" /> -->
        </q-toolbar-title>
        <q-btn flat round dense icon="code" color="primary">
          <q-menu>
            <q-card class="my-card">
              <q-card-section class="bg-primary text-white">
                <div class="text-h6">Contact the Developer</div>
                <div class="text-subtitle2">@jta11developer@gmail.com</div>
              </q-card-section>
            </q-card>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" content-class="bg-grey-1" :width="250" overlay>
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
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
          caption: "Worldwide stats",
          icon: "bar_chart",
          link: "/stats"
        },
        {
          title: "Information",
          caption: "How it spreads, prevention & symptoms ",
          icon: "info",
          link: "/info"
        },
        {
          title: "Contact the developer",
          caption: "@jta11developer@gmail.com",
          icon: "code"
        }
      ]
    };
  }
};
</script>
