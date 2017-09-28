import { Component } from "@angular/core"

import { HomePage } from "../../pages/home/home"
import { TeachersPage } from "../../pages/teachers/teachers"
import { RoomsPage } from "../../pages/rooms/rooms"

@Component({
  selector: "tabs",
  templateUrl: "tabs.html"
})
export class TabsComponent {

  HomeRoot = HomePage
  TeachersRoot = TeachersPage
  RoomsRoot = RoomsPage

  constructor() {

  }

}