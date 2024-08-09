<template>
    <div class="details-overlay">
      <div class="details-content">
        <h2>Historial de Órdenes</h2>
        <div class="order-history-table-container">
          <div class="order-history-table">
            <div class="order-status-header">
              <span>Detalles</span>
              <span>Orden</span>
              <span>Cliente</span>
              <span>Fecha</span>
              <span>Hora</span>
              <span>Estado de Orden</span>
            </div>
            <div v-for="(history, index) in orderHistory" :key="index" class="order-status-row">
              <span class="center-content">
                <v-btn @click="viewOrderDetails(index)" class="action-button historial-view-button">Ver</v-btn>
              </span>
              <span class="center-content">{{ history.orderNumber }}</span>
              <span class="center-content">{{ history.client }}</span>
              <span class="center-content">{{ history.date }}</span>
              <span class="center-content">{{ history.time }}</span>
              <span class="center-content">
                <span :class="getStatusClass(history.status)">{{ history.status }}</span>
              </span>
            </div>
          </div>
        </div>
        <v-btn @click="closeHistorial" class="action-button historial-close-button">
          Cerrar
        </v-btn>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const orderHistory = ref([]);
  const selectedOrderDetails = ref([]);
  const showOrderDetails = ref(false);
  const router = useRouter();
  
  const viewOrderDetails = (index) => {
    selectedOrderDetails.value = orderHistory.value[index].orders;
    showOrderDetails.value = true;
  };
  
  const closeHistorial = () => {
    router.push('/');
  };
  
  const getStatusClass = (status) => {
    switch (status) {
      case 'concluido':
        return 'status-concluido';
      case 'completado':
        return 'status-completado';
      case 'proceso':
        return 'status-proceso';
      case 'pendiente':
        return 'status-pendiente';
      default:
        return '';
    }
  };
  </script>
  
  <style scoped>
  .details-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
  }
  
  .details-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 600px;
  }
  
  .order-history-table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .order-history-table {
    width: 90%;
    border-collapse: collapse;
    margin-top: 10px;
    background-color: white;
    text-align: center;
  }
  
  .order-history-table .order-status-header,
  .order-history-table .order-status-row {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .order-history-table .order-status-header {
    background-color: orange;
    color: white;
    font-weight: bold;
  }
  
  .action-button {
    margin-top: 20px;
    background-color: orange;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .historial-view-button {
    background-color: orange;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .historial-close-button {
    background-color: orange;
    margin-top: 20px;
  }
  
  .status-concluido {
    background-color: #00c853;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
  }
  
  .status-completado {
    background-color: #2196f3;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
  }
  
  .status-proceso {
    background-color: #ffeb3b;
    color: black;
    padding: 5px 10px;
    border-radius: 4px;
  }
  
  .status-pendiente {
    background-color: #f44336;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
  }
  </style>
  