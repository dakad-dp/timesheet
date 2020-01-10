import { Injectable } from "@angular/core";
import * as uuid from "uuid";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
//import { element } from "protractor";

@Injectable({
  providedIn: "root"
})
export class DipendentiService {
  private readonly path = "employees";
  public people: any[] = [];

  constructor(private api: ApiService) {}

  public getList(): Observable<any> {
    return this.api.get(this.path);
  }

  public getById(n: string): any {
    //return this.people.find(item => item.id == n);
    return this.api.get(this.path + "/" + n);
  }

  public getBy(f: string, body: string): any {
    return this.api.filter(this.path, f, body);
  }

  public getByName(n: string): any[] {
    return this.people.filter(item => item.name == n);
  }

  public add(item: any): Observable<any> {
    /* const obj = { ...item }; //clona l'oggetto
    obj.id = uuid.v4(); //o obj.id, aggiunge una proprietà all'oggetto
    this.people.push(obj); */
    return this.api.post(this.path, item);
  }

  public deleteById(n: string): Observable<any> {
    //this.people = this.people.filter(item => item.id != n);
    return this.api.delete(this.path + "/", n);
  }

  public replace(o: any): Observable<any> {
    //this.people = this.people.map(item => (item.id == o.id ? o : item));
    return this.api.patch(this.path + "/" + o.id, o);
  }
}
