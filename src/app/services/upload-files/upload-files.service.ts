import { Injectable } from '@angular/core';

import { resolve } from '../../../../node_modules/@types/q';
import { URL_ECOMMERCE } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
  token: string;
  constructor() { 
    this.token = localStorage.getItem('token');
  }

  subirArchivo(archivo: File, id: string) {
    return new Promise( (resolve, reject) => {
      let formData = new FormData();
      let xhr= new XMLHttpRequest();

      formData.append('imagen', archivo, archivo.name);

      xhr.onreadystatechange = function() {
          //termina el proceso
          if (xhr.readyState === 4) {
            if ( xhr.status === 200) {
              console.log('Imagen subida');
              resolve (JSON.parse(xhr.response));
            } else {
              console.log('Fallo la subida');
              reject(xhr.response);
            }
          }
      };
      const url=  URL_ECOMMERCE + '/upload/' + id + '?token=' + this.token;
      console.log(url);
      xhr.open('PUT', url, true);
      xhr.send(formData);
    });

  }
}
