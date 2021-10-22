<template>
  <div>
    <h1>{{content}}</h1>
  </div>
</template>

<script setup>
import { defineProps  } from "vue";

defineProps({
  content: String
})
</script>

<style>
    
</style>
