import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  {
    path: 'add',
    component: AddMovieComponent,
  },
  {
    path: ':id',
    component: MovieDetailComponent,
  },
  //{
   // path: 'auth', //---em vez de auth router no main ts, acho que o correto nesse codigo deria implementar aqui?!---//
   // component: UsersComponent,
  //},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
