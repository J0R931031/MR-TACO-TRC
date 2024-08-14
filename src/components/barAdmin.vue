<script setup>
import { RouterView, RouterLink } from 'vue-router';
import logo from '@/assets/mr-taco.png'; 
import { useRoute } from 'vue-router';
import { useProfileStore } from '@/stores/profileStore';
import { storeToRefs } from 'pinia';

const route = useRoute();
const isSelected = (path) => route.path === path;

const profileStore = useProfileStore();
const { profileImage, name, email } = storeToRefs(profileStore);
</script>

<template>
  <div class="menu-container">
    <v-row class="menu" align="center" justify="center">
      <v-col class="menu-item-container" cols="1" align="start">
        <RouterLink to="/" class="menu-item" :class="{ selected: isSelected('/') }" style="margin-left: 50px;" >Inicio</RouterLink>
      </v-col>
      <v-col class="menu-item-container" cols="2" align="center">
        <RouterLink to="/registros" class="menu-item" :class="{ selected: isSelected('/registros') }" style="margin-left: 60px;" >Registros</RouterLink>
      </v-col>
      <v-col class="menu-item-container" cols="2" align="center">
        <RouterLink to="/infoAdmin" class="menu-item" :class="{ selected: isSelected('/infoAdmin') }">Datos</RouterLink>
      </v-col>
      <v-col class="logo-container" cols="2" align="start">
        <v-img class="logo" :src="logo" contain></v-img>
      </v-col>
      <v-col class="menu-item-container" cols="2" align="end">
        <RouterLink to="/posts" class="menu-item" :class="{ selected: isSelected('/posts') }">Posts</RouterLink>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col class="d-flex align-center justify-end" cols="2"  >
        <RouterLink to="/Editar" style="margin-right: 10px;" >
          <v-avatar color="info">
            <v-img class="icon" :src="profileImage" contain></v-img>
          </v-avatar>
        </RouterLink>
        <div class="profile-info" style="margin-right: 90px;" >
          <div class="profile-name">{{ name }}</div>
          <div class="profile-email">{{ email }}</div>
        </div>
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

.menu-item-container {
  display: flex;
  justify-content: center;
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
  margin: 0;
  text-align: center;
  height: 80px;
}

.logo {
  padding: 5.5%;
  width: 200px; 
  position: absolute;
  top: 10px;
  transform: translate(-20%, 1%);
}

.profile-info {
  margin-left: 10px;
  color: white;
}

.profile-name {
  font-size: 18px;
  font-weight: bold;
}

.profile-email {
  font-size: 14px;
  color: gray;
}
</style>