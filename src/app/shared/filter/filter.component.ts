import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DataTableOptions } from "src/app/API/data-table-option";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  public formGroup: FormGroup;
  @Input()
  public options: DataTableOptions;
  @Output()
  onSearch: EventEmitter<any> = new EventEmitter<any>();

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      filter: [this.options.colOptions[0].name],
      value: [""]
    });
  }

  search() {
    this.onSearch.emit(this.formGroup.value);
  }
}
