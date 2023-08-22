import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AWKConnectButtonModule,
  AWKConnectionModalModule,
  AWKProfileModalModule,
  ArweaveWalletKitNgModule,
} from 'arweave-wallet-kit-ng';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArweaveWalletKitNgModule,
    AWKConnectButtonModule,
    AWKProfileModalModule,
    AWKConnectionModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
