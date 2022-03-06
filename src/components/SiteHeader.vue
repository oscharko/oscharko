<template>
  <!-- Site Header -->
  <header id="site_header" class="header">
    <div class="header-content">
      <!-- Menu Button Icon -->
      <div class="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- /Menu Button Icon -->

      <!-- Personal Photo or Site Logo -->
      <!--<div class="header-photo">
              <a href="#">
                <img src="./img/profile_img.jpg" alt="image">
              </a>
            </div>-->
      <!-- /Personal Photo or Site Logo -->

      <!-- Text Logo -->
      <div class="header-titles">
        <a href="#">
          <h2>AS</h2>
        </a>
      </div>
      <!-- Text Logo -->
    </div>

    <!-- Site Main Menu & Profile Card -->
    <div class="site-menu profile-card-on flex-v-align dl-menuwrapper">
      <!-- Profile Card -->
      <div class="profile-card flex-v-align">
        <div class="profile-card-block">
          <!-- Profile Photo -->
          <div class="profile-img">
            <a href="#">
              <img src="./img/profile_img.jpg" alt="image" />
            </a>
          </div>
          <!-- /Profile Photo -->

          <!-- Profile Titles -->
          <a href="#">
            <h3 class="site-title">Alan Smith</h3>
          </a>

          <h5 class="site-subtitle">Web Designer</h5>
          <!-- /Profile Titles -->

          <!-- Social Links -->
          <div class="social-links">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="#" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a href="#" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <!-- /Social Links -->
        </div>
      </div>
      <!-- /Profile Card -->

      <!-- Main Menu -->
      <ul class="alan-classic-menu main-menu dl-menu dl-menuopen">
        <li
          class="
            menu-item
            current-menu-item current-menu-parent
            menu-item-has-children
          "
        >
          <a href="index.html">About Me</a>
          <ul class="sub-menu">
            <li class="menu-item current-menu-item">
              <a href="index.html">About Me</a>
            </li>

            <li class="menu-item">
              <a href="index-2.html">About Me 2</a>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a href="resume.html">Resume</a>
        </li>

        <li class="menu-item">
          <a href="portfolio.html">Portfolio</a>
        </li>

        <li class="menu-item">
          <a href="blog.html">Blog</a>
        </li>

        <li class="menu-item">
          <a href="contact.html">Contact</a>
        </li>
      </ul>
      <!-- /Main Menu -->
    </div>
    <!-- /Site Main Menu & Profile Card -->
  </header>
  <!-- /Site Header -->
</template>
