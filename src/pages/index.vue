<script setup lang="ts">
  import { signInWithGithub } from '@/supabase';
</script>

<template>
	<div>
		<h1 class="text-black">HELLO WORLD</h1>
		<h1 @click="signInWithGithub()">CONNECTION</h1>
	</div>
</template>