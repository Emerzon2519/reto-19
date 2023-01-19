import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  // CONSUMIR SERVICIO UserServices

// Crear instancia de UserServices
constructor(private userService: UserserviceService){}

// Ejecutar el metodo getUsersAll del servicio al cargar el componente
listado = new Array();
ngOnInit(){
// Ejecutar metod getUserAll y recuperar json devuelto por la api
this.userService.getUsersAll().subscribe({
next: (UserAll: Users[]) => this.listado = UserAll,
error: (e) => console.error(e),
complete: () => console.info("La API devolvio todos los registros")
});

// Ejecutar el metodo getUserAllInterceptor

// this.userService.getUserAllInterceptor().subscribe({
//   next: (response: any) => {this.listado = response.body; console.log(response)},
//   error: (e) => console.error(e),
//   complete: () => console.info("La API devolvio todos los registros")
//   });
}
}
