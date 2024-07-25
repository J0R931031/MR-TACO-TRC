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
        <v-container mar>
          <v-row>
            <v-col cols="2">
              <v-sheet rounded="lg">
                <v-list color="transparent">
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
  
            <v-col cols>
              <v-sheet height="200vh" rounded="lg">
            <v-container>
              <v-row no-gutters>
      <v-col class="h-auto" cols="12">
          <v-carousel hide-delimiters height="70vh">
            <v-carousel-item height="70vh"
                class="aspect-ratio-item"
                
                src="https://www.shutterstock.com/shutterstock/photos/1387847651/display_1500/stock-vector-burrito-vintage-restaurant-sign-mexican-food-retro-advertising-vector-graphic-illustration-1387847651.jpg"
              >
             </v-carousel-item>
  
            <v-carousel-item
              class="aspect-ratio-item"
              src="https://areajugones.sport.es/wp-content/uploads/2020/04/dragon-ball-23.jpg"
            
            ></v-carousel-item>
  
            <v-carousel-item
              class="aspect-ratio-item"
              src="https://cdn.suwalls.com/wallpapers/anime/goku-dragon-ball-z-43828-1920x1080.jpg"
              
            ></v-carousel-item>
          </v-carousel>
      </v-col>
    </v-row>
    <v-row no-gutters>
  <v-col cols="6">
    <div style="height: 55vh; background-color: #232323;">
      <v-container class="d-flex  flex-column justify-space-between">
        <v-row no-gutters  style="font-size: 20px; color: white; font-family: monospace; margin-top: 40px; margin-left:35px">
            <p class="text-decoration-underline">Dirección:</p>
            <p >Calle División del Norte # 190
              Torreón, México</p>
          </v-row>
          <v-row no-gutters  style="font-size: 20px; color: white; font-family: monospace; margin-top: 40px; margin-left:35px">
            <p class="text-decoration-underline">Teléfono:</p>
            <p >8714140474</p>
          </v-row>     
          <v-row no-gutters  style="font-size: 20px; color: white; font-family: monospace; margin-top: 70px; margin-left:35px">
            <p class="text-decoration-underline">Correo:</p>
            <p >mrtacotrc@gmail.com</p>
          </v-row>
      </v-container>
    </div>
  </v-col>
  <v-col cols="6">
    <div style="height: 55vh; background-color:#232323;">
      <v-container class="d-flex flex-column justify-center align-center">

          <v-row no-gutters class="padding" style="font-size: 20px;">
            <p style="color: white;">Ubicacion</p>
            <p class="padding-left" style="color: white;">en</p>
            <p class="padding-left" style="color: blue;">G</p>
            <p style="color: red;">o</p>
            <p style="color: yellow;">o</p>
            <p style="color: blue;">g</p>
            <p style="color: green;">l</p>
            <p style="color: red;">e</p>
            <p class="padding-left" style="color: white;">Maps</p>
          </v-row class="rounded">
          <div class="custom-border-radius" style="height: 30vh; width: 30vh;">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13967742.468373202!2d-110.40993287992536!3d31.27351225542827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdb8df81e2893%3A0x2609e43ad3f0da3a!2sMr.%20Taco%20TRC!5e0!3m2!1sen!2sau!4v1721843694203!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style="border:0;"
            loading="lazy"
          ></iframe>
        </div>
      </v-container>
    </div>
  </v-col>
</v-row>
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
  
  const Roles = ref(['Admin', 'Cliente','Meseros','Chef'])
  
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
            router.push('/Chef')
            break
      default:
        break
    }
  }
  
  const handleButtonClick = (index) => {
    if (index === 0) {
      router.push('/Login')
    } else if (index === 1) {
      router.push('/register')
    }
  }
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
  color: white ;
}

.padding
{
  padding-top: 80px;
  padding-block-end:10px; 
}

.padding-left
{
  padding-left: 5px;
}
.border-custom {
  border: 5px solid black;
  box-sizing: border-box; /* Asegura que el borde esté incluido en el tamaño total del contenedor */
}
.custom-border-radius {
  border-radius: 15px;
  overflow: hidden; /* Para asegurarse de que el contenido también esté redondeado */
}
  </style>
