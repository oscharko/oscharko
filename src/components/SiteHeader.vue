<template>
  <header id="site_header" class="header">
    <div class="header-content">
      <!-- <div class="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </div> -->
      <div class="header-titles">
        <a href="#">
          <img width="50" src="@/assets/safari-pinned-tab.svg" alt="image" />
        </a>
      </div>
    </div>

    <div class="site-menu profile-card-on flex-v-align dl-menuwrapper">
      <div class="profile-card flex-v-align">
        <div class="profile-card-block">
          <div class="profile-img">
            <a href="#">
              <img src="@/assets/logo.svg" alt="image" />
            </a>
          </div>
          <a href="#">
            <h3 class="site-title">Oliver<br />Scharkowski</h3>
          </a>
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
        </div>
      </div>
      <ul class="alan-classic-menu main-menu dl-menu dl-menuopen">
        <li class="menu-item">
          <a href="#">Über mich</a>
        </li>

        <li class="menu-item">
          <a href="#">Stationen</a>
        </li>

        <li class="menu-item">
          <a href="#">Patente</a>
        </li>

        <li class="menu-item">
          <a href="#">Zeugnisse</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  components: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1025px) {
  .header {
    position: absolute;
  }

  .header-content {
    position: relative;
    display: inline-block;
    background-color: #4dba87;
    width: 70px;
    height: 100%;
    max-height: calc(80vh - 20px);
    min-height: calc(80vh - 20px);
    text-align: center;
    padding: 0 0 0 0;
    margin-right: 10px;
    overflow: auto;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    z-index: 100;
  }

  .r-sidebar {
    position: relative;
    display: inline-block;
    background-color: #f5f5f5;
    width: 100%;
    max-width: 70px;
    height: 100%;
    max-height: calc(80vh - 20px);
    min-height: calc(80vh - 20px);
    text-align: center;
    padding: 0;
    margin-left: 10px;
    overflow: auto;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    z-index: 100;
  }

  .menu-toggle {
    display: none;
  }
}

.header-photo {
  position: relative;
  margin: 10px auto 0;
  z-index: 1;
}

.header-photo img {
  height: auto;
  width: auto;
  max-width: 50px;
}

.header-titles h2 {
  display: block;
  font-size: 27px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 7px;
  padding-top: 15px;
  line-height: 1.2em;
}

.header-titles h4 {
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  margin: 5px 0;
  line-height: 1.2em;
}

.social-links {
  margin: 15px 0 0;
}

.social-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-links ul li {
  display: inline-block;
}

.social-links ul li a {
  color: #4dba87;
  border-radius: 20px;
  font-size: 16px;
  padding: 0;
  height: 30px;
  width: 30px;
  display: block;
  line-height: 30px;
  text-align: center;
  opacity: 0.9;
}

.social-links ul li a:hover {
  opacity: 1;
}

.header-buttons {
  margin-top: 50px;
}

.header-buttons .btn-primary {
  background-color: transparent;
  color: #fff;
  border-color: #fff;
}

.header-buttons .btn-primary:hover {
  background-color: #fff;
  color: #4dba87;
  border-color: #fff;
}

.header .copyrights {
  color: #fff;
  width: 380px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px 10px 15px;
  line-height: 14px;
  font-size: 12px;
  text-align: center;
}

/* Menu Button */
.menu-button {
  position: absolute;
  display: block;
  width: 100%;
  height: 50px;
  top: calc(50% - 22px);
  line-height: 46px;
  text-align: center;
}

