<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
	import { useRoute } from 'vue-router/auto'
    import { supabase } from '@/supabase';

	const route = useRoute('/celebrity/[id]')
	const celebrity = await supabase.from('star').select(`*, casting ( movie ( id, poster) )`).eq('id', route.params.id).single();

</script>

<template>
	<main class="text-white mx-5 lg:mx-32 lg:mt-32">
		<div class="flex flex-col sm:flex-row gap-5 sm:gap-10">
			<img :src="celebrity.data.picture" class="h-[30vh] object-cover" alt="">
			<div class="flex flex-col gap-4">
				<h1 class="text-xl md:text-3xl font-semibold">{{ celebrity.data.name }}</h1>
				<div class="flex flex-col gap-2">
					<h2 class="md:text-2xl font-semibold">Biography</h2>
					<p class="text-white/60 md:text-xl">{{ celebrity.data.biography }}</p>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-5">
			<h2 class="text-xl font-semibold mt-5">Filmographie</h2>
			<div class="grid grid-cols-6 lg:grid-cols-12 gap-3 lg:gap-5">
				<div v-for="data of celebrity.data.casting" :key="data.id" class="col-span-3">
					<RouterLink :to="`/movie/${data.movie.id}`">
						<img :src="data.movie.poster" alt="" class="object-cover">
					</RouterLink>
				</div>
			</div>
		</div>
	</main>
</template>