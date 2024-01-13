<script setup>
import Nav from './components/Nav.vue'
// import HomeView from './views/HomeView.vue'
// import AboutView from './views/AboutView.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
</script>

<template>
  <div id="app">
    <h1>Welcome to City Search</h1>
    <div class="navBar">
      <Nav></Nav>
      <!-- <HomeView></HomeView>
      <AboutView></AboutView> -->
    </div>
    <CitySearch></CitySearch>
    <CityList></CityList>
  </div>
  
</template>




<style scoped>

#app {
  text-align: center;
  padding: 20px;
}


</style>
