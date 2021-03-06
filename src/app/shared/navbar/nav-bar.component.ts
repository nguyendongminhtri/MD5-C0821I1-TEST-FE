import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import {ThemePickerModule} from '../theme-picker';
import {ThemeStorage} from '../theme-picker/theme-storage/theme-storage';
import {StyleManager} from '../style-manager';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
    isCheckLogin = false;
    name: any;
    constructor(private tokenService: TokenService) {
    }
    ngOnInit(): void {
        if(this.tokenService.getTokenKey()){
            this.isCheckLogin = true;
            this.name = this.tokenService.getNameKey();
        }
    }

}

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MatButtonModule,
        MatMenuModule,
        RouterModule,
        ThemePickerModule,
        MatIconModule,
        MatFormFieldModule,
    ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
  providers: [StyleManager, ThemeStorage]
})
export class NavBarModule {}
