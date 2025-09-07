<template>
  <h1>{{ counter.count }}</h1>
  <button @click="counter.increment">Click me!</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from '@/store/counter';

export default defineComponent({
  setup() {
    const counter = useCounterStore();

    return {
      counter,
    };
  },
});
</script>
