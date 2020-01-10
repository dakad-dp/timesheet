import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { DipendentiPageComponent } from "./pages/dipendenti-page/dipendenti-page.component";
import { DettagliPageComponent } from "./pages/dettagli-page/dettagli-page.component";
import { NewDipendentePageComponent } from "./pages/new-dipendente-page/new-dipendente-page.component";
import { EditDipendentePageComponent } from "./pages/edit-dipendente-page/edit-dipendente-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DipendentiPageComponent,
    DettagliPageComponent,
    NewDipendentePageComponent,
    EditDipendentePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
