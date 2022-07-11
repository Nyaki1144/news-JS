export default interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export type SourcePreview = Pick<ISources, 'id' | 'name'>;