.menu-button {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.menu-button span {
  display: block;
  position: absolute;
  height: 3px;
  width: 40%;
  background: #fff;
  border-radius: 5px;
  opacity: 1;
  left: 19px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.menu-button span:nth-child(1) {
  top: 14px;
  left: 25px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.menu-button span:nth-child(2) {
  top: 23px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.menu-button span:nth-child(3) {
  left: 22px;
  top: 32px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.menu-button:not(.open):hover span {
  left: 21px;
}

.menu-button.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 11px;
}

.menu-button.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

.menu-button.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 31px;
  left: 25px;
}

/* Main Menu */
.site-menu {
  position: absolute;
  background-color: #fcfcfc;
  height: calc(80vh - 20px);
  width: 100vw;
  max-width: 380px;
  z-index: 0;
  left: 0;
  top: 0;
  opacity: 0;
  visibility: hidden;
  overflow: auto;
  -webkit-transition: all 0.22s ease-in-out;
  -moz-transition: all 0.22s ease-in-out;
  -o-transition: all 0.22s ease-in-out;
  -ms-transition: all 0.22s ease-in-out;
  transition: all 0.22s ease-in-out;
  box-shadow: 0px 3px 32px 0px rgba(0, 0, 0, 0.15);
}

.site-menu.open {
  visibility: visible;
  opacity: 1;
  // top: 0px;
  left: 70px;
  z-index: 99;
}

.site-menu .main-menu {
  list-style: none;
  width: 100%;
  text-align: right;
  padding: 40px 45px;
  margin: 0;
}

.site-menu .main-menu li {
  position: relative;
  padding-right: 0;
  margin: 15px 0;
}

.site-menu .main-menu li a {
  position: relative;
  color: #333;
  font-size: 18px;
}

.site-menu .main-menu li a:before {
  content: '';
  display: block;
  position: absolute;
  width: 40px;
  height: 2px;
  top: calc(50% - 1px);
  left: -80px;
  background-color: #e6e7e8;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.22s ease-in-out;
  -moz-transition: all 0.22s ease-in-out;
  -o-transition: all 0.22s ease-in-out;
  -ms-transition: all 0.22s ease-in-out;
  transition: all 0.22s ease-in-out;
}

.site-menu .main-menu li.dl-back a:before {
  display: none;
}

.site-menu .main-menu li.current-menu-item > a:before,
.site-menu .main-menu > li.current-menu-parent > a:before,
.site-menu .main-menu li:hover > a:before {
  opacity: 1;
  visibility: visible;
  left: -52px;
}

.dl-menuwrapper li:not(.dl-back) > a:not(:only-child):after {
  position: absolute;
  float: right;
  right: -20px;
  top: 50%;
  font-family: 'Linearicons-Free';
  // speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  font-size: 13px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: -12px;
  content: '\e876';
  z-index: 0;
  opacity: 0.7;
  padding-left: 10px;
}

.dl-back > a {
  background-color: transparent;
}

/* Right Sidebar */
.sidebar-button {
  position: absolute;
  top: calc(50% - 25px);
  width: 100%;
  height: 50px;
  cursor: pointer;
}

.sidebar-button span {
  display: inline-block;
  background-color: #868788;
  border-radius: 10px;
  width: 6px;
  height: 6px;
  margin: 22px 0;
}

.sidebar-button span,
.sidebar-button span:hover,
.sidebar-button span:focus {
  outline: 0;
}

.sidebar-button.open span {
  display: block;
  position: absolute;
  height: 3px;
  width: 40%;
  border-radius: 5px;
  opacity: 1;
  left: 20px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.sidebar-button.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 0;
}

.sidebar-button.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

.sidebar-button.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 0;
  left: 20px;
}

.site-menu.profile-card-on {
  max-width: 650px;
}

.site-menu.profile-card-on .main-menu {
  width: 50%;
  margin-left: auto;
}

.profile-card {
  background-color: #fcfcfc;
  width: 50%;
  padding: 40px 45px;
  z-index: 1;
}

.profile-card .profile-img {
  display: block;
}

.profile-card-block .profile-img,
.profile-card-block .profile-img img {
  height: auto;
  max-height: 150px;
  width: auto;
  max-width: 150px;
  margin: -8px auto;
}

.profile-card h3.site-title {
  display: block;
  margin: 15px 0 0 !important;
  font-size: 27px;
}

.profile-card h5.site-subtitle {
  display: block;
  font-weight: 400;
  color: #9e9e9e;
  margin: 5px 0 0;
  font-size: 14px;
}

.sidebar-open .single-page-content {
  filter: blur(9px) opacity(0.5);
  -webkit-filter: blur(9px) opacity(0.5);
  -moz-filter: blur(9px) opacity(0.5);
  -o-filter: blur(9px) opacity(0.5);
  -ms-filter: blur(9px) opacity(0.5);
}
</style>
