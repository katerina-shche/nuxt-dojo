<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque dolorem sit aliquid sequi eos dolorum, excepturi ut. Veniam, rem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum placeat obcaecati, eveniet architecto molestiae tempore soluta nulla! Earum, laborum explicabo.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'default'
    })
    const { data } = await useFetch('/api/ninjia?name=mario', {
        method: 'POST',
        body: { 'age': 30 }

    })
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>