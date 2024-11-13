<template>
    <div v-if="event" class="w-full h-full text-white-100">
        <h1>{{ event.title }}</h1>
        <p>{{ event.description }}</p>
    </div>
</template>

<script setup lang="ts">
    const { getItemById } = useDirectusItems();

    const route = useRoute();
    const event = ref()

    try {
        console.log(route)
        event.value = await getItemById({ collection: "events", id: route.params.events });        
    } catch (e) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Post Not Found'
        });
    }
</script>