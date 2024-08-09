<script setup>
import { RouterView } from 'vue-router';
import logo from '@/assets/mr-taco.png';  
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const isSelected = (path) => route.path === path;
</script>

<template>
 <body>
    <nav class="navbar">
        <div class="navbar-container">
          <div>
            <h1 class="brand">SISTEMA DE MESEROS</h1>
          </div>
          <div>
            <v-container>
      <v-row>
        <v-col>
          <div>
            <v-img :src="logo"></v-img> <!-- URL de prueba -->
          </div>
        </v-col>
      </v-row>
    </v-container>
          </div>
          <div>
            <RouterLink to="/meseros" class="menu-item" :class="{ selected: isSelected('/meseros') }">Ordenar</RouterLink>
            <RouterLink to="/Ordenes" class="menu-item" :class="{ selected: isSelected('/Ordenes') }">Ordenes</RouterLink>
          </div>
        </div>
    </nav>
</body>
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
