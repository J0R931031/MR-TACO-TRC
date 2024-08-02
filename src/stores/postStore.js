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
  }),
  actions: {
    getPostById(id) {
      return this.posts.find(post => post.id === id);
    },
    addPost(post) {
      post.id = this.posts.length + 1;
      this.posts.push(post);
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id);
    }
  }
});
