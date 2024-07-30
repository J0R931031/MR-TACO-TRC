// src/stores/profileStore.js
import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profileImage: '@/assets/RICHI-PELON.jpg',
    name: '',
    email: ''
  }),
  actions: {
    setProfileImage(image) {
      this.profileImage = image;
    },
    setProfileInfo(name, email) {
      this.name = name;
      this.email = email;
    }
  }
});
