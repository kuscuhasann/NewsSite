import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class LoginGuard implements CanActivate{
    constructor(
        private authService:AuthService,
        private router:Router,
        ) {}
    canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        let logged=this.authService.loggedIn();
        if(logged)
        {
            return true;
        }
        this.router.navigate(["parathormon"]);
        return false;
    }   
}