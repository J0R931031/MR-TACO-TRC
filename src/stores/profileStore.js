import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profileStore', {
  state: () => ({
    profileImage: '../assets/RICHI-PELON.jpg', // Establece un valor por defecto o vacío
    name: 'Admin',
    email: 'Admin@gmail.com'
  }),
  actions: {
    setProfileImage(image) {
      this.profileImage = image;
    },
    setProfileInfo(name, email) {
      this.name = name;
      this.email = email;
    }
  },
  persist: true
});
