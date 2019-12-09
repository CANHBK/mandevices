import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private apollo: Apollo) {
    }

    login = (email: string, password: string) => {
        return new Observable(observer => {
            this.apollo.mutate({
                mutation: gql`
            mutation Login($email: String!, $password: String!){
              login(email:$email,password:$password){
                token
                user{
                  firstName
                }
              }
            }
          `, variables: {email, password}
            }).subscribe(({data}) => {
                observer.next((data as any).login);
            }, error => observer.next(error));
        });
    };
}
