import { defineStore } from 'pinia';

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [
      {
        id: 1,
        title: 'Nueva Sucursal',
        content: '¡Ya abrimos nuestra nueva sucursal Satélite! Ven a sorprenderte a: Circuito Circunvalación Poniente #146, Col. Zona Azul, Satélite Estado de México.',
        image: '/src/assets/tacos.jpg'
      },
    ],
    previewImage: null,  // Nueva propiedad para la imagen de vista previa
  }),
  actions: {
    getPostById(id) {
      return this.posts.find(post => post.id === id);
    },
    addPost(post) {
      post.id = this.posts.length + 1;
      this.posts.push(post);
    },
    updatePost(updatedPost) {
      const index = this.posts.findIndex(post => post.id === updatedPost.id);
      if (index !== -1) {
        this.posts[index] = { ...updatedPost };
      }
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id);
    },
    setPreviewImage(image) {
      this.previewImage = image;
    },
    getPreviewImage() {
      return this.previewImage;
    },
  },
  persist: true,  // Persistencia habilitada
});
