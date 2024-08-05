<template>
  <div class="menu-container">
    <bar-nav class="navbar" />
    <v-row class="menu" align="center" justify="center">
    </v-row>
    <div class="content-container"> 
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" lg="5" class="form-container">
          <v-card class="bordered-card">
            <v-row justify="center">
              <v-card-title class="title">
                <h1>REGISTRO</h1>
              </v-card-title>
            </v-row>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    Nombre
                    <v-text-field label="Nombre" v-model="formData.nombre" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    Apellido Paterno
                    <v-text-field label="Apellido Paterno" v-model="formData.apellidoPaterno" outlined></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    Apellido Materno
                    <v-text-field label="Apellido Materno" v-model="formData.apellidoMaterno" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    Sexo
                    <v-select
                      v-model="formData.sexo"
                      :items="['Masculino', 'Femenino', 'Otro']"
                      label="Sexo"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    Teléfono
                    <v-text-field label="Teléfono" v-model="formData.telefono" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    Fecha de Nacimiento
                    <v-text-field
                      label="Fecha de Nacimiento"
                      v-model="formData.fechaNacimiento"
                      outlined
                      type="date"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    Correo
                    <v-text-field label="Correo" v-model="formData.correo" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    Contraseña
                    <v-text-field 
                      v-model="formData.password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      label="Contraseña"
                      outlined
                      @click:append="togglePasswordVisibility"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-row justify="space-between">
                <v-col class="d-flex justify-md-start">
                  <v-btn class="cancel-button" size="x-large" @click="cancel">
                    Cancelar
                  </v-btn>
                </v-col>
                <v-col class="d-flex justify-md-end">
                  <v-btn class="register-button" size="x-large" @click="submitForm">
                    Registrarse
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div> 
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import barNav from '@/components/barNav.vue';

const router = useRouter();

const showPassword = ref(false);
const formData = ref({
  nombre: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  sexo: '',
  telefono: '',
  fechaNacimiento: '',
  correo: '',
  password: ''
});

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const submitForm = async () => {
  try {
    const response = await fetch('http://misitio.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    alert('Usuario registrado con éxito!');
  } catch (error) {
    console.error('Hubo un error!', error);
    alert('No se pudo registrar al usuario.');
  }
};

const cancel = () => {
  router.push('/'); // Redirige a la página de inicio principal
};
</script>

<style scoped>
.menu-container {
  position: relative;
}

.content-container { 
  margin-top: 180px; 
}

.title h1 {
  font-family: 'Arial', sans-serif; 
  font-size: 32px;
}

.bordered-card {
  border: 2px solid #ff4f09;
  border-radius: 16px;
  box-shadow: 0 0 25px 10px rgba(255, 79, 9, 0.8);
  padding: 16px;
}

.v-text-field input {
  font-family: 'Arial', sans-serif;
}

.register-button {
  background-color: #ff4f09;
  color: white;
  width: 100%;
}

.cancel-button {
  background-color: #ff4f09;
  color: white;
  width: 100%;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; 
}

@media (max-width: 600px) {
  .content-container {
    margin-top: 120px;
  }

  .bordered-card {
    padding: 8px;
  }

  .title h1 {
    font-size: 24px;
  }

  .v-btn {
    font-size: 14px;
  }
}
</style>
