<script setup lang="ts">
import {ref, computed, onMounted} from 'vue';


const model = ref(0);
const model1 = ref(1);
const colors = ref(['primary', 'secondary', 'yellow darken-2', 'red', 'orange']);

//　無理やり作るならこれ
// let currentArray = ref([1,2,3,4]);

// let returnArray = computed(
//   (): number[] => {
//     return currentArray.value;
//   }
// )


onMounted(
  () => {
    setInterval(() => {
      // let currentArrayLast: number = currentArray.value[3];
      // let nextArrayLast: number = currentArrayLast + 1;
      // if (nextArrayLast > 13) {
      //   nextArrayLast = 1;
      // }
      // currentArray.value.shift();
      // currentArray.value.push(nextArrayLast);
      // console.log('currentArray', currentArray.value)
      // model.value++;
      // model1.value++;
    }, 3000)
  }
)
</script>

<template>
  <div>
    <div class="d-flex">
      <div style="width: 500px;">
        <v-carousel v-model="model">
          <v-carousel-item
            v-for="(color, i) in colors"
            :key="color"
          >
            <v-sheet
              :color="color"
              height="100%"
              title
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="text-h2">
                  Slide {{ i + 1 }}
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div style="width: 500px;">
        <v-carousel v-model="model1">
          <v-carousel-item
            v-for="(color, i) in colors"
            :key="color"
          >
            <v-sheet
              :color="color"
              height="100%"
              title
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="text-h2">
                  Slide {{ i + 1 }}
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <div>
    </div>
    <!-- 無理やり作るなら、下記をdivタグ13個用意してv-ifで消えるようにしてそれにtransitionをつける。 -->
    <!-- <div class="d-flex type-list">
      <div v-for="(item, index) in currentArray" :key="index" class="type-list-item">
        {{ item }}
      </div>
    </div> -->
  </div>
</template>

<style lang="scss">
  .type {
    &-list {
      width: 80vw;
      overflow-x: hidden;
      &-item {
        width: 400px;
      }
    }
  }
</style>