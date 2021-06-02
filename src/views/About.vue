<template>
  <div class="about">
    <h1>This is an about page</h1>
    <RielCoder>
      <template v-slot:header="props">
        <p>header111 {{ props.riel }}</p>
     <!-- <template v-slot:header="{ riel }">
            <p>header111 {{ riel }}</p> 도 가능-->
      </template>
      <template v-slot:body="{ riel2 }">
        <p>header222 {{ riel2 }}</p>
      </template>
    </RielCoder>
  </div>
</template>

<script>
import RielCoder from '@/components/RielCoder.vue';

export default {
  components: {
    RielCoder
  },
}
</script>