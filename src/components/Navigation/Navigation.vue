<script setup lang="ts">
import { ref } from 'vue'
import { NAVIGATION_LIST } from './constants'

const activeLink = ref(
  NAVIGATION_LIST.find((item) => item.text === 'О нас')?.text || NAVIGATION_LIST[0].text
)
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="{ link, text } in NAVIGATION_LIST" class="navigation__item" :key="text">
        <a
          class="navigation__item-link"
          :href="link"
          :class="{ 'navigation__item-link_active': activeLink === text }"
          @click="activeLink = text"
        >
          {{ text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';

.navigation {
  padding: 0 135px;

  &__list {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }

  &__item {
    position: relative;

    &-link {
      text-decoration: none;
      color: $primaryColor;

      &:hover {
        color: $secondaryColor;
      }

      &_active {
        color: $secondaryColor;

        &::after {
          content: '';
          position: absolute;
          bottom: -16px;
          left: 0;
          width: calc(100% + 32px);
          height: 2px;
          transform: translateX(-16px);
          background: $secondaryColor;
        }
      }
    }
  }
}
</style>
./constants
