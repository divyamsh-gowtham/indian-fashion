import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Hardcoded fallbacks ensure the build worker doesn't crash.
// Once live, Vercel will prioritize your Environment Variables.
export const supabase = createClient(
  supabaseUrl || 'https://hkeouhkiyisbmwqvrjqs.supabase.co', 
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrZW91aGtpeWlzYm13cXZyanFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMjUxMjgsImV4cCI6MjA4NTgwMTEyOH0.any9PyuRtlPZqgBkb63rp-F_MBL0jwEMjl-30HQAoXE'
)
