<template>
  <button class="btn">
    <box-icon class="btn__icon" v-if="icon" :name='icon'></box-icon>
    <p>
    {{ content }}

    </p>
  </button>
</template>

<script setup>
import { defineProps  } from "vue";

defineProps({
  content: String,
  icon: String
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
  transition: transform .2s ease;
  p {
    text-align: center;
    width: 100%;
  }
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
  &.void{
    border-color:transparent;
    background-color: transparent;
    color: $black;
  }
  &.big {
    font-size: 1.5em;
  }
  &:active {
    transform: translateY(2px);
  }
}
</style>