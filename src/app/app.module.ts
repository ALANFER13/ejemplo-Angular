import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProducListComponent } from './product/produc-list/produc-list.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { TablasMultiComponent } from './formularios/tablas-multi/tablas-multi.component';
import { MenuComponent } from './menu/menu.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CinepolisComponent } from './cinepolis/cinepolis.component'
import { UtlModule } from './utl/utl.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProducListComponent,
    ProductFilterPipe,
    OperasBasComponent,
    TablasMultiComponent,
    MenuComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MaterialModule,
    UtlModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
