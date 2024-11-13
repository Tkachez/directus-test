<template>
    <div 
        class="p-4 flex flex-col gap-4 text-white-200 event-card"
        :class="[eventImage]"
    >
        <div>{{ item.title }}</div>
        <div>{{ item.description }}</div>
        <img :src="eventImage" class="w-full h-[200px]" loading="lazy">
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        item: {
            title: string,
            description: string,
            main_image: string
        }
    }>()

    const eventImage = computed(() => `https://neon-directus.onrender.com/assets/${props.item.main_image}`)
</script>