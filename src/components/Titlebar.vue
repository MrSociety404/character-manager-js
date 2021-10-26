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
    @media (max-width: $md) {
      padding: .2em;
      font-size: 2.5em;
    }
}
&__line{
    height: 2px;
    width: 160px;
    background-color:$black;
    @media (max-width: $md) {
      display: none;
    }
}
   
}


</style>
