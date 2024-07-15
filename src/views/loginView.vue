<script setup>
import { ref } from 'vue';
import logo from '@/assets/mr-taco.png';  // Asegúrate de que la ruta sea correcta

const rules = {
  required: value => !!value || 'Obligatorio.',
  min: v => v.length >= 8 || '8 caracteres mínimo',
  emailMatch: () => (`El correo y la contraseña no coinciden`),
};

const show1 = ref(false);
const password = ref('Password');
</script>

<template>
  <div class="menu-container">
    <v-row class="menu">
      <v-col class="menu-item" align="center" justify="end">Inicio</v-col>
      <v-col class="menu-item" align="center" justify="end">Menu</v-col>
      <v-col class="menu-item" align="center" justify="end">Reservas</v-col>
      <v-col class="logo-container">
        <v-img
          class="logo"
          :src="logo"
          cover
        ></v-img>
      </v-col>
      <v-col class="menu-item" align="start">Registrarse</v-col>
      <v-col class="menu-item" align="space-between">Iniciar Sesión</v-col>
    </v-row>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="7">
        <v-row justify="center" style="padding: 40px;">
          <v-col cols="6" style="border: solid 0.1px black;">
            <v-card>
              <v-card-title>Iniciar sesión</v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="4">Nombre<v-text-field label="Nombre"></v-text-field></v-col>
                    <v-col cols="7">Apellido<v-text-field label="Apellido"></v-text-field></v-col>
                  </v-row>
                  <v-row>
                    <v-col>Correo<v-text-field label="Correo"></v-text-field></v-col>
                  </v-row>
                  <v-row>
                    <v-col>Contraseña
                      <v-text-field v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        label="Password"
                        name="input-10-1"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>Confirmar contraseña
                      <v-text-field v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        label="Password"
                        name="input-10-1"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-row justify="end">
                  <v-col class="d-flex justify-md-end"><v-btn size="x-large" variant="elevated" color="indigo-darken-3">
                      Button
                    </v-btn></v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.menu-container {
  position: relative;
}

.menu {
  background-color: black;
}

.menu-item {
  color: white;
  font-size: 30px;
}

.logo-container {
  position: relative;
}

.logo {
 position: absolute;
  width: 90px; 
}

</style>
