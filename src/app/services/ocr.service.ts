import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IdCardData } from '../model/interface/Card';
import { map, Observable } from 'rxjs';
import dayjs from 'dayjs';
@Injectable({
  providedIn: 'root',
})
export class OcrService {
  private apiUrl = `${environment.API_OCR}/ocr/upload`;

  constructor(private http: HttpClient) {}

  /**
   * Upload and process a CIN file
   * @param file - File to be uploaded
   */
  processCinFile(file: File): Observable<IdCardData> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<IdCardData>(this.apiUrl, formData).pipe(
      map((data) => ({
        ...data,
        dateOfBirth: data.dateOfBirth,
        expiryDate: data.expiryDate,
      }))
    );
  }
}
