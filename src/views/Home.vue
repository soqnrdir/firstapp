<template>
  <div>
    <h1>This is Home page</h1>
    <!-- <RielCoder title="home title" name="Riel Coder" /> -->
    <!-- <form action=""> -->
      <!-- <InputField :name="name" @update-name="updateName" /> -->
      <InputField v-model="name"/>
      <br><button @click="updateName">Submit</button>
    <!-- </form> -->
    {{ name }}
  </div>
</template>

<script>
// import RielCoder from '@/components/RielCoder.vue';
import InputField from '@/components/InputField.vue';
export default {
  // components: {
  //   RielCoder
  // },
  components: {
    InputField
  },
  data() {
    return {
      name: 'Kossie Coder'
    }
  },

  //뷰 인스턴스 라이프사이클 보통 created를 많이 사용하는 편 나머지는 필요에 따라 사용하는 편이다.
  //data에 접근이 불가능함
  beforeCreate() {
    console.log('beforeCreate', this.name);

  },
  //인스턴스가 생성이 되었을때
  created() {
     console.log('created' , this.name);
  },

  //Mount가 되기 전
  beforeMount() {
    alert('beforeMount');
  },
  //이 시점부터 화면에 접근이 가능함 정보들이 보여주게 된다.
  mounted() {
    alert('mounted');
  },

  //update되기전
  beforeUpdate() {
    alert('beforeUpdate');
  },
  //Kossie Coder가 hello로 바뀌게 되는 장면이 뜸
  updated() {
    alert('updated');
  },

  //detroy가 되기전
  beforeDestroy() {
    alert('beforeDestroy');
  },
  //화면을 이동할때 빈번하게 발생 (화면전환 - 기존의 화면을 제거하고 새로운 화면을 추가하는 과정에서 발생함)
  //이벤트 리스너 삭제나 데이터 초기화에 적합하다.
  destroyed() {
    alert('destroyed');
  },

  methods: {
    updateName() {
      this.name = 'hello';
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>