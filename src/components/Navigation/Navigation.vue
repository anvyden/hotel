<script setup lang="ts">
  import { NAVIGATION_LIST } from './navigationList'
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="{ link, text } in NAVIGATION_LIST" class="navigation__item">
        <a class="navigation__item-link" :href="link">
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
      &-link {
        text-decoration: none;
        color: $primaryColor;
      }
    }
  }
</style>
