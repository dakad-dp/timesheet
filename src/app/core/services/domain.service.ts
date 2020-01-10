import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DomainService {
  private readonly countries = "countries";
  private readonly regions = "regions";
  constructor(private api: ApiService) {}

  public getCountries(): Observable<any> {
    return this.api.get(this.countries);
  }

  public getRegions(item: any): Observable<any> {
    return this.api.get(this.regions + "?" + "countryIso=" + item);
  }
}
