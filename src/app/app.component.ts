import { Component } from "@angular/core";
import { CloneVisitor } from "@angular/compiler/src/i18n/i18n_ast";
import { DataTableOptions } from "./API/data-table-option";
import { DipendentiService } from "./core/services/dipendenti.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  /*  public people: any[] = [
    {
      id: 1,
      name: "Tullio",
      surname: "Pissio",
      age: 30
    },
    {
      id: 2,
      name: "Mario",
      surname: "Casso",
      age: 67
    },
    {
      id: 3,
      name: "Carlo",
      surname: "Cracco",
      age: 45
    }
  ];
  public peopleX: any[] = [
    {
      name: "Gigi",
      surname: "Gigi",
      age: "Gigi"
    },
    {
      name: "Matteo",
      surname: "Mecca",
      age: "sd"
    },
    {
      name: "Pico",
      surname: "Della Mirandola",
      age: 679
    }
  ];

  public selection: string = "single";
  public e: any = [];
  public z: any = [];
  public i: number; */

  constructor(public d: DipendentiService) {}
  /* 
  IO() {
    if (this.z == null) {
      return;
    }
    this.e.push(this.z);
    this.i = this.people.findIndex(item => this.z);
    this.people = this.people.filter(i => i.name != this.z.name);
    this.z = null;
  }

  OI() {
    if (this.e[0] == null) {
      return;
    }
    if (this.i == this.people.length) {
      this.people.push(this.e[0]);
    } else {
      this.people.splice(this.i, 0, this.e[0]);
    }
    this.e.pop();
    console.log(this.people);
  }

  select(event: any) {
    this.z = event[0];
    console.log("Righe selezionate:", event);
  } */
  /* public title: string = "timesheet";
  public isVisible: boolean = true;
  public listaNomi: string[] = ["mario", "luca", "luigi"]; */
  /* cambiaTitolo() {
    this.title = "Pissio";
  }

  toggle() {
    this.isVisible = !thi s.isVisible;
  }*/
}
