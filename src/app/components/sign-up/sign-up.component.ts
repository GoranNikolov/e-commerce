import {Component} from '@angular/core';
import {GraphqlService} from "../../services/graphql.service";
import {REGISTER} from "../../common/graphql/graphql-mutation";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private graphqlService: GraphqlService) {
  }

  signup() {
    this.graphqlService.mutate(REGISTER, {

      input: {
        emailAddress: this.user.email,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        password: this.user.password,
        authOptions: {
          requireVerification: false
        }
      }
    }).subscribe((response) => {
      console.log(response)
    })
  }
}
