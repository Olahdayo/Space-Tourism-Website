
<template>
 <div class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="@/assets/shared/logo.svg" alt="logo" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">00 Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/destination" class="nav-link" active-class="active">01 Destination</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/crew" class="nav-link" active-class="active">02 Crew</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/technology" class="nav-link" active-class="active">03 Technology</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.navbar {
  padding: 0.5rem 0;
  background-color: rgba(16, 19, 31, 0.9) !important; 
}
.navbar::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 15%;
  right: 55%;
  height: 1px;
  background-color: rgba(253, 243, 243, 0.2);
}
.navbar-brand {
  z-index: 2;
}
.nav-link {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
}
.nav-link.active {
  border-bottom: 2px solid #ffffff;
}
@media (max-width: 992px) {
  .navbar::after {
    display: none;
  }
}
</style>
