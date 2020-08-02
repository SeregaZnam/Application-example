import { ClassProvider, FactoryProvider, InjectionToken, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const WINDOW = new InjectionToken('WindowToken');

export abstract class WindowRef {
  get nativeElement(): Window | {} {
    throw new Error('Not implementation');
  }
}

export class BrowserWindowRef extends WindowRef {
  constructor() {
    super();
  }

  get nativeElement(): Window | {} {
    return window;
  }
}

export function windowFactory(browserWindowRef: BrowserWindowRef, platformId: object): Window | {} {
  if (isPlatformBrowser(platformId)) {
    return browserWindowRef.nativeElement;
  }
  return {};
}

const browserWindowProvider: ClassProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};

const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [WindowRef, PLATFORM_ID]
};

export const WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
