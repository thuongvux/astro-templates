export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	public: {
		Tables: {
			Books: {
				Row: {
					authors: string[] | null;
					created_at: string;
					description: string | null;
					ggcover: string | null;
					ggid: string;
					id: number;
					title: string;
				};
				Insert: {
					authors?: string[] | null;
					created_at?: string;
					description?: string | null;
					ggcover?: string | null;
					ggid: string;
					id?: number;
					title: string;
				};
				Update: {
					authors?: string[] | null;
					created_at?: string;
					description?: string | null;
					ggcover?: string | null;
					ggid?: string;
					id?: number;
					title?: string;
				};
				Relationships: [];
			};
			messages: {
				Row: {
					created_at: string;
					id: string;
					message: string;
					receiver_id: string;
					sender_id: string;
				};
				Insert: {
					created_at?: string;
					id?: string;
					message: string;
					receiver_id: string;
					sender_id?: string;
				};
				Update: {
					created_at?: string;
					id?: string;
					message?: string;
					receiver_id?: string;
					sender_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "messages_receiver_id_fkey";
						columns: ["receiver_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "messages_sender_id_fkey";
						columns: ["sender_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			Reviews: {
				Row: {
					author: string | null;
					cover: string | null;
					created_at: string;
					id: string;
					title: string | null;
				};
				Insert: {
					author?: string | null;
					cover?: string | null;
					created_at?: string;
					id?: string;
					title?: string | null;
				};
				Update: {
					author?: string | null;
					cover?: string | null;
					created_at?: string;
					id?: string;
					title?: string | null;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (Database["public"]["Tables"] & Database["public"]["Views"])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
				Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
			Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
	  }
		? R
		: never
	: PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
				Database["public"]["Views"])
	  ? (Database["public"]["Tables"] &
				Database["public"]["Views"])[PublicTableNameOrOptions] extends {
				Row: infer R;
		  }
			? R
			: never
	  : never;

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof Database["public"]["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
	  }
		? I
		: never
	: PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
	  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
				Insert: infer I;
		  }
			? I
			: never
	  : never;

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof Database["public"]["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
	  }
		? U
		: never
	: PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
	  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
				Update: infer U;
		  }
			? U
			: never
	  : never;

export type Enums<
	PublicEnumNameOrOptions extends
		| keyof Database["public"]["Enums"]
		| { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
		: never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
	  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
	  : never;
