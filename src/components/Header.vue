<script setup lang="ts">
    import { signInWithGithub, supabase, signOut, user } from '@/supabase';
	import SearchIcon from './SearchIcon.vue';
    import { ref } from 'vue';

    const data = ref(null);

    async function loadUserData() {
        if (user) {
            data.value = user._rawValue.identities[0].identity_data;
        } else {
			console.log('Utilisateur non connecté');
		}
    }

    loadUserData();
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

			<button v-if="user !== null" @click="signOut(); data = null" class="lg:flex lg:gap-3 lg:items-center">
				<p>{{ data.user_name }}</p>
				<img :src="data.avatar_url" class="lg:w-10 lg:h-10 lg:rounded-full" alt="profil picture">
			</button>

			<button v-else @click="signInWithGithub()" class="lg:flex lg:gap-3 lg:items-center">
				<p>Connexion</p>
				<img src="@/assets/img/avatar.jpg" class="lg:w-10 lg:h-10 lg:rounded-full" alt="profil picture">
			</button>
        </div>
    </div>
</template>
