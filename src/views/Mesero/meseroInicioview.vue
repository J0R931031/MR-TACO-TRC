<template>
  <BarNav/>
  <div class="div-container">
    <v-container>
      <v-row class="d-flex justify-space-between">
        <v-col class="px-2 d-flex flex-column align-center">
          <v-select
            :items="mesaItems"
            label="N°Mesa"
            class="select"
          ></v-select>
        </v-col>
        <v-col class="px-2 d-flex flex-column align-center justify-center">
          <v-card color="yellow" class="custom-border d-flex justify-center align-center">
            <p class="text-center">N°Orden</p>
          </v-card>
        </v-col>
        <v-col class="px-2 d-flex flex-column align-center">
          <v-text-field 
            label="Nombre del Cliente" 
            class="text-center select" 
            v-model="cliente" 
            hide-details 
            solo 
            flat
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="pa-4" no-gutters>
        <v-col class="px-2 d-flex flex-column align-center">
          <v-combobox
            v-model="selectedPlatillo"
            label="PLATILLOS"
            :items="platillosItems"
            variant="solo-filled"
            class="combo-box"
          ></v-combobox>
          <v-btn class="mt-2" @click="addPlatillo">Añadir</v-btn>
        </v-col>
        <v-col class="px-2 d-flex flex-column align-center">
          <v-combobox
            v-model="selectedBebida"
            label="BEBIDAS"
            :items="bebidasItems"
            variant="solo-filled"
            class="combo-box"
          ></v-combobox>
          <v-btn class="mt-2" @click="addBebida">Añadir</v-btn>
        </v-col>
        <v-col class="px-2 d-flex flex-column align-center">
          <v-combobox
            v-model="selectedPostre"
            label="POSTRES"
            :items="postresItems"
            variant="solo-filled"
            class="combo-box"
          ></v-combobox>
          <v-btn class="mt-2" @click="addPostre">Añadir</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-card>
        <v-row>
          <v-col>
            <div class="d-flex align-center">
              <span>PLATILLO</span>
            </div>
            <div v-for="(item, index) in selectedPlatillos" :key="index" class="d-flex align-center">
              <span>{{ item.name }} ({{ item.quantity }})</span>
              <v-btn icon @click="incrementItem('platillo', index)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn icon @click="decrementItem('platillo', index)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-btn icon @click="deleteItem('platillo', index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-col>

          <v-col>
            <div class="d-flex align-center">
              <span>BEBIDAS</span>
            </div>
            <div v-for="(item, index) in selectedBebidas" :key="index" class="d-flex align-center">
              <span>{{ item.name }} ({{ item.quantity }})</span>
              <v-btn icon @click="incrementItem('bebida', index)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn icon @click="decrementItem('bebida', index)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-btn icon @click="deleteItem('bebida', index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-col>

          <v-col>
            <div class="d-flex align-center">
              <span>POSTRE</span>
            </div>
            <div v-for="(item, index) in selectedPostres" :key="index" class="d-flex align-center">
              <span>{{ item.name }} ({{ item.quantity }})</span>
              <v-btn icon @click="incrementItem('postre', index)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn icon @click="decrementItem('postre', index)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-btn icon @click="deleteItem('postre', index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import BarNav from '@/components/meserosBar.vue';
import { ref } from 'vue';

<<<<<<< HEAD
const platillosDialog = ref(false);
const bebidasDialog = ref(false);
const postresDialog = ref(false);

const platillos = ref([{ name: '', cantidad: 1, notas: '' }]);
const bebidas = ref([{ name: '', cantidad: 1, notas: '' }]);
const postres = ref([{ name: '', cantidad: 1, notas: '' }]);

function addPlatillo() {
  platillos.value.push({ name: '', cantidad: 1, notas: '' });
}

function addBebida() {
  bebidas.value.push({ name: '', cantidad: 1, notas: '' });
}

function addPostre() {
  postres.value.push({ name: '', cantidad: 1, notas: '' });
}

function guardarOrden() {
  console.log('Platillos:', platillos.value);
  console.log('Bebidas:', bebidas.value);
  console.log('Postres:', postres.value);
}

function enviarOrden() {
  // Aquí puedes manejar el envío de la orden
  console.log('Orden enviada:', { platillos: platillos.value, bebidas: bebidas.value, postres: postres.value });
}
</script>

<template>
  <BarNav />
  <div class="div-container">
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-card color="yellow" class="custom-border">
            <p class="p">N°Mesa</p>
          </v-card>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-card color="yellow" class="custom-border">
            <p class="p">N°Orden</p>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="pa-4" no-gutters>
        <v-col class="px-2">
          <v-btn @click="platillosDialog = true" class="combo-box" color="primary">PLATILLOS</v-btn>
        </v-col>
        <v-col class="px-2">
          <v-btn @click="bebidasDialog = true" class="combo-box" color="primary">BEBIDAS</v-btn>
        </v-col>
        <v-col class="px-2">
          <v-btn @click="postresDialog = true" class="combo-box" color="primary">POSTRES</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Dialogo para Platillos -->
    <v-dialog v-model="platillosDialog" max-width="600px">
      <v-card>
        <v-card-title>Seleccionar Platillos</v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-for="(platillo, index) in platillos" :key="index">
              <v-col cols="12">
                <v-select
                  v-model="platillo.name"
                  :items="['Platillo 1', 'Platillo 2', 'Platillo 3']"
                  label="PLATILLOS"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="platillo.cantidad"
                  label="Cantidad"
                  type="number"
                  min="1"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="platillo.notas" label="Notas" rows="2"></v-textarea>
              </v-col>
            </v-row>
            <v-btn @click="addPlatillo" color="secondary">Agregar Más Platillos</v-btn>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="platillosDialog = false">Cerrar</v-btn>
          <v-btn color="primary" text @click="guardarOrden">Guardar Platillos</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialogo para Bebidas -->
    <v-dialog v-model="bebidasDialog" max-width="600px">
      <v-card>
        <v-card-title>Seleccionar Bebidas</v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-for="(bebida, index) in bebidas" :key="index">
              <v-col cols="12">
                <v-select
                  v-model="bebida.name"
                  :items="['Bebida 1', 'Bebida 2', 'Bebida 3']"
                  label="BEBIDAS"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="bebida.cantidad"
                  label="Cantidad"
                  type="number"
                  min="1"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="bebida.notas" label="Notas" rows="2"></v-textarea>
              </v-col>
            </v-row>
            <v-btn @click="addBebida" color="secondary">Agregar Más Bebidas</v-btn>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="bebidasDialog = false">Cerrar</v-btn>
          <v-btn color="primary" text @click="guardarOrden">Guardar Bebidas</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialogo para Postres -->
    <v-dialog v-model="postresDialog" max-width="600px">
      <v-card>
        <v-card-title>Seleccionar Postres</v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-for="(postre, index) in postres" :key="index">
              <v-col cols="12">
                <v-select
                  v-model="postre.name"
                  :items="['Postre 1', 'Postre 2', 'Postre 3']"
                  label="POSTRES"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="postre.cantidad"
                  label="Cantidad"
                  type="number"
                  min="1"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="postre.notas" label="Notas" rows="2"></v-textarea>
              </v-col>
            </v-row>
            <v-btn @click="addPostre" color="secondary">Agregar Más Postres</v-btn>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="postresDialog = false">Cerrar</v-btn>
          <v-btn color="primary" text @click="guardarOrden">Guardar Postres</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Botón para Enviar Orden -->
    <v-btn @click="enviarOrden" color="success" class="ma-2">Enviar Orden</v-btn>
  </div>
</template>

<style scoped>
.div-container {
  position: relative;
}
.v-card {
  color: yellow;
  border: 10px solid black;
}
.padding-combo-top {
  padding-right: 30px;
  display: flex;
  justify-content: space-around;
}
.padding-right {
  padding-right: 100px;
}
.padding-left {
  padding-left: 100px;
}
.p {
  display: flex;
  width: 200px;
  height: 40px;
  justify-content: center;
  align-items: center;
=======
const mesaItems = ref(['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4']);
const platillosItems = ref(['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']);
const bebidasItems = ref(['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']);
const postresItems = ref(['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']);

const selectedPlatillo = ref('');
const selectedPlatillos = ref([]);

const selectedBebida = ref('');
const selectedBebidas = ref([]);

const selectedPostre = ref('');
const selectedPostres = ref([]);

const cliente = ref('');

const addPlatillo = () => {
  if (selectedPlatillo.value) {
    const item = selectedPlatillos.value.find(i => i.name === selectedPlatillo.value);
    if (item) {
      item.quantity++;
    } else {
      selectedPlatillos.value.push({ name: selectedPlatillo.value, quantity: 1 });
    }
    selectedPlatillo.value = '';
  }
};

const addBebida = () => {
  if (selectedBebida.value) {
    const item = selectedBebidas.value.find(i => i.name === selectedBebida.value);
    if (item) {
      item.quantity++;
    } else {
      selectedBebidas.value.push({ name: selectedBebida.value, quantity: 1 });
    }
    selectedBebida.value = '';
  }
};

const addPostre = () => {
  if (selectedPostre.value) {
    const item = selectedPostres.value.find(i => i.name === selectedPostre.value);
    if (item) {
      item.quantity++;
    } else {
      selectedPostres.value.push({ name: selectedPostre.value, quantity: 1 });
    }
    selectedPostre.value = '';
  }
};

const incrementItem = (type, index) => {
  if (type === 'platillo') selectedPlatillos.value[index].quantity++;
  if (type === 'bebida') selectedBebidas.value[index].quantity++;
  if (type === 'postre') selectedPostres.value[index].quantity++;
};

const decrementItem = (type, index) => {
  if (type === 'platillo' && selectedPlatillos.value[index].quantity > 1) selectedPlatillos.value[index].quantity--;
  if (type === 'bebida' && selectedBebidas.value[index].quantity > 1) selectedBebidas.value[index].quantity--;
  if (type === 'postre' && selectedPostres.value[index].quantity > 1) selectedPostres.value[index].quantity--;
};
const deleteItem = (type, index) => {
  if (type === 'platillo') selectedPlatillos.value.splice(index, 1);
  if (type === 'bebida') selectedBebidas.value.splice(index, 1);
  if (type === 'postre') selectedPostres.value.splice(index, 1);
};
</script>
<style scoped>
.div-container {
  position: relative;
>>>>>>> 3795adec6ccd9494c59766d19f6b768a51d3263a
}
.custom-border {
  border: 1px solid orange;
  width: 300px;
  height: 60px;
}
<<<<<<< HEAD
.combo-box-padding {
  padding-left: 15px;
=======
.combo-box {
  width: 350px;
  height: 60px;
}
.select {
  width: 300px;
  height: 60px;
>>>>>>> 3795adec6ccd9494c59766d19f6b768a51d3263a
}
.v-card-text {
  max-height: 400px;
  overflow-y: auto;
}
</style>
