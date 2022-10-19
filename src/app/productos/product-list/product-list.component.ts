import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=50;
  imageMargin:number=2;

  muestraImg:boolean=true;
  listFilter:string;
  productos:IProducto[]=[
    {
      "productoID":1,
      "modelo":'sentra',
      "descripcion":"auto 4 puertas",
      "marca":'Nissan',
      "year":"febrero 3 2020",
      "precio":250000,
      "puntos":3.3,
      "ImagenUrl":"https://img.automexico.com/crop/840x640/2020/07/07/rkwP8Fam/nissan-sentra-2020-1280-11-059a.jpg"

    },
    {
      "productoID":1,
      "modelo":'Rio',
      "descripcion":"auto 4 puertas",
      "marca":'Kia',
      "year":"december 20 2020",
      "precio":150000,
      "puntos":4.3,
      "ImagenUrl":"https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2022/rio-sd-bn/360/exterior/spack/sporty-blue/SportyBlue_0000.png"

    },
    {
      "productoID":1,
      "modelo":'March',
      "descripcion":"auto 2 puertas",
      "marca":'Nissan',
      "year":"marzo 24 2020",
      "precio":150000,
      "puntos":4.3,
      "ImagenUrl":"https://www.elcarrocolombiano.com/wp-content/uploads/2020/08/20200821-NISSAN-MARCH-ACTIVE-REDUCCION-DE-PRECIO-EN-COLOMBIA-01.jpg"

    }

  ]

  constructor() { }

  ShowImagen():void{
    this.muestraImg= !this.muestraImg;
  }

  ngOnInit(): void {
  }

}
