import { inject, Injectable } from '@angular/core';
import { NgDocThemeService } from '@ng-doc/app';

export type DocsTheme = { id: 'docs-dark' | 'docs-light'; };

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private readonly docsThemeService = inject(NgDocThemeService)

  get currentTheme(): DocsTheme {
    return this.docsThemeService.currentTheme as unknown as DocsTheme
  }

  init(): void {
    this.docsThemeService.set('docs-dark').then();
  }

  async set(id?: string): Promise<void> {
    const themeId = id ?? (this.currentTheme.id === 'docs-light' ? 'docs-dark' : 'docs-light');
    await this.docsThemeService.set(themeId);
  }
}
