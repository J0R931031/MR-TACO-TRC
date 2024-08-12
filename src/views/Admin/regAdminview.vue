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
                      :items="['M', 'F']"
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
                    Direccción
                    <v-text-field label=" Dirección" v-model="Direccion" outlined></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    CURP
                    <v-text-field label=" CURP" v-model="CURP" outlined></v-text-field>
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
                      <div class="propietario">
                        <label for="Rol">Rol:  </label>
                        <select id="Rol" v-model="Rol">
                          <option class="opcion" value=""></option>
                          <option v-for="option in Roles" :key="option.ID_ROL" :value="option.ID_ROL">
                            {{ option.NombreRol }}
                          </option>
                        </select>
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
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BarAdmin from '@/components/barAdmin.vue';
import fondoAdmin from '@/assets/fondoadmin.jpg';

const router = useRouter();

const showPassword = ref(false);

const valid = ref(false);
const  Nombre = ref('')
const  ApellidoPaterno= ref('')
const  ApellidoMaterno= ref('')
const  Sexo= ref('')
const  Telefono= ref('')
const  FechaNacimiento= ref('')
const  Correo= ref('')
const  Contrasena= ref('')
const  Rol= ref('')
const  Roles = ref('')
const  Direccion =ref('')
const  CURP = ref('')
const  RFC = ref('')


const fetchroles = async () => {
  try {
    const response = await fetch('http://mrtaco.com/roles');
    if (response.ok) {
      const json = await response.json();
      Roles.value = json.data; 
      console.log('Propietarios obtenidos exitosamente', Roles.value);
    } else {
      console.error('Error al obtener la lista de propietarios');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const submit = async () => {
  if (valid.value) {
    const data = {
      Nombre: Nombre.value,
      ApellidoMaterno: ApellidoMaterno.value,
      ApellidoPaterno: ApellidoPaterno.value,
      Sexo: Sexo.value,
      Telefono: Telefono.value,
      FechaNacimiento: FechaNacimiento.value,
      Correo: Correo.value,
      Contrasena: Contrasena.value,
      Rol: Rol.value,
      Direccion:Direccion.value,
      CURP:CURP.value,
      RFC:RFC.value
    };

    try {
      const response = await fetch('http://mrtaco.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseText = await response.text(); // Obtener la respuesta como texto
      console.log('Respuesta del servidor:', responseText);

      try {
        const responseData = JSON.parse(responseText); // Intentar analizar como JSON
        if (response.ok) {
          console.log('Empleado registrado exitosamente', responseData);
        } else {
          console.error('Error al registrar el vehículo:', responseData);
        }
      } catch (error) {
        console.error('Error al analizar la respuesta como JSON:', error);
      }
    } catch (error) {
      console.error('Error de red:', error)}
    }
};

const cancel = () => {
  router.push('/');
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
  backgroundImage: `url(${fondoAdmin})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh'
};

onMounted(() =>{
  fetchroles();
})
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
