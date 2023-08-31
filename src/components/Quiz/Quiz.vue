<script lang="ts" setup>
import Radio from '../Radio/Radio.vue'
import Button from '../Button/Button.vue'
import { ref } from 'vue'
import { QUIZ_QUESTIONS } from './constants'

const currentQuestionNumber = ref(1)
const currentQuestion = QUIZ_QUESTIONS[currentQuestionNumber.value - 1]

const quizCounterProgressFilled = `${(currentQuestionNumber.value / QUIZ_QUESTIONS.length) * 100}%`

const { id, questionNumber, question, answers } = currentQuestion
</script>

<template>
  <div class="quiz">
    <h1 class="quiz__heading">Рассчитайте стоимость вашего банкета</h1>
    <p class="quiz__description">
      Ответьте на 5 вопросов и получите горку из шампанского в подарок
    </p>
    <div class="quiz__content">
      <div class="quiz__quiz">
        <div class="quiz__quiz-counter">
          <p class="quiz__quiz-counter-text">
            Вопрос {{ questionNumber }} из {{ QUIZ_QUESTIONS.length }}
          </p>
          <div class="quiz__quiz-counter-progress">
            <div class="quiz__quiz-counter-progress-empty"></div>
            <div
              class="quiz__quiz-counter-progress-filled"
              :style="{ width: quizCounterProgressFilled }"
            ></div>
          </div>
        </div>
        <div class="quiz__quiz-question">
          <p class="quiz__quiz-question-text">{{ question }}</p>
          <ul class="quiz__quiz-question-answers-list">
            <li v-for="answer in answers" class="quiz__quiz-question-answer" :key="answer">
              <Radio :name="id" :text="answer" :is-checked="answers.indexOf(answer) === 0" />
            </li>
          </ul>
        </div>
        <div class="quiz__quiz-controls">
          <Button
            :type="'button'"
            :text="'Следующий вопрос'"
            :with-arrow="true"
            @clicked="console.log(currentQuestionNumber++, currentQuestion)"
          />
        </div>
      </div>
      <div class="quiz__additional-block">
        <img class="quiz__additional-block-img" src="@/assets/img/bottle.png" />
        <p class="quiz__additional-block-text">
          Ответьте на 5 вопросов и получите горку из шампанского в подарок
        </p>
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

.quiz {
  &__heading {
    margin-bottom: 13px;
  }

  &__description {
    display: none;
  }

  &__content {
    display: flex;
    gap: 20px;
  }

  &__quiz {
    padding: 32px 40px;
    border-radius: 16px;
    background: #f7f7f8;

    &-counter {
      margin-bottom: 32px;

      &-text {
        color: $gray;
        margin-bottom: 8px;
      }

      &-progress {
        position: relative;

        &-empty {
          height: 4px;
          width: 100%;
          background: #fff;
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
      margin-bottom: 40px;

      &-answers-list {
        display: flex;
        gap: 16px;
        list-style-type: none;
      }

      &-text {
        margin-bottom: 24px;
      }
    }

    &-controls {
      position: relative;
      padding: 31px 0 32px 0;

      &::before {
        content: '';
        position: absolute;
        top: 1px;
        left: calc(0px - 40px);
        width: calc(100% + 80px);
        height: 1px;
        background: #e9eaec;
      }

      &::after {
        content: '';
        position: absolute;
        top: 1px;
        left: calc(0px - 40px);
        width: calc(100% + 80px);
        height: 1px;
        background: #fff;
      }
    }
  }

  &__additional-block {
    display: flex;
    align-items: end;
    position: relative;
    width: 100%;
    max-width: 650px;
    background: url('@/assets/img/quiz-background.png') no-repeat center;

    &-img {
      position: absolute;
      top: -29px;
      right: 0;
    }

    &-text {
      max-width: 476px;
      margin-left: 40px;
      margin-bottom: 32px;
      font-size: 24px;
      line-height: 32px;
      z-index: 1;
    }

    &-button {
      display: none;
    }
  }
}
</style>
