<script lang="ts" setup>
import Radio from '../Radio/Radio.vue'
import Button from '../Button/Button.vue'
import { ref } from 'vue'
import { QUIZ_QUESTIONS } from './constants'

const currentQuestion = ref(QUIZ_QUESTIONS[0])
const quizCompeleted = ref(false)
</script>

<template>
  <div class="quiz">
    <h1 class="quiz__title">Рассчитайте стоимость вашего банкета</h1>
    <p class="quiz__description">
      Ответьте на {{ QUIZ_QUESTIONS.length }} вопросов и получите горку из шампанского в подарок
    </p>
    <div class="quiz__content">
      <div class="quiz__quiz">
        <div v-if="!quizCompeleted" class="quiz__quiz-content">
          <div class="quiz__quiz-counter">
            <p class="quiz__quiz-counter-text">
              Вопрос {{ currentQuestion.questionNumber }} из {{ QUIZ_QUESTIONS.length }}
            </p>
            <div class="quiz__quiz-counter-progress">
              <div class="quiz__quiz-counter-progress-empty"></div>
              <div
                class="quiz__quiz-counter-progress-filled"
                :style="{
                  width: `${(currentQuestion.questionNumber / QUIZ_QUESTIONS.length) * 100}%`
                }"
              ></div>
            </div>
          </div>
          <div class="quiz__quiz-question">
            <h4 class="quiz__quiz-question-text">{{ currentQuestion.question }}</h4>
            <ul class="quiz__quiz-question-answers-list">
              <li
                v-for="answer in currentQuestion.answers"
                class="quiz__quiz-question-answer"
                :key="answer"
              >
                <Radio
                  :name="currentQuestion.id"
                  :text="answer"
                  :is-checked="currentQuestion.answers.indexOf(answer) === 0"
                />
              </li>
            </ul>
          </div>
          <div class="quiz__quiz-controls">
            <Button
              v-if="currentQuestion.questionNumber !== QUIZ_QUESTIONS.length"
              :type="'button'"
              :text="'Следующий вопрос'"
              :with-arrow="true"
              @clicked="currentQuestion = QUIZ_QUESTIONS[currentQuestion.questionNumber - 1 + 1]"
            />
            <Button v-else :type="'button'" :text="'Завершить'" @clicked="quizCompeleted = true" />
          </div>
        </div>
        <div v-else class="quiz__compeleted">
          <p class="quiz__completed-text">Опрос завершен</p>
        </div>
      </div>
      <div class="quiz__additional-block">
        <img class="quiz__additional-block-img" src="@/assets/img/bottle.png" />
        <h4 class="quiz__additional-block-text">
          Ответьте на {{ QUIZ_QUESTIONS.length }} вопросов и получите горку из&nbsp; шампанского в
          подарок
        </h4>
        <Button
          :type="'button'"
          :text="'Начать'"
          :with-arrow="true"
          :class="'quiz__additional-block-button'"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';

.quiz {
  &__title {
    margin-bottom: rem(20);

    @include font-h2;
  }

  &__description {
    display: none;
  }

  &__content {
    display: flex;
    gap: rem(20);
  }

  &__quiz {
    width: 100%;
    max-width: rem(918);
    border-radius: $mainBorderRadius;
    background: $lightPlatinum;

    &-content {
      padding: rem(32) rem(40);
    }

    &-counter {
      margin-bottom: rem(33);

      &-text {
        color: $gray;
        margin-bottom: rem(8);
      }

      &-progress {
        position: relative;

        &-empty {
          height: 4px;
          width: 100%;
          background: $white;
        }

        &-filled {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          background: $secondaryColor;
          height: 4px;
        }
      }
    }

    &-question {
      margin-bottom: rem(40);

      &-answers-list {
        display: flex;
        gap: rem(17);
        list-style-type: none;
      }

      &-text {
        margin-bottom: rem(35);
        color: $gray;

        @include font-h4;
      }
    }

    &-controls {
      position: relative;
      padding-top: rem(45);

      &::before {
        content: '';
        position: absolute;
        top: 1px;
        left: calc(0px - rem(40));
        width: calc(100% + rem(80));
        height: 1px;
        background: $platinum;
      }

      &::after {
        content: '';
        position: absolute;
        top: 1px;
        left: calc(0px - rem(40));
        width: calc(100% + rem(80));
        height: 1px;
        background: $white;
      }
    }
  }

  &__compeleted {
    text-align: center;
    margin: rem(170) 0;
  }

  &__additional-block {
    display: flex;
    align-items: end;
    position: relative;
    width: 100%;
    max-width: rem(650);
    background: url('@/assets/img/quiz-background.png') no-repeat center;

    &-img {
      position: absolute;
      top: -29px;
      right: 0;
    }

    &-text {
      max-width: rem(476);
      margin-left: rem(40);
      margin-bottom: rem(32);
      z-index: 1;

      @include font-h4;
    }

    &-button {
      display: none;
    }
  }
}
</style>
