export class SineupData
{
    constructor(public firstName:string,public lastName:string,public email:string,public mobile:string,public dob:string,public password:string)
    {
        console.log("Created SineupData")
    }

    toString()
    {
        console.log("Invoked toString()");
        return 'firstName : '+this.firstName+", lastName : "+this.lastName+', email : '+this.email+", mobile : "+this.mobile+", dob : "+this.dob+", password : "+this.password;
    }
}