<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import '@mdi/font/css/materialdesignicons.css';
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
    // Convertir fecha a formato correcto (yyyy-mm-dd)
    const formattedDate = formData.value.fechaNacimiento;
    await fetch('http://MrTaco.com/crearcliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors', // Modo no-cors agregado aquí
      body: JSON.stringify({
        ...formData.value,
        fechaNacimiento: formattedDate,
        contrasena: formData.value.password // Asegúrate de que el backend espera "contrasena"
      })
    });

    // Como se está usando el modo no-cors, no podemos verificar la respuesta correctamente.
    console.log('Solicitud enviada en modo no-cors.');
    alert('Usuario registrado (verifica en el servidor si el registro fue exitoso).');

  } catch (error) {
    console.error('Hubo un error!', error);
    alert('No se pudo registrar al usuario.');
  }
};

const cancel = () => {
  router.push('/'); // Redirige a la página de inicio principal
};

const redirectToFacebook = () => {
  window.location.href = 'https://www.facebook.com/Mr.Tacotorreon?mibextid=LQQJ4d';
};

const redirectToInstagram = () => {
  window.location.href = 'https://www.instagram.com/mr.taco.trc?igsh=azQ3ZTYzd3A5YXBm';
};
</script>

<template>
  <div class="menu-container">
    <bar-nav class="navbar" />
    <v-row class="menu" align="center" justify="center"></v-row>
    <!-- Contenedor principal -->
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
                      hint="Al menos 8 caracteres"
                      class="white-icon"
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
    <footer class="footer">
      <div class="social-media">
        <button @click="redirectToInstagram" style="background-color: transparent; border: none; cursor: pointer;">
          <img src="@/assets/instagram.jpeg" alt="Instagram" />
        </button>
        <button @click="redirectToFacebook" style="background-color: transparent; border: none; cursor: pointer;">
          <img src="@/assets/facebook.webp" alt="Facebook" />
        </button>
        <span>@MRTacoTRC</span>
      </div>
      <div class="rights-reserved">
        <span>© Derechos Reservados 2024</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.menu-container {
  position: relative;
}
.content-container { 
  margin-top: 80px; 
  background-image: url('@/assets/fondo reg.webp');
  background-size: cover;
  background-position: center;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
}
.title h1 {
  font-family: 'Arial', sans-serif; 
  font-size: 32px;
}
.bordered-card {
  border-radius: 16px;
  padding: 16px;
  z-index: 999;
  background-color: black;
  margin-top: 105px;
  color: white;
  margin-bottom: 90px;
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
  .mobile-container {
    padding: 20px; /* Ajusta el padding en pantallas pequeñas */
    margin-top: 120px;
    background-color: rgba(0, 0, 0, 0.8); /* Fondo oscuro en versión móvil */
    border-radius: 16px;
  }
  .content-container {
    margin-top: 50px;
    padding: 12px;
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
/* Agregar estilo para el icono blanco */
.v-input--append .v-icon {
  color: white !important;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 20px 20px;
  bottom: 0;
  width: 100%;
}
.social-media img {
  width: 40px;
  margin-right: 10px;
}
.rights-reserved {
  font-family: 'Arial', sans-serif;
}
</style>
