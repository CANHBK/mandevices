package bkhn.mandevices.iot.mandevices.ui.login

import androidx.lifecycle.ViewModel
import com.apollographql.apollo.ApolloClient
import javax.inject.Inject

class LoginViewModel @Inject constructor(
    val apolloClient: ApolloClient
):ViewModel(){
init {
    println("debug: LoginViewModel - init: $apolloClient")
}

    fun fbLogin(){
        println("debug: LoginViewModel: facebook login")
    }

    override fun onCleared() {
        super.onCleared()
        println("debug: LoginViewModel cleared")
    }
}