<template>
    <div class="container">
      <bar-nav class="navbar" />
  
      <div class="tables-container">
        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>Chefs</v-card-title>
              <v-card-text>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido Paterno</th>
                      <th>Apellido Materno</th>
                      <th>Sexo</th>
                      <th>Fecha Nacimiento</th>
                      <th>Fecha Ingreso</th>
                      <th>Correo</th>
                      <th>Contraseña</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="chef in chefs" :key="chef.Correo">
                      <td>{{ chef.Nombre }}</td>
                      <td>{{ chef.ApellidoPaterno }}</td>
                      <td>{{ chef.ApellidoMaterno }}</td>
                      <td>{{ chef.Sexo }}</td>
                      <td>{{ chef.FechaNacimiento }}</td>
                      <td>{{ chef.FechaIngreso }}</td>
                      <td>{{ chef.Correo }}</td>
                      <td>{{ chef.ContrasenaDesencriptada }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-col>
  
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>Meseros</v-card-title>
              <v-card-text>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido Paterno</th>
                      <th>Apellido Materno</th>
                      <th>Sexo</th>
                      <th>Fecha Nacimiento</th>
                      <th>Fecha Ingreso</th>
                      <th>Correo</th>
                      <th>Contraseña</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="mesero in meseros" :key="mesero.Correo">
                      <td>{{ mesero.Nombre }}</td>
                      <td>{{ mesero.ApellidoPaterno }}</td>
                      <td>{{ mesero.ApellidoMaterno }}</td>
                      <td>{{ mesero.Sexo }}</td>
                      <td>{{ mesero.FechaNacimiento }}</td>
                      <td>{{ mesero.FechaIngreso }}</td>
                      <td>{{ mesero.Correo }}</td>
                      <td>{{ mesero.ContrasenaDesencriptada }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import barNav from '@/components/barNav.vue';
  
  const chefs = ref([]);
  const meseros = ref([]);
  
  const fetchChefs = async () => {
    const response = await fetch('http://mrtaco.com/chefs');
    chefs.value = await response.json();
  };
  
  const fetchMeseros = async () => {
    const response = await fetch('http://mrtaco.com/meseros');
    meseros.value = await response.json();
  };
  
  onMounted(() => {
    fetchChefs();
    fetchMeseros();
  });
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .tables-container {
    margin-top: 20px;
  }
  
  .v-card-title {
    font-weight: bold;
  }
  
  .v-simple-table {
    width: 100%;
  }
  </style>
  