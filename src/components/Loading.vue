<template>
  <div class="loading"></div>
</template>

<style lang="scss">
.loading {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 8px solid;
  border-color: $primary transparent $primary;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg) }
  
  100% { transform: rotate(359deg) }
}

</style>