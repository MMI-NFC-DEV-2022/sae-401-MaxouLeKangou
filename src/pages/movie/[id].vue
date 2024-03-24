<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import { useRoute } from 'vue-router/auto'
    import { supabase } from '@/supabase';
    import Star from '@/components/Star.vue'

    const route = useRoute('/movie/[id]')
    const movie = await supabase.from('movie').select(`*, genres ( name ), casting ( id, role, star ( id, name, picture) ), star ( id, name, picture), product ( id_company, company ( name ) )`).eq('id', route.params.id).single();
    const support = await supabase.from('support').select(`name, note, link, type`).eq('id_movie', route.params.id).order('note', { ascending: false });

    const support_physical = support.data.filter((item) => item.type === 'Physical')
    const support_digital = support.data.filter((item) => item.type === 'Digital')

</script>

<template>    
    <main class="text-white flex flex-col gap-10 lg:gap-48 lg:text-xl">
        <header>
            <div class="relative w-screen h-[30vh] lg:h-screen lg:absolute z-0">
                <img class="w-full h-full object-cover" :src="movie.data.poster" alt="Poster Image">
                <div class="absolute top-0 w-full h-full bg-gradient-to-t from-gray to-black/0"></div>
                <div class="absolute top-0 w-[50%] h-full lg:bg-gradient-to-r from-gray to-black/0"></div>
            </div>
            
            <div class="lg:relative lg:h-screen">
                <div class="grid grid-cols-6 lg:grid-cols-12 gap-3 lg:gap-5 mx-5 lg:mx-48 mt-10 lg:mt-0 lg:h-full">
                    <div class="col-span-6 lg:flex lg:items-end lg:mb-[10vh]">
                        <div class="flex flex-col gap-10">
                            <div class="flex flex-col gap-1 lg:gap-4">
                                <h1 class="text-blue font-semibold text-2xl lg:text-6xl">{{ movie.data.title }}</h1>
                                <div class="text-white/60 flex flex-wrap gap-2 items-center">
                                    <p>{{ movie.data.release }}</p>
                                    <div class="w-1 h-1 lg:w-2 lg:h-2 bg-white/75 rounded-full"></div>
                                    <p>{{ movie.data.time }}</p>
                                    <div class="w-1 h-1 lg:w-2 lg:h-2 bg-white/75 rounded-full"></div>
                                    <template v-for="genre in movie.data.genres" :key="genre.id">
                                        <RouterLink to="#" class="block">{{ genre.name }}, </RouterLink>
                                    </template>
                                </div>
                            </div>
                            <div class="flex flex-col gap-5 lg:gap-10">
                                <div class="flex flex-col gap-3">
                                    <h2 class="font-semibold text-xl lg:hidden">Storyline</h2>
                                    <p class="text-white/60 lg:text-white">{{ movie.data.storyline }}</p>
                                </div>
                                <div class="flex flex-col gap-1 text-base">
                                    <h3 class="font-semibold">Director : <RouterLink :to="`/celebrity/${movie.data.star.id}`" class="font-normal text-white/60">{{ movie.data.star.name }}</RouterLink></h3>
                                    <h3 class="font-semibold">Production : <RouterLink to="#" class="font-normal text-white/60" v-for="product of movie.data.product" :key="product.id">{{ product.company.name }}, </RouterLink></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section class="mx-5 lg:mx-48 flex flex-col gap-3 lg:gap-10">
            <h2 class="font-semibold text-xl lg:text-4xl">Cast</h2>
            <div class="flex gap-4 lg:gap-8">
                <ul v-for="celebrity of movie.data.casting" :key="celebrity.id" class="text-center lg:text-left">
                    <RouterLink :to="`/celebrity/${celebrity.star.id}`" class="flex flex-col gap-2">
                        <img :src="celebrity.star.picture" alt="Celebrity Image" class="h-20 w-20 lg:h-80 lg:w-56 rounded-full lg:rounded-none object-cover mx-auto">
                        <div>
                            <p class="font-semibold">{{ celebrity.role }}</p>
                            <p class="text-white/60">{{ celebrity.star.name }}</p>
                        </div>
                    </RouterLink>
                </ul>
            </div>
        </section>

        <section class="mx-5 lg:mx-48 flex flex-col gap-3 lg:gap-10">
            <h2 class="font-semibold text-xl lg:text-4xl">Support</h2>
            <div class="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-10 text-white/60">
                <div class="col-span-1 lg:col-span-2 lg:col-start-2 flex flex-col gap-3 lg:gap-5">
                    <h3 class="text-white font-semibold text-base lg:text-3xl">Physical</h3>
                    <div v-for="item in support_physical" :key="item.id">
                        <a :href="item.link" class="flex justify-between lg:py-5 lg:px-7 lg:bg-light_gray">
                            <p>{{ item.name }}</p>
                            <div class="flex gap-2 items-center">
                                <span class="text-yellow">{{ item.note }}</span>
                                <Star />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-span-1 lg:col-span-2 lg:col-start-4 flex flex-col gap-3 lg:gap-5">
                    <h3 class="text-white font-semibold text-base lg:text-3xl">Digital</h3>
                    <div v-for="item in support_digital" :key="item.id">
                        <a :href="item.link" class="flex justify-between lg:py-5 lg:px-7 lg:bg-light_gray">
                            <p>{{ item.name }}</p>
                            <div class="flex gap-2 items-center">
                                <span class="text-yellow">{{ item.note }}</span>
                                <Star />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="mx-5 lg:mx-48 flex flex-col gap-3 lg:gap-10">
            <h2 class="font-semibold text-xl lg:text-4xl">Opinion</h2>
        </section>
    </main>
</template>