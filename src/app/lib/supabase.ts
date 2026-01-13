import { createClient } from '@supabase/supabase-js'
import {environment} from '../../environments/environment';

const supabaseUrl = environment.EXPO_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = environment.EXPO_PUBLIC_SUPABASE_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})
