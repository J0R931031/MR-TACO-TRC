<template>
  <div class="menu-container">
    <bar-nav class="navbar" />
    
    <div class="content-container">
      <v-row align="center" justify="center">
        <!-- Botones para seleccionar platillos, bebidas y postres -->
        <div class="button-group">
          <v-btn @click="showPlatillosSection = true" class="platillos-button">
            Seleccionar Platillos
          </v-btn>
          <v-btn @click="showBebidasSection = true" class="bebidas-button">
            Seleccionar Bebidas
          </v-btn>
          <v-btn @click="showPostresSection = true" class="postres-button">
            Seleccionar Postres
          </v-btn>
          <v-btn @click="showHistorial = true" class="historial-button">
            Historial
          </v-btn>
        </div>

        <!-- Pantalla de seleccionar platillos -->
        <div v-if="showPlatillosSection" class="details-overlay">
          <div class="details-content">
            <h2>Seleccionar Platillos</h2>
            <div class="platillo-list">
              <div v-for="(platillo, index) in platillos" :key="index" class="platillo-section">
                <v-select
                  v-model="platillo.selected"
                  :label="`Selecciona platillo ${index + 1}`"
                  :items="platilloOptions"
                  outlined
                ></v-select>
                <div v-if="platillo.selected" class="counter-section">
                  <p>Detalles para {{ platillo.selected }}:</p>
                  <button @click="decrement(index)" class="counter-button platillos-counter-button">-</button>
                  <span class="counter-value">{{ platillo.quantity }}</span>
                  <button @click="increment(index)" class="counter-button platillos-counter-button">+</button>
                  <button @click="openIngredientSelection(index)" class="counter-button ingredients-button">Selecciona Ingredientes</button>
                </div>
                <div v-if="platillo.selected" class="notes-section">
                  <v-textarea
                    v-model="platillo.notes"
                    label="Escribe tus notas aquí"
                    rows="4"
                    outlined
                  ></v-textarea>
                </div>
              </div>
            </div>
            <v-btn
              @click="addPlatillo"
              class="action-button platillos-add-button"
            >
              Añadir otro platillo
            </v-btn>
            <div class="action-buttons">
              <v-btn
                @click="savePlatillos"
                class="action-button platillos-save-button"
              >
                Guardar
              </v-btn>
              <v-btn
                @click="cancelPlatillos"
                class="action-button platillos-cancel-button"
              >
                Cancelar
              </v-btn>
              <button @click="showPlatillosSection = false" class="close-button platillos-close-button">Cerrar</button>
            </div>
          </div>
        </div>

        <!-- Pantalla de seleccionar ingredientes -->
        <div v-if="showIngredientsSection" class="details-overlay small-overlay">
          <div class="details-content">
            <h2>Seleccionar Ingredientes</h2>
            <div class="ingredients-list">
              <div v-for="(ingredient, index) in ingredientOptions" :key="index" class="ingredient-section">
                <label class="checkbox-container">
                  <input type="checkbox" v-model="selectedIngredients" :value="ingredient">
                  <span class="checkmark"></span>
                  {{ ingredient }}
                </label>
              </div>
            </div>
            <v-btn
              @click="saveIngredients"
              class="action-button ingredients-save-button"
            >
              Guardar
            </v-btn>
            <v-btn
              @click="cancelIngredients"
              class="action-button ingredients-cancel-button"
            >
              Cancelar
            </v-btn>
            <button @click="showIngredientsSection = false" class="close-button ingredients-close-button">Cerrar</button>
          </div>
        </div>

        <!-- Pantalla de seleccionar bebidas -->
        <div v-if="showBebidasSection" class="details-overlay">
          <div class="details-content">
            <h2>Seleccionar Bebidas</h2>
            <div class="bebida-list">
              <div v-for="(bebida, index) in bebidas" :key="index" class="bebida-section">
                <v-select
                  v-model="bebida.selected"
                  :label="`Selecciona bebida ${index + 1}`"
                  :items="bebidaOptions"
                  outlined
                ></v-select>
                <div v-if="bebida.selected" class="counter-section">
                  <p>Detalles para {{ bebida.selected }}:</p>
                  <button @click="decrementBebida(index)" class="counter-button bebidas-counter-button">-</button>
                  <span class="counter-value">{{ bebida.quantity }}</span>
                  <button @click="incrementBebida(index)" class="counter-button bebidas-counter-button">+</button>
                </div>
              </div>
            </div>
            <v-btn
              @click="addBebida"
              class="action-button bebidas-add-button"
            >
              Añadir otra bebida
            </v-btn>
            <div class="action-buttons">
              <v-btn
                @click="saveBebidas"
                class="action-button bebidas-save-button"
              >
                Guardar
              </v-btn>
              <v-btn
                @click="cancelBebidas"
                class="action-button bebidas-cancel-button"
              >
                Cancelar
              </v-btn>
              <button @click="showBebidasSection = false" class="close-button bebidas-close-button">Cerrar</button>
            </div>
          </div>
        </div>

        <!-- Pantalla de seleccionar postres -->
        <div v-if="showPostresSection" class="details-overlay">
          <div class="details-content">
            <h2>Seleccionar Postres</h2>
            <div class="postre-list">
              <div v-for="(postre, index) in postres" :key="index" class="postre-section">
                <v-select
                  v-model="postre.selected"
                  :label="`Selecciona postre ${index + 1}`"
                  :items="postreOptions"
                  outlined
                ></v-select>
                <div v-if="postre.selected" class="counter-section">
                  <p>Detalles para {{ postre.selected }}:</p>
                  <button @click="decrementPostre(index)" class="counter-button postres-counter-button">-</button>
                  <span class="counter-value">{{ postre.quantity }}</span>
                  <button @click="incrementPostre(index)" class="counter-button postres-counter-button">+</button>
                </div>
              </div>
            </div>
            <v-btn
              @click="addPostre"
              class="action-button postres-add-button"
            >
              Añadir otro postre
            </v-btn>
            <div class="action-buttons">
              <v-btn
                @click="savePostres"
                class="action-button postres-save-button"
              >
                Guardar
              </v-btn>
              <v-btn
                @click="cancelPostres"
                class="action-button postres-cancel-button"
              >
                Cancelar
              </v-btn>
              <button @click="showPostresSection = false" class="close-button postres-close-button">Cerrar</button>
            </div>
          </div>
        </div>

        <!-- Tabla de estado de la orden -->
        <div v-if="orders.length > 0" class="order-status-content">
          <h2>Estado de la Orden</h2>
          <div class="order-status-table-wrapper">
            <div class="order-status-table">
              <div class="order-status-header">
                <span>Ver Detalles</span>
                <span>Ingredientes</span>
                <span>Tipo</span>
                <span>Nombre</span>
                <span>Cantidad</span>
                <span>Fecha</span>
                <span>Eliminar Platillo</span>
              </div>
              <div v-for="(order, index) in orders" :key="index" class="order-status-row">
                <span class="center-content">
                  <v-btn v-if="order.type === 'Platillo'" @click="viewDetails(order)" class="action-button">Detalles</v-btn>
                </span>
                <span class="center-content">
                  <v-btn v-if="order.type === 'Platillo'" @click="viewIngredients(order)" class="action-button">Ingredientes</v-btn>
                </span>
                <span class="center-content">{{ order.type }}</span>
                <span class="center-content">{{ order.item }}</span>
                <span class="center-content">{{ order.quantity }}</span>
                <span class="center-content">{{ order.date }}</span>
                <span class="center-content">
                  <v-btn @click="removeOrder(index)" class="action-button">Eliminar</v-btn>
                </span>
              </div>
            </div>
          </div>
          <v-btn @click="sendOrder" class="send-order-button">
            Enviar Orden
          </v-btn>
        </div>

        <!-- Pantalla de historial de órdenes -->
        <div v-if="showHistorial" class="details-overlay large-overlay">
          <div class="details-content large-content historial-background">
            <h2 class="historial-title">Historial de Órdenes</h2>
            <div class="order-status-table-wrapper">
              <div class="order-status-table">
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

        <!-- Pantalla de detalles de la orden -->
        <div v-if="showOrderDetails" class="details-overlay large-overlay">
          <div class="details-content large-content historial-background">
            <h2 class="historial-title">Detalles de la Orden</h2>
            <div class="order-status-table-wrapper">
              <div class="order-status-table">
                <div class="order-status-header">
                  <span>Tipo</span>
                  <span>Item</span>
                  <span>Cantidad</span>
                  <span>Notas</span>
                  <span>Ingredientes</span>
                </div>
                <div v-for="(item, index) in selectedOrderDetails" :key="index" class="order-status-row">
                  <span class="center-content">{{ item.type }}</span>
                  <span class="center-content">{{ item.item }}</span>
                  <span class="center-content">{{ item.quantity }}</span>
                  <span class="center-content">
                    <v-btn @click="viewNotes(item)" class="action-button">Notas</v-btn> <!-- Botón de Notas -->
                  </span>
                  <span class="center-content">
                    <v-btn @click="viewIngredients(item)" class="action-button">Ingredientes</v-btn>
                  </span>
                </div>
              </div>
            </div>
            <v-btn @click="closeOrderDetails" class="action-button order-details-close-button">
              Cerrar
            </v-btn>
          </div>
        </div>

        <!-- Pantalla de ingredientes de la orden -->
        <div v-if="showOrderIngredients" class="details-overlay">
          <div class="details-content">
            <h2>Ingredientes de la Orden</h2>
            <div class="order-ingredients-list">
              <div v-for="(ingredient, index) in selectedOrderIngredients" :key="index" class="ingredient-section">
                {{ ingredient }}
              </div>
            </div>
            <v-btn @click="closeOrderIngredients" class="action-button order-ingredients-close-button">
              Cerrar
            </v-btn>
          </div>
        </div>
        
        <!-- Pantalla de notas de la orden -->
        <div v-if="showOrderNotes" class="details-overlay small-overlay">
          <div class="details-content">
            <h2>Notas de la Orden</h2>
            <p class="order-notes">{{ selectedOrderNotes }}</p>
            <v-btn @click="closeOrderNotes" class="action-button order-notes-close-button">
              Cerrar
            </v-btn>
          </div>
        </div>
        
        <!-- Modal de confirmación de orden -->
        <div v-if="showConfirmation" class="confirmation-modal">
          <div class="confirmation-content">
            <p>La orden se envió con éxito</p>
          </div>
          <div class="confirmation-buttons">
            <v-btn @click="closeConfirmation">Aceptar</v-btn>
          </div>
        </div>

      </v-row>
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
import { ref, computed } from 'vue';
import barNav from '@/components/barNav.vue';

