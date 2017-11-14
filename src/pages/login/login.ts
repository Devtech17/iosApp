import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
    templateUrl: 'login.html'
})
export class LoginPage {
    email: string;
    password: string;

    constructor(public navCtrl: NavController, public http: Http) {

    }

    Login() {
        this.http.get("https://successive-stocks.000webhostapp.com/login.php" +"?email=" + this.email + "&password=" + this.password, { withCredentials: true }).subscribe(res => {
            console.log(res);
        });

    }

    forgotPassword(){
        console.log("Password forgot");
    }


}