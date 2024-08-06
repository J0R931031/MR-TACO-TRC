// src/stores/profileStore.js
import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profileImage: '../assets/RICHI-PELON.jpg',
    name: 'Admin',
    email: 'admin@gmail.com'
  }),
  actions: {
    setProfileImage(profileImage) {
      this.profileImage = profileImage;
    },
    setProfileInfo(name, email) {
      this.name = name;
      this.email = email;
    }
  }
});
