<template>
    <v-app id="inspire">
      <carrosel-global />
      <v-app-bar app color="red" flat>
        <v-container class="py-0 fill-height">
          <v-avatar class="mr-10" color="grey darken-1" size="32">HS</v-avatar>
  
          <v-spacer></v-spacer>
  
          <v-btn v-for="(link, index) in links" :key="link" text @click="handleButtonClick(index)">
            {{ link }}
          </v-btn>
        </v-container>
      </v-app-bar>
  
      <v-main>
        <v-container>
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
              <v-sheet min-height="70vh" rounded="lg" class="texto">
                <p style="margin: 0 10px">
                  
                </p>
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
  </style>
