<script setup lang="ts">
import Header from './components/Header/Header.vue'
import Quiz from './components/Quiz/Quiz.vue'
import Halls from './components/Halls/Halls.vue'
import Footer from './components/Footer/Footer.vue'
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
  <Footer />
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';
@import '@/styles/_layouts.scss';

.main {
  padding: rem(16) 0 rem(32) 0;

  &__quiz {
    margin-bottom: rem(25);
  }
}
</style>
