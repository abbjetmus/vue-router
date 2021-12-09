
<template>
  <div>
    <div>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </div>

    <RouterView></RouterView>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
    }
  },
}
</script>

<style>
</style>