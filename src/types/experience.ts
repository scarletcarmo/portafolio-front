export interface Experience {
    id: number;
    position: string;
    companay: string;
    description: string;
    start_date: string;
    end_date?: string;
    tech_used: string;
    location: string;
    type?: string;
}