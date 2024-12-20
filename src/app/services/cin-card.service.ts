import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IdCardData } from '../model/interface/Card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinCardService {

  private apiUrl = `${environment.API_OCR}/cinCards`;

  constructor(private http: HttpClient) {}

   /**
   * Fetch all Cin Cards
   */
   getAllCinCards(): Observable<IdCardData[]> {
    return this.http.get<IdCardData[]>(this.apiUrl);
  }

  /**
   * Fetch a Cin Card by ID
   * @param id - Cin Card ID
   */
  getCinCardById(id: number): Observable<IdCardData> {
    return this.http.get<IdCardData>(`${this.apiUrl}/${id}`);
  }

  /**
   * Create a new Cin Card
   * @param data - Cin Card Data
   */
  createCinCard(data: IdCardData): Observable<IdCardData> {
    return this.http.post<IdCardData>(this.apiUrl, data);
  }

  /**
   * Update an existing Cin Card
   * @param id - Cin Card ID
   * @param data - Updated Cin Card Data
   */
  updateCinCard(id: number, data: IdCardData): Observable<IdCardData> {
    return this.http.put<IdCardData>(`${this.apiUrl}/${id}`, data);
  }

  /**
   * Delete a Cin Card by ID
   * @param id - Cin Card ID
   */
  deleteCinCard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
