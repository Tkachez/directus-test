<template>
    <div class="w-full h-screen flex flex-col items-center py-8 gap-4">
        <h1 class="text-white-100 text-3xl">Events page</h1>
        <div v-if="!!events.length" class="grid grid-cols-3 w-full gap-8">
            <NuxtLink v-for="event in events" :key="event.id" :to="`events/${event.id}`">
                <EventsCard 
                    :item="event"
                />
            </NuxtLink>
        </div>
    </div>
    
</template>

<script setup lang="ts">
    const { getItems } = useDirectusItems();

    const events = defineModel({ default: [] })
    const fetchCollection = async () => {
        const collection = await getItems({ collection: "events" });

        console.log(collection)
        events.value = collection
    };

    onMounted(() => {
        fetchCollection()
    })
</script>