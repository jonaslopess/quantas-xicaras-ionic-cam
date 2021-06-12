import { Component, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { IngredienteService } from '../ingrediente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingrediente } from '../ingrediente';
import { IngredienteHttpService } from '../ingrediente-http.service';

@Component({
  selector: 'app-edita-ingrediente',
  templateUrl: './edita-ingrediente.page.html',
  styleUrls: ['./edita-ingrediente.page.scss'],
})
export class EditaIngredientePage implements OnInit {

  //id : number = 0
  id: string = '0'
  ingrediente: Ingrediente | null = null
  imagePath: string

  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private ingredienteService: IngredienteService,
    private router: Router,
    private route: ActivatedRoute,

    private ingredienteHttpService: IngredienteHttpService
  ) { }

  ngOnInit() {
    /*this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.ingredienteService.getIngrediente(this.id)
    .then(value =>{
      this.ingrediente = value
      if(this.ingrediente == null)
        this.router.navigate([''])
      else
        this.imagePath = this.ingrediente.img
    })*/

    this.id = this.route.snapshot.paramMap.get('id');
    this.ingredienteHttpService.readById(this.id).subscribe(ingrediente => {
      this.ingrediente = ingrediente
      this.imagePath = this.ingrediente.img
    })

  }

  delete(id : number){
    this.ingredienteHttpService.delete(this.id).subscribe(()=>{
      this.router.navigate(['/ingredientes'])
    })
  }

  onSubmit(form: any) {
    this.ingrediente.nome = form.value.nome
    this.ingrediente.regra_conversao = Number(form.value.regra)
    this.ingrediente.img = this.imagePath

    //this.ingredienteService.editIngrediente(this.id, this.ingrediente)
    //this.router.navigate(['/ingredientes'])

    this.ingredienteHttpService.update(this.ingrediente).subscribe(() => {
      this.router.navigate(['/ingredientes'])
    })

  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: sourceType,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 40,
      targetHeight: 40
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.imagePath = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Seleciona a fonte da imagem",
      buttons: [{
        text: 'Carregue da galeria',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use a câmera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

}