import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('copied') copied!: ElementRef;

  title = 'arweave-wallet-kit-landing';

  constructor(private renderer: Renderer2) {}

  public copyToClipboard(val: string): void {
    const selBox = document.createElement('textarea');

    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.renderer.removeClass(this.copied.nativeElement, 'hidden');
    setTimeout(() => {
      this.renderer.addClass(this.copied.nativeElement, 'hidden');
    }, 2500);
  }
}
