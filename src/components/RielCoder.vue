<template>
    <div>
        <!-- title을 각 화면마다 다르게 하고 싶을때 props를 사용함 -->
        <p>header</p>
        <slot name="header" :riel="riel"></slot>
        <p>body</p>
        <!-- <p>{{ name }}</p> -->
        <slot name="body" :riel2="riel2" ></slot>
        <p>footer</p>

        <!-- <button @click="updateName">Change Name</button> -->
    </div>
</template>

<script>
export default {
    //title를 직접 설정하기 위한 단계
    //props: ['title'],
    //대부분은 이렇게사용
    props: {
        //props 안에 있는 객체는 다른 곳에서 쓸 수 없다.
        title: {
            type: String,
            //title 설정 안했을 때 기본 title 설정
            default: 'default title',
            //무조건 보내줘야 한다. 그렇지 않을경우 false로 바꿔주면된다. false는 생략 가능
            required: false
        },
        name: {
             type: String,
             default: 'default name',
        }
    },

    data() {
        return {
            riel: 'coder',
            riel2: 'programmer'
            //주석처리하는 이유는 props에서 사용하고 있기 때문
            //name: 'Riel Coder',
        }
    },

    methods: {
        updateName() {
            //부모 컴포넌트에서 보내주는 데이터라 직접 바꾸면 안된다.
            //this.name = 'Riel Coder Updated';
            //변경해주고 싶다면 부모로 이벤트를 보내 바꿔달라고 요청을 해야만함
        }
    }
}
</script>

<style scoped>

</style>