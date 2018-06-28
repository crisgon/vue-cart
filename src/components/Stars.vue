<template>
  <div class="stars-box">
    <svg class="stars" xmlns="http://www.w3.org/2000/svg" viewBox="-54 -1 128 22"><path class="star-bg" d="M-55-1.9H75v24H-55z"/><rect class="star-fill" x="-55" y="-2" :width="rate" height="24"/><path class="star-path" d="M-55-2v24H75V-2H-55zm17.8 21.4l-6.4-3.3-6.4 3.3 1.2-7-5.2-5 7.2-1 3.2-6.4 3.2 6.4 7.2 1-5.2 5 1.2 7zm26.8-.2l-6.4-3.3-6.4 3.3 1.2-7-5.2-5 7.2-1 3.2-6.4 3.2 6.4 7.2 1-5.2 5 1.2 7zm26.8 0L10 15.9l-6.4 3.3 1.2-7-5.2-5 7.2-1L10-.2l3.2 6.4 7.2 1-5.2 5 1.2 7zm26.8 0l-6.4-3.3-6.4 3.3 1.2-7-5.2-5 7.2-1 3.2-6.4L40 6.2l7.2 1-5.2 5 1.2 7zm26.8 0l-6.4-3.3-6.4 3.3 1.2-7-5.2-5 7.2-1 3.2-6.4 3.2 6.4 7.2 1-5.2 5 1.2 7z"/></svg>
    <span class="total-stars">{{ totalReviews }} reviews.</span>
  </div>
</template>

<script>
export default {
  props: ['rate', 'totalReviews'],
};
</script>

<style scoped>
  .stars-box {
    display: flex;
    flex-direction: column;
  }

  .stars {
    width: 80%;
  }
  .star-bg {
    fill: #C4C4C4;
  }
  .star-fill {
    fill: #F2C94C;
  }
  .star-path {
    fill: #ffffff;
  }

  .total-stars {
    box-sizing: border-box;
    padding: .5em 0;
  }
</style>
