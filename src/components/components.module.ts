import { NgModule } from "@angular/core"
import { TabsComponent } from "./tabs/tabs"
import { GlobalNavbarComponent } from "./global-navbar/global-navbar"
@NgModule({
	declarations: [TabsComponent, GlobalNavbarComponent],
	imports: [],
	exports: [TabsComponent, GlobalNavbarComponent]
})
export class ComponentsModule {}
