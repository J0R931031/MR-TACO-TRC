// src/stores/profileStore.js
import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profileImage: '@/assets/RICHI-PELON.jpg'
  }),
  actions: {
    setProfileImage(image) {
      this.profileImage = image;
    }
  }
});
