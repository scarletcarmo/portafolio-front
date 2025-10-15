export interface Education {
    id: number;
    institution: string;
    field?: string;
    degree: string;
    start_year: string;
    end_year?: string;
    description?: string;
}