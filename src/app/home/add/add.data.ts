export class AddData
{
    constructor(public fname:string,public lname:string,public email:string,public phone:string,public password:string)
    {
        console.log("Created AddData");
    }

    toString():string
    {
        console.log("Invoked toString()");
        return 'fName : '+this.fname+", lName : "+this.lname+", email : "+this.email+", phone : "+this.phone+", password : "+this.password;
    }
}