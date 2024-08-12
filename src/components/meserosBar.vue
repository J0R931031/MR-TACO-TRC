<script setup>
import { RouterView, RouterLink } from 'vue-router';
import logo from '@/assets/mr-taco.png';  
import { useRoute } from 'vue-router';

const route = useRoute();
const isSelected = (path) => route.path === path;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>


<template>
  <div class="menu-container">
    <v-row class="menu" align="center" justify="center">
      <v-col cols="2.5" style="color: white; textShadow: 4px 2px 2px #ff4f09; font-size: 16px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; "><h1>Sistema Meseros</h1></v-col>
      <v-col class="menu-item" cols="2.5" align="center">
        <RouterLink to="/" class="menu-item" :class="{ selected: isSelected('/') }">Inicio</RouterLink>
      </v-col>
      <v-col class="logo-container" cols="2.5" align="start">
        <v-img style="color: blackn;" class="logo" :src="logo" contain @click="scrollToTop"></v-img>
      </v-col>
   
      <v-col class="menu-item" cols="2.5" align="center">
        <RouterLink to="/OrdenesView" class="menu-item" :class="{ selected: isSelected('/OrdenesView') }">Orden</RouterLink>
      </v-col>
      <v-col class="menu-item" cols="2.5" align="center">
        <RouterLink to="/MenuView" class="menu-item" :class="{ selected: isSelected('/MenuView') }">Menu</RouterLink>
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
  position: static;
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
}

.menu-item.selected { 
  background-color: rgb(255, 136, 0); 
  color: rgb(0, 0, 0); 
}
.logo-container {
  margin: 0%;
  text-align: center;
  height: 80px;
  margin-left: 100px;
 
}

.logo {
  padding: 5.5%;
  width: 200px; 
  position: absolute;
  top: 1px;
  transform: translate(-20%, 1%);

}
</style>