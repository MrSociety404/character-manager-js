<template>
  <div class="search__box">
    <input type="text" placeholder="Recherche" class="search-hero" />
    <box-icon class="search__icon" name='search-alt'></box-icon>
  </div>
</template>

<script></script>

<style lang="scss">
.search {
    &__box {
        display: flex;
        justify-content: space-between;
        color: $grey;
        background-color: $light-grey;        
        border-radius: $border-radius-big;
        padding: .3em .5em;
        width: 215px;
        input {
            width: 80%;
        }
    }
    &__icon{
        fill: $grey;
        cursor: pointer;
    }
}
    
</style>
