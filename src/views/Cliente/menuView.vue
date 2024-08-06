<template>
<<<<<<< HEAD
   <div class="menu-container">
=======
  <div class="menu-container">
>>>>>>> e967b2484c65247434e9c8b575245d4216a1989f
    <bar-nav class="navbar" />
    <v-row class="menu" align="center" justify="center"></v-row>
    <div style="margin-top: 20px;" class="content-container">
      <v-row justify="center">
        <v-card-title class="title" style="margin-top: 100px;">
          <h1 :style="{ color: 'white', textShadow: '4px 2px 2px #ff4f09' }">PLATILLOS PRINCIPALES</h1>
        </v-card-title>
      </v-row>
      <v-row dense justify="center">
        <v-col cols="4" class="bordered">
          <h1>ORDEN DE TACOS DORADOS (8 PZAS.)</h1>
          <v-img class="logo" :src="tacos" contain></v-img>

          <h2>Tacos de guiso a elección <br> debajo  de una cama de <br> deliciosa ensalada,<br>  cueritos y crema</h2>
          <h1 style="padding-left: 80px; font-size: 25px;">$152.00</h1>
        </v-col>
        <v-col cols="4" class="bordered">
<<<<<<< HEAD
          <h1>PECHUGA A LA PLANCHA</h1>
          <v-img  style="position: absolute; height: 100px; width: 150px; border-radius: 25px; margin-left: 280px; border: solid 3px black;" :src="pollo" contain></v-img>
         
=======
          <h1 style="color:  #ff4f09;">PECHUGA A LA PLANCHA</h1>
          <v-img style="position: absolute; height: 100px; width: 150px; border-radius: 25px; margin-left: 265px; border: solid 3px wheat;" :src="pollo" contain></v-img>
>>>>>>> e967b2484c65247434e9c8b575245d4216a1989f
          <h2>Fajitas de pollo acompañado <br> de verduras en vinagre, <br> ensalada y deliciosa pasta.</h2>
          <h1 style="width: 12px; padding-left: 70px; margin-top: 40px; font-size: 25px;">$152.00</h1>
        </v-col>
        <v-col cols="4" class="bordered">
          <h1>TACOS DE PESCADO (4PZ)</h1>
          <v-img style="position: absolute; height: 100px; width: 150px; border-radius: 25px; margin-left: 295px; border: solid 3px black;" :src="pescado" contain></v-img>
          <h2>Tacos de pescado acompañados<br>de salchicha asada, <br> ensalada y cebolla asada</h2>
          <h1 style="padding-left: 80px; font-size: 25px;">$90.00</h1>
        </v-col>
        <v-col cols="4" class="bordered" style="color:aliceblue;">
          <h1>GRINGA CARNE ASADA</h1>
          <v-img style="position: absolute; height: 100px; width: 150px; border-radius: 25px; margin-left: 295px; border: solid 3px black;" :src="gringa" contain></v-img>
          <h2>Tortilla de harina gigante con <br> carne asada y queso, <br> acompañada de ensalada</h2>
          <h1 style="padding-left: 80px; font-size: 25px;">$150.00</h1>
        </v-col>
        <v-col cols="4" class="bordered">
          <h1>ORDEN DE TOSTADAS(3Pz)</h1>
<<<<<<< HEAD
          <v-img  style="position: absolute; height: 100px; width: 150px; border-radius: 25px; margin-left: 290px; border: solid 3px black;" :src="tostadas" contain></v-img>
         
   
=======
          <v-img style="position: absolute; height: 100px; width: 150px; border-radius: 25px; margin-left: 295px; border: solid 3px black;" :src="tostadas" contain></v-img>
