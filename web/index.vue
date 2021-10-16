<template>
  <div>{{ message }}</div>
</template>

<script>
import { ref } from 'vue'
import { hello } from "../apis/hello";

export default {
    setup() {
        const message = ref("loading...")
        hello('world').then( x=>message.value=x )

        return {
            message
        }
    }
}
</script>