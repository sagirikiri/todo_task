<template>
<div id="app">
	<v-app id="inspire">
	<v-container fluid grid-list-lg>
		<v-layout row wrap>
			<v-flex xs12 sm12 md12>
					<v-toolbar>
						<v-toolbar-side-icon></v-toolbar-side-icon>
					</v-toolbar>
				<router-view />
    		 </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>
</template>

<script>
import ComHeader from '@/components/ComHeader.vue'
import EditTask from '@/components/EditTask.vue'

export default {
  name: 'App',
  components: {
    ComHeader,
    EditTask
  },
  data(){
	return {
		dialog:false
	}
  },
  methods: {

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