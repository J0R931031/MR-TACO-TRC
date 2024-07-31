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
}
.custom-border {
  border: 1px solid orange;
  width: 300px;
  height: 60px;
}
.combo-box {
  width: 350px;
  height: 60px;
}
.select {
  width: 300px;
  height: 60px;
}
</style>