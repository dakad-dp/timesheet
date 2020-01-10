import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DipendentiService } from "src/app/core/services/dipendenti.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-edit-dipendente-page",
  templateUrl: "./edit-dipendente-page.component.html",
  styleUrls: ["./edit-dipendente-page.component.scss"]
})
export class EditDipendentePageComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    public a: ActivatedRoute,
    public fb: FormBuilder,
    public d: DipendentiService,
    public r: Router
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
        email: [resp.email],
        id: [id]
      });
    });
  }

  submit() {
    this.d.replace(this.formGroup.value).subscribe(resp => {
      const list = this.d.getList();
      this.r.navigate(["/dipendenti"]);
    });
  }
}
