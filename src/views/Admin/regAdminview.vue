<template>
  <div :style="backgroundStyle" class="menu-container">
    <BarAdmin></BarAdmin>
    <v-row class="menu" align="center" justify="center"></v-row>
    <div class="content-container">
      <v-row align="center" justify="center">
        <v-col cols="8" class="form-container">
          <v-card class="bordered-card">
            <v-row justify="center">
              <v-card-title class="title">
                <h1>REGISTRO</h1>
              </v-card-title>
            </v-row>
            <v-card-text>
              <v-container>
                <!-- Form Fields -->
                <v-row>
                  <v-col cols="12">
                    Nombre
                    <v-text-field label="Nombre" v-model="Nombre" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    Apellido Paterno
                    <v-text-field label="Apellido Paterno" v-model="ApellidoPaterno" outlined></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    Apellido Materno
                    <v-text-field label="Apellido Materno" v-model="ApellidoMaterno" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    Sexo
                    <v-select
                      v-model="Sexo"
                      :items="['Masculino', 'Femenino', 'Otro']"
                      label="Sexo"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="6">
                    Teléfono
                    <v-text-field label="Teléfono" v-model="Telefono" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    Fecha de Nacimiento
                    <v-text-field
                      label="Fecha de Nacimiento"
                      v-model="FechaNacimiento"
                      outlined
                      type="date"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    Dirección
                    <v-text-field label="Dirección" v-model="Direccion" outlined></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    CURP
                    <v-text-field label="CURP" v-model="CURP" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    RFC
                    <v-text-field label="RFC" v-model="RFC" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    Correo
                    <v-text-field label="Correo" v-model="Correo" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    Contraseña
                    <v-text-field
                      v-model="Contrasena"
                      :type="showPassword ? 'text' : 'password'"
                      label="Contraseña"
                      outlined
                      @click:append="togglePasswordVisibility"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="12">
                      <div class="propietario">
                        <label for="Rol" style="font-size: 25px;" >Rol: </label>
                        <v-btn
                          color="#ffff" style="margin-right: 10px;"
                          :class="{'selected': Rol === 3}"
                          @click="Rol = 3"
                        > Mesero
                          
                        </v-btn>
                        <v-btn
                          color="#ffff" style="margin-right: 10px;"
                          :class="{'selected': Rol === 2}"
                          @click="Rol = 2"
                        >
                          Cocinero
                        </v-btn>
                        <v-btn
                          color="#ffff" style="margin-right: 10px;"
                          :class="{'selected': Rol === 1}"
                          @click="Rol = 1"
                        >
                          Administrador
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-btn color="red" @click="removeEmployee">Eliminar Empleado</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
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
                  <v-btn class="register-button" size="x-large" @click="submit">
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
import BarAdmin from '@/components/barAdmin.vue';
import fondoAdmin from '@/assets/fondoAdmin.webp';

const router = useRouter();
const showPassword = ref(false);
const Nombre = ref('');
const ApellidoPaterno = ref('');
const ApellidoMaterno = ref('');
const Sexo = ref('');
const Telefono = ref('');
const FechaNacimiento = ref('');
const Correo = ref('');
const Contrasena = ref('');
const Rol = ref(null);
const Direccion = ref('');
const CURP = ref('');
const RFC = ref('');

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const submit = async () => {
  if (
    Nombre.value &&
    ApellidoPaterno.value &&
    ApellidoMaterno.value &&
    Sexo.value &&
    Telefono.value &&
    FechaNacimiento.value &&
    Correo.value &&
    Contrasena.value &&
    Rol.value &&
    Direccion.value &&
    CURP.value &&
    RFC.value
  ) {
    const data = {
      nombre: Nombre.value,
      apellidoPaterno: ApellidoPaterno.value,
      apellidoMaterno: ApellidoMaterno.value,
      sexo: Sexo.value,
      telefono: Telefono.value,
      fechaNacimiento: FechaNacimiento.value,
      direccion: Direccion.value,
      CURP: CURP.value,
      RFC: RFC.value,
      correo: Correo.value,
      contrasena: Contrasena.value,
      rolID: Rol.value,
    };
    try {
      const response = await fetch('http://mrtaco.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        if (responseData.message === 'Este correo ya ha sido registrado.') {
          alert('Este correo ya ha sido registrado previamente.');
        } else {
          alert(responseData.message); // Mensaje como 'Empleado registrado exitosamente.'
        }
      } else {
        console.error('Error al registrar el empleado:', responseData.message);
        alert('Error al registrar el empleado.');
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('Error de red al intentar registrar el empleado.');
    }
  } else {
    alert('Por favor complete todos los campos requeridos.');
  }
};

const cancel = () => {
  router.push('/');
};

const removeEmployee = () => {
  console.log('Empleado eliminado');
};

const backgroundStyle = {
  backgroundImage: `url(${fondoAdmin})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};
</script>

<style scoped>
.menu-container {
  position: relative;
  min-height: 15vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  
}

.content-container {
  margin-top: 100px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  
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
  background-color: black;
  color:white;
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

/* Estilos para los botones seleccionados */
.propietario .v-btn.selected {
  background-color: orange !important;
  color: white !important;
}
</style>
