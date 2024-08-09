<script setup>
import { RouterView } from 'vue-router';
import logo from '@/assets/mr-taco.png';  
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const isSelected = (path) => route.path === path;
</script>

<template>
  <div class="menu-container">
    <v-row class="menu" align="center" justify="center">
      <v-col cols="5" align="start">
  <h1 style="padding-left:100PX; padding-top: 8PX; font-size:35px; color: white; align-items: baseline;">SISTEMAS DE MESEROS</h1>
      </v-col>
      <v-col class="logo-container" cols="2" align="start">
        <v-img class="logo" :src="logo" contain @click="scrollToTop"></v-img>
      </v-col>
      <v-col class="menu-item" cols="2" align="center">
        <RouterLink to="/reg" class="menu-item" :class="{ selected: isSelected('/reg') }">Registrarse</RouterLink>
      </v-col>
      <v-col cols="2" align="end">
        <RouterLink to="/login" class="menu-item" :class="{ selected: isSelected('/login') }">Iniciar Sesión</RouterLink>
      </v-col>
    </v-row>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="7">
        <v-row justify="center" style="padding: 10px;"></v-row>
      </v-col>
    </v-row>
    <RouterView />
  </div>
</template>

<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.navbar {
    background-color: #333;
    padding: 1rem 0;
    color: white;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    height: 50px;
}

.brand {
    font-size: 1.5rem;
    text-decoration: none;
    color: white;
}

.nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.nav-links li {
    margin: 0 15px;
}

.nav-links a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
}

.nav-links a:hover {
    color: #ddd;
}
.menu-container {
  position: static;
}

.menu {
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.menu-item{
  color: white;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  border: 1px solid transparent; 
  border-radius: 100px; 
  padding: 2px 10px; }

.menu-item.selected { 
  background-color: rgb(255, 136, 0); 
  color: rgb(0, 0, 0); 
}

.menu-item:hover {
  cursor: pointer; /* Cambia el cursor al pasar el ratón */
}
</style>