const platilloOptions = [
  'Orden de tacos dorados',
  'Pollo a la plancha',
  'Tacos de pescado',
  'Gringa carne asada',
  'Orden de tostadas',
  'Hamburguesa de la casa'
];

const bebidaOptions = [
  'Agua del Día',
  'Agua Mineral',
  'Agua de Jamaica',
  'Agua de Horchata',
  'Coca Cola',
  'Fanta',
  'Manzanita'
];

const postreOptions = [
  'Pay de Limón',
  'Pay de Fresa',
  'Pay de Queso',
  'Pastel de Chocolate',
  'Pastel de Zanahoria',
  'Pastel Chorreado'
];

const ingredientOptions = [
  'Queso',
  'Lechuga',
  'Tomate',
  'Cebolla',
  'Salsa'
];

const platillos = ref([{ selected: null, notes: '', quantity: 1, ingredients: [], status: 'Pendiente' }]);
const bebidas = ref([{ selected: null, quantity: 1, status: 'Pendiente' }]);
const postres = ref([{ selected: null, quantity: 1, status: 'Pendiente' }]);
const orders = ref([]);
const orderHistory = ref([]);
const showPlatillosSection = ref(false);
const showBebidasSection = ref(false);
const showPostresSection = ref(false);
const showHistorial = ref(false);
const showIngredientsSection = ref(false);
const showOrderDetails = ref(false);
const showOrderIngredients = ref(false);
const showOrderNotes = ref(false); // Controla la pantalla de notas
const showConfirmation = ref(false);
const selectedOrderDetails = ref([]);
const selectedOrderIngredients = ref([]);
const selectedOrderNotes = ref(''); // Almacena las notas seleccionadas
const selectedIngredients = ref([]);

