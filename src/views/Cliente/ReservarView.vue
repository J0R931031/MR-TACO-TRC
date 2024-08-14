<template>
  <div class="menu-container">
    <bar-nav class="navbar" />
    <v-row class="menu" align="center" justify="center"></v-row>
    <div class="content-container">
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" lg="5" class="form-container">
          <v-card class="bordered-card">
            <v-row justify="center">
              <v-card-title class="title">
                <h1>Reservar Mesa</h1>
              </v-card-title>
            </v-row>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-select
                      v-model="numberOfPeople"
                      :items="peopleOptions"
                      label="Número de Personas"
                      prepend-icon="mdi-account"
                      outlined
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="reservationDateTime"
                      label="Fecha y Hora de Reserva"
                      prepend-icon="mdi-calendar-clock"
                      placeholder="AAAA/MM/DD HH:MM:SS"
                      outlined
                      @input="formatDateTime"
                      maxlength="19"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="d-flex justify-center">
                    <v-btn
                      class="reservation-button"
                      size="x-large"
                      @click="submitReservation"
                    >
                      Reservar
                    </v-btn>
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
        <button
          @click="redirectToInstagram"
          style="background-color: transparent; border: none; cursor: pointer;"
        >
          <img src="@/assets/instagram.jpeg" alt="Instagram" />
        </button>
        <button
          @click="redirectToFacebook"
          style="background-color: transparent; border: none; cursor: pointer;"
        >
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

const numberOfPeople = ref(null);
const reservationDateTime = ref('');

const peopleOptions = Array.from({ length: 50 }, (v, i) => i + 1); // Opciones de 1 a 50 personas

const formatDateTime = () => {
  let input = reservationDateTime.value.replace(/\D/g, '');
  input = input.substring(0, 14); // Limita a 14 caracteres numéricos

  if (input.length >= 5 && input.length <= 6) {
    reservationDateTime.value =
      input.slice(0, 4) + '/' + input.slice(4, 6) + '/' + input.slice(6);
  } else if (input.length >= 9 && input.length <= 10) {
    reservationDateTime.value =
      input.slice(0, 4) +
      '/' +
      input.slice(4, 6) +
      '/' +
      input.slice(6, 8) +
      ' ' +
      input.slice(8, 10);
  } else if (input.length >= 11 && input.length <= 12) {
    reservationDateTime.value =
      input.slice(0, 4) +
      '/' +
      input.slice(4, 6) +
      '/' +
      input.slice(6, 8) +
      ' ' +
      input.slice(8, 10) +
      ':' +
      input.slice(10, 12);
  } else if (input.length >= 13) {
    reservationDateTime.value =
      input.slice(0, 4) +
      '/' +
      input.slice(4, 6) +
      '/' +
      input.slice(6, 8) +
      ' ' +
      input.slice(8, 10) +
      ':' +
      input.slice(10, 12) +
      ':' +
      input.slice(12, 14);
  } else {
    reservationDateTime.value = input;
  }
};

const submitReservation = async () => {
  if (numberOfPeople.value && reservationDateTime.value) {
    try {
      const response = await fetch('http://mrtaco.com/reservar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          R_PersonasEnMesa: numberOfPeople.value,
          R_FechaYHoraReserva: reservationDateTime.value,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message); // Mostrar mensaje de éxito

        // Limpiar campos del formulario
        numberOfPeople.value = null;
        reservationDateTime.value = '';
      } else {
        alert('Error: ' + result.error); // Mostrar mensaje de error
      }
    } catch (error) {
      console.error('Error en la reserva:', error);
      alert('Hubo un problema con la solicitud de reserva.');
    }
  } else {
    alert('Por favor, completa todos los campos.');
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
  border-radius: 15px;
  padding: 16px;
  z-index: 999;
  background-color: #000000;
  color: rgb(255, 255, 255);
  margin: 0 auto;
  margin-top: 50px;
}

.v-text-field input {
  font-family: 'Arial', sans-serif;
}

.reservation-button {
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

  .reservation-button {
    font-size: 16px;
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

  .reservation-button {
    font-size: 14px;
  }

  .title h1 {
    font-size: 24px;
}
}
</style>

