package bkhn.mandevices.iot.mandevices.ui.guardRegistrations.guardRegistrationDetail

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import bkhn.mandevices.iot.mandevices.GuardingAssignmentQuery
import bkhn.mandevices.iot.mandevices.type.GuardingAssignmentWhereUniqueInput
import bkhn.mandevices.iot.mandevices.type.Session
import bkhn.mandevices.iot.mandevices.type.SubscribersWhereInput
import com.apollographql.apollo.ApolloCall
import com.apollographql.apollo.ApolloClient
import com.apollographql.apollo.api.Input
import com.apollographql.apollo.api.Response
import com.apollographql.apollo.exception.ApolloException
import javax.inject.Inject

class GuardSessionViewModel @Inject constructor(
    private val apolloClient: ApolloClient
) : ViewModel() {

    val subscribers = MutableLiveData<List<GuardingAssignmentQuery.Subscriber?>>()

    fun getSubscribersGuardSession(guardId: String, session: List<Session>) {
        val guardingAssignmentQuery =
            GuardingAssignmentQuery(
                guardingAssignmentWhere = GuardingAssignmentWhereUniqueInput(id = guardId),
                subscribersWhere = Input.fromNullable(
                    SubscribersWhereInput(
                        session = Input.fromNullable(
                            session
                        )
                    )
                )
            )
        apolloClient.query(guardingAssignmentQuery).enqueue(object :ApolloCall.Callback<GuardingAssignmentQuery.Data>(){
            override fun onFailure(e: ApolloException) {

            }

            override fun onResponse(response: Response<GuardingAssignmentQuery.Data>) {

                subscribers.postValue(response.data()!!.guardingAssignment!!.subscribers)
            }

        })
    }
}