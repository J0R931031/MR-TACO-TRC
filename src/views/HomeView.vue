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

    <v-main class="main-container">
      <v-container class="pa-0 ma-0 fill-height">
        <v-row class="pa-0 ma-0 fill-height no-gutters">
          <v-col cols="12" md="3" class="pa-0 ma-0">
            <v-sheet rounded="lg" elevation="2">
              <v-list height="100vh" class="padding" style="background-color:white;">
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
          
          <v-col cols="12" md="9" class="pa-0 ma-0 fill-height no-padding">
            <v-sheet height="100vh" width="100%" border color="white" rounded class="pa-0 ma-0 fill-height no-padding">
              <H1 class="pa-0 ma-0 fill-height no-padding">
                <div class="inicio-container pa-0 ma-0 fill-height no-padding">
                  <div class="carousel-container first">
                    <div class="carousel-content">
                      <h1>¿Cuántos tacos va a llevar, joven?</h1>
                      <v-btn class="carousel-button">Échale un vistazo al menú</v-btn>
                    </div>
                  </div>
                  <div class="carousel-container">
                    <div class="carousel-content" id="carrusel2">
                      <h1>Mucho sabor... Mucho color...</h1>
                      <h2>Todo en Torreón</h2>
                    </div>
                  </div>

                  <div class="featured-dishes">
                    <h2 class="featured-title">PLATILLOS DESTACADOS</h2>
                    <div class="dishes-carousel">
                      <div class="dish-card" v-for="(dish, i) in dishes" :key="i">
                        <img :src="dish.image" class="dish-image" />
                        <h3>{{ dish.title }}</h3>
                        <p>{{ dish.description }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="footer">
                    <div class="footer-content">
                      <address class="footer-text small-text">
                        <strong>Dirección:</strong> Calle División del Norte # 190<br>
                        Torreón, México<br>
                        <strong>Teléfono:</strong> 871 474 0471<br>
                        <strong>Correo:</strong> mrtacotrc@gmail.com
                      </address>
                      <div class="map-container">
                        <h3 class="small-text">Ubicación en Google Maps:</h3>
                        <img :src="mapImage" class="map-image" />
                      </div>
                    </div>
                    <div class="social-media">
                      <v-icon>mdi-facebook</v-icon>
                      <v-icon>mdi-instagram</v-icon>
                      <v-icon>mdi-twitter</v-icon>
                    </div>
                    <div class="footer-text small-text">
                      <p>© Derechos Reservados 2024</p>
                    </div>
                  </div>
                </div>
              </H1>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Importar imágenes desde la carpeta de assets
import hamburguesaImage from '@/assets/hamburguesa.webp';
import tacotesImage from '@/assets/tacotes.jpg';
import tacosImage from '@/assets/tacos.jpg';

const links = ref(['Login', 'Registrarme']);
const router = useRouter();
const Roles = ref(['Admin', 'Cliente', 'Meseros', 'Chef']);

const redirectToPage = (roleIndex) => {
  switch (roleIndex) {
    case 1:
      router.push('/admin');
      break;
    case 2:
      router.push('/login');
      break;
    case 3:
      router.push('/meseros');
      break;
    case 4:
      router.push('/chef');
      router.push('/ChefLogin');
      break;
    default:
      break;
  }
};

const handleButtonClick = (index) => {
  if (index === 0) {
    router.push('/login');
  } else if (index === 1) {
    router.push('/register');
  }
};

const dishes = ref([
  {
    title: 'TACOS DORADOS',
    description: 'Tortillas frescas rellenas con jugoso pollo marinado en especias...',
    image: tacotesImage,
  },
  // Puedes agregar más platillos aquí
]);

import Video from '@/Video/Restaurante.mp4';
</script>

<style scoped>
.inicio-container {
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
}

.carousel-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  margin-bottom: 20px;
  position: relative;
}

.carousel-container.first {
  background-image: url('@/assets/tacos.jpg');
  background-size: cover;
  background-position: center;
}

.carousel-container.second {
  background-image: url('@/assets/hamburguesa.webp');
  background-size: cover;
  background-position: center;
}

.carousel-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-button {
  background-color: #ff4f09;
  color: white;
  margin-top: 20px;
}

.featured-dishes {
  background-color: #ffeb3b;
  padding: 20px 0;
}

.featured-title {
  text-align: center;
  color: #ff4f09;
  font-weight: bold;
  margin-bottom: 20px;
}

.dishes-carousel {
  display: flex;
  overflow-x: auto;
  gap: 15px;
  padding: 0 15px;
}

.dish-card {
  background: white;
  border: 1px solid #ff4f09;
  border-radius: 10px;
  padding: 10px;
  flex: 0 0 auto;
  width: 200px;
  text-align: center;
}

.dish-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.footer {
  background-color: black;
  color: white;
  padding: 20px 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 20px;
}

.map-container {
  text-align: center;
}

.map-image {
  width: 100%;
  max-height: 200px;
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.footer-text {
  text-align: center;
  margin-top: 10px;
}

.small-text {
  font-size: 0.8em;
}

.pa-0 {
  padding: 0 !important;
}

.ma-0 {
  margin: 0 !important;
}

.fill-height {
  height: 100% !important;
}
</style>