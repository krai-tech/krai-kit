import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent } from '@ng-doc/app';
import { NgDocTooltipDirective } from '@ng-doc/ui-kit';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WINDOW } from '@krai-tech/web-api/tokens';
import { ThemesService } from '../../services';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  standalone: true,
  imports : [
    CommonModule,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
    NgDocTooltipDirective,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  host: {
    '[attr.data-is-landing]': 'isLandingPage'
  }
})
export class ShellComponent implements OnInit {
  private readonly window: Window = inject(WINDOW);
  readonly themesService = inject(ThemesService);

  get isLandingPage(): boolean {
    return new URL(this.window.location.href).pathname === '/'
  }

  ngOnInit (): void {
    this.themesService.init()
  }
}
