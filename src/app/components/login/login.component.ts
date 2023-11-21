import {Component} from '@angular/core';
import {GraphqlService} from "../../services/graphql.service";
import { SIGN_IN} from "../../common/graphql/graphql-mutation";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
    rememberMe: false
  };

  constructor(private graphqlService: GraphqlService) {
  }

  signIn() {
    this.graphqlService.mutate(SIGN_IN, {
      emailAddress: this.user.email,
      password: this.user.password,
      rememberMe: this.user.rememberMe
    }).subscribe((response) => {
      console.log(response)
    })
  }
}
