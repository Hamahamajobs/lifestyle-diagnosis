<script setup lang="ts">
import AcceptanceOfLife from '~/assets/svg/types/AcceptanceOfLife.svg'
import Accepting from '~/assets/svg/types/Accepting.svg'
import Achievement from '~/assets/svg/types/Achievement.svg'
import Activist from '~/assets/svg/types/Activist.svg'
import Altruist from '~/assets/svg/types/Altruist.svg'
import Cooperation from '~/assets/svg/types/Cooperation.svg'
import Hedonism from '~/assets/svg/types/Hedonism.svg'
import Hedonistic from '~/assets/svg/types/Hedonistic.svg'
import Love from '~/assets/svg/types/Love.svg'
import Meditative from '~/assets/svg/types/Meditative.svg'
import Moderation from '~/assets/svg/types/Moderation.svg'
import SelfDisciplined from '~/assets/svg/types/SelfDisciplined.svg'
import Variety from '~/assets/svg/types/Variety.svg'

const { morisTypes } = reactive(getMorisTypes())

// 結果別のSVGを設定
const currentSvg = computed(() => (id) => {
  switch (id) {
    case 'altruist':
      return Love
    case 'hedonistic':
      return Hedonistic
    case 'love':
      return Love
    case 'moderation':
      return Moderation
    case 'accepting':
      return Accepting
    case 'variety':
      return Variety
    case 'hedonism':
      return Hedonism
    case 'cooperation':
      return Cooperation
    case 'acceptance-of-life':
      return AcceptanceOfLife
    case 'self-disciplined':
      return SelfDisciplined
    case 'activist':
      return Activist
    case 'meditative':
      return Meditative
    case 'achievement':
      return Achievement
    default:
      return ''
  }
})

</script>

<template>
  <div class="list-container d-flex justify-center">
    <v-simple-table>
      <template #default>
        <!-- <thead>
          <tr>
            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              結果画面
            </th>
          </tr>
        </thead> -->
        <tbody>
          <tr
            v-for="item in morisTypes"
            :key="item.en"
          >
            <td>{{ item.en }}</td>
            <td><component :is="currentSvg(item.en)" class="type-image" /></td>
            <!-- <td>
              <NuxtLink :to="'/result/' + item.en">
                {{ item.jp }}の診断結果へ
              </NuxtLink>
            </td> -->
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<style lang="scss" scoped>
.list-container{
  margin-top:160px;
  height:700px;
}
</style>
