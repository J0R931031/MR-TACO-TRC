<template>
  <div class="menu-container">
    <BarNav />
    <v-row class="menu" align="center" justify="center"></v-row>
    <div style="margin-top: 20px;" class="content-container">
      <v-row justify="center">
        <v-card-title class="title">
          <h1>PLATILLOS PRINCIPALES</h1>
        </v-card-title>
      </v-row>
      <v-row justify="center">
        <v-col cols="4" class="bordered">
          <h1>ORDEN DE TACOS DORADOS <br>(8 PZAS.)</h1>
          <br>
          <h2>Tacos de guiso a elección debajo <br> de una cama de deliciosa ensalada, <br> cueritos y crema</h2>
          <h1 style="padding-left: 80px; font-size: 25px;">$152.00</h1>
        </v-col>
        <v-col cols="4" class="bordered">
          <h1>POLLO A LA PLANCHA</h1>
          <br>
          <h2>Fajitas de pollo acompañado <br> de verduras en vinagre, <br> ensalada y deliciosa pasta.</h2>
          <h1 style="width: 12px; padding-left: 70px; margin-top: 20px; font-size: 25px;">$152.00</h1>
        </v-col>
        <v-col cols="4" class="bordered">
          <h1>ORDEN DE TACOS DORADOS <br>(8 PZAS.)</h1>
          <br>
          <h2>Tacos de guiso a elección debajo <br> de una cama de deliciosa ensalada, <br> cueritos y crema</h2>
          <h1 style="padding-left: 80px; font-size: 25px;">$152.00</h1>
        </v-col><v-col cols="4" class="bordered">
          <h1>ORDEN DE TACOS DORADOS <br>(8 PZAS.)</h1>
          <br>
          <h2>Tacos de guiso a elección debajo <br> de una cama de deliciosa ensalada, <br> cueritos y crema</h2>
          <h1 style="padding-left: 80px; font-size: 25px;">$152.00</h1>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import BarNav from '@/components/barNav.vue';
</script>

<style scoped>
.menu-container {
  position: relative;
}
.content-container {
  margin-top: 70px;
}
.title h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 33px;
  padding-top: 50px;
}
.bordered {
  border: 2px solid #ff4f09;
  border-radius: 15px;
  margin: 70px;
  width: 500px;
  height: 200px;
}
h1 {
  font-family: monospace;
  font-size: 20px;
}
h2 {
  font-family: monospace;
  font-size: 15px;
  color: #808080;
}
</style>
