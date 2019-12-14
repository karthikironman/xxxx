<template>
  <div>
    <h1 style="height:5rem; margin:0; color:white" class="text-center"> Socket and IOT </h1>
  <navigation/>
  <router-view />
  <ftr/>
  </div>
</template>

<script>
import navigation from '@/components/widgets/navigation'
import ftr from '@/components/widgets/footer'
export default {
  name: 'app',
  components: {
    navigation,
    ftr
  }
}
</script>

<style scoped>

</style>
