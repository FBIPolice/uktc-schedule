import { Component } from "@angular/core"
import { NavController } from "ionic-angular"

import { ClassbookPage } from "../../pages/classbook/classbook"
import { SettingsPage } from "../../pages/settings/settings"

@Component({
	selector: "global-navbar",
	templateUrl: "global-navbar.html"
})
export class GlobalNavbarComponent {
	constructor(public navCtrl: NavController) {}

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
