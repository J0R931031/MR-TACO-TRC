
<template>
  <chefBar></chefBar>
  <v-table theme="dark" height="350px" width="1500px" style="width: 1000px; margin-left: 250px;">
    <thead style="background-color: #ff4f09;">
      <tr>
        <th class="text-left">Detalles</th>
        <th class="text-left">Orden</th>
        <th class="text-left">Cliente</th>
        <th class="text-left">Fecha</th>
        <th class="text-left">Hora</th>
        <th class="text-left">Estado de Orden</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.norden">
        <td>
          <button style="border: 2px salmon solid; background-color: #ff4f09; width: 70px; border-radius: 15px;">Ver</button>
        </td>
        <td>{{ item.norden }}</td>
        <td>{{ item.cliente }}</td>
        <td>{{ item.fecha }}</td>
        <td>{{ item.hora }}</td>
        <td :class="getStatusClass(item.estadord)">
          {{ item.estadord }}
          <v-btn
            style="border: 2px salmon solid; background-color: #ff4f09; width: 150px; border-radius: 15px; margin-left: 20px; color: white;"
            @click="openDialog(item)"
          >
            Cambiar estatus
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>

  <!-- Dialogo para seleccionar nuevo estatus -->
  <v-dialog v-model="dialog" max-width="290">
    <v-card>
      <v-card-title class="headline">Seleccionar Estatus</v-card-title>
      <v-card-text>
        <v-select
          v-model="selectedStatus"
          :items="statusOptions"
          label="Estatus"
        ></v-select>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="updateStatus">Actualizar</v-btn>
        <v-btn text @click="closeDialog">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import chefBar from '@/components/chefBar.vue';
import { ref } from 'vue';

const desserts = ref([
  {
    norden: 1001,
    cliente: 'Mariana',
    fecha: '01/01/24',
    hora: '03:00',
    estadord: 'Proceso',
  },
  {
    norden: 1002,
    cliente: 'Ricky',
    fecha: '01/01/24',
    hora: '02:00',
    estadord: 'Concluido',
  },
  {
    norden: 1003,
    cliente: 'Maria',
    fecha: '01/01/24',
    hora: '04:00',
    estadord: 'Pendiente',
  },
]);

const dialog = ref(false);
const selectedStatus = ref('');
const currentItem = ref(null);

const statusOptions = ['Proceso', 'Pendiente', 'Completado', 'Concluido'];

function openDialog(item) {
  currentItem.value = item;
  selectedStatus.value = item.estadord;
  dialog.value = true;
}

function closeDialog() {
  dialog.value = false;
}

function updateStatus() {
  if (currentItem.value) {
    currentItem.value.estadord = selectedStatus.value;
    closeDialog();
  }
}

function getStatusClass(status) {
  if (status === 'Concluido') return 'status-concluido';
  if (status === 'Pendiente') return 'status-pendiente';
  if (status === 'Completado') return 'status-completado';
  if (status === 'Proceso') return 'status-proceso';
  return '';
}
</script>

<style scoped>
.status-concluido {
  color: rgb(6, 163, 242);
}
.status-completado {
  color: rgb(6, 242, 6);
}

.status-pendiente {
  color: red;
}

.status-proceso {
  color: orange;
}
</style>
