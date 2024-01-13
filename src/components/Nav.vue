<script>
</script>

<template>
    <div>
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
      
    </div>
</template>


<style scoped>
nav {
  background-color: #333;
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

router-link {
  margin-right: 10px;
  color: white;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>