<template>
  <button :class="btnColor">
    <slot></slot>
    <img v-if="cartIcon" src="../assets/images/cart.svg" alt="Cart Icon">
  </button>
</template>

<script>
export default {
  props: ['btnColor', 'cartIcon'],
};
</script>

<style scoped>
  .btn {
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 3px;
    color: #fff;
    display: flex;
    justify-content: space-around;
    position: relative;
  }

  .btn-small {
    padding: .5em 2em;
  }

  .btn-medium {
    padding: .7em 4.5em;
  }

  .btn-large {
    padding: .7em 5em;
  }

  .btn-info {
    background-color: #2D9CDB;
  }

  .btn-sucess {
    background-color: #27AE60;
  }

  .btn-danger {
    background-color: #e74c3c;
  }

  .btn img {
    max-width: 20px;
    margin-left: .5em;
  }

</style>
