<template>
  <div class="title">
    <h2 class="title__h2">{{content}}</h2>
    <div class="title__line"></div>
  </div>
</template>

<script setup>
import { defineProps  } from "vue";

defineProps({
  content: String
})
</script>

<style lang="scss">
.title{
    display: flex;
    align-items: center;
    &__h2{
    color: $black;
    font-size: 2em;
    font-weight: bold;
    padding: 1em;
}
&__line{
    height: 2px;
    width: 160px;
    background-color:$black;
}
   
}


</style>
