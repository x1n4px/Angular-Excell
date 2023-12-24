import { Injectable } from '@angular/core';
import { IPokemonInfo } from '../interfaces/pokemon-response.interface';
import { ICustomHeader } from '../interfaces/custom-header.interface';
import * as XLSX from 'xlsx';
import { IPokemonReport } from '../adapters/pokemon-report.class';

@Injectable({
  providedIn: 'root'
})
export class ExcelReportService {
  constructor() { }


  hd1 = `Relación de Matrículas del Curso: '¿QUÉ ES LA DISCALCULIA? ¿CÓMO ABORDAR SU DIAGNÓSTICO Y SU INTERVENCIÓN?'`;
  hd2 = `Edición: CURSO 2023-2024`
  hd3 = `Número de registros: 17`

  generateReportWithAdapter(headers: string[], data: IPokemonReport[], filename: string) {
    let workbook = XLSX.utils.book_new();

    // Crear una nueva hoja de cálculo
    let worksheet = XLSX.utils.aoa_to_sheet([[this.hd1], [this.hd2], [this.hd3], [], headers]);

    // Agregar los datos a la hoja de cálculo
    XLSX.utils.sheet_add_json(worksheet, data, { origin: 'A6', skipHeader: true });

    // Agregar la hoja de cálculo al libro
    XLSX.utils.book_append_sheet(workbook, worksheet, "Hoja 1");

    // Guardar el archivo Excel
    XLSX.writeFile(workbook, filename);
  }
}
