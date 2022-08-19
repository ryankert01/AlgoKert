

<script setup>
import { useData } from 'vitepress'

const { theme } = useData()
</script>

# Table of Content


<div v-for="i in theme.sidebar">
    <!-- {{ i }} -->
    <p>{{ i.text }} : </p>
    <p v-for="j in i.items">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ j.text }}</p>
</div>