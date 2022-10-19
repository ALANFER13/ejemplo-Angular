import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

  constructor() { }
  
  private _alumnosUtl:AlumnosUtl[]=[
    {
      nombre:'Mario',
      edad:22
    },
    {
      nombre:'Veronica',
      edad:25
    },
    {
      nombre:'Luisa',
      edad:20
    },
  ]

  get alumnos():AlumnosUtl[]{
    return [...this._alumnosUtl]
  }

    agregarNuevoAlumno(pedro:AlumnosUtl){
  this._alumnosUtl.push(pedro);
}

  muestra(){
    console.log('nombre')
  }
}
