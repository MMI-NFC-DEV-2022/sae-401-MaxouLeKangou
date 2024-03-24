<script setup lang="ts">
	import SearchIcon from './SearchIcon.vue';
</script>

<template>
	<div class="hidden lg:flex lg:justify-center">
		<div class="lg:fixed lg:top-5 lg:bg-light_gray/75 lg:text-white lg:px-14 lg:py-3 lg:rounded-md lg:flex lg:gap-20 lg:items-center lg:z-50">
			<div class="lg:flex lg:gap-10">
				<SearchIcon class="cursor-pointer" />
				<RouterLink to="/" class="">Accueil</RouterLink>
				<RouterLink to="/" class="">Collections</RouterLink>
				<RouterLink to="/" class="">Célébrités</RouterLink>
			</div>
			<RouterLink to="/" class="lg:flex lg:gap-3 lg:items-center">
				<p>Maxime Legrand</p>
				<img src="@/assets/img/personal-low.png" class="lg:w-10 lg:h-10 lg:rounded-full" alt="profil picture">
			</RouterLink>
		</div>
	</div>
</template>