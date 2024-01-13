<template>
    <div>
      <h1>Search Results</h1>
      <p>Displaying search results for: {{ cityName }}</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cityName() {
        // Access the cityName from the route params
        return this.$route.params.cityName || 'Unknown City';
      },
    },
  };
  </script>
  