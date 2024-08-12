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

const showMobileMenu = ref(false);
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
</script>

<template>
  <div class="menu-container">
    <v-row class="menu" align="center" justify="center">
      <!-- Menú para pantallas grandes -->
      <v-col class="menu-item desktop-menu" cols="1" align="start">
        <RouterLink to="/" class="menu-item" :class="{ selected: isSelected('/') }">Inicio</RouterLink>
      </v-col>
      <v-col class="menu-item desktop-menu" cols="2" align="center">
        <RouterLink to="/menu" class="menu-item" :class="{ selected: isSelected('/menu') }">Menú</RouterLink>
      </v-col>
      <v-col class="menu-item desktop-menu" cols="2" align="center" @click="toggleSubMenu">
        <span 
          class="menu-item" 
          :class="{ selected: isSelected('/reserva') || isSelected('/ReservarView') || showSubMenu }"
        >
          Ordenar
        </span>
        <div v-if="showSubMenu" class="submenu">
          <RouterLink to="/reserva" class="submenu-item">Crear Pedido</RouterLink>
          <RouterLink to="/ReservarView" class="submenu-item">Reservar Mesa</RouterLink>
        </div>
      </v-col>

      <!-- Logo siempre centrado -->
      <v-col class="logo-container" cols="2" align="start">
        <v-img style="color: blackn;" class="logo" :src="logo" contain @click="scrollToTop"></v-img>
      </v-col>

      <v-col class="menu-item desktop-menu" cols="2" align="center">
        <RouterLink to="/reg" class="menu-item" :class="{ selected: isSelected('/reg') }">Registrarse</RouterLink>
      </v-col>
      <v-col class="menu-item desktop-menu" cols="2" align="end">
        <RouterLink to="/login" class="menu-item" :class="{ selected: isSelected('/login') }">Iniciar Sesión</RouterLink>
      </v-col>

      <!-- Botón de menú para pantallas pequeñas -->
      <v-col class="mobile-menu" cols="auto" align="start">
        <button @click="toggleMobileMenu" class="mobile-menu-button">
          Menú
        </button>
      </v-col>
    </v-row>

    <!-- Menú desplegable para pantallas pequeñas -->
    <div v-if="showMobileMenu" class="mobile-menu-dropdown">
      <RouterLink to="/" class="mobile-menu-item" :class="{ selected: isSelected('/') }">Inicio</RouterLink>
      <RouterLink to="/menu" class="mobile-menu-item" :class="{ selected: isSelected('/menu') }">Menú</RouterLink>
      <span class="mobile-menu-item" @click="toggleSubMenu" :class="{ selected: showSubMenu }" style="cursor: pointer;">
        Ordenar
      </span>
      <div v-if="showSubMenu" class="submenu-mobile">
        <RouterLink to="/reserva" class="submenu-item">Crear Pedido</RouterLink>
        <RouterLink to="/ReservarView" class="submenu-item">Reservar Mesa</RouterLink>
      </div>
      <RouterLink to="/reg" class="mobile-menu-item" :class="{ selected: isSelected('/reg') }">Registrarse</RouterLink>
      <RouterLink to="/login" class="mobile-menu-item" :class="{ selected: isSelected('/login') }">Iniciar Sesión</RouterLink>
    </div>

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

.menu-item:hover {
  cursor: pointer; 
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
  z-index: 1000;
  height: 120px;
  width: 200px;
}

.submenu-mobile {
  background-color: black;
  border-radius: 4px;
  padding: 5px;
  margin-top: 5px;
  position: absolute;
  left: 100%; /* Despliega hacia la derecha */
  top: 0;
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

.mobile-menu {
  display: none;
}

.mobile-menu-button {
  background-color: rgb(255, 136, 0);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.mobile-menu-dropdown {
  position: absolute;
  background-color: rgb(0, 0, 0);
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 5px;
  padding: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.mobile-menu-item {
  display: block;
  color: rgb(255, 255, 255);
  text-decoration: none;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: black;
  font-size: 16px;
}

.mobile-menu-item.selected {
  background-color: rgb(255, 136, 0);
  color: rgb(0, 0, 0);
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }

  .mobile-menu {
    display: block;
    position: absolute;
    left: 0; /* Alinea el botón de menú a la izquierda cuando la pantalla es pequeña */
  }

  .menu {
    justify-content: center;
  }

  .logo-container {
    flex-grow: 1;
    text-align: center;
  }

  .logo {
    width: 300px; /* Aumenta el tamaño del logo en pantallas pequeñas */
    padding: 13%;
    margin-left: -65px;
  }
}
</style>
