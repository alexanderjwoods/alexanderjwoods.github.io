export class Education {
    public institution:string;
    public degree: string;
    public description: string;
    public year:string;

    constructor(institution:string, degree:string, description:string, year:string) {
        this.institution = institution;
        this.degree = degree;
        this.description = description;
        this.year = year;
    }
}