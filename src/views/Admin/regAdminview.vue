<template>
  <div :style="backgroundStyle" class="menu-container">
    <BarAdmin></BarAdmin>
    <v-row class="menu" align="center" justify="center">
    </v-row>
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
                <v-row>
                  <v-col cols="12">
                    Nombre
                    <v-text-field label="Nombre" v-model="formData.nombre" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    Apellido Paterno
                    <v-text-field label="Apellido Paterno" v-model="formData.apellidoPaterno" outlined></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    Apellido Materno
                    <v-text-field label="Apellido Materno" v-model="formData.apellidoMaterno" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    Sexo
                    <v-select
                      v-model="formData.sexo"
                      :items="['Masculino', 'Femenino', 'Otro']"
                      label="Sexo"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="6">
                    Teléfono
                    <v-text-field label="Teléfono" v-model="formData.telefono" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    Fecha de Nacimiento
                    <v-text-field
                      label="Fecha de Nacimiento"
                      v-model="formData.fechaNacimiento"
                      outlined
                      type="date"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                      Fecha de Ingreso
                      <v-text-field
                        label="Fecha de Ingreso"
                        v-model="formData.fechaIngreso"
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
                  <v-col cols="6">
                    Contraseña
                    <v-text-field 
                      v-model="formData.password"
                      :type="showPassword ? 'text' : 'password'"
                      label="Contraseña"
                      outlined
                      @click:append="togglePasswordVisibility"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    Confirmar Contraseña
                    <v-text-field 
                    v-model="formData.confirmpassword"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-on'"
                    :type="showPassword ? 'text' : 'password'"
                    label="Contraseña"
                    outlined
                    @click:append="togglePasswordVisibility"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="8">
                    Direccion
                    <v-text-field label="Calle, Colonia, Número Exterior" v-model="formData.Direccion" outlined></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    Codigo Postal
                    <v-text-field label="C.P" v-model="formData.CP" outlined></v-text-field>
                  </v-col>
                  <v-col cols="5">
                      Teléfono 1
                      <v-text-field label="Teléfono 1" v-model="formData.telefono1" outlined></v-text-field>
                    </v-col>
                    <v-col cols="5">
                      Confirmar Teléfono
                      <v-text-field label="Teléfono" v-model="formData.confirmartelefono" outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-sheet height="200px" width="200px" class="d-flex align-center justify-center" outlined>
                        <v-img
                          v-if="profileImage"
                          :src="profileImage"
                          width="100%"
                          height="100%"
                          contain
                        ></v-img>
                        <v-icon v-else>mdi-camera</v-icon>
                      </v-sheet>
                      <v-btn color="orange" class="mt-4" @click="selectImage">Ingresar Imagen</v-btn>
                      <input type="file" ref="fileInput" @change="onFileChange" class="d-none" accept="image/*">
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-text-field label="ID de Empleado" v-model="formData.empleadoid" outlined></v-text-field>
                    </v-col>
                    <v-col cols="6" md="6">
                      <v-select
                        v-model="formData.rol"
                        :items="['Chef', 'Mesero' ]"
                        label="Rol"
                        outlined
                      ></v-select>
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
import BarAdmin from '@/components/barAdmin.vue';
import fondoAdmin from '@/assets/fondoadmin.jpg'; // Importa la imagen aquí

const router = useRouter();

const showPassword = ref(false);
const formData = ref({
  nombre: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  sexo: '',
  telefono1: '',
  telefono2: '',
  fechaNacimiento: '',
  fechaIngreso: '',
  correo: '',
  password: '',
  confirmpassword: '',
  confirmartelefono:'',
  empleadoid: '',
  rol: '' // Agregado el rol
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
      throw new Error('Ha ocurrido un error en el sistema.');
    }

    const data = await response.json();
    console.log(data);
    alert('¡Usuario registrado con éxito!');
  } catch (error) {
    console.error('¡Hubo un error!', error);
    alert('No se pudo registrar al usuario.');
  }
};

const cancel = () => {
  router.push('/'); // Redirige a la página de inicio principal
};
const profileImage = ref(null);
const fileInput = ref(null);

const selectImage = () => {
  fileInput.value.click();
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    profileImage.value = URL.createObjectURL(file);
  }
};

const removeEmployee = () => {
  profileImage.value = null;
};

const backgroundStyle = {
  backgroundImage: `url(${fondoAdmin})`, // Usa la imagen importada aquí
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh'
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
</style>
