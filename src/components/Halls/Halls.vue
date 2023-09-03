<script lang="ts" setup>
import BookingCard from '../BookingCard/BookingCard.vue'
import { ref } from 'vue'
import { HALLS } from './constants'

const currentHall = ref(HALLS[0])

const emit = defineEmits(['openModal'])

const findHall = ({ target }: MouseEvent) => {
  if (!(target instanceof HTMLElement)) return
  return HALLS.find((hall) => hall.text === target?.textContent)
}
</script>

<template>
  <section class="halls">
    <h2 class="halls__title">Схемы залов</h2>
    <ul class="halls__pagination">
      <li
        class="halls__pagination-item"
        v-for="{ id, text } in HALLS"
        :key="id"
        :class="{ 'halls__pagination-item--active': text === currentHall.text }"
        @click="currentHall = findHall($event) || HALLS[0]"
      >
        {{ text }}
      </li>
    </ul>
    <div class="halls__hall">
      <img class="halls__hall-img" src="@/assets/img/hall-plan-1.jpg" />
      <div class="halls__card">
        <BookingCard :options="currentHall.options" @open-modal="emit('openModal', true)" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';

.halls {
  &__title {
    margin-bottom: rem(24);

    @include font-h2;

    @include tablet {
      text-align: center;
      margin-bottom: rem(25);
    }
  }

  &__pagination {
    display: flex;
    gap: 2px;
    list-style-type: none;

    @include tablet {
      justify-content: center;
    }

    &-item {
      padding: 16px 32px;
      border-radius: 16px 16px 0 0;
      background: $platinum;
      cursor: pointer;
      text-transform: capitalize;

      @include font-roboto;

      color: $middleGray;

      &--active {
        background: $lightPlatinum;
        color: $primaryColor;
      }
    }
  }

  &__hall {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: rem(11) rem(56) rem(11) rem(231);
    background: $lightPlatinum;
    border-radius: 0px 16px 16px 16px;

    @include large-tablet {
      padding-left: rem(56);
    }

    @include tablet {
      flex-direction: column;
      gap: 16px;
      padding: 17px 16px 24px 16px;
    }

    &-img {
      @include tablet {
        max-width: 118px;
      }
    }
  }
}
</style>
