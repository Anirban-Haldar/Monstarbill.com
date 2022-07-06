import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';




@NgModule({
  declarations: [
    //HeaderComponent,
    //SidenavComponent
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatIcon,
    MatToolbar,

    CommonModule
  ]
})
export class ComponentModule { }
