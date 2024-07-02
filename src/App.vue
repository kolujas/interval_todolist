<!-- <script setup>
import Title from './components/Title.vue';
import Days from './components/Days.vue';
import Tasks from './components/Tasks.vue';
</script> -->

<template>
  <div class="container">
    <h1 class="my-4 text-center">Lista de Tareas semana del 1/7</h1>
    <div class="row mb-4 justify-content-center">
      <div class="col-12 col-md-6 d-flex flex-column flex-md-row flex-wrap justify-content-center">
        <button
          type="button"
          class="btn btn-primary btn-block m-md-2 px-3"
          @click="selectDay(day)"
          v-for="day in days"
          :key="day"
        >
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
    General: ['✅ Pasar autorespuestas actualizadas', '✅ Reunión con Damian sobre agendar llamada con META', '✅  Se programó una llamada con META para el día 10/7 a las 10:30 HS', '✅ Revisar métricas de cada sede', '✅ Revisar solicitudes del grupo de bolsa de trabajo', '✅ Proponer en el grupo de Marketing una renión con una agencia que sean META Partners, para intentar evitar impuestos del 20% al 30%', ],
    Lomas: ['ℹ️ No hay tareas nuevas'],
    Ramos: ['✅ Se modificó un error del copy del taller de Entrenamiento funcional'],
    Quilmes: ['ℹ️ No hay tareas nuevas'],
    CABA: ['✅ A CABA le estan llegando mensaje del interior en las campañas de los talleres, los revisé y esta bien segmentado, pero volvi a poner el radio a ver si se soluciona', '✅ Si siguen cayendo mensajes en CABA del interior voy a hablar con META para saber que pasa'],
    'La Plata': ['ℹ️ No hay tareas nuevas'],
    'San Martín': ['ℹ️ No hay tareas nuevas'],
    Online: ['ℹ️ No hay tareas nuevas']
  },
  Martes: {
    General: ['✅ Completar formulario de Google Ads para contactarnos con ellos, nos van a contactar por el mail de bitrix de marketing', '✅ Subir publicacion a las redes', '✅ Actualizar autorespuestas de la página (Lomas, Ramos, Quilmes y Online)'],
    Lomas: ['✅ Pasarle costo de las campañas a Evelyn'],
    Ramos: ['ℹ️ No hay tareas nuevas'],
    Quilmes: ['✅ Levantar taller gratuito de Funcional hasta el viernes 5/7 con un reajuste del copy con un presupuesto de $ 6500', '✅ Se agrego tarjeta de crédito y se reemplazo por la anterior que había vencido'],
    CABA: ['✅ Silvina me mencionó nuevamente el problema de las consultas del interior, le sugerí agregar por barrio y no por radio, me dio el ok y los lugares a agregar', '✅ Se agregaron las suguientes ubicaciones para los talleres de CABA: Almagro, Balvanera, Caballito,Chacarita, Congreso, Parque Patricios, San Cristóbal'],
    'La Plata': ['ℹ️ No hay tareas nuevas'],
    'San Martín': ['✅ Pasarle a Mirella la geolocalización de la campaña de los talleres','✅ Excluir Ciudadela de la campaña de los talleres'],
    Online: ['ℹ️ Los cursos Online arrancan la semana que viene por lo que no se sube ninguna clase a Vimeo'],
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




