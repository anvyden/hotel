<script lang="ts" setup>
import BookingCard from '../BookingCard/BookingCard.vue'
import { ref } from 'vue'

// const currentHall = ref('Зал первый')

const HALLS = [
  {
    id: 'hall_1',
    text: 'Зал первый',
    options: {
      площадь: '160 кв. метров',
      вместимость: 'до 100 человек',
      фуршет: 'до 200 человек'
    }
  },
  {
    id: 'hall_2',
    text: 'Зал второй',
    options: {
      площадь: '200 кв. метров',
      вместимость: 'до 150 человек',
      фуршет: 'до 300 человек'
    }
  }
]

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
  }

  &__pagination {
    display: flex;
    gap: 2px;
    list-style-type: none;

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
  }
}
</style>
