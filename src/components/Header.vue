<template>
  <div>
    <header id="site_header" class="header">
      <div class="header-content">
        <div class="menu-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="header-titles">
          <BackToPreviousPage />
        </div>
      </div>
      <div class="site-menu profile-card-on flex-v-align dl-menuwrapper">
        <div class="profile-card flex-v-align">
          <div class="profile-card-block">
            <div class="profile-img">
              <a href="#">
                <img
                  src="@/assets/img/oliver-scharkowski/oliverScharkowski-001-002.webp"
                  alt="image"
                />
              </a>
            </div>
            <a href="#">
              <h3 class="site-title">Oliver Scharkowski</h3>
            </a>
            <hr />
            <div class="social-links">
              <ul>
                <li>
                  <a href="mailto:scharkowski.oliver@web.de" target="_blank">
                    <inline-svg
                      src="./img/svg/mail-001.svg"
                      class="svg-site-header"
                      fill="black"
                      aria-label="Mail"
                    ></inline-svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://oscharko.com/linkedin"
                    target="_blank"
                  >
                    <inline-svg
                      src="./img/svg/linkedin-001.svg"
                      class="svg-site-header"
                      fill="black"
                      aria-label="Linkedin"
                    ></inline-svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="alan-classic-menu main-menu dl-menu dl-menuopen">
          <li class="menu-item">
            <a href="/">Oliver Scharkowski</a>
          </li>
          <li class="menu-item">
            <a href="Resume">Lebenslauf</a>
          </li>
          <!-- <li class="menu-item">
          <a href="Patents">Patents</a>
        </li> -->
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import BackToPreviousPage from '@/components/utils/BackToPreviousPage.vue'

export default {
  name: 'Header',
  components: { BackToPreviousPage }
}
</script>

<style lang="scss" scoped>
</style>
