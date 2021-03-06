import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/platform';

import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { QuotesModule } from './quotes/quotes.module';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import { MyQuotesModule } from './my-quotes/my-quotes.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    CoreModule,
    AuthorsModule,
    CategoriesModule,
    QuotesModule,
    MyQuotesModule,
    AppRoutingModule,
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
