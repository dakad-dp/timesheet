import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DipendentiService } from "src/app/core/services/dipendenti.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from "src/app/core/services/api.service";

@Component({
  selector: "app-dettagli-page",
  templateUrl: "./dettagli-page.component.html",
  styleUrls: ["./dettagli-page.component.scss"]
})
export class DettagliPageComponent implements OnInit {
  public obj: any = [];
  public formGroup: FormGroup;

  constructor(
    public a: ActivatedRoute,
    public fb: FormBuilder,
    public d: DipendentiService,
    public api: ApiService
  ) {}

  ngOnInit() {
    const id = this.a.snapshot.params.id;
    this.d.getById(id).subscribe(resp => {
      this.formGroup = this.fb.group({
        name: [resp.name],
        surname: [resp.surname],
        taxCode: [resp.taxCode],
        country: [resp.country],
        province: [resp.province],
        city: [resp.city],
        address: [resp.address],
        phoneNumber: [resp.phoneNumber],
        gender: [resp.gender],
        email: [resp.email]
      });
    });
  }
}
