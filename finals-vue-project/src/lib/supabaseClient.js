import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://tvkwsakukyykxedxrnqt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2a3dzYWt1a3l5a3hlZHhybnF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNDg3MjIsImV4cCI6MjA1NjgyNDcyMn0.i6CwNOomPIDK2MS2Pk516TRnuA1Nr8Pn99TWzLKZsP0')