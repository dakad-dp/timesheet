import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { DipendentiPageComponent } from "./pages/dipendenti-page/dipendenti-page.component";
import { DettagliPageComponent } from "./pages/dettagli-page/dettagli-page.component";
import { NewDipendentePageComponent } from "./pages/new-dipendente-page/new-dipendente-page.component";
import { EditDipendentePageComponent } from "./pages/edit-dipendente-page/edit-dipendente-page.component";

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "dipendenti",
    component: DipendentiPageComponent
  },
  {
    path: "dipendenti/new",
    component: NewDipendentePageComponent
  },
  {
    path: "dipendenti/:id",
    component: DettagliPageComponent
  },
  {
    path: "dipendenti/:id/edit",
    component: EditDipendentePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