>>>>>>> e967b2484c65247434e9c8b575245d4216a1989f
          <h2>Deliciosas tostadas en una cama<br>de frijoles con el guiso<br>de su eleccion, acompañado de<br> ensalada, cueritos, queso y crema.</h2>
          <h1 style="padding-left: 80px; font-size: 25px;">$90.00</h1>
        </v-col>
        <v-col cols="4" class="bordered">
          <h1>HAMBURGUESA DE LA CASA</h1>
          <v-img style="position: absolute; height: 100px; width: 150px; border-radius: 25px; margin-left: 295px; border: solid 3px black;" :src="hamburgesa" contain></v-img>
          <h2>Jugosa carne premiun, jamón, <br> ensalada y aderezos.</h2>
          <h1 style="padding-left: 80px; font-size: 25px;">$100.00</h1>
        </v-col>
        <v-row justify="center">
          <v-col cols="2" class="guiso">
            <h1>NUESTROS GUISOS 
              <br>A ELECCION</h1>
            <li>Rajas</li>
            <li>Pollo</li>
            <li>Picadillo</li>
            <li>Chicharron</li>
            <li>Frijoles</li>
            <li>Requeson</li>
            <li>Desebrada</li>
            <li>Papa c/queso</li>
          </v-col>
          <v-col cols="2" class="guiso">
            <h1>BEBIDAS</h1>
            <ul><b>Aguas</b></ul>
            <li>Agua del Día </li>
            <li>Agua Mineral </li>
            <li>Agua de Jamaica </li>
            <li>Agua de Horchata</li>
            <ul><b>Refrescos</b></ul>
            <li>Coca Cola</li>
            <li>Fanta </li>
            <li>Manzanita</li>
          </v-col>
          <v-col cols="2" class="guiso">
            <h1>POSTRES</h1>
            <ul><b>Pays</b></ul>
            <li>Limón </li>
            <li>Fresa </li>
            <li>Queso </li>
            <ul> <b>Pastel</b></ul>
            <li>Chocolate</li>
            <li>Zanahoria </li>
            <li>Chorreado</li>
        </v-col>
       </v-row>
      </v-row>
      <v-col cols="2" class="boton" style="height: 100px; width:700px; background-color: #ff4f09;">
          <RouterLink to="/reserva"><button @click="ordenar" style="color: black; margin-left:-5px;" >ORDENAR</button>
          </RouterLink> </v-col>
     
    </div>
    <footer class="footer">
      <div class="social-media">
        <button @click="redirectToInstagram" style="background-color: transparent; border: none; cursor: pointer;">
          <img src="@/assets/instagram.jpeg" alt="Instagram" />
        </button>
        <button @click="redirectToFacebook" style="background-color: transparent; border: none; cursor: pointer;">
          <img src="@/assets/facebook.webp" alt="Facebook" />
        </button>

        <span>@MRTacoTRC</span>
      </div>
      <div class="rights-reserved">
        <span>© Derechos Reservados 2024</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import barNav from '@/components/barNav.vue';
import tacos from '@/assets/tacos.jpg';
import pollo from '@/assets/pollo.jpeg';
import pescado from '@/assets/tacos de pescado.jpeg';
import gringa from '@/assets/gringa carne asada.png';
import tostadas from '@/assets/tostadas.jpg';
import hamburgesa from '@/assets/hamburgesa.jpeg';

const redirectToFacebook = () => {
  window.location.href = 'https://www.facebook.com/Mr.Tacotorreon?mibextid=LQQJ4d';
};

const redirectToInstagram = () => {
  window.location.href = 'https://www.instagram.com/mr.taco.trc?igsh=azQ3ZTYzd3A5YXBm';
};
</script>

<style scoped>
.menu-container {
  position: relative;
<<<<<<< HEAD
  
=======
  background-image: url('@/assets/maderado.jpg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
>>>>>>> e967b2484c65247434e9c8b575245d4216a1989f
}
.content-container {
  margin-top: 70px;
}
.title h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 33px;
  padding-top: 150px;
}
.bordered {
  border: 2px solid #ff4f09;
  border-radius: 15px;
  margin: 40px;
  width: 400px;
  height: 200px;
  background-color: rgb(10, 10, 10);
}
.guiso {
  border: 2px solid #ff4f09;
  border-radius: 15px;
  margin: 80px;
  height: 300px;
  background-color: #010702;
  color: wheat;
}
h1 {
  font-family: monospace;
  font-size: 20px;
  margin: 10px;
  color: #f3e8e8;
}
h2 {
  font-family: monospace;
  font-size: 15px;
  color: #f3e8e8;
  margin: 0%;
}
.boton {
  border: 2px solid #ff4f09;
  border-radius: 15px;
  background-color: #ff4f09;
  font-family: monospace;
  font-size: 50px;
  align-items: center;
  margin-left: 560px;
  margin-bottom: 70px;
}
.logo {
  width: 150px;
  border-radius: 25px;
  margin-left: 300px;
  margin-top: 5px;
  position: absolute;
  border: 2px solid black;
}
<<<<<<< HEAD
  

=======
>>>>>>> e967b2484c65247434e9c8b575245d4216a1989f
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
<<<<<<< HEAD
   /* Asegura que esté al frente */
}

=======
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 20px 20px;
  bottom: 0;
  width: 100%;
}
.social-media img {
  width: 40px;
  margin-right: 10px;
}
.rights-reserved {
  font-family: 'Arial', sans-serif;
}
>>>>>>> e967b2484c65247434e9c8b575245d4216a1989f
</style>
