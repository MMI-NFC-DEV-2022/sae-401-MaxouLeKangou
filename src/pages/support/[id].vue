<script setup lang="ts">
	import { useRoute } from 'vue-router/auto'
	import { supabase } from '@/supabase';

	const route = useRoute('/support/[id]')
	const support = await supabase.from('support').select(`*, movie ( poster )`).eq('id', route.params.id).single();

	console.log(support.data)
</script>

<template>
	<div class="text-white flex flex-col lg:grid lg:grid-cols-2 gap-5 mx-5 lg:mx-32 lg:mt-32">
		<RouterLink :to="`/movie/${support.data.id_movie}`" ><img :src="support.data.movie.poster" class="object-cover" alt=""></RouterLink>
		<div class="flex flex-col gap-10">
			<div>
				<h2 class="font-semibold">SUPPORT TYPE : <span class="text-white/60 font-normal">{{ support.data.name }}</span></h2>
				<p class="font-semibold">SUPPORT NOTE : <span class="text-yellow font-normal">{{ support.data.note }}</span></p>
				<p class="font-semibold">SUPPORT BIO : <span class="text-white/60 font-normal">{{ support.data.bio }}</span></p>
			</div>
			<a :href="support.data.link" class="font-semibold">SUPPORT LINK : <span class="text-blue font-normal">{{ support.data.link }}</span></a>
		</div>
	</div>
</template>