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
                <h1>BIENVENIDO</h1>
              </v-card-title>
            </v-row>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                     Correo
                    <v-text-field label="Correo" v-model="loginData.correo" outlined></v-text-field>
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
                <v-row>
                  <v-col cols="12" class="d-flex justify-center links">
                    <a href="#">¿Olvidaste la contraseña?</a>
                    <br>
                    <RouterLink to="/reg">¿No tienes Cuenta? Regístrate</RouterLink>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
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

<script setup>
import { ref } from 'vue';
import barNav from '@/components/barNav.vue';

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
        correo: loginData.value.correo,
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

const redirectToFacebook = () => {
  window.location.href = 'https://www.facebook.com/Mr.Tacotorreon?mibextid=LQQJ4d';
};

const redirectToInstagram = () => {
  window.location.href = 'https://www.instagram.com/mr.taco.trc?igsh=azQ3ZTYzd3A5YXBm';
};
</script>

<style scoped>
.menu-container {
  position: relative;
}

.content-container { 
  margin-top: 90px; 
  background-image: url('@/assets/fondo reg.webp');
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Asegura que ocupe toda la pantalla en dispositivos grandes */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra el contenido verticalmente */
}

.title h1 {
  font-family: 'Arial', sans-serif; 
  font-size: 32px;
}

.bordered-card {
  border-radius: 15px;
  padding: 16px;
  z-index: 999;
  background-color: #000;
  color: white;
  margin: 0 auto;
  margin-top: 50px;
}

.v-text-field input {
  font-family: 'Arial', sans-serif;
}

.login-button {
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

@media (max-width: 768px) {
  .content-container {
    margin-top: 60px; 
    padding: 0 10px;
  }

  .bordered-card {
    padding: 10px;
  }

  .login-button {
    font-size: 16px;
  }

  .links a {
    font-size: 12px;
  }

  .title h1 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .content-container {
    margin-top: 50px; 
    padding: 0 5px;
  }

  .bordered-card {
    padding: 8px;
  }

  .login-button {
    font-size: 14px;
  }

  .links a {
    font-size: 10px;
  }

  .title h1 {
    font-size: 24px;
  }
}
</style>