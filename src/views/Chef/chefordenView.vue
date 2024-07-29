
<template>
     <Chefbar></Chefbar>
  <v-container>
    
     <v-row justify="center">
         <v-col><button class="eliminar">Eliminar Orden</button></v-col>
         <v-col><button class="eliminar">Añadir Orden</button></v-col>
     </v-row>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="order"
      class="elevation-1"
    style=" border: #ff4f09 2px solid;">
    
      <template v-slot:top>              
        <v-toolbar flat style=" background-color: #ff4f09; opacity: 90%;">
         <h2>Tabla de Pedidos</h2>
        </v-toolbar>
      </template>

      <template v-slot:item.detail="{ item }">
        <td>{{ item.detail }}</td>
      </template>
      <template v-slot:item.order="{ item }">
        <td>{{ item.order }}</td>
      </template>
      <template v-slot:item.client="{ item }">
        <td>{{ item.client }}</td>
      </template>
      <template v-slot:item.date="{ item }">
        <td>{{ item.date }}</td>
      </template>
      <template v-slot:item.time="{ item }">
        <td>{{ item.time }}</td>
      </template>
      <template v-slot:item.status="{ item }">
        <td>{{ item.status }}</td>
      </template>
    </v-data-table>
<v-row justify="center">
     <v-table style="width: 800px; height: 600%; margin-top: 50px; border: #ff4f09 2px solid;" density="compact">
    <thead>
      <tr>
        <th class="text-left">
        <h2> N° Orden   001</h2>
        </th>
        <th class="text-left">
        <h2>Especificaciones</h2>      
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
</v-row>
   
  </v-container>

 
</template>

<script setup>
import Chefbar from '@/components/chefBar.vue';
import { ref } from 'vue';

const headers = [
  { text: 'Detalle', value: 'detail' },
  { text: 'Orden', value: 'order' },
  { text: 'Cliente', value: 'client' },
  { text: 'Fecha', value: 'date' },
  { text: 'Hora', value: 'time' },
  { text: 'Estatus', value: 'status' },
];

const items = ref([
  { detail: 'Pizza Margarita', order: '001', client: 'Juan Pérez', date: '2024-07-25', time: '19:00', status: 'Enviado' },
  { detail: 'Burgers Clásicas', order: '002', client: 'Laura Gómez', date: '2024-07-25', time: '19:15', status: 'En preparación' },
  { detail: 'Tacos Dorados', order: '003', client: 'Carlos Ruiz', date: '2024-07-26', time: '12:00', status: 'Entregado' },
]);
const desserts = ref([
    {
      name: 'Platillo',
      calories: 159,
    },
    {
      name: 'Postre',
      calories: 237,
    },
    {
      name: 'Bebidas',
      calories: 262
    }]);
</script>
 
<style scoped>
.v-data-table thead th {
  color: black;
  font-weight: bold;
}

.v-data-table .v-data-table-header {
  background-color: #f4f4f4;
}
.eliminar{
 border: 2px solid #ff4f09;
  border-radius: 15px;
  height: 90px;
  width:300px;
  background-color: #ff4f09;
  font-family: monospace;
  font-size: 30px;
  margin-left: 550px;    
  margin: 100px;
}
</style>
