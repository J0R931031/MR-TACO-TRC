<template>
  <div class="edit-profile">
    <h1>Editar Perfil</h1>
    <form @submit.prevent="submitForm">
      <v-avatar size="120" class="mb-3">
        <v-img :src="previewImage || profileImage" contain></v-img>
      </v-avatar>
      <v-file-input
        label="Cambiar foto de perfil"
        accept="image/*"
        @change="onFileChange"
        prepend-icon="mdi-camera"
      ></v-file-input>
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
  </div>
</template>

<script>
import { useProfileStore } from '@/stores/profileStore';
import { ref } from 'vue';

export default {
  setup() {
    const profileStore = useProfileStore();
    const { profileImage, setProfileImage, setProfileInfo } = profileStore;
    const profile = ref({
      name: '',
      email: '',
      // Otras propiedades de perfil
    });
    const previewImage = ref(null);

    const onFileChange = (e) => {
      const file = e.target.files[0];
      previewImage.value = URL.createObjectURL(file);
    };

    const submitForm = () => {
      // Lógica para enviar el formulario y actualizar el perfil
      console.log("Formulario enviado:", profile.value);
      if (previewImage.value) {
        console.log("Nueva foto de perfil:", previewImage.value);
        setProfileImage(previewImage.value);
      }
      setProfileInfo(profile.value.name, profile.value.email);
      // Aquí iría la lógica para actualizar el perfil en el backend
    };

    return {
      profile,
      previewImage,
      onFileChange,
      submitForm,
      profileImage
    };
  }
};
</script>

<style scoped>
.edit-profile {
  max-width: 500px;
  margin: 0 auto;
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

.v-file-input,
.v-text-field {
  width: 100%;
}

.mt-3 {
  margin-top: 1rem;
}
</style>
