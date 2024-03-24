<script setup lang="ts">
  import { signInWithGithub, supabase } from '@/supabase';

  const movies = await supabase.from('movie').select(`id, poster`);
</script>

<template>
	<!-- <div class="text-white">
		<h1 class="text-black">HELLO WORLD</h1>
		<h1 @click="signInWithGithub()">CONNECTION</h1>
	</div> -->

	<main class="text-white mx-5 lg:mx-32 flex flex-col gap-5 lg:mt-32">
		<h2 class="text-xl font-semibold">Notre sélection pour vous</h2>
		<div class="grid grid-cols-6 lg:grid-cols-12 gap-3 lg:gap-5">
			<div v-for="movie of movies.data" :key="movie.id" class="col-span-3">
				<RouterLink :to="`/movie/${movie.id}`">
					<img :src="movie.poster" alt="" class="object-cover">
				</RouterLink>
			</div>
		</div>
	</main>
</template>