import { Component } from "@angular/core"
import { NavController, NavParams } from "ionic-angular"
import { Storage } from "@ionic/storage"
import { ToastController } from "ionic-angular"

import { GRADES } from "../../config"

@Component({
  selector: "page-settings",
  templateUrl: "settings.html",
})
export class SettingsPage {

  defaultGrade: string
  tabbarElement: any

  grades: number[] = GRADES

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {
    this.setDefaultGrade()
    this.tabbarElement = document.querySelector(".tabbar")
  }

  ionViewDidLoad() {
    this.tabbarElement.style.display = "none"
  }

  ionViewDidLeave() {
    this.tabbarElement.style.display = "flex"
  }

  _onSaveClick() {
    if (this.defaultGrade != "") {
      this.storage.set("defaultGrade", this.defaultGrade)
    } else {
      this.storage.remove("defaultGrade")
    }
    this.toastCtrl.create({
      message: "Changes Saved!",
      duration: 3000,
      position: "bottom",
      dismissOnPageChange: true
    }).present()
  }

  setDefaultGrade() {
    this.storage.get("defaultGrade").then(grade => {
      this.defaultGrade = grade || ""
    })
  }

}
