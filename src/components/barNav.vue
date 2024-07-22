<script setup>
import {  RouterView } from 'vue-router'
import logo from '@/assets/mr-taco.png';  

</script>

<template>
    <div class="menu-container">
      <v-row class="menu" align="center" justify="center">
        <v-col class="menu-item" cols="2" align="center"> <RouterLink to="/Inicio" class="menu-item" >Inicio</RouterLink></v-col>
        <v-col class="menu-item" cols="2" align="center"><RouterLink to="/menu" class="menu-item" >Menu</RouterLink></v-col>
        <v-col class="menu-item" cols="auto" align="center"><RouterLink to="/reserva" class="menu-item" >Reservas</RouterLink> </v-col>
        <v-col class="logo-container" cols="1" align="start">
          <v-img class="logo" :src="logo" contain></v-img>
        </v-col>
        <v-col class="menu-item" cols="2" align="center"><RouterLink to="/reg" class="menu-item">Registrarse</RouterLink></v-col>
        <v-col   cols="2" align="end"><RouterLink to="/login" class="menu-item">Login</RouterLink></v-col>
      </v-row>
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="7">
          <v-row justify="center" style="padding: 10px;">
            </v-row>
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
}

.logo-container {
  margin: 0%;
  text-align: start;
}

.logo {
  padding: 0%;
  width: 90px; 
}
</style>