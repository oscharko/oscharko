<template>
  <AboutMe />
  <WhatIDo />
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'
import WhatIDo from '@/components/WhatIDo.vue'

export default {
  name: 'Home',
  components: {
    AboutMe,
    WhatIDo
  }
}
</script>
