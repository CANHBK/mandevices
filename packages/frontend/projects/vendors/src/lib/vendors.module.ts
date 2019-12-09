import {NgModule} from '@angular/core';
import {VendorsComponent} from './vendors.component';
import {GraphQLModule} from './graphql.module';


@NgModule({
    declarations: [VendorsComponent],
    imports: [GraphQLModule],
    exports: [VendorsComponent]
})
export class VendorsModule {
}
