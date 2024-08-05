<script setup>
import { RouterView } from 'vue-router';
import logo from '@/assets/mr-taco.png';  
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const isSelected = (path) => route.path === path;

const showSubMenu = ref(false);
const toggleSubMenu = () => {
  showSubMenu.value = !showSubMenu.value;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div class="menu-container">
    <v-row class="menu" align="center" justify="center">
      <v-col class="menu-item" cols="1" align="start">
        <RouterLink to="/" class="menu-item" :class="{ selected: isSelected('/') }">Inicio</RouterLink>
      </v-col>
      <v-col class="menu-item" cols="2" align="center">
        <RouterLink to="/menu" class="menu-item" :class="{ selected: isSelected('/menu') }">Menú</RouterLink>
      </v-col>
      <v-col class="menu-item" cols="2" align="center" @click="toggleSubMenu">
        <span class="menu-item" :class="{ selected: isSelected('/reserva') || showSubMenu }">Ordenar</span>
        <div v-if="showSubMenu" class="submenu">
          <RouterLink to="/reserva" class="submenu-item">Come con Nosotros</RouterLink>
          <RouterLink to="/j" class="submenu-item">Pasar a recoger pedido</RouterLink>
        </div>
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

.logo-container {
  margin: 0%;
  text-align: center;
  height: 80px;
}

.logo {
  padding: 5.5%;
  width: 200px; 
  position: absolute;
  top: 1px;
  transform: translate(-20%, 1%);
}

.submenu {
  position: absolute;
  background-color: rgb(0, 0, 0);
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 5px;
  padding: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Asegurar que el menú esté por encima */
  height: 120px;
  width: 200px;
}

.submenu-item {
  display: block;
  color: rgb(0, 0, 0);
  text-decoration: none;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: white;
  font-size: 15px;
}

.submenu-item:hover {
  background-color: rgb(255, 136, 0);
  color: rgb(255, 255, 255);
}
</style>
