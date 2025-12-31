import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Em Vite as variáveis de ambiente expostas ao client devem começar com VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
	// Lance um erro em tempo de execução para ficar claro durante o desenvolvimento
	throw new Error(
		'Variáveis de ambiente do Supabase não encontradas. Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no .env'
	)
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)

export default supabase

