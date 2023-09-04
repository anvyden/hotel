<script setup lang="ts">
import TheHeader from './components/TheHeader/TheHeader.vue'
import TheQuiz from './components/TheQuiz/TheQuiz.vue'
import TheHalls from './components/TheHalls/TheHalls.vue'
import TheFooter from './components/TheFooter/TheFooter.vue'
import TheModal from './components/TheModal/TheModal.vue'
import { ref } from 'vue'

const isModalVisible = ref(false)
</script>

<template>
  <TheHeader @open-modal="isModalVisible = true" />
  <main class="main">
    <div class="container">
      <div class="main__quiz">
        <TheQuiz />
      </div>
      <div class="main__halls">
        <TheHalls @open-modal="isModalVisible = true" />
      </div>
    </div>
  </main>
  <TheFooter />
  <TheModal :is-visible="isModalVisible" @close-modal="isModalVisible = false" />
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';
@import '@/styles/_layouts.scss';

.main {
  padding: rem(16) 0 rem(32) 0;

  @include mobile {
    padding: 18px 0 22px 0;
  }

  &__quiz {
    margin-bottom: rem(25);
  }
}
</style>
./components/TheQuiz/Quiz.vue ./components/TheHalls/Halls.vue ./components/TheFooter/Footer.vue
