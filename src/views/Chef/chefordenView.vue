<template>
  <chefBar></chefBar>
  <v-container fluid fill-height>
    <v-row justify="center">
      <v-col cols="7" style="margin-top: 50px;">
        <v-table theme="dark" height="400px" width="1200px" elevation="8">
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
                <button @click="showDetails(item.norden)" style="border: 2px salmon solid; background-color: #ff4f09; width: 70px; border-radius: 15px;">Ver</button>
              </td>
              <td>{{ item.norden }}</td>
              <td>{{ item.cliente }}</td>
              <td>{{ item.fecha }}</td>
              <td>{{ item.hora }}</td>
              <td :class="getStatusClass(item.estadord)">
                {{ item.estadord }}
              </td>
            </tr>
          </tbody>
        </v-table>

        <!-- Tabla de detalles para la orden seleccionada -->
        <v-table v-if="selectedOrderDetails.length" theme="dark" height="300px" width="1200px" style="margin-top: 20px;">
          <thead style="background-color: #ff4f09;">
            <tr>
              <th class="text-left">Nombre Platillo</th>
              <th class="text-left">Cantidad</th>
              <th class="text-left">Notas</th>
              <th class="text-left">Especificaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="detail in selectedOrderDetails" :key="detail.id">
              <td>{{ detail.nplatillos }}</td>
              <td>{{ detail.cantidad }}</td>
              <td>{{ detail.notas }}</td>
              <td>
                <button @click="viewDetails(detail)" style="border: 2px salmon solid; background-color: #ff4f09; width: 70px; border-radius: 15px;">Ver</button>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>

    <!-- Dialogo para ver especificaciones -->
    <v-dialog v-model="detailDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Detalles</v-card-title>
        <v-card-text>
          <p><strong>Nombre Platillo:</strong> {{ selectedDetail.nplatillos }}</p>
          <p><strong>Cantidad:</strong> {{ selectedDetail.cantidad }}</p>
          <p><strong>Notas:</strong> {{ selectedDetail.notas }}</p>
          <p><strong>Especificaciones:</strong> {{ selectedDetail.especificaciones }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeDetailDialog">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import chefBar from '@/components/chefBar.vue';
import { ref, computed } from 'vue';


// Datos de los pedidos
const desserts = ref([
  {
    norden: 1001,
    nplatillos: "Orden de Tacos",
    cliente: 'Mariana',
    fecha: '01/01/24',
    hora: '03:00',
    estadord: 'Proceso',
  },
  {
    norden: 1002,
    nplatillos: "Limonada",
    cliente: 'Ricky',
    fecha: '01/01/24',
    hora: '02:00',
    estadord: 'Concluido',
  },
  {
    norden: 1003,
    nplatillos: "Carne Asada",
    cliente: 'Maria',
    fecha: '01/01/24',
    hora: '04:00',
    estadord: 'Pendiente',
  },
]);

// Datos de los detalles del pedido
const orderDetails = ref([
  { id: 1, norden: 1001 ,nplatillos: "Orden de Tacos", cantidad: 3, notas: 'sin notas',especificaciones: 'sin Tomate' },
  { id: 2, norden: 1002 ,nplatillos: "Limonada", cantidad: 2, notas: 'sin notas',especificaciones: 'null'},
  { id: 3, norden: 1002 ,nplatillos: "Carne Asada", cantidad: 3, notas: 'sin notas',especificaciones: 'sin Cebolla' },
]);

// Estados de los componentes
const selectedOrder = ref(null);
const selectedDetail = ref(null);
const detailDialog = ref(false);

// Filtra los detalles según la orden seleccionada
const selectedOrderDetails = computed(() => {
  if (selectedOrder.value) {
    return orderDetails.value.filter(detail => detail.norden === selectedOrder.value);
  }
  return [];
});

// Función para mostrar detalles de la orden
function showDetails(norden) {
  selectedOrder.value = norden;
}

// Función para ver especificaciones de un detalle
function viewDetails(detail) {
  selectedDetail.value = detail;
  detailDialog.value = true;
}

// Función para cerrar el diálogo de detalles
function closeDetailDialog() {
  detailDialog.value = false;
}

// Función para obtener la clase de estado
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
}s

.status-pendiente {
  color: red;
}

.status-proceso {
  color: orange;
}
</style>
