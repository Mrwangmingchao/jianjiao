<template>
    <div>
        index
        <indextabbar></indextabbar>
        <router-view></router-view>
    </div>
</template>

<script>

import indextabbar from '@/components/IndexTabbar'
export default {
  components: {
    indextabbar
  }
}
</script>
