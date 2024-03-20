<script setup lang="ts">
  import { signInWithGithub, supabase } from '@/supabase';

  const movies = await supabase.from('movie').select(`id, title, poster`);
</script>

<template>
	<div class="text-white">
		<h1 class="text-black">HELLO WORLD</h1>
		<h1 @click="signInWithGithub()">CONNECTION</h1>
	</div>

	<main class="text-white">
		<div v-for="movie of movies.data" :key="movie.id">
			<RouterLink :to="`/movie/${movie.id}`" class="flex flex-col">
				<img :src="movie.poster" alt="">
				<h2>{{ movie.title }}</h2>
			</RouterLink>
		</div>
	</main>
</template>