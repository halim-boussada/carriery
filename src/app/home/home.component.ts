import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  vesitor: any = localStorage.getItem("id");
  ngOnInit(): void {}
  goto() {
    this.router.navigateByUrl("/form");
  }
  cvClicked() {
    this.router.navigateByUrl("/resume");
  }
  motivationLetterClicked() {
    this.router.navigateByUrl("/motivationLetter");
  }
  consultationClicked() {
    this.router.navigateByUrl("/coachList");
  }
}
