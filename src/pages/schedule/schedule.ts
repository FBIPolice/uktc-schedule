import { Component } from "@angular/core"
import { NavController, ViewController, NavParams } from "ionic-angular"
import { ScreenOrientation } from "@ionic-native/screen-orientation"

@Component({
	selector: "page-schedule",
	templateUrl: "schedule.html"
})
export class SchedulePage {
	url: string
	image: string
	image_url: string
	leftMargin: string = this.marginLeft

	constructor(
		public navCtrl: NavController,
		public viewCtrl: ViewController,
		public screenOrientation: ScreenOrientation,
		public navParams: NavParams
	) {
		let identifier = navParams.get("identifier")
		this.image = navParams.get("image")
		this.url = identifier + "/" + this.image
		this.genUrl()
		this.screenOrientation.onChange().subscribe(() => {
			this.leftMargin = this.marginLeft
		})
	}

	get marginLeft() {
		return this.screenOrientation.type == "landscape-primary" ? "140px" : "75px"
	}

	genUrl() {
		this.image_url = "assets/images/" + this.url + ".jpg"
	}

	closeModal() {
		this.viewCtrl.dismiss()
	}
}
