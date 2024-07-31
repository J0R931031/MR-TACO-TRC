<template>
    <BarAdmin />
  
    <v-container class="edit-posts">
      <v-row>
        <v-col cols="12">
          <h1>Editar Publicación</h1>
        </v-col>
      </v-row>
      <v-form @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Título"
              v-model="post.title"
              outlined
              required
            ></v-text-field>
            <v-textarea
              label="Descripción"
              v-model="post.description"
              outlined
              required
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="6">
            <div class="image-upload">
              <v-avatar size="200" class="mb-3">
                <v-img :src="previewImage || post.image" contain></v-img>
              </v-avatar>
              <v-btn color="primary" @click="selectImage">
                Adjuntar Imagen
              </v-btn>
              <input
                type="file"
                ref="fileInput"
                accept="image/*"
                @change="onFileChange"
                style="display: none;"
              />
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn type="submit" color="primary" class="mt-3">Guardar Cambios</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import BarAdmin from '@/components/barAdmin.vue';
  import { ref, reactive, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { usePostStore } from '@/stores/postStore';
  
  const route = useRoute();
  const router = useRouter();
  const postStore = usePostStore();
  const post = reactive({
    id: null,
    title: '',
    description: '',
    image: ''
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
    post.image = previewImage.value;
    postStore.updatePost(post);
    router.push('/posts');
  };
  
  onMounted(() => {
    if (route.params.id) {
      const postId = route.params.id;
      const existingPost = postStore.getPostById(postId);
      Object.assign(post, existingPost);
    }
  });
  </script>
  
  <style scoped>
  .edit-posts {
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
  
  .image-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  