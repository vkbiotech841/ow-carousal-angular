import { Component, ViewChild } from '@angular/core';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { slidesStore } from '../app/slides'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  slidesStore = slidesStore;

  @ViewChild('owlElement', { static: true }) owlElement: CarouselComponent;
  refresh = false;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
    responsiveRefreshRate: 2000
  }

  setPosition(position) {
    this.owlElement.to('4');
    //this.owlElement.to(position);
    this.customOptions.navSpeed = 2700;
    this.owlElement.options = this.customOptions;
    this.refresh = true;
    console.log(this.owlElement.owlDOMData.isRefreshed);
  }

  ///////////////////////////////////////////////////////

  owlcarousel1 = [
    { img: "assets/images/slider/1.jpg" },
    { img: "assets/images/slider/2.jpg" },
    { img: "assets/images/slider/3.jpg" },
    { img: "assets/images/slider/4.jpg" },
    { img: "assets/images/slider/5.jpg" },
    { img: "assets/images/slider/6.jpg" },
    { img: "assets/images/slider/7.jpg" },
    { img: "assets/images/slider/8.jpg" },
    { img: "assets/images/slider/9.jpg" },
    { img: "assets/images/slider/10.jpg" }
  ];

  //Options

  // //// Basic Example ////////
  owlcarousel1Options = {
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

  ///////// Responsive Example ///////////////
  owlcarousel2Options = {
    loop: true,
    margin: 10,
    items: 5,
    nav: false,
    responsive: {
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }


  ////////////// Center Example ////////////////
  owlcarousel3Options = {
    center: true,
    items: 5,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }


  ///////////// Merge Example ///////////////
  owlcarousel4Options = {
    items: 5,
    loop: true,
    margin: 10,
    merge: true,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  //////////// Auto Width Example /////////////
  owlcarousel5Options = {
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 5,
    nav: false
  }

  /////////// URL Hash Navigations ///////////////
  owlcarousel6Options = {
    items: 5,
    loop: false,
    center: true,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  ////////// Events /////////////////
  owlcarousel7Options = {
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  ///////////// Stage Padding Example ////////////////
  owlcarousel8Options = {
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }


  ///////////// Right to Left Example ///////////////
  owlcarousel9Options = {
    rtl: true,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }


  ///////////// Lazy load Example ////////////////
  owlcarousel10Options = {
    items: 5,
    lazyLoad: true,
    loop: true,
    margin: 5,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  ////////// Animate Example ////////////////////
  owlcarousel12Options = {
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 5,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  //////////// Auto Play Example //////////////
  owlcarousel13Options = {
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }


  ///////////// Auto Height Example //////////////////  
  owlcarousel14Options = {
    items: 1,
    margin: 10,
    autoHeight: true,
    nav: false
  }

}
