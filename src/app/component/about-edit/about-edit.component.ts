import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaServiceService } from 'src/app/service/persona-service.service';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit {

  constructor(private router: Router, private service: PersonaServiceService) { }
  modelPersona = new Persona();

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    if(id !=null){
      this.service.getPersonaId(+id)
      .subscribe(data =>{
        this.modelPersona = data;
      })
    }
  }

  Actualizar(persona: Persona){
    this.service.updatePersona(persona)
    .subscribe(data =>{
    this.modelPersona = data;
    alert("Se actualizó con éxito ..!!!");
    this.router.navigate(["listar"]);
    })
  }

  canceled(){
    this.router.navigateByUrl("/");
  }
}
