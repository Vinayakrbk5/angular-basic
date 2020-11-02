export class RegisterData
{
    constructor(public fullName:string,public email:string)
    {
        console.log("Created RegisterData");
    }

    toString()
    {
        console.log("Invoked toString()");
        return 'fullName : '+this.fullName+", email : "+this.email;
    }
}
