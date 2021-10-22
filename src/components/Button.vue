<template>
  <button class="btn">
    <box-icon class="btn__icon" v-if="icon" :name='icon'></box-icon>
    {{ content }}
  </button>
</template>

<script setup>
import { defineProps  } from "vue";

defineProps({
  content: String,
  icon: Boolean
})
</script>

<style lang="scss">
.btn {
  background-color: $primary ;
  color: $white;
  padding: .3em 2em;
  border-radius: $border-radius-big;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__icon {
    fill: $white;
    margin-right: .2em;
  }
  &.light {
    background-color: transparent;
    border: 1px solid $black;
    color: $black;
    fill: $black;
  }
}
</style>