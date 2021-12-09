
<template>
  <div>
    <div>
      <div>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/contact">Contact</RouterLink> |
        <RouterLink to="/about">About</RouterLink>
      </div>
      <br>
      <br>
      <div>
        <button @click="navigera('/')">Home</button> | 
        <button @click="navigera('/contact')">Contact</button> | 
        <button @click="navigera('/about')">About</button>
      </div>
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
  methods: {
    navigera(nyRutt) {
      this.$router.push(nyRutt)
    }
  },
}
</script>

<style>
</style>