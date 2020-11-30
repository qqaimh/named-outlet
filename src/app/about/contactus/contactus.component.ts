import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToRoute(child: string) {
    console.log(111)
    console.log(this.route)
    const urlTree = this.router.createUrlTree(
      [{ outlets: { contactus: child } }],
      /* AboutComponent */ { relativeTo: this.route.parent?.parent }
    );
    console.log(urlTree)
    this.router.navigateByUrl(urlTree);
  }

}
