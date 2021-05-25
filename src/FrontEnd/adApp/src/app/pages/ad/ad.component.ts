import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { resourceUsage } from 'process';
import { Observable } from 'rxjs';
import { AdModel } from 'src/app/models/ad.model';
import { AdService } from 'src/app/services/ad.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  ad = new AdModel();

  constructor( private adService: AdService,
                private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id !=='Nuevo') {
      this.adService.getAd( id )
      .subscribe(( resp: AdModel) => {
        this.ad = resp;
        this.ad.id= id;
      });
    }
  }

  guardar( form: NgForm ) {

    if ( form.invalid) {
      console.log('Formulario no valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      confirmButtonText: 'Cool'
    })
    Swal.showLoading();

let peticion: Observable<any>;

if (this.ad.id) {
  peticion = this.adService.actualizarAd( this.ad );
} else {
  peticion =  this.adService.crearAd( this.ad );
}

peticion.subscribe( resp =>{
  Swal.fire({
    title: this.ad.title,
    text: 'Se actualizo correctamente',
    icon:'success'
  });
})

/* this.adService.crearAd( this.ad )
.subscribe( resp => {
  console.log(resp);
}); */


}
}
