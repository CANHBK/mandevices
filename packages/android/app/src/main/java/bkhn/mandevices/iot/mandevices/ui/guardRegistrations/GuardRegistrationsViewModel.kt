package bkhn.mandevices.iot.mandevices.ui.guardRegistrations

import android.util.Log
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import bkhn.mandevices.iot.mandevices.GuardRegistrationQuery
import bkhn.mandevices.iot.mandevices.UsersQuery
import com.apollographql.apollo.ApolloCall
import com.apollographql.apollo.ApolloClient
import com.apollographql.apollo.api.Response
import com.apollographql.apollo.exception.ApolloException
import javax.inject.Inject

class GuardRegistrationsViewModel @Inject constructor(
    private val apolloClient: ApolloClient
) : ViewModel() {

    var users = MutableLiveData<List<UsersQuery.User>>()
    var guardRegistrations = MutableLiveData<List<GuardRegistrationQuery.GuardingAssignment>>()

    init {
        Log.i("GuardRegistrationsViewModel", "init")
    }

    fun getGuardingAssignment() {
        val guardRegistrationQuery = GuardRegistrationQuery()
        apolloClient.query(guardRegistrationQuery)
            .enqueue(object : ApolloCall.Callback<GuardRegistrationQuery.Data>() {
                override fun onFailure(e: ApolloException) {

                }

                override fun onResponse(response: Response<GuardRegistrationQuery.Data>) {
                    guardRegistrations.postValue(response.data()?.guardingAssignments)
                }

            })
    }


    fun query() {
        val usersQuery = UsersQuery()
        apolloClient.query(usersQuery).enqueue(
            object : ApolloCall.Callback<UsersQuery.Data>() {
                override fun onFailure(e: ApolloException) {

                }

                override fun onResponse(response: Response<UsersQuery.Data>) {
                    users.postValue(response.data()!!.users)
                }

            }
        )
    }
}