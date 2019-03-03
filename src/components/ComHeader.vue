<template>
  <div id="header">
    <img src="@/assets/logo.png">
    <nav>
      <router-link to="/">Today Goal</router-link>
      <router-link to="/long-term-goal">Long Term Goal</router-link>
            <router-link to="/past-data-list">Past Data List</router-link>
    </nav>
  </div>
</template>

<style scoped>
#header {
  background-color: grey
}
</style>
