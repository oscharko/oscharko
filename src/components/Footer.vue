<template>
  <footer class="site-footer clearfix">
    <div class="footer-social">
      <ul class="footer-social-links">
        <li>
          <a href="mailto:o.scharkowski@oscharko.de" target="_blank">
            <inline-svg
              src="./img/svg/mail-001.svg"
              width="30"
              height="30"
              aria-label="Mail"
            ></inline-svg>
          </a>
        </li>
        <li>
          <a href="https://oscharko.com/linkedin" target="_blank">
            <inline-svg
              src="./img/svg/linkedin-001.svg"
              class="svg-footer"
              aria-label="Linkedin"
            ></inline-svg>
          </a>
        </li>
      </ul>
    </div>

    <div class="footer-copyrights">
      <p>© 2022 | created by oscharko</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  components: {}
}
</script>
<style lang="scss" scoped>
.svg-footer {
  width: 70px;
}

.footer-copyrights {
  float: right;
}

.footer-copyrights p {
  line-height: 26px;
  font-size: 13px;
  margin: 0;
}

.footer-social,
.footer-copyrights {
  float: none;
  display: block;
  text-align: center;
  // margin: 12px 0;
}
</style>
