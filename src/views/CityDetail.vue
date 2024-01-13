<template>
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
  </script>
  