<template>
  <v-app id="inspire">
    <bar-nav class="navbar" />
    <div>.</div>
    <div>.</div>
    <v-main class="main-container">
      <v-container class="pa-0 ma-0 fill-height justify-center">
        <v-row class="pa-0 ma-0 fill-height no-gutters justify-center">
         
          <v-col ID="inicio123" class="pa-0 ma-0 fill-height justify-center no-padding">
            <v-sheet height="100vh" width="100%" border color="white" rounded class="pa-0 ma-0 fill-height no-padding">
              <div style="background-color: black;" class="inicio-container pa-0 ma-0 fill-height no-padding">
                <div class="carousel-container first">
                  <div class="carousel-content">
                    <h1 :style="{ color: 'white', textShadow: '4px 2px 2px black' }">¿Cuántos tacos va a llevar, joven?</h1>
                    <v-btn class="carousel-button" @click="goToMenu">Échale un vistazo al menú</v-btn>
                  </div>
                </div>
                <div class="carousel-container second">
                  <div class="carousel-content">
                    <h1 :style="{ color: 'white', textShadow: '4px 2px 2px black' }">Mucho sabor... Mucho color...</h1>
                   
                    <h2 :style="{ color: 'white', textShadow: '4px 2px 2px black' }">Todo en Torreón</h2>
                  </div>
                </div>

                <div class="featured-dishes">
                  <h1 class="platillos-title">NUEVOS POSTEOS</h1>
                  <div class="dishes-carousel">
                    <div class="dish-card" v-for="post in posts" :key="post.id">
                      <img :src="post.image" class="dish-image" />
                      <h3 class="text-content">{{ post.title }}</h3>
                      <p class="text-content">{{ post.content }}</p>
                    </div>
                  </div>
                </div>

                <v-row class="justify-center mt-4">
                  <v-btn v-for="(role, index) in Roles" :key="index" class="mx-2 role-button" @click="redirectToPage(index + 1)">
                    {{ role }}
                  </v-btn>
                </v-row>

                <!-- Footer Section -->
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
                </div>

                <!-- Social Media Section -->
                <div class="social-container">
                  <div class="social-media">
                    <button @click="redirectToInstagram" class="social-button">
                      <img src="@/assets/instagram.webp" alt="Instagram" />
                    </button>
                    <button @click="redirectToFacebook" class="social-button">
                      <img src="@/assets/facebook.png" alt="Facebook" />
                    </button>
                    <span class="social-text">@MRTacoTRC</span>
                  </div>
                  <div class="footer-text small-text">
                    <p style="font-size: 15px;">© Derechos Reservados 2024</p>
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
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { usePostStore } from '@/stores/postStore';
import barNav from '@/components/barNav.vue';
import ubicacionImage from '@/assets/ubicacion.png';

const redirectToFacebook = () => {
  window.location.href = 'https://www.facebook.com/Mr.Tacotorreon?mibextid=LQQJ4d';
};

const redirectToInstagram = () => {
  window.location.href = 'https://www.instagram.com/mr.taco.trc?igsh=azQ3ZTYzd3A5YXBm';
};

const router = useRouter();
const Roles = ref(['Admin', 'Cliente', 'Meseros', 'Chef']);

const postStore = usePostStore();
const posts = computed(() => postStore.posts);

const redirectToPage = (roleIndex) => {
  switch (roleIndex) {
    case 1:
      router.push('/posts');
      break;
    case 2:
      router.push('/login');
      break;
    case 3:
      router.push('/meseros');
      router.push('/OrdenesView');
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

const mapImage = ubicacionImage;
</script>

<style scoped>
.main-container {
  background-image: url('@/assets/maderado.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
}

#inicio123 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.inicio-container {
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  height: 100%;
  width: 100%;
  margin-top: 64px;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  margin-bottom: 20px;
  position: relative;
  flex-direction: column;
  text-align: center;
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
  text-align: center;
}

.carousel-button {
  background-color: #ff4f09;
  color: white;
  margin-top: 20px;
}

.featured-dishes {
  background-color: #3b1d0eb2;
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
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 15px;
}

.dish-card {
  background: white;
  border: 3px solid #ff6600;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
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

.text-content {
  word-wrap: break-word;
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
}

.platillos-title {
  text-align: center;
  color: white;
  text-shadow: 4px 2px 2px #ff4f09;
  margin-bottom: 20px;
}

.footer {
  background-color: #3b1d0eb2;
  color: white;
  padding: 20px 0;
  margin-top: -20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  margin-bottom: 20px;
}

.map-container {
  text-align: center;
}

.map-image {
  width: 100%;
  max-height: 200px;
}

.social-container {
  background-color: rgb(0, 0, 0);
  color: white;
  padding: 20px 0;
  height: 150px;
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.social-button {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.social-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.social-text {
  margin-left: 10px;
  font-size: 1em;
  color: white;
}

.footer-text {
  text-align: center;
  padding-top: 15px;
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
}

@media (max-width: 600px) {
  .carousel-container {
    height: 200px;
    margin-bottom: 10px;
  }

  .carousel-content h1,
  .carousel-content p,
  .carousel-content h2 {
    font-size: 1.2em;
  }

  .featured-title {
    font-size: 1.5em;
  }

  .dish-card {
    width: 150px;
  }

  .dish-image {
    height: 100px;
  }

  .footer-content {
    flex-direction: column;
  }

  .small-text {
    font-size: 0.7em;
  }

  .map-image {
    max-height: 150px;
  }
}
</style>