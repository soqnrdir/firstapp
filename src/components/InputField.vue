<template>
    <div>
        <label for="">Name</label>
        <input type="text" :value="value" style="padding: 30px; border: 2px solid green;"
        @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    props: {
         value: {
            type: String,
            required: true
        }
    },
    // methods: {
    //     updateName(e) {
    //         console.log(e.target.value);
    //       //$emit은(원하는 이벤트,올리고싶은 값을 넣어주면된다.) 
    //         this.$emit('update-name', e.target.value)
    //     }
    // }
}
</script>