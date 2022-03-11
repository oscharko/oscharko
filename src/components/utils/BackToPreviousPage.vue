<template>
  <span @click="hasHistory() ? $router.go(-1) : $router.push('/')">
    <inline-svg
      src="./img/svg/back-to-previous-page-icon-001.svg"
      class="back-to-previous-page"
      aria-label="Mail"
    ></inline-svg>
  </span>
</template>

<script>
export default {
  name: 'BackToPreviousPage',
  methods: {
    hasHistory: function hasHistory() {
      return window.history.length > 2
    }
  }
}
</script>

<style lang="scss" scoped>
.back-to-previous-page {
  width: 50px;
  padding: 5px 5px 5px 5px;
  opacity: 0.4;
}
.back-to-previous-page:hover {
  opacity: 1;
  cursor: w-resize;
}
</style>
