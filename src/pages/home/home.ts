import { Component } from "@angular/core"
import { NavController, ModalController } from "ionic-angular"
import { Storage } from "@ionic/storage"

import { SettingsPage } from "../settings/settings"
import { ClassbookPage } from "../classbook/classbook"
import { GRADES, showScheduleModal } from "../../config"

@Component({
	selector: "page-home",
	templateUrl: "home.html"
})
export class HomePage {
	grades: number[] = GRADES
	showScheduleModal

	constructor(
		public navCtrl: NavController,
		public modalCtrl: ModalController,
		public storage: Storage
	) {
		this.showScheduleModal = showScheduleModal
	}

	ionViewDidLoad() {
		this.checkDefaultGrade()
	}

	async checkDefaultGrade() {
		const grade = await this.storage.get("defaultGrade")
		if (grade != null) {
			this.showScheduleModal(grade, "grades")
		}
	}

	openPage(page) {
		let pagePush = null
		switch (page) {
			case "classbook":
				pagePush = ClassbookPage
				break
			case "settings":
				pagePush = SettingsPage
				break
		}
		this.navCtrl.push(pagePush)
	}
}
