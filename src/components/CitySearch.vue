
<template>
  <div>
    <input v-model="cityName" placeholder="Enter city name" />
    <button @click="search">Search</button>
    <p v-if="searchedCity">You searched for: {{ searchedCity }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: '',
    };
  },
  methods: {
    search() {
      // Implement search logic
      this.searchedCity = this.cityName;
            
    },
  },
};
</script>



<style scoped>

div {
  margin-bottom: 20px;
}

input {
  padding: 8px;
  margin-right: 8px;
}

button {
  padding: 8px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
  