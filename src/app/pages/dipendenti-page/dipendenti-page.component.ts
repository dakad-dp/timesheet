import { Component, OnInit } from "@angular/core";
import { DataTableOptions } from "src/app/API/data-table-option";
import { DipendentiService } from "src/app/core/services/dipendenti.service";
import { Router } from "@angular/router";
import { ApiService } from "src/app/core/services/api.service";

@Component({
  selector: "app-dipendenti-page",
  templateUrl: "./dipendenti-page.component.html",
  styleUrls: ["./dipendenti-page.component.scss"]
})
export class DipendentiPageComponent implements OnInit {
  public options: DataTableOptions = {
    colOptions: [
      {
        label: "Name",
        name: "name"
      },
      {
        label: "Surname",
        name: "surname"
      },
      {
        label: "Tax Code",
        name: "taxCode"
      },
      {
        label: "Country",
        name: "country"
      },
      {
        label: "Province",
        name: "province"
      },
      {
        label: "City",
        name: "city"
      },
      {
        label: "Address",
        name: "address"
      },
      {
        label: "Phone number",
        name: "phoneNumber"
      },
      {
        label: "Gender",
        name: "gender"
      },
      {
        label: "Email",
        name: "email"
      }
    ]
  };
  public list: any[];

  constructor(
    public d: DipendentiService,
    public r: Router,
    public a: ApiService
  ) {}

  ngOnInit() {
    this.d.getList().subscribe(resp => {
      this.list = resp;
    });
  }

  delete(event: any) {
    this.d.deleteById(event.id).subscribe(resp => {
      this.d.getList().subscribe(res => {
        this.list = res;
      });
    });
  }

  edit(event: any) {
    const x = event;
    this.r.navigate(["dipendenti", x.id, "edit"]);
  }

  detail(event: any) {
    const x = event;
    this.r.navigate(["dipendenti", x.id]);
  }

  search(event: any) {
    this.d.getBy(event.filter, event.value).subscribe((resp: any[]) => {
      this.list = resp;
    });
  }

  /* select(event: any[]) {
    const x = event[0];
    this.r.navigate(["dipendenti", x.id]);
  } */
}
