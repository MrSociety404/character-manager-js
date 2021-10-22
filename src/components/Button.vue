<template>
  <button class="btn">
    <box-icon class="btn__icon" v-if="icon" :name='icon'></box-icon>
    {{ content }}
  </button>
</template>

<script setup>
import { defineProps  } from "vue";

const props = defineProps({
  content: String,
  icon: Boolean
})

props
</script>

<style lang="scss">
.btn {
  background-color: $primary ;
  color: $white;
  padding: .6em 2em;
  border-radius: $border-radius-big;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__icon {
    fill: $white;
    margin-right: .2em;
  }
}
</style>