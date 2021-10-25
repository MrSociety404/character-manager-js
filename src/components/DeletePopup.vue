<template>
  <div class="deletePopup">
    <div class="deletePopup__popup">
      <h5>Confirm</h5>
      <p>Do you really want to delete this item</p>
      <Button class="void" content="CANCEL" />
        <Button class="void" content="CONFIRM" />
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
</script>

<style lang="scss">
.deletePopup {
  position: relative;
  display: flex;
  background-color: $background;
  justify-content: center;

  &__popup {
    height: 146px;
    widows: 414px;
    background-color: $white;
  }
}
</style>
