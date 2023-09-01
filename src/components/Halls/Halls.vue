<script lang="ts" setup>
import BookingCard from '../BookingCard/BookingCard.vue'
import { ref } from 'vue'

const currentHall = ref('Зал первый')

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

const currentHallOptions = HALLS.find((hall) => hall.text === currentHall.value)?.options
</script>

<template>
  <section class="halls">
    <h2 class="halls__title">Схемы залов</h2>
    <ul class="halls__pagination">
      <li
        class="halls__pagination-item"
        v-for="{ id, text } in HALLS"
        :key="id"
        :class="{ 'halls__pagination-item--active': text === currentHall }"
        @click="currentHall = $event.target.textContent"
      >
        {{ text }}
      </li>
    </ul>
    <div class="halls__hall">
      <img class="halls__hall-img" src="@/assets/img/hall-plan-1.jpg" />
      <div class="halls__card">
        <BookingCard :options="currentHallOptions" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.halls {
  &__title {
    margin-bottom: 16px;
  }

  &__pagination {
    display: flex;
    gap: 2px;
    list-style-type: none;

    &-item {
      padding: 14px 32px;
      border-radius: 16px 16px 0 0;
      background: #e9eaec;

      &--active {
        background: #f7f7f8;
      }
    }
  }

  &__hall {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 56px 11px 231px;
    background: #f7f7f8;
  }
}
</style>
