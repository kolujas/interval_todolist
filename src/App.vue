<!-- <script setup>
import Title from './components/Title.vue';
import Days from './components/Days.vue';
import Tasks from './components/Tasks.vue';
</script> -->

<template>
  <div class="container">
    <h1 class="my-4 text-center">Lista de tareas semana del 15/7</h1>
    <div class="row mb-4 justify-content-center">
      <div class="col-12 col-md-6 d-flex flex-column flex-md-row flex-wrap justify-content-center">
        <button type="button" class="btn btn-primary btn-block m-md-2 px-3" @click="selectDay(day)" v-for="day in days"
          :key="day">
          {{ day }}
        </button>
      </div>
    </div>
    <div class="row" v-if="selectedDay">
      <div class="col-12">
        <h2 class="my-4">Tareas del {{ selectedDay }}</h2>
      </div>
      <div class="col-12 col-lg-4 mb-4" v-for="(tasks, sede) in tasksBySede[selectedDay]" :key="sede">
        <div class="list-group">
          <h3 class="my-4">{{ sede }}</h3>
          <li class="list-group-item rounded shadow my-2" v-for="task in tasks" :key="task">{{ task }}</li>
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
    General: ['✅ Pasar autorespuestas actualizadas (Lomas, Ramos, Quilmes, CABA, La Plata y Online)', '✅ Revisar solicitudes del grupo de bolsa laboral', '✅ Publicar nuevas oportunidades laborales en el grupo de bolsa de trabajo', '✅ Subir banner de 2X1 a la home de la web', '✅ Revisar las métricas de todas las cuentas publicitarias menos la de Quilmes (no tengo el acceso)', '✅ Reunion con el equipo de Marketing 13:30 la sede de Lomas'],
    Lomas: ['✅ Hacer campaña de Fitness Dance'],
    Ramos: ['ℹ️ No hay tareas nuevas'],
    Quilmes: ['ℹ️ No hay tareas nuevas'],
    CABA: ['ℹ️ No hay tareas nuevas'],
    'La Plata': ['ℹ️ No hay tareas nuevas'],
    'San Martín': ['ℹ️ No hay tareas nuevas'],
    Online: ['ℹ️ No hay tareas nuevas']
  },
  Martes: {
    General: ['✅ '],
    Lomas: ['✅ '],
    Ramos: ['✅ '],
    Quilmes: ['✅ '],
    CABA: ['✅ '],
    'La Plata': ['✅ '],
    'San Martín': ['✅ '],
    Online: ['✅ ']
  },
  Miércoles: {
    General: ['✅ '],
    Lomas: ['✅ '],
    Ramos: ['✅ '],
    Quilmes: ['✅ '],
    CABA: ['✅ '],
    'La Plata': ['✅ '],
    'San Martín': ['✅ '],
    Online: ['✅ ']
  },
  Jueves: {
    General: ['✅ '],
    Lomas: ['✅ '],
    Ramos: ['✅ '],
    Quilmes: ['✅ '],
    CABA: ['✅ '],
    'La Plata': ['✅ '],
    'San Martín': ['✅ '],
    Online: ['✅ ']
  },
  Viernes: {
    General: ['✅ '],
    Lomas: ['✅ '],
    Ramos: ['✅ '],
    Quilmes: ['✅ '],
    CABA: ['✅ '],
    'La Plata': ['✅ '],
    'San Martín': ['✅ '],
    Online: ['✅ ']
  },
  Sábado: {
    General: ['✅ Compartirle a Irina un video sobre como darnos acceso de administrador en la cuenta de Quilmes', '✅ Programar historias para el domingo a las 12:00', '✅ Pasar autorespuestas actualizadas (Lomas, Quilmes, CABA, La Plata y Online)', '✅ Revisar saldo de Google Ads', '✅ Detectar problema de gestión de cuentas comerciales de Ramos y hablar con Irina al respecto, el Lunes continuo con el caso con soporte'],
    Lomas: ['ℹ️ No hay tareas nuevas'],
    Ramos: ['✅ Hacer campaña de Personal Trainer'],
    Quilmes: ['ℹ️ No hay tareas nuevas'],
    CABA: ['ℹ️ No hay tareas nuevas'],
    'La Plata': ['ℹ️ No hay tareas nuevas'],
    'San Martín': ['ℹ️ No hay tareas nuevas'],
    Online: ['ℹ️ No hay tareas nuevas']
  }
}

const selectedDay = ref(null)

function selectDay(day) {
  selectedDay.value = day
}
</script>

<style scoped>
.btn-block {
  width: 100%;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .btn-block {
    width: calc(50% - 1rem);
    margin-bottom: 1rem;
  }
}

@media (min-width: 992px) {
  .btn-block {
    width: calc(33.33% - 1rem);
    margin-bottom: 1rem;
  }
}
</style>