const increment = (index) => {
  const platillo = platillos.value[index].selected;
  if (platillo) {
    platillos.value[index].quantity += 1;
  }
};

const decrement = (index) => {
  const platillo = platillos.value[index].selected;
  if (platillo && platillos.value[index].quantity > 1) {
    platillos.value[index].quantity -= 1;
  }
};

const incrementBebida = (index) => {
  const bebida = bebidas.value[index].selected;
  if (bebida) {
    bebidas.value[index].quantity += 1;
  }
};

const decrementBebida = (index) => {
  const bebida = bebidas.value[index].selected;
  if (bebida && bebidas.value[index].quantity > 1) {
    bebidas.value[index].quantity -= 1;
  }
};

const incrementPostre = (index) => {
  const postre = postres.value[index].selected;
  if (postre) {
    postres.value[index].quantity += 1;
  }
};

const decrementPostre = (index) => {
  const postre = postres.value[index].selected;
  if (postre && postres.value[index].quantity > 1) {
    postres.value[index].quantity -= 1;
  }
};

const addPlatillo = () => {
  platillos.value.push({ selected: null, notes: '', quantity: 1, ingredients: [], status: 'Pendiente' });
};

const addBebida = () => {
  bebidas.value.push({ selected: null, quantity: 1, status: 'Pendiente' });
};

const addPostre = () => {
  postres.value.push({ selected: null, quantity: 1, status: 'Pendiente' });
};

const savePlatillos = () => {
  const newPlatillos = platillos.value
    .filter(p => p.selected)
    .map(p => ({ type: 'Platillo', item: p.selected, quantity: p.quantity, notes: p.notes, ingredients: p.ingredients, date: formattedDate.value }));

  orders.value = [...orders.value, ...newPlatillos];
  platillos.value = [{ selected: null, notes: '', quantity: 1, ingredients: [], status: 'Pendiente' }];
  showPlatillosSection.value = false;
};

const saveBebidas = () => {
  const newBebidas = bebidas.value
    .filter(b => b.selected)
    .map(b => ({ type: 'Bebida', item: b.selected, quantity: b.quantity, date: formattedDate.value }));

  orders.value = [...orders.value, ...newBebidas];
  bebidas.value = [{ selected: null, quantity: 1, status: 'Pendiente' }];
  showBebidasSection.value = false;
};

const savePostres = () => {
  const newPostres = postres.value
    .filter(p => p.selected)
    .map(p => ({ type: 'Postre', item: p.selected, quantity: p.quantity, date: formattedDate.value }));

  orders.value = [...orders.value, ...newPostres];
  postres.value = [{ selected: null, quantity: 1, status: 'Pendiente' }];
  showPostresSection.value = false;
};

const cancelPlatillos = () => {
  platillos.value = [{ selected: null, notes: '', quantity: 1, ingredients: [], status: 'Pendiente' }];
  showPlatillosSection.value = false;
};

const cancelBebidas = () => {
  bebidas.value = [{ selected: null, quantity: 1, status: 'Pendiente' }];
  showBebidasSection.value = false;
};

const cancelPostres = () => {
  postres.value = [{ selected: null, quantity: 1, status: 'Pendiente' }];
  showPostresSection.value = false;
};

const viewDetails = (order) => {
  alert(`Detalles:\n${order.notes}`);
};

const viewIngredients = (order) => {
  selectedOrderIngredients.value = order.ingredients;
  showOrderIngredients.value = true;
};

const viewNotes = (order) => {
  selectedOrderNotes.value = order.notes;
  showOrderNotes.value = true;
};

const removeOrder = (index) => {
  orders.value.splice(index, 1);
};

// Formatear la fecha actual para mostrar en la tabla de estado de la orden
const formattedDate = computed(() => {
  const now = new Date();
  return now.toLocaleDateString('es-ES');
});

const sendOrder = () => {
  // Mostrar el modal de confirmación con un mensaje simple
  showConfirmation.value = true;

  // Aquí se podría añadir la lógica para enviar la orden, si es necesario

  const orderNumber = `nº orden ${orderHistory.value.length + 1}`;
  const client = "Cliente"; // Puedes cambiar esto para obtener el nombre del cliente de un input
  const time = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  orderHistory.value.push({ orderNumber, client, date: formattedDate.value, time, orders: [...orders.value], status: 'completado' });
  orders.value = [];
};

const closeConfirmation = () => {
  showConfirmation.value = false;
};

const closeOrderNotes = () => {
  showOrderNotes.value = false;
};

const viewOrderDetails = (index) => {
  selectedOrderDetails.value = orderHistory.value[index].orders;
  showOrderDetails.value = true;
};

const closeHistorial = () => {
  showHistorial.value = false;
};

const closeOrderDetails = () => {
  showOrderDetails.value = false;
};

const closeOrderIngredients = () => {
  showOrderIngredients.value = false;
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

const openIngredientSelection = (index) => {
  selectedIngredients.value = platillos.value[index].ingredients;
  showIngredientsSection.value = true;
};

const saveIngredients = () => {
  platillos.value.forEach((platillo) => {
    platillo.ingredients = selectedIngredients.value;
  });
  showIngredientsSection.value = false;
};

const cancelIngredients = () => {
  selectedIngredients.value = [];
  showIngredientsSection.value = false;
};

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
  margin-top: 65px; 
  background-image: url('@/assets/fondores.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 800px;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.button-group {
  display: flex;
  flex-wrap: wrap; /* Permite que los botones se ajusten en varias filas si es necesario */
  justify-content: space-around;
  margin-top: 150px;
}

.button-group .v-btn {
  background-color: orange !important;
  color: white !important;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 4px;
  flex: 1 1 calc(1% - 20px); /* Hace que los botones ocupen el 50% del contenedor con margen */
  text-align: center;
}

.button-group .v-btn:hover {
  background-color: darkorange !important;
}

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
  background: rgb(0, 0, 0); /* Cambiado a negro */
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  color: white;
}

.small-overlay .details-content {
  max-width: 400px;

}

.large-overlay .details-content {
  width: 90%;
  max-width: 1200px; /* Ancho máximo en pantallas grandes */
}

.large-content {
  max-width: 1200px; /* Aumenta el tamaño máximo de la pantalla de historial */
}

.platillo-list,
.bebida-list,
.postre-list,
.historial-list,
.order-details-list,
.order-ingredients-list {
  max-height: 60vh; /* Ajusta la altura máxima según tus necesidades */
  overflow-y: auto;
 
}

.platillo-section,
.bebida-section,
.postre-section,
.historial-section,
.order-details-section,
.ingredient-section {
  margin-bottom: 20px;
  
}

.counter-section {
  display: flex;
  align-items: center;
  margin-top: 10px;
 

}

.counter-button {
  background-color: orange;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  color: white;
  border-radius: 4px;
}

.counter-value {
  margin: 0 10px;
  
}

.notes-section {
  margin-top: 10px;
}

