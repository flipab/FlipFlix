import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { MovieService } from './../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})

//--------------tem que estar autenticado ----------

export class AddMovieComponent implements OnInit {
  movieForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    imagem: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    ano: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private movieService: MovieService,
    private navbarService: NavbarService,
  ) {}

  ngOnInit() {
    this.navbarService.title.next('Add Movies');
  }

  addMovie() {
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe(res => {
        this.movieForm.reset();
        this.router.navigate(['/']);
      });
    }
  }
}
