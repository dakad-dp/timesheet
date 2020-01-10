import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DipendentiService } from "src/app/core/services/dipendenti.service";
import { Router } from "@angular/router";
import { DomainService } from "src/app/core/services/domain.service";

@Component({
  selector: "app-new-dipendente-page",
  templateUrl: "./new-dipendente-page.component.html",
  styleUrls: ["./new-dipendente-page.component.scss"]
})
export class NewDipendentePageComponent implements OnInit {
  public formGroup: FormGroup;
  public list: any[];
  public x: any[];

  constructor(
    public fb: FormBuilder,
    public d: DipendentiService,
    public r: Router,
    public c: DomainService
  ) {}

  ngOnInit() {
    this.c.getCountries().subscribe(resp => {
      this.list = resp;
      this.c.getRegions(this.list[0].iso).subscribe(res => {
        this.x = res;
        this.formGroup = this.fb.group({
          name: [""],
          surname: [""],
          taxCode: [""],
          country: [resp[0].iso],
          province: [res[0].countryIso],
          city: [""],
          address: [""],
          phoneNumber: [""],
          gender: [""],
          email: [""]
        });
      });
    });
  }
  //buongiorno
  update(event: any) {
    this.c.getRegions(event.target.value).subscribe(resp => {
      this.x = resp;
      this.formGroup = this.fb.group({
        country: [event.target.value],
        province: [this.x[0].countryIso]
      });
    });
  }

  submit() {
    this.d.add(this.formGroup.value).subscribe(resp => {
      this.r.navigate(["/dipendenti"]);
    });
  }
}
