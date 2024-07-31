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

<script setup>
import BarNav from '@/components/meserosBar.vue';
import { ref } from 'vue';

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
}
.custom-border {
  border: 1px solid orange;
  width: 300px;
  height: 60px;
}
.combo-box-padding {
  padding-left: 15px;
}
.v-card-text {
  max-height: 400px;
  overflow-y: auto;
}
</style>
