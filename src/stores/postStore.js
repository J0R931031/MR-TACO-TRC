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
      {
        id: 2,
        title: 'Día del Padre ¡OTRO PEDO!',
        content: 'Este día del padre ven a probar nuestras nuevas hamburguesas que te van a estar ¡Otro Pedo! y nuestras exclusivas promociones.',
        image: '/src/assets/tacos.jpg'
      },
      {
        id: 3,
        title: '¡Nueva Hamburguesa Monster!',
        content: 'Con la llegada de nuestra nueva hamburguesa monster y sus dos de nuestras deliciosas carnes acompañadas de una salchicha asada y queso asadero lechuga, tomate, chiles, cebolla morada, catsup, mayonesa y mostaza.',
        image: '/src/assets/hamburgesa.jpeg'
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
    updatePost(updatedPost) {
      const index = this.posts.findIndex(post => post.id === updatedPost.id);
      if (index !== -1) {
        this.posts[index] = { ...updatedPost };
      }
    }
  }
});
