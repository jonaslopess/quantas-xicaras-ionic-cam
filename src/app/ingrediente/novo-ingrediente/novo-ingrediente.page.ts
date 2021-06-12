import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController, ToastController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { IngredienteService } from '../ingrediente.service';
import { IngredienteHttpService } from '../ingrediente-http.service';
import { Ingrediente } from '../ingrediente';

@Component({
  selector: 'app-novo-ingrediente',
  templateUrl: './novo-ingrediente.page.html',
  styleUrls: ['./novo-ingrediente.page.scss'],
})
export class NovoIngredientePage implements OnInit {
  
  private imagePath : string = "../../assets/pacote.png";
  
  constructor(
    private camera : Camera,
    private ingredienteService : IngredienteService,
    private router : Router,
    public actionSheetController : ActionSheetController,
    private toastController : ToastController,

    private ingredienteHttpService : IngredienteHttpService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    let nome : string = form.value.nome
    let regra : number = Number(form.value.regra)
    let img : string = this.imagePath
    /*this.ingredienteService.addIngrediente(nome,regra,img)
    .then(()=>{
      this.toastPresent()
      setTimeout(() => {
        this.router.navigate(['/ingredientes'])
      }, 1000)
    })*/


    this.ingredienteHttpService.create(new Ingrediente('',nome,regra,img)).subscribe(() => {
        this.toastPresent()
        this.router.navigate(['/ingredientes'])
      }
    )
    
  }

  private async toastPresent(){
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Ingrediente cadastrado!'
    });
    await toast.present();
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
