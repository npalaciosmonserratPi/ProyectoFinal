import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FESistemaViviendas';

  isLoading: boolean;

  constructor(private _store: Store<AppState>) {
    this._store.select('ui')
          .subscribe( ui => this.isLoading = ui.isLoading );
  }


}
