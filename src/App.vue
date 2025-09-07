<template>
  <h1>{{ counter.count }}</h1>
  <button @click="counter.increment">Click me!</button>
  <nav>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
  </nav>
  <div class="">
    <RouterView />
  </div>
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
