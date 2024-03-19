<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    import { useRoute } from 'vue-router'
    import { supabase } from '@/supabase';

    const route = useRoute()
    const movie = ref()

    async function getMovie() {
        try {
            const { data } = await supabase.from('movie').select('*').eq('id', route.params.id).single()
            movie.value = data
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    onMounted(() => {
        getMovie()
    })
</script>

<template>    
    <main class="text-white lg:text-xl">
        <header>
            <div>
                <div class="relative lg:absolute w-screen h-[30vh] lg:h-screen">
                    <img class="w-full h-full object-cover" v-if="movie && movie.poster" :src="movie.poster" alt="Poster Image">
                    <div class="absolute top-0 w-full h-full bg-gradient-to-t from-gray to-black/0"></div>
                    <div class="absolute top-0 w-[50%] h-full lg:bg-gradient-to-r from-gray to-black/0"></div>
                </div>
                
                <div class="grid grid-cols-6 lg:grid-cols-12 gap-3 lg:gap-5 mx-5 lg:mx-48 mt-10 lg:mt-0 lg:absolute lg:h-screen">
                    <div class="col-span-6 lg:flex lg:items-end mb-10">
                        <div class="flex flex-col gap-10">
                            <div class="flex flex-col gap-1 lg:gap-4">
                                <h1 class="text-blue font-semibold text-2xl lg:text-6xl">{{ movie && movie.title }}</h1>
                                <div class="text-white/60 flex gap-2 items-center">
                                    <p>{{ movie && movie.release }}</p>
                                    <div class="w-1 h-1 lg:w-2 lg:h-2 bg-white/75 rounded-full"></div>
                                    <p>{{ movie && movie.time }}</p>
                                    <div class="w-1 h-1 lg:w-2 lg:h-2 bg-white/75 rounded-full"></div>
                                    <RouterLink to="">wating...</RouterLink>
                                </div>
                            </div>
                            <div class="flex flex-col gap-5 lg:gap-10">
                                <div class="flex flex-col gap-3">
                                    <h2 class="font-semibold text-xl lg:hidden">Storyline</h2>
                                    <p class="text-white/60 lg:text-white">{{ movie && movie.storyline }}</p>
                                </div>
                                <div class="flex flex-col gap-1 text-base">
                                    <h3 class="font-semibold">Director : <span class="font-normal text-white/60">{{ movie && movie.director }}</span></h3>
                                    <h3 class="font-semibold">Production : <span class="font-normal text-white/60">waiting...</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </main>
</template>