<script setup lang="ts">
import { ref } from 'vue'
import { NAVIGATION_LIST } from './constants'
import IconClose from '../icons/IconClose.vue'

const activeLink = ref(
  NAVIGATION_LIST.find((item) => item.text === 'О нас')?.text || NAVIGATION_LIST[0].text
)

const emit = defineEmits(['closeBurgerMenu'])

const navItemOnClick = (text: string) => {
  activeLink.value = text
  emit('closeBurgerMenu')
}
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="{ link, text } in NAVIGATION_LIST" class="navigation__item" :key="text">
        <a
          class="navigation__item-link"
          :href="link"
          :class="{ 'navigation__item-link_active': activeLink === text }"
          @click="navItemOnClick(text)"
        >
          {{ text }}
        </a>
      </li>
    </ul>
    <button type="submit" class="navigation__button-close" @click="emit('closeBurgerMenu')">
      <IconClose />
    </button>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';

.navigation {
  padding: 0 rem(135);

  @include large-tablet {
    padding: 0 rem(20);
  }

  @include tablet {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 350px;
    height: 100%;
    padding: rem(50) rem(30) rem(50) rem(20);
    background: #fff;
  }

  @include mobile {
    width: 100%;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    list-style-type: none;

    @include tablet {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }

  &__item {
    position: relative;

    @include tablet {
      font-size: 20px;
    }

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
          bottom: rem(-16);
          left: 0;
          width: calc(100% + rem(32));
          height: 2px;
          transform: translateX(rem(-16));
          background: $secondaryColor;
        }
      }
    }
  }

  &__button-close {
    display: none;
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    cursor: pointer;

    @include tablet {
      display: block;
    }
  }
}
</style>
