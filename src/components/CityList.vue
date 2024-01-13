<!-- <template>
    <div>
      <h2>City Details</h2>
      <p>City Name: {{ cityName }}</p>
    </div>
</template>
  
<script>
  export default {
    props: {
      cityName: String,
    },
  };
</script> -->



<template>
  <div>
    <h2 :class="{ highlighted: isHighlighted }">City List</h2>
    <ul>
      <li v-for="city in cities" :key="city">{{ city }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cities: Array,
  },
};
</script>

<style scoped>
/* Scoped styles specific to CityList component */
h2 {
  color: #333;
  border-bottom: 2px solid #333;
  padding-bottom: 8px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}
</style>