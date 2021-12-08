import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PaisInterface,PaisDatosInterface } from "../interfaces/pais.interface.interface";
@Injectable({
  providedIn: 'root'
})
export class PaisServicio{
  private _busquedapaises:PaisDatosInterface[]=[];


  get paises():PaisDatosInterface[]{
    return [...this._busquedapaises];
  }
  constructor(private http:HttpClient){

  }
  buscarPaises(busqueda:string):void{
    this._busquedapaises=[];
    this.http.get<PaisInterface[]>("https://restcountries.com/v3.1/name/"+busqueda).subscribe
    (respuesta=>{
      console.log(respuesta);
      for (let index = 0; index < respuesta.length; index++) {
        let pais:PaisDatosInterface = {
          id:respuesta[index].idd.root,
          nombre:respuesta[index].name,
          capital: respuesta[index].capital,
          flag:respuesta[index].flags,
          poblation: respuesta[index].population
        }
        console.log(pais);
      this._busquedapaises.push(pais);
      }
    });
  }
}



