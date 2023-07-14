<template>
  <div class="list-container d-flex justify-center">
    <v-simple-table>
      <template #default>
        <thead>
          <tr>
            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              結果画面
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in morisTypes"
            :key="item.en"
          >
            <td>{{ item.en }}</td>
            <td>
              <NuxtLink :to="'/result/' + item.en">
                {{ item.jp }}の診断結果へ
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script async setup lang="ts">
const { morisTypes } = reactive(getMorisTypes())

</script>

<style lang="scss" scoped>
.list-container{
  margin-top:160px;
  height:700px;
}
</style>
