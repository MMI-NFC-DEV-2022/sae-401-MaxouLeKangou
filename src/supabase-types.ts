export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      casting: {
        Row: {
          id: number
          id_movie: number | null
          id_star: number | null
          role: string | null
        }
        Insert: {
          id?: number
          id_movie?: number | null
          id_star?: number | null
          role?: string | null
        }
        Update: {
          id?: number
          id_movie?: number | null
          id_star?: number | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_casting_id_movie_fkey"
            columns: ["id_movie"]
            isOneToOne: false
            referencedRelation: "movie"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_casting_id_star_fkey"
            columns: ["id_star"]
            isOneToOne: false
            referencedRelation: "star"
            referencedColumns: ["id"]
          },
        ]
      }
      company: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      genre: {
        Row: {
          name: string
        }
        Insert: {
          name: string
        }
        Update: {
          name?: string
        }
        Relationships: []
      }
      genres: {
        Row: {
          id: number
          id_movie: number | null
          name: string | null
        }
        Insert: {
          id?: number
          id_movie?: number | null
          name?: string | null
        }
        Update: {
          id?: number
          id_movie?: number | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_genres_id_movie_fkey"
            columns: ["id_movie"]
            isOneToOne: false
            referencedRelation: "movie"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_genres_name_fkey"
            columns: ["name"]
            isOneToOne: false
            referencedRelation: "genre"
            referencedColumns: ["name"]
          },
        ]
      }
      movie: {
        Row: {
          director: number | null
          id: number
          poster: string | null
          release: string | null
          storyline: string | null
          time: string | null
          title: string | null
        }
        Insert: {
          director?: number | null
          id?: number
          poster?: string | null
          release?: string | null
          storyline?: string | null
          time?: string | null
          title?: string | null
        }
        Update: {
          director?: number | null
          id?: number
          poster?: string | null
          release?: string | null
          storyline?: string | null
          time?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_movie_director_fkey"
            columns: ["director"]
            isOneToOne: false
            referencedRelation: "star"
            referencedColumns: ["id"]
          },
        ]
      }
      product: {
        Row: {
          id: number
          id_company: number | null
          id_movie: number | null
        }
        Insert: {
          id?: number
          id_company?: number | null
          id_movie?: number | null
        }
        Update: {
          id?: number
          id_company?: number | null
          id_movie?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_product_id_company_fkey"
            columns: ["id_company"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_product_id_movie_fkey"
            columns: ["id_movie"]
            isOneToOne: false
            referencedRelation: "movie"
            referencedColumns: ["id"]
          },
        ]
      }
      star: {
        Row: {
          biography: string | null
          birthday: string | null
          id: number
          name: string | null
          picture: string | null
        }
        Insert: {
          biography?: string | null
          birthday?: string | null
          id?: number
          name?: string | null
          picture?: string | null
        }
        Update: {
          biography?: string | null
          birthday?: string | null
          id?: number
          name?: string | null
          picture?: string | null
        }
        Relationships: []
      }
      support: {
        Row: {
          bio: string | null
          id: number
          id_movie: number | null
          link: string | null
          name: string | null
          note: number | null
          type: string | null
        }
        Insert: {
          bio?: string | null
          id?: number
          id_movie?: number | null
          link?: string | null
          name?: string | null
          note?: number | null
          type?: string | null
        }
        Update: {
          bio?: string | null
          id?: number
          id_movie?: number | null
          link?: string | null
          name?: string | null
          note?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_support_id_movie_fkey"
            columns: ["id_movie"]
            isOneToOne: false
            referencedRelation: "movie"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_support_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "support_type"
            referencedColumns: ["type"]
          },
        ]
      }
      support_type: {
        Row: {
          type: string
        }
        Insert: {
          type: string
        }
        Update: {
          type?: string
        }
        Relationships: []
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
