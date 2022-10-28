import { Component, OnInit } from '@angular/core';
import { CiudadOrigenService } from '../service/ciudadorigen.service';
import { RutaService } from '../service/ruta.service';
import { VueloService } from '../service/vuelo.service';
import { PasajeroService } from '../service/pasajero.service';
import { Vuelo } from '../interfaces/vuelo';
import { Pasajero } from '../interfaces/pasajero';
import { Tiquete } from '../interfaces/tiquete';



@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {
   public origenes : Object[] =[] 
   public destinos : Object[] =[] 
   public lVuelos  : Object[] =[] 
   public lVuelosV  : Object[] =[] 
   public vuel :string[]=[]
   

   selected : string='';
   selecte : string='';

   fecha : Date=new Date;
   cantidad :number=0;
   fechaR :Date=new Date;

   numeroP : number=1;
   pasaporte : number=0;
   nombre : string='';
   apellido : string='';
   telefono : string='';
   correo : string='';
   edad : number=0;
   visa : Date=new Date;

   totalViajeR : number=0;
   totalViajeI : number=0;
   totalViajes : number=0;
;

  constructor(
    private ciudadorigenservice : CiudadOrigenService,
    private rutaservice : RutaService,
    private vueloservice : VueloService,
    private pasajeroservice : PasajeroService,
  ) { }

  ngOnInit(): void {
    
    this.ciudadorigenservice.listaOrigenes().subscribe(result => {
      this.origenes=result;
    });
  } 

      listarIda(){ 
      this.rutaservice.listarDestinos(this.selected).subscribe(resultado => {
      this.destinos=resultado;
      
    });
  }

  listarVuelos(){
    this.vueloservice.listarVuelos(this.fecha, this.selected, this.selecte,this.cantidad).subscribe(res => {
      this.lVuelos=res;
      console.log(this.lVuelos[0]);
    });
  }
   listarVuelosVuelta(){
    this.vueloservice.listarVuelos(this.fechaR, this.selecte, this.selected,this.cantidad).subscribe(res => {
      this.lVuelosV=res;
    
    });
  }
  SelectVuelo(id: number){
    //  this.vueloservice.buscarVuelo(id).subscribe();
    // this.totalViajeI= this.vuelo.preciopersona * this.cantidad;
  }
  SelectVueloRegreso(id: number){
    // this.vueloRegreso = this.vueloservice.buscarVuelo(id);
    // this.totalViajeR= this.vueloRegreso.preciopersona * this.cantidad;
    // this.totalViajes= this.totalViajeI + this.totalViajeR;
  }
  // crearTiquete{
  //   pasaj :Pasajero = PasajeroService.buscarPasajero()
  //   const tiquete = {
  //     idtiquete:-1,
  //     totalpago:number,
  //     cantidadpersonas:number,
  //     idpasajero: this.pasajeroservice.,
  //     idreserva:Reserva,
  //     idvuelo:Vuelo,
  // };
  // }


  crearPasajero(){
 this.pasajeroservice.buscarPasajero(this.pasaporte);
    const pasajero = {
      idpasajero:-1,
    nombrep:this.nombre,
    apellido:this.apellido,
    telefono:this.telefono,
    correo:this.correo,
    edad:this.edad,
    fechavisa:this.visa,
  };
 this.pasajeroservice.crearPasajero(pasajero).subscribe ;
  }
}
