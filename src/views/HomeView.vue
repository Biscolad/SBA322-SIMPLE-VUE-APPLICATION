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
      message: '',
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
    <p v-if="cities.length === 0">No cities available</p>
  </div>
</template>



<style scoped>

h1 {
  color: #333;
}

p {
  color: #4caf50;
}
</style>


