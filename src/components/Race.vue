<template>
  <div>
    <h2>{{ raceModel.name }}</h2>
    <p>{{ startInstant }}</p>
    <ul>
      <li v-for="pony of raceModel.ponies" :key="pony.id">{{ pony.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { RaceModel } from '@/models/RaceModel';
import fromNow from '@/utils/FromNow';

export default defineComponent({
  name: 'Race',
  props: {
    raceModel: {
      type: Object as PropType<RaceModel>,
      required: true
    }
  },
  setup(props) {
    const startInstant = computed(() => fromNow(props.raceModel.startInstant));
    return { startInstant };
  }
});
</script>

<style scoped></style>
