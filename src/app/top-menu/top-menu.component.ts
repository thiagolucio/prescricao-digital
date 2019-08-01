import {Component, OnInit} from '@angular/core';
import {Route, Router, NavigationStart, NavigationEnd} from '@angular/router';

declare var $;

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  public href: string = "";

  constructor(private router: Router) {

    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.href = e.url;
        if (this.href == "/laudosMedicos"
          || this.href == "/consultasMedicas"
          || this.href == "/medicamentos") {
          $("#mainNav").addClass("navbar-cor-branca");
        } else {
          $("#mainNav").removeClass("navbar-cor-branca");
        }
      }
    });
  }

  ngOnInit() {
    // Ativamento do scrollspy para quando rolar a pagina
    $('body').scrollspy({
      target: '#mainNav',
      offset: 54
    });

    // Colapso Navbar
    var navbarCollapse = function () {
      if ($("#mainNav").offset().top > 150) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink"); 
      }
    };
    // Colapsar agora se a pagina nao estiver no topo
    navbarCollapse();
    // Colapsar a navbar quando a pagina estiver correndo
    $(window).scroll(navbarCollapse);


  }
}
