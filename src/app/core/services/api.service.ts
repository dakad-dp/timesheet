import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private readonly host = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  public get(path: string): Observable<any> {
    return this.http.get(this.host + "/" + path);
  }

  public post(path: string, body: any): Observable<any> {
    return this.http.post(this.host + "/" + path, body);
  }

  public delete(path: string, body: any): Observable<any> {
    return this.http.delete(this.host + "/" + path + body);
  }

  public patch(path: string, body: any): Observable<any> {
    return this.http.patch(this.host + "/" + path, body);
  }

  public filter(path: string, f: string, value: string): Observable<any> {
    if (value) {
      return this.http.get(this.host + "/" + path + "?" + f + "=" + value);
    }
    return this.http.get(this.host + "/" + path);
  }
}
