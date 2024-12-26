export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          id: string
          user_id: string | null
          effect_id: string
          content: string
          author_name: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          effect_id: string
          content: string
          author_name: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          effect_id?: string
          content?: string
          author_name?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}