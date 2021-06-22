import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  title: string;

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    this.getDataReoute().subscribe(resp => {
      this.title = resp.title;
    });
  }

  getDataReoute(): Observable<any> {
    return this.router.events.pipe( 
            filter( evento => evento instanceof ActivationEnd ),
            filter( (evento: ActivationEnd) => evento.snapshot.firstChild == null ),
            map( (evento: ActivationEnd) => evento.snapshot.data )
          )
  }
}
