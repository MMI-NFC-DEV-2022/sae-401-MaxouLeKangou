import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'vue-router/auto'
import { ref } from 'vue'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    })
}

export async function signOut() {
    await supabase.auth.signOut()
    useRouter().push('/')
}

const { data } = await supabase.auth.getUser()
export const user = ref(data.user)
supabase.auth.onAuthStateChange( (evt,session)=>{
    user.value = session?.user ?? null
})