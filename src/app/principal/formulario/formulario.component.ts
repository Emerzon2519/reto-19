import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
  }

  // Crear objeto que se enviara al api
  datos: Users = {id:"",name:"",username:""};

  onSubmit(){
    this.userService.postUser(this.datos).subscribe(
      (usuario: Users)=>console.log(usuario)
    )
  }
}
