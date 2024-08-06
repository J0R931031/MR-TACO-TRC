<template>
  <v-app id="inspire">
    <bar-nav class="navbar" />
    <div>.</div>
    <div>.</div>
    <v-main class="main-container">
      <v-container  class="pa-0 ma-0 fill-height justify-center">
        <v-row class="pa-0 ma-0 fill-height no-gutters justify-center">
          <h1 class="textoinvisible">....</h1>
          <h1 class="textoinvisible">....</h1>
          <h1 class="textoinvisible">....</h1>
          <h1 class="textoinvisible">....</h1>
          <v-col ID="inicio123"  class="pa-0 ma-0 fill-height justify-center no-padding">
            <v-sheet height="100vh" width="100%" border color="white" rounded class="pa-0 ma-0 fill-height no-padding">
              <div style="background-color: black;"  class="inicio-container pa-0 ma-0 fill-height no-padding">
                <div class="carousel-container first">
                  <div class="carousel-content">
                    <h1 :style="{ color: 'white', textShadow: '4px 2px 2px black' }">¿Cuántos tacos va a llevar, joven?</h1>
                    <v-btn class="carousel-button" @click="goToMenu">Échale un vistazo al menú</v-btn>
                  </div>
                </div>
                <div class="carousel-container second">
                  <div class="carousel-content">
                    <h1>Mucho sabor... Mucho color...</h1>
                    <p>Etiqueta de recuerdo para modificar imagen</p>
                    <p>Y crear flexbox en cada contenedor</p>
                    <p>Crear método de carrusel en este apartado, investigación de protocolos e inserción de imágenes</p>
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

                <v-row class="justify-center mt-4">
                  <v-btn v-for="(role, index) in Roles" :key="index" class="mx-2 role-button" @click="redirectToPage(index + 1)">
                    {{ role }}
                  </v-btn>
                </v-row>

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
                      <a href="https://maps.app.goo.gl/rjmG3bGY1mq3MD1P6" target="_blank">
                        <img :src="mapImage" class="map-image" />
                      </a>
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

// Importar el componente de la barra de navegación
import barNav from '@/components/barNav.vue';

// Importar imágenes desde la carpeta de assets
import tacotesImage from '@/assets/tacotes.jpg';
import ubicacionImage from '@/assets/ubicacion.png';


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
      router.push('/ChefOrden');
      break;
    default:
      break;
  }
};


const goToMenu = () => {
  router.push('/menu');
};

const dishes = ref([
  {
    title: 'TACOS DORADOS',
    description: 'Tortillas frescas rellenas con jugoso pollo marinado en especias...',
    image: tacotesImage,
  },
  // Puedes agregar más platillos aquí
]);

const mapImage = ubicacionImage;

</script>

<style scoped>

.main-container {
  background-image: url('@/assets/maderado.jpg');
  background-size: cover;
  background-position: center;
}

.textoinvisible
{
  visibility: hidden;
}

#inicio123
{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
   /* Asegura que esté al frente */
}

.inicio-container {
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  height: 100%;
  width: 100%;
  margin-top: 64px; /* Ajusta según la altura del navBar */
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
  background-color: #422e13b2;
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
  border: 3px solid #ff6600;
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

.no-gutters {
  margin-right: 0 !important;
  margin-left: 0 !important;
  > .v-col {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}

.main-container {
  padding: 0 !important;
  margin: 0 !important;
  width: 100% !important;
}

.role-button {
  min-width: 100px;
  margin: 5px;
}
</style>
