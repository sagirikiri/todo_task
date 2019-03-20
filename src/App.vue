<template>
<div id="app">
  <v-app id="inspire">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12>
          <v-card>
            <v-toolbar>
              <v-toolbar-side-icon></v-toolbar-side-icon>
            </v-toolbar>
            <router-view />
            <v-card-text style="height: 100px; position: relative">
              <v-btn
                absolute
                dark
                fab
                top
                right
                color="pink"
                v-on:click="callComponent(EditTask)"
              >
                <v-icon>add</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>
</template>

<script>
import ComHeader from '@/components/ComHeader.vue'

export default {
  name: 'App',
  components: {
    ComHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
