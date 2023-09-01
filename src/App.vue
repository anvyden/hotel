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
@import '@/styles/_layouts.scss';

.main {
  &__quiz {
    margin-top: 24px;
  }

  &__halls {
    margin-top: 32px;
  }
}
</style>
