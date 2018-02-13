<template>
  <div>
    time
  </div>
</template>
<script>
import {controller} from 'vuetrol'
import storage from 'jfstorage'

export default controller()({
  name: 'Time',
  vuetrol: 'Time',
  mounted() {
    storage.set()
    console.log(storage)
  }
})
</script>