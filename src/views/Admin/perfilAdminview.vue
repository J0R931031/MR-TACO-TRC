<template>
  <BarAdmin />

  <v-container class="edit-profile">
    <v-row>
      <v-col cols="12">
        <h1>Editar Perfil</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <form @submit.prevent="submitForm">
          <v-avatar size="120" class="mb-3 mx-auto">
            <v-img :src="previewImage || profileImage" contain></v-img>
          </v-avatar>
          <v-btn
            color="primary"
            class="mb-3"
            prepend-icon="mdi-camera"
            @click="selectImage"
          >
            Cambiar foto de perfil
          </v-btn>
          <input
            type="file"
            ref="fileInput"
            accept="image/*"
            @change="onFileChange"
            style="display: none;"
          />
          <v-text-field
            label="Nombre"
            v-model="profile.name"
            required
            prepend-icon="mdi-account"
          ></v-text-field>
          <v-text-field
            label="Correo Electrónico"
            v-model="profile.email"
            required
            prepend-icon="mdi-email"
          ></v-text-field>
          <v-btn type="submit" color="primary" class="mt-3">Guardar Cambios</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BarAdmin from '@/components/barAdmin.vue';
import { useProfileStore } from '@/stores/profileStore';
import { ref } from 'vue';

const profileStore = useProfileStore();
const { setProfileImage, setProfileInfo } = profileStore;
const profile = ref({
  name: '',
  email: '',
});
const previewImage = ref(null);
const fileInput = ref(null);

const selectImage = () => {
  fileInput.value.click();
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  previewImage.value = URL.createObjectURL(file);
};

const submitForm = () => {
  if (previewImage.value) {
    setProfileImage(previewImage.value);
  }
  setProfileInfo(profile.value.name, profile.value.email);
};
</script>

<style scoped>
.edit-profile {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.v-avatar {
  margin-bottom: 20px;
}

.v-btn {
  width: 100%;
}

.v-text-field {
  width: 100%;
}

.mt-3 {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .edit-profile {
    margin: 20px auto;
    padding: 10px;
  }

  h1 {
    font-size: 24px;
  }

  .v-avatar {
    width: 100px;
    height: 100px;
  }

  .v-btn {
    width: 100%;
  }

  .v-text-field {
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .edit-profile {
    margin: 10px auto;
    padding: 5px;
  }

  h1 {
    font-size: 20px;
  }

  .v-avatar {
    width: 80px;
    height: 80px;
  }

  .v-btn {
    font-size: 14px;
  }

  .v-text-field {
    font-size: 12px;
  }
}
</style>
