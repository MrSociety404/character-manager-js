<template>
  <main class="edit">
    <Titlebar :content="title" />
    
  </main>
</template>

<script setup>
import Titlebar from '../components/Titlebar.vue';
import { defineProps } from 'vue'
defineProps({
  id: String
})
const id = id
const title = id ? "EDIT CHARACTER" : "ADD NEW CHARACTER"

</script>

<style lang="scss">

</style>