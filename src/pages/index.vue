<template>
  <div>
    <elButton @click="handleClick">counter: {{counter}}</elButton>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  name: 'IndexPage',
  setup () {
    const store = useStore()
    const counter = computed(() => store.counter)
    const handleClick = () => {
      store.counter++
    }
    return {
      counter,
      handleClick
    }
  }
})

</script>
