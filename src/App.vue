<template>
    <div>
        <AppHeader/>
        <h3>I'm App!</h3>
    </div>
</template>

<script>
  import AppHeader from './components/AppHeader';

  export default {
    name: 'App',
    components: {
      AppHeader,
    },
  };
</script>

<style scoped>

</style>