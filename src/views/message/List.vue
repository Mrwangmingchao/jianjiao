<template>
  <div id="box">
      <headbar>
          <h3>  尖叫精选 </h3>
      </headbar>
  </div>
</template>

<script>
import axios from 'axios'
import headbar from '@/components/HeadBar'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/message/messageList?msgType=2&currentPage=1&pageSize=10&_=1562725357853').then(res => {
    })
  },
  components: {
    headbar
  }
}
</script>
