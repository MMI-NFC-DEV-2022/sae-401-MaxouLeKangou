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
      agent: {
        Row: {
          created_at: string
          id: number
          id_user: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_user?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_user?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_agent_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      basket: {
        Row: {
          bande: string | null
          created_at: string
          empeigne: string | null
          id: number
          lacet: string | null
          languette: string | null
          oeillet: string | null
          pointe: string | null
          semelle: string | null
          trimestre: string | null
        }
        Insert: {
          bande?: string | null
          created_at?: string
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          oeillet?: string | null
          pointe?: string | null
          semelle?: string | null
          trimestre?: string | null
        }
        Update: {
          bande?: string | null
          created_at?: string
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          oeillet?: string | null
          pointe?: string | null
          semelle?: string | null
          trimestre?: string | null
        }
        Relationships: []
      }
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
      district: {
        Row: {
          created_at: string
          id: number
          id_municipalities: number | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_municipalities?: number | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_municipalities?: number | null
          name?: string | null
        }
        Relationships: []
      }
      genre: {
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
      genres: {
        Row: {
          id: number
          id_genre: number | null
          id_movie: number | null
        }
        Insert: {
          id?: number
          id_genre?: number | null
          id_movie?: number | null
        }
        Update: {
          id?: number
          id_genre?: number | null
          id_movie?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_genres_id_genre_fkey"
            columns: ["id_genre"]
            isOneToOne: false
            referencedRelation: "genre"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_genres_id_movie_fkey"
            columns: ["id_movie"]
            isOneToOne: false
            referencedRelation: "movie"
            referencedColumns: ["id"]
          },
        ]
      }
      house: {
        Row: {
          address: string | null
          bathroom: number | null
          bedroom: number | null
          favorie: boolean | null
          id: number
          id_agent: number | null
          id_district: number | null
          name: string
          picture: string | null
          price: number | null
          surface: string | null
        }
        Insert: {
          address?: string | null
          bathroom?: number | null
          bedroom?: number | null
          favorie?: boolean | null
          id?: number
          id_agent?: number | null
          id_district?: number | null
          name: string
          picture?: string | null
          price?: number | null
          surface?: string | null
        }
        Update: {
          address?: string | null
          bathroom?: number | null
          bedroom?: number | null
          favorie?: boolean | null
          id?: number
          id_agent?: number | null
          id_district?: number | null
          name?: string
          picture?: string | null
          price?: number | null
          surface?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_house_id_agent_fkey"
            columns: ["id_agent"]
            isOneToOne: false
            referencedRelation: "agent"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_house_id_district_fkey"
            columns: ["id_district"]
            isOneToOne: false
            referencedRelation: "district"
            referencedColumns: ["id"]
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
