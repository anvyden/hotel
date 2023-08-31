<script setup lang="ts">
import Header from './components/Header/Header.vue'
import Quiz from './components/Quiz/Quiz.vue'
</script>

<template>
  <Header />
  <main class="main">
    <div class="container">
      <div class="main__quiz">
        <Quiz />
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
}
</style>
