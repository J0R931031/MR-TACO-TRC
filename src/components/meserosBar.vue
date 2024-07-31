<script setup>
import { RouterView, RouterLink } from 'vue-router';
import logo from '@/assets/mr-taco.png';  
import { useRoute } from 'vue-router';

const route = useRoute();
const isSelected = (path) => route.path === path;
</script>

<template>
  <div class="menu-container">
    <v-row class="menu" align="center" justify="center">
      <v-col class="logo-container" cols="2" align="start">
        <v-img class="logo" :src="logo" contain></v-img>
      </v-col>
      <v-col class="menu-item" cols="2" align="center">
        <RouterLink to="/" class="menu-item" :class="{ selected: isSelected('/') }">Inicio</RouterLink>
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
.menu-container {
  position: relative;
}

.menu {
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-item {
  color: white;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  border: 1px solid transparent; 
  border-radius: 100px; 
  padding: 2px 10px; 
  transition: background-color 0.3s ease, color 0.3s ease; 
}

.menu-item.selected { 
  background-color: rgb(255, 136, 0); 
  color: rgb(0, 0, 0); 
}
.logo-container {
  margin: 0%;
  text-align: center;
  height: 80px;
}

.logo {
  padding: 0%;
  width: 150px; 
  position: absolute;
  top: 10px;
}
</style>
