<template>
  <v-app id="inspire">
    <carrosel-global />
    <v-app-bar app color="orange" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32">HS</v-avatar>

        <v-spacer></v-spacer>

        <v-btn v-for="(link, index) in links" :key="link" text @click="handleButtonClick(index)">
          {{ link }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      
      <v-container class="pa-0 ma-0">
        <v-row>
          <v-col cols="12" md="3">
            <v-sheet rounded="lg" elevation="2">
              <v-list height="100vh" class="padding" style="background-color:white;;">
                <v-list-item v-for="(role, index) in Roles" :key="index" link>
                  <v-list-item-content>
                    <v-list-item-title @click="redirectToPage(index + 1)">
                      {{ role }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
          
          <v-col cols="12" md="6">
            <v-sheet height="100vh" width="200vh" border color="white" rounded>
                <v-container class="pa-0 ma-0">
                    <video  height="735vh"  autoplay loop  :src="Video">
                      
                    </video>
                </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const links = ref(['Login', 'Registrarme'])
const router = useRouter()
const Roles = ref(['Admin', 'Cliente', 'Meseros', 'Chef'])

const redirectToPage = (roleIndex) => {
  switch (roleIndex) {
    case 1:
      router.push('/admin')
      break
    case 2:
      router.push('/login')
      break
    case 3:
      router.push('/meseros')
      break
    case 4:
      router.push('/chef');
      router.push('/ChefLogin');
      break
    default:
      break
  }
}

const handleButtonClick = (index) => {
  if (index === 0) {
    router.push('/login')
  } else if (index === 1) {
    router.push('/register')
  }
}

import Video from '@/Video/Restaurante.mp4';
</script>

<style scoped>
main {
  background-color: gainsboro;
}

.texto {
  text-align: justify;
  padding: 20px; /* Añadiendo un padding para separar el texto de los bordes */
}

.v-carousel-item {
  height: 100%; /* Ajusta la altura para llenar el contenedor del carrusel */
}

.child {
  width: 100%;
  font-size: 30px;
  margin-left: 30px;
  color: white;
}

.padding {
  padding:0%;
  
}

.padding-left {
  padding-left: 30px;
}

.border-custom {
  border: 5px solid black;
  box-sizing: border-box; /* Asegura que el borde esté incluido en el tamaño total del contenedor */
}

.custom-border-radius {
  border-radius: 15px;
  overflow: hidden;
}

.height-sheet {
  height: 55vh;
}

.custom-sheet .v-list-item {
  border-bottom: 1px solid #ddd; /* Línea separadora entre elementos */
}

.custom-sheet .v-list-item-title {
  font-size: 18px; /* Tamaño de fuente */
  color: #333; /* Color del texto */
}

.custom-sheet .v-list-item-title:hover {
  color: #007bff; /* Color del texto al pasar el mouse */
}
</style>
