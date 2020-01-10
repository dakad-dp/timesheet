import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { INFERRED_TYPE } from "@angular/compiler/src/output/output_ast";
import { DataTableOptions } from "src/app/API/data-table-option";
import { CursorError } from "@angular/compiler/src/ml_parser/lexer";
import { DipendentiService } from "src/app/core/services/dipendenti.service";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"]
})
export class DataTableComponent implements OnInit {
  @Input()
  public list: any[] = [];

  @Input()
  public options: DataTableOptions;

  @Input()
  public selection: string;

  /*   @Output()
  onSelect: EventEmitter<any> = new EventEmitter<any>(); */
  @Output()
  onDetail: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onDel: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onEdit: EventEmitter<any> = new EventEmitter<any>();

  public editEnabled: boolean = false;
  public deleteEnabled: boolean = false;
  //public listI: boolean[] = [];
  constructor() {}

  ngOnInit() {
    //this.list.forEach(i => this.listI.push(false));
  }

  enableEdit() {
    this.editEnabled = !this.editEnabled;
  }

  enableDelete() {
    this.deleteEnabled = !this.deleteEnabled;
  }

  delete(x: any) {
    this.onDel.emit(x);
  }

  edit(x: any) {
    this.onEdit.emit(x);
  }

  detail(x: any) {
    this.onDetail.emit(x);
  }

  /* select(index: number) {
    if (this.selection === "multiple") {
      this.listI[index] = !this.listI[index];
    } else if (this.selection === "single") {
      this.listI = this.listI.map(i => false);
      this.listI[index] = true;
    }

    const list: any[] = [];
    this.listI.forEach((item, index) => {
      if (item) {
        list.push(this.list[index]);
      }
    });
    this.onSelect.emit(list);
  } */

  /*  public getKey(item) {
    return Object.keys(item);
  } */
}