.order-notes {
  word-wrap: break-word; /* Permite que el texto largo salte a la siguiente línea */
  white-space: pre-wrap; /* Mantiene los saltos de línea y espacios */
  max-width: 100%; /* Asegura que el texto no se salga del contenedor */
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

.close-button {
  background-color: orange;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

.order-status-content {
  position: relative;
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgb(0, 0, 0);
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 30px;
  box-shadow: 2px 1px 15px rgb(255, 61, 2);
}

.order-status-table-wrapper {
  overflow-x: auto; /* Activa el desplazamiento horizontal */
  overflow-y: auto; /* Activa el desplazamiento vertical */
  max-height: 300px; /* Limita la altura máxima de la tabla para forzar el scroll vertical */
}

.order-status-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background-color: rgb(0, 0, 0);
  color: white;
}

.order-status-header {
  display: grid;
  grid-template-columns: repeat(7, minmax(150px, 5fr)); /* Ajuste flexible de las columnas */
  font-weight: bold;
  background-color: orange;
  color: white;
  padding: 9px;
  text-align: center;
  border-bottom: 2px solid rgb(255, 255, 255);
  width: 1100px;
}

.order-status-row {
  display: grid;
  grid-template-columns: repeat(7, minmax(150px, 1fr)); /* Mantiene el ajuste flexible */
  border-bottom: 1px solid rgb(241, 241, 241);
  padding: 10px;
  text-align: center;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.historial-background {
  background-color: black; /* Fondo negro para la pantalla de historial */
}

.historial-title {
  color: white; /* Texto blanco para el título */
}

.order-history-table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.order-history-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background-color: rgb(0, 0, 0); /* Fondo negro para la tabla */
  color: white;
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

.send-order-button {
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
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

.order-details-close-button {
  background-color: orange;
  margin-top: 20px;
}

.order-ingredients-close-button {
  background-color: orange;
  margin-top: 20px;
}

.order-notes-close-button {
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

/* Checkbox styles */
.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 12px;
  font-size: 18px;
}

.checkbox-container input {
  display: none;
}

.checkbox-container .checkmark {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 2px solid white; /* Borde blanco */
  margin-right: 10px;
  position: relative;
}

.checkbox-container input:checked + .checkmark {
  background-color: black;
}

.checkbox-container input:checked + .checkmark::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 7px;
  width: 5px;
  height: 10px;
  border: solid white; /* Palomita blanca */
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 20px;
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

.confirmation-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 80vw; /* Ancho adaptable */
  max-width: 400px; /* Ancho máximo en pantallas más grandes */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 3000;
}

.confirmation-modal p {
  margin-bottom: 10px;
}

.confirmation-modal .confirmation-content {
  text-align: left;
  max-height: 60vh; /* Altura máxima para evitar que se salga de la pantalla */
  overflow-y: auto; /* Scroll si el contenido es demasiado largo */
}

.confirmation-modal .confirmation-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.confirmation-modal .confirmation-buttons .v-btn {
  background-color: #2196f3;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .confirmation-modal {
    width: 90vw; /* Ancho un poco más grande para pantallas pequeñas */
    padding: 15px;
  }

  .confirmation-modal .confirmation-buttons .v-btn {
    font-size: 14px;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .confirmation-modal {
    width: 95vw; /* Ocupa casi todo el ancho de la pantalla */
    padding: 10px;
  }

  .confirmation-modal .confirmation-buttons {
    flex-direction: column; /* Botones en columna en pantallas muy pequeñas */
    align-items: stretch;
  }

  .confirmation-modal .confirmation-buttons .v-btn {
    width: 100%;
    margin-top: 10px;
  }
}

@media (max-width: 768px) {
  .content-container {
    padding: 10px;
  }
  
  .button-group .v-btn {
    font-size: 14px;
    padding: 8px 16px;
    flex: 1 1 calc(100% - 10px); /* Ocupan todo el ancho en pantallas pequeñas */
  }
}

@media (max-width: 480px) {
  .button-group {
    flex-direction: column;
  }

  .details-content {
    padding: 10px;
  }
}
</style>