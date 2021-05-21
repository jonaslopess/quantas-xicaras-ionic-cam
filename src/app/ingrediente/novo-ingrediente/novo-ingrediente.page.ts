import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-novo-ingrediente',
  templateUrl: './novo-ingrediente.page.html',
  styleUrls: ['./novo-ingrediente.page.scss'],
})
export class NovoIngredientePage implements OnInit {
  
  private imagePath : string = "../../asset/pacote.png";
  
  constructor(
    private camera : Camera,
    private ingredienteService : IngredienteService,
    private router : Router,
    public actionSheetController : ActionSheetController
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    let nome : string = form.value.nome
    let regra : number = Number(form.value.regra)
    let img : string = this.imagePath
    this.ingredienteService.addIngrediente(nome,regra,img)
    this.router.navigate(['/ingredientes']);
  }

  
  pickImage(sourceType){
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

  async selectImage(){
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
