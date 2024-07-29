<template>
<div class="menu-container">
  <chefBar></chefBar>
    <v-row class="menu" align="center" justify="center">
    </v-row>
    <div class="content-container"> 
      <v-row align="center" justify="center">
        <v-col cols="5" class="form-container">
          <v-card class="bordered-card">
            <v-row>
              <V-col style="position: absolute; ">
                <v-img :src="iconochef" style="width: 90px; height: 75px;"></v-img>
              </V-col>
              <V-col style="font-family: 'Arial', sans-serif; font-size: 15px; padding-left: 100px; padding-top: 30px;">
                <h1>BIENVENIDO CHEF</h1>
              </V-col>
           
            </v-row>
          <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                     Usuario
                    <v-text-field label="Usuario" v-model="loginData.usuario" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    Contraseña
                    <v-text-field 
                      v-model="loginData.password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      label="Contraseña"
                      outlined
                      @click:append="togglePasswordVisibility"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="d-flex justify-center">
                    <v-btn class="login-button" size="x-large" @click="submitLogin">
                      Iniciar Sesión
                    </v-btn>
                  </v-col>
                </v-row>
               
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div> 
  </div>
</template>

<script setup>
import { ref } from 'vue';
import  chefBar from '@/components/chefBar.vue';
import iconochef from '@/assets/iconochef.jpg';
const showPassword = ref(false);
const loginData = ref({
  correo: '',
  password: ''
});

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const submitLogin = async () => {
  try {
    const response = await fetch('http://misitio.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: loginData.value.Usuario,
        password: loginData.value.password
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    alert('Inicio de sesión exitoso!');
  } catch (error) {
    console.error('Hubo un error!', error);
    alert('No se pudo iniciar sesión.');
  }
};
</script>

<style scoped>
.menu-container {
  position: relative;
}

.content-container { 
  margin-top: 100px; 
}

.title h1 {
  font-family: 'Arial', sans-serif; 
  font-size: 32px;
}

.bordered-card {
  border: 2px solid #ff4f09;
  border-radius: 15px;
  box-shadow: 0 0 25px 10px rgba(255, 79, 9, 0.8);
  padding: 16px;
}

.v-text-field input {
  font-family: 'Arial', sans-serif;
}

.login-button {
  background-color: #ff4f09;
  color: white;
  width: 100%;
}

.links {
  text-align: center;
  margin-top: 16px;
}

.links a {
  color: #000;
  text-decoration: none;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
}

.links a:hover {
  text-decoration: underline;
}
</style>
