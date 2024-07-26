<script setup>
import BarNav from '@/components/meserosBar.vue';
</script>
<template>
     <BarNav/>
  <div class="div-container">
     <v-container >
          <v-row>
               <v-col class="d-flex justify-center">
                    <v-card
                       color="yellow" class="custom-border"
                    ><p class="p">N°Mesa</p></v-card>
               </v-col>
               <v-col class="d-flex justify-center">
                    <v-card
                       color="yellow" class="custom-border"
                    ><p class="p">N°Orden</p></v-card>
               </v-col>
          </v-row>
          <v-row class="pa-4" no-gutters>
  <v-col class="px-2">
    <v-combobox
      chips
      multiple
      label="PLATILLOS"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      variant="solo-filled"
      class="combo-box"
    ></v-combobox>
  </v-col>
  <v-col class="px-2">
    <v-combobox
      chips
      multiple
      label="BEBIDAS"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      variant="solo-filled"
      class="combo-box"
    ></v-combobox>
  </v-col>
  <v-col class="px-2">
    <v-combobox
      chips
      multiple
      label="POSTRES"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      variant="solo-filled"
      class="combo-box"
    ></v-combobox>
  </v-col>
</v-row>
     </v-container>

  </div>

</template>
<style scoped>
.div-container{
position: relative;
}
.v-card
{
color: yellow;
border:" 10px solid black";
}
.padding-combo-top{
padding-right: 30px;
display: flex;
justify-content: space-around;
}
.padding-right
{
     padding-right: 100px;
}
.padding-left
{
     padding-left: 100px;
}
.p{
display: flex;
 width: 200px;
 height: 40px;
 justify-content: center;
 align-items: center;
}
.custom-border {
  border: 1px solid orange;
}
.combo-box-padding{
     padding-left: 15px;
}
</style>