<!-- <script setup>
import Title from './components/Title.vue';
import Days from './components/Days.vue';
import Tasks from './components/Tasks.vue';
</script> -->

<template>
  <div class="container">
    <h1 class="my-4 text-center">Lista de Tareas semana del 1/7</h1>
    <div class="row mb-4">
      <div class="col-12 col-md-6 mb-2" v-for="day in days" :key="day">
        <button type="button" class="btn btn-primary btn-block" @click="selectDay(day)">
          {{ day }}
        </button>
      </div>
    </div>
    <div class="row" v-if="selectedDay">
      <div class="col-12">
        <h2 class="my-4">Tareas para {{ selectedDay }}</h2>
      </div>
      <div class="col-12 col-lg-4 mb-4" v-for="(tasks, sede) in tasksBySede[selectedDay]" :key="sede">
        <div class="list-group">
          <h3 class="my-4">{{ sede }}</h3>
          <li class="list-group-item rounded shadow" v-for="task in tasks" :key="task">{{ task }}</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Días de la semana
const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

// Ejemplo de tareas por día y sede
const tasksBySede = {
  Lunes: {
    General: ['✅ Pasar autorespuestas actualizadas', '✅ Reunión con Damian sobre agendar llamada con META', '✅  Se programó una llamada con META para el día 10/7 a las 10:30 HS', '✅ revisar métricas de cada sede'],
    Lomas: ['ℹ️ No hay tareas nuevas'],
    Ramos: ['✅ Se modificó un error del copy del taller de Entrenamiento funcional'],
    Quilmes: ['ℹ️ No hay tareas nuevas'],
    CABA: ['ℹ️ No hay tareas nuevas'],
    'La Plata': ['ℹ️ No hay tareas nuevas'],
    'San Martín': ['ℹ️ No hay tareas nuevas'],
    Online: ['ℹ️ No hay tareas nuevas']
  },
  Martes: {
    General: ['ℹ️ No hay tareas nuevas'],
    Lomas: ['ℹ️ No hay tareas nuevas'],
    Ramos: ['ℹ️ No hay tareas nuevas'],
    Quilmes: ['ℹ️ No hay tareas nuevas'],
    CABA: ['ℹ️ No hay tareas nuevas'],
    'La Plata': ['ℹ️ No hay tareas nuevas'],
    'San Martín': ['ℹ️ No hay tareas nuevas'],
    Online: ['ℹ️ No hay tareas nuevas'],
  },
  Miércoles: {
    General: ['ℹ️ No hay tareas nuevas'],
    Lomas: ['ℹ️ No hay tareas nuevas'],
    Ramos: ['ℹ️ No hay tareas nuevas'],
    Quilmes: ['ℹ️ No hay tareas nuevas'],
    CABA: ['ℹ️ No hay tareas nuevas'],
    'La Plata': ['ℹ️ No hay tareas nuevas'],
    'San Martín': ['ℹ️ No hay tareas nuevas'],
    Online: ['ℹ️ No hay tareas nuevas'],
  },
  Jueves: {
    General: ['ℹ️ No hay tareas nuevas'],
    Lomas: ['ℹ️ No hay tareas nuevas'],
    Ramos: ['ℹ️ No hay tareas nuevas'],
    Quilmes: ['ℹ️ No hay tareas nuevas'],
    CABA: ['ℹ️ No hay tareas nuevas'],
    'La Plata': ['ℹ️ No hay tareas nuevas'],
    'San Martín': ['ℹ️ No hay tareas nuevas'],
    Online: ['ℹ️ No hay tareas nuevas'],
  },
  Viernes: {
    General: ['ℹ️ No hay tareas nuevas'],
    Lomas: ['ℹ️ No hay tareas nuevas'],
    Ramos: ['ℹ️ No hay tareas nuevas'],
    Quilmes: ['ℹ️ No hay tareas nuevas'],
    CABA: ['ℹ️ No hay tareas nuevas'],
    'La Plata': ['ℹ️ No hay tareas nuevas'],
    'San Martín': ['ℹ️ No hay tareas nuevas'],
    Online: ['ℹ️ No hay tareas nuevas'],
  },
  Sábado: {
    General: ['ℹ️ No hay tareas nuevas'],
    Lomas: ['ℹ️ No hay tareas nuevas'],
    Ramos: ['ℹ️ No hay tareas nuevas'],
    Quilmes: ['ℹ️ No hay tareas nuevas'],
    CABA: ['ℹ️ No hay tareas nuevas'],
    'La Plata': ['ℹ️ No hay tareas nuevas'],
    'San Martín': ['ℹ️ No hay tareas nuevas'],
    Online: ['ℹ️ No hay tareas nuevas'],
  }
}

const selectedDay = ref(null)

function selectDay(day) {
  selectedDay.value = day
}
</script>

<style scoped>
.list-group-item {
  margin-bottom: 10px;
}
.btn-block {
  width: 80%;
}
</style>




