<template>
    <div class="menu-container">
      <bar-nav class="navbar" />
      <v-row class="menu" align="center" justify="center"></v-row>
      <div class="content-container">
        <v-row justify="center">
          <v-card-title class="title">
            <h1 class="platillos-title">PLATILLOS PRINCIPALES</h1>
          </v-card-title>
        </v-row>
        <v-row dense justify="center">
          <v-col cols="12" md="4" class="bordered">
            <h1>ORDEN DE TACOS DORADOS (8 PZAS.)</h1>
            <v-img class="logo" :src="tacos" contain></v-img>
  
            <h2>Tacos de guiso a elección <br> debajo  de una cama de <br> deliciosa ensalada,<br>  cueritos y crema</h2>
            <h1 class="price">$152.00</h1>
          </v-col>
          <v-col cols="12" md="4" class="bordered">
            <h1 class="highlight">PECHUGA A LA PLANCHA</h1>
            <v-img class="dish-img" :src="pollo" contain></v-img>
            <h2>Fajitas de pollo acompañado <br> de verduras en vinagre, <br> ensalada y deliciosa pasta.</h2>
            <h1 class="price">$152.00</h1>
          </v-col>
          <v-col cols="12" md="4" class="bordered">
            <h1>TACOS DE PESCADO (4PZ)</h1>
            <v-img class="dish-img" :src="pescado" contain></v-img>
            <h2>Tacos de pescado acompañados<br>de salchicha asada, <br> ensalada y cebolla asada</h2>
            <h1 class="price">$90.00</h1>
          </v-col>
          <v-col cols="12" md="4" class="bordered">
            <h1>GRINGA CARNE ASADA</h1>
            <v-img class="dish-img" :src="gringa" contain></v-img>
            <h2>Tortilla de harina gigante con <br> carne asada y queso, <br> acompañada de ensalada</h2>
            <h1 class="price">$150.00</h1>
          </v-col>
          <v-col cols="12" md="4" class="bordered">
            <h1>ORDEN DE TOSTADAS(3Pz)</h1>
            <v-img class="dish-img" :src="tostadas" contain></v-img>
            <h2>Deliciosas tostadas en una cama<br>de frijoles con el guiso<br>de su eleccion, acompañado de<br> ensalada, cueritos, queso y crema.</h2>
            <h1 class="price">$90.00</h1>
          </v-col>
          <v-col cols="12" md="4" class="bordered">
            <h1>HAMBURGUESA DE LA CASA</h1>
            <v-img class="dish-img" :src="hamburgesa" contain></v-img>
            <h2>Jugosa carne premiun, jamón, <br> ensalada y aderezos.</h2>
            <h1 class="price">$100.00</h1>
          </v-col>
          <v-col cols="12" md="4" class="bordered">
            <h1>HAMBURGUESA C/PAPAS</h1>
            <v-img class="dish-img" :src="hamburgesapapas" contain></v-img>
            <h2>Deliciosas hamburguesas<br>con papas fritas</h2>
            <h1 class="price">$90.00</h1>
          </v-col>
          <v-col cols="12" md="4" class="bordered">
            <h1>BURRITOS C/CARNE ASADA</h1>
            <v-img class="dish-img" :src="burritos" contain></v-img>
            <h2>Burritos con carne asada<br> y verdura hecha en casa.</h2>
            <h1 class="price">$100.00</h1>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="3" class="guiso">
            <h1>NUESTROS GUISOS <br>A ELECCION</h1>
            <li>Rajas</li>
            <li>Pollo</li>
            <li>Picadillo</li>
            <li>Chicharron</li>
            <li>Frijoles</li>
            <li>Requeson</li>
            <li>Desebrada</li>
            <li>Papa c/queso</li>
          </v-col>
          <v-col cols="12" md="3" class="guiso">
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
          <v-col cols="12" md="3" class="guiso">
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
        <v-row justify="center">
          <v-col cols="auto" class="boton">
           
          </v-col>
        </v-row>
      </div>
      <footer class="footer">
        <div class="social-media">
          <button @click="redirectToInstagram">
            <img src="@/assets/instagram.jpeg" alt="Instagram" />
          </button>
          <button @click="redirectToFacebook">
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
  import barNav from '@/components/meserosBar.vue';
  import tacos from '@/assets/tacos.jpg';
  import pollo from '@/assets/pollo.jpeg';
  import pescado from '@/assets/tacos de pescado.jpeg';
  import gringa from '@/assets/gringa carne asada.jpg';
  import tostadas from '@/assets/tostadas.jpg';
  import hamburgesa from '@/assets/hamburgesa.jpg';
  import hamburgesapapas from '@/assets/hamburgesapapas.jpg';
  import burritos from '@/assets/burritos.jpg';
  
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
  }
  .content-container {
    background-image: url('@/assets/maderado.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  
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
    padding: 20px;
    background-color: rgb(10, 10, 10);
    color: #f3e8e8;
    text-align: center;
  }
  .guiso {
    border: 2px solid #ff4f09;
    border-radius: 15px;
    margin: 20px;
    padding: 20px;
    background-color: #010702;
    color: wheat;
    text-align: center;
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
 
  .logo {
    width: 70%;
    border-radius: 25px;
    margin: 20px auto;
  }
  .dish-img {
    width: 70%;
    border-radius: 25px;
    margin: 20px auto;
    border: 2px solid black;
  }
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
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
  .platillos-title {
    color: white;
    text-shadow: 4px 2px 2px #ff4f09;
  }
  @media (max-width: 600px) {
    .bordered, .guiso {
      margin: 20px;
      padding: 10px;
    }
    .boton {
      font-size: 30px;
    }
  }
  </style>