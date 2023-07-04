import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

const options: any = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };

@Injectable({
  providedIn: 'root',
})
export class DateParserService {

  constructor() {}

  months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aôut', 'Sep', 'Oct', 'Nov', 'Déc'];
  days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  public parseToLocalFr(date: Date): string {
    return date.toLocaleDateString('fr-FR', options);
  }

  public parseToLocalStringFR(date: Date): string {
    return this.days[date.getDay()] + ' ' + date.getDate() + ' ' + this.months[date.getMonth()] + ' ' + date.getFullYear();
  }

  public getFormattedDateTime(dateString: string): string {
    let result = new DatePipe('fr-FR').transform(dateString, 'dd/MM/yyyy hh:mm');
    if (result == null) return '';
    return result;
  }

  public getFormattedDate(dateString: string): Date {
    return new Date(dateString);
  }
}
