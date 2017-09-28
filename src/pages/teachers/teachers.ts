import { Component } from "@angular/core"
import { NavController, ModalController, NavParams } from "ionic-angular"

import { TEACHERS, showScheduleModal } from "../../config"

@Component({
	selector: "page-teachers",
	templateUrl: "teachers.html"
})
export class TeachersPage {
	teachers: string[]
	showScheduleModal

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController
	) {
		this.teachers = TEACHERS
		this.showScheduleModal = showScheduleModal
	}
}
