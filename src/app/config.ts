export class CONFIG {
    // For QA version
    //  public static _url: string = "https://suzukiml-qa.tti-global.com/_api/web/en_us/";
    // For Developemet version 
    public static _url: string = "https://suzukiml-dev.tti-global.com/_api/web/en_us/";
     // For Production version 
    // public static _url: string = "https://suzukiml.tti-global.com/_api/web/en_us/";

    //Common variables//
    public static _loggedIn: boolean;
    public static _user_mobile: any='';
    public static _active_url:any='';
    public static forgot_cont:boolean = false;
    public static forgot_user:any;
    public static forgot_mobile_no:any;
    // messages
    public static enter_new_password: string = "Please fill the new password";


    constructor() { }
}