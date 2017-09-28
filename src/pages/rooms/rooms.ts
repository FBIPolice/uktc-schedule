import { Component } from "@angular/core"
import { NavController, ModalController, NavParams } from "ionic-angular"

import { ROOMS, showScheduleModal } from "../../config"

@Component({
	selector: "page-rooms",
	templateUrl: "rooms.html"
})
export class RoomsPage {
	rooms: string[]
	showScheduleModal

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController
	) {
		this.rooms = ROOMS
		this.showScheduleModal = showScheduleModal
	}
}
