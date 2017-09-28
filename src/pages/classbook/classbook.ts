import { Component } from "@angular/core"
import { NavController, NavParams } from "ionic-angular"

@Component({
  selector: "page-classbook",
  templateUrl: "classbook.html",
})
export class ClassbookPage {

  tabbarElement: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabbarElement = document.querySelector(".tabbar")
  }

  ionViewDidLoad() {
    this.tabbarElement.style.display = "none"
  }

  ionViewDidLeave() {
    this.tabbarElement.style.display = "flex"
  }
}
