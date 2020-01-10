import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataTableComponent } from "./data-table/data-table.component";
import { FilterComponent } from "./filter/filter.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DataTableComponent, FilterComponent],
  exports: [DataTableComponent, FilterComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class SharedModule {}
