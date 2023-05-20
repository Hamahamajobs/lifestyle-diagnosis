<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// --- Props ---
const props = defineProps < {
    question: Object
} >()
const question = ref(props.question)

// 選択肢読み込み
const { choices } = reactive(useChoices())
</script>

<template>
  <div>
    <div class="">
      <p class="text-center">
        {{ question.question_contents }}
      </p>
      <v-radio-group v-model="question.answer" inline>
        <template v-for="choice in choices" :key="choice.value">
          <input
            :id="question.id + '-' + choice.value"
            v-model="question.answer"
            type="radio"
            :value="choice.value"
          >
          <label :for="question.id + '-' + choice.value">
            {{ choice.text }}
          </label>
        </template>
      </v-radio-group>
    </div>
  </div>
</template>
