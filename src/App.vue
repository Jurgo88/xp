<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/lematec">Lematec</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body{
  background: url(assets/bliss.jpg) no-repeat fixed center;
  /* background: #eee url("http://www.top-windows-tutorials.com/images/2013/04/2014-03-Windows-Xp-Bliss-wallpaper.jpg") no-repeat fixed center; */
  background-size: cover;
  overflow: hidden;
}
</style>
