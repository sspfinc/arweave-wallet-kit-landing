import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArweaveWalletKitNgModule } from '../../../arweave-wallet-kit-ng/projects/arweave-wallet-kit-ng/src/lib/arweave-wallet-kit-ng.module';
import { AWKConnectButtonModule } from '../../../arweave-wallet-kit-ng/projects/arweave-wallet-kit-ng/src/lib/components/connect-button/connect-button.module';
import { AWKProfileModalModule } from '../../../arweave-wallet-kit-ng/projects/arweave-wallet-kit-ng/src/lib/components/profile-modal/profile-modal.module';
import { AWKConnectionModalModule } from '../../../arweave-wallet-kit-ng/projects/arweave-wallet-kit-ng/src/lib/components/connection-modal/connection-modal.module';

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
