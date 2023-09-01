<script setup lang="ts">
import Header from './components/Header/Header.vue'
import Quiz from './components/Quiz/Quiz.vue'
import Halls from './components/Halls/Halls.vue'
</script>

<template>
  <Header />
  <main class="main">
    <div class="container">
      <div class="main__quiz">
        <Quiz />
      </div>
      <div class="main__halls">
        <Halls />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';
@import '@/styles/_layouts.scss';

.main {
  &__quiz {
    margin-top: rem(24);
  }

  &__halls {
    margin-top: rem(32);
  }
}
</style>
