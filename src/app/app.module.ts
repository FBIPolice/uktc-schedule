// MODULES
import { BrowserModule } from "@angular/platform-browser"
import { ErrorHandler, NgModule } from "@angular/core"
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular"
import { SplashScreen } from "@ionic-native/splash-screen"
import { StatusBar } from "@ionic-native/status-bar"
import { ScreenOrientation } from "@ionic-native/screen-orientation"
import { IonicStorageModule } from "@ionic/storage"

// PAGES
import { MyApp } from "./app.component"
import { HomePage } from "../pages/home/home"
import { SchedulePage } from "../pages/schedule/schedule"
import { SettingsPage } from "../pages/settings/settings"
import { ClassbookPage } from "../pages/classbook/classbook"
import { TeachersPage } from "../pages/teachers/teachers"
import { RoomsPage } from "../pages/rooms/rooms"

// COMPONENTS
import { TabsComponent } from "../components/tabs/tabs"
import { GlobalNavbarComponent } from "../components/global-navbar/global-navbar"

@NgModule({
	declarations: [
		// PAGES
		MyApp,
		HomePage,
		SchedulePage,
		SettingsPage,
		ClassbookPage,
		TeachersPage,
		RoomsPage,
		// COMPONENTS
		TabsComponent,
		GlobalNavbarComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot()
	],
	bootstrap: [IonicApp],
	entryComponents: [
		// PAGES
		MyApp,
		HomePage,
		SchedulePage,
		SettingsPage,
		ClassbookPage,
		TeachersPage,
		RoomsPage,
		// COMPONENTS
		TabsComponent,
		GlobalNavbarComponent
	],
	providers: [
		StatusBar,
		SplashScreen,
		ScreenOrientation,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule {}
