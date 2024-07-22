<template>
  <div class="menu-container">
    <v-row class="menu" align="center" justify="center">
      
          <v-col cols="6" style="border: solid 0.1px black;">
            <v-card>
              <v-card-title>Iniciar sesión</v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="4">Nombre<v-text-field label="Nombre" v-model="formData.nombre"></v-text-field></v-col>
                    <v-col cols="7">Apellido<v-text-field label="Apellido" v-model="formData.apellido"></v-text-field></v-col>
                  </v-row>
                  <v-row>
                    <v-col>Correo<v-text-field label="Correo" v-model="formData.correo"></v-text-field></v-col>
                  </v-row>
                  <v-row>
                    <v-col>Contraseña
                      <v-text-field v-model="formData.password"
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
                      <v-text-field v-model="formData.confirmPassword"
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
                  <v-col class="d-flex justify-md-end">
                    <v-btn size="x-large" variant="elevated" color="indigo-darken-3" @click="submitForm">
                      Registrarse
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
     
  </div>
</template>

<script setup>
import { ref } from 'vue';

const rules = {
  required: value => !!value || 'Obligatorio.',
  min: v => v.length >= 8 || '8 caracteres mínimo',
  emailMatch: () => ('El correo y la contraseña no coinciden'),
};

const show1 = ref(false);
const formData = ref({
  nombre: '',
  apellido: '',
  correo: '',
  password: '',
  confirmPassword: ''
});

const submitForm = async () => {
  if (formData.value.password !== formData.value.confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  try {
    const response = await fetch('http://misitio.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: formData.value.nombre,
        apellido: formData.value.apellido,
        correo: formData.value.correo,
        password: formData.value.password
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    alert('User registered successfully!');
  } catch (error) {
    console.error('There was an error!', error);
    alert('Failed to register user.');
  }
};
</script>

<style>
.menu-container {
  position: relative;
}

</style>
