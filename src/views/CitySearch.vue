<template>
    <div>
      <input v-model="cityName" placeholder="Enter city name" />
      <button @click="search">Search</button>
  
      
  
      <h2>City List</h2>
      <ul>
        <li v-for="city in cities" :key="city">{{ city }}</li>
      </ul>
  
    
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        cityName: '',
        cities: ['New York', 'London', 'Tokyo'],
        isHighlighted: false,
      };
    },
    methods: {
      search() {
        // Implement search logic
      },
    },
  };
</script>
  