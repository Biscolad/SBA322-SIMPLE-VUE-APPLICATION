<script>
import CitySearch from '../components/CitySearch.vue';
import CityList from '../components/CityList.vue';

export default {
  components: {
    CitySearch,
    CityList,
  },
  data() {
    return {
      cities: ['New York', 'London', 'Tokyo'],
    };
  },
};
</script>



<template>
  <div>
    <h1>City Search Home</h1>
    <CitySearch />
    <CityList :cities="cities" />
    <router-link :to="{ name: 'search', params: { cityName: 'New York' } }">Search New York</router-link>
  </div>
</template>



<style>
</style>


