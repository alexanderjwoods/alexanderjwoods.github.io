export class Experience {
    public title:string;
    public company:string;
    public description:string;
    public startYear:string;
    public endYear:string;

    constructor(title:string, company:string, description:string, startYear:string, endYear:string) {
        this.title = title;
        this.company = company;
        this.description = description;
        this.startYear = startYear;
        this.endYear = endYear;
    }
}