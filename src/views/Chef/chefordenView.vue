<template>
  <div class="full-screen-background">
    <chefBar></chefBar>

    <v-container fluid fill-height>
      <v-row justify="center">
        <v-col cols="8" style="margin-top: 50px;">
          <!-- Tabla de órdenes -->
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
                  <button @click="showDetails(item.norden)" class="action-button">Ver</button>
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
                <th class="text-left">Estatus</th>
                <th class="text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="detail in selectedOrderDetails" :key="detail.id">
                <td>{{ detail.nplatillos }}</td>
                <td>{{ detail.cantidad }}</td>
                <td>{{ detail.notas }}</td>
                <td>
                  <button @click="viewSpecifications(detail)" class="action-button">Ver Especificaciones</button>
                </td>
                <td>
                  {{ detail.estatus }}
                </td>
                <td>
                  <button @click="changeStatus(detail)" class="action-button">Cambiar Estatus</button>
                </td>
              </tr>
            </tbody>
          </v-table>

        </v-col>
      </v-row>

      <!-- Diálogo para ver especificaciones -->
      <v-dialog v-model="specificationsDialog" max-width="500">
        <v-card>
          <v-card-title class="headline">Especificaciones</v-card-title>
          <v-card-text>
            <p><strong>Nombre Platillo:</strong> {{ selectedSpecification.nplatillos }}</p>
            <p><strong>Cantidad:</strong> {{ selectedSpecification.cantidad }}</p>
            <p><strong>Notas:</strong> {{ selectedSpecification.notas }}</p>
            <p><strong>Especificaciones:</strong> {{ selectedSpecification.especificaciones }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="closeSpecificationsDialog">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
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
    estadord: 'En Proceso',
  },
  {
    norden: 1002,
    nplatillos: "Limonada",
    cliente: 'Ricky',
    fecha: '01/01/24',
    hora: '02:00',
    estadord: 'Pendiente',
  },
  {
    norden: 1003,
    nplatillos: "Carne Asada",
    cliente: 'Maria',
    fecha: '01/01/24',
    hora: '04:00',
    estadord: 'Completado',
  },
]);

// Datos de los detalles del pedido
const orderDetails = ref([
  { id: 1, norden: 1001, nplatillos: "Orden de Tacos", cantidad: 3, notas: 'sin notas', especificaciones: 'sin Tomate', estatus: 'En Progreso' },
  { id: 2, norden: 1002, nplatillos: "Limonada", cantidad: 2, notas: 'sin notas', especificaciones: 'null', estatus: 'Pendiente' },
  { id: 3, norden: 1002, nplatillos: "Carne Asada", cantidad: 3, notas: 'sin notas', especificaciones: 'sin Cebolla', estatus: 'Completado' },
]);

// Estados de los componentes
const selectedOrder = ref(null);
const selectedSpecification = ref(null);
const specificationsDialog = ref(false);

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
function viewSpecifications(detail) {
  selectedSpecification.value = detail;
  specificationsDialog.value = true;
}

// Función para cerrar el diálogo de especificaciones
function closeSpecificationsDialog() {
  specificationsDialog.value = false;
}

// Función para cambiar el estatus de un detalle y reflejarlo en la primera tabla
function changeStatus(detail) {
  const newStatus = prompt("Ingrese el nuevo estatus para el platillo:", detail.estatus);
  if (newStatus) {
    // Actualiza el estatus en la tabla de detalles
    detail.estatus = newStatus;

    // Actualiza el estatus en la tabla de órdenes
    const order = desserts.value.find(order => order.norden === detail.norden);
    if (order) {
      order.estadord = newStatus;
    }
  }
}

// Función para obtener la clase de estado
function getStatusClass(status) {
  if (status === 'Concluido') return 'status-concluido';
  if (status === 'Pendiente') return 'status-pendiente';
  if (status === 'Completado') return 'status-completado';
  if (status === 'En Proceso') return 'status-proceso';
  return '';
}
</script>

<style scoped>
.full-screen-background {
  min-height: 100vh;
  background: linear-gradient(45deg, orange, black);
  padding: 20px;
  box-sizing: border-box;
}

.action-button {
  border: 2px salmon solid;
  background-color: #ff4f09;
  width: 120px;
  border-radius: 15px;
}

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

