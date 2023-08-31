<script setup lang="ts">
import Header from './components/Header/Header.vue'
import Radio from './components/Radio/Radio.vue'

const QUIZ_QUESTIONS = [
  { id: 'question_1', questionNumber: 1, question: 'Количество гостей', answers: ['5-30', '30-60', '60-80', '80-100', '100-120'] },
  { id: 'question_2', questionNumber: 2, question: 'Количество гостей', answers: ['5-30', '30-60', '60-80', '80-100', '100-120'] },
]
</script>

<template>
  <Header />
  <main>
    <div class="container">
      <div class="banquet">
        <h1 class="banquet__heading">Рассчитайте стоимость вашего банкета</h1>
        <div v-for="{ id, questionNumber, question, answers } in QUIZ_QUESTIONS" class="quiz banquet__quiz" :key="id">
          <div class="quiz__counter">
            <p class="quiz__counter-text">Вопрос {{ questionNumber }} из 5</p>
            <div class="quiz__counter-progress"></div>
          </div>
          <div class="quiz__question">
            <p class="quiz__question-text">{{ question }}</p>
            <ul class="quiz__question-answers-list">
              <li v-for="answer in answers" class="quiz__question-answer" :key="answer">
                <Radio :name="id" :text="answer" :is-checked="answers.indexOf(answer) === 0" />
              </li>
            </ul>
          </div>
          <div class="quiz__controls">
            <button class="quiz__controls-button">Следующий вопрос</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .quiz__question-answers-list {
    display: flex;
    gap: 16px;
    margin-left: 20px;
    list-style-type: none;
  }

</style>
