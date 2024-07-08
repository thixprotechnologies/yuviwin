<template>
    <div ref="otpCont">
        <input type="text" class="digit-box" v-for="(el, ind) in digits" :key="el + ind" v-model="digits[ind]"
            :autofocus="ind === 0" :placeholder="ind + 1" maxlength="1">
    </div>
</template>
<script setup>
  import { ref, reactive } from 'vue';

  const props = defineProps({
    default: String,

    digitCount: {
      type: Number,
      required: true
    }
  });

  const digits = reactive([])

  if (props.default && props.default.length === props.digitCount) {
    for (let i =0; i < props.digitCount; i++) {
      digits[i] = props.default.charAt(i)
    }
  } else {
    for (let i =0; i < props.digitCount; i++) {
      digits[i] = null;
    }
  }

  const otpCont = ref(null)

</script>
<style scoped>
.digit-box {
    height: 4rem;
    width: 2rem;
    border: 2px solid black;
    display: inline-block;
    border-radius: 5px;
    margin: 5px;
    padding: 15px;
    font-size: 3rem;
}

.digit-box:focus {
  outline: 3px solid black;
}

</style>
