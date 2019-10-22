package bkhn.mandevices.iot.mandevices.ui.guardRegistrations.guardRegistrationDetail

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.apollographql.apollo.ApolloCall
import com.apollographql.apollo.ApolloClient
import com.apollographql.apollo.api.Response
import com.apollographql.apollo.exception.ApolloException
import javax.inject.Inject

class GuardRegistrationDetailViewModel @Inject constructor(
    private val apolloClient: ApolloClient
) : ViewModel() {

//    var guardRegistrationDetail = MutableLiveData<GuardRegistrationDetailQuery.GuardingAssignment>()
//
//    fun getGuardRegistrationDetail(id: String) {
//        val guardRegistrationDetailQuery = GuardRegistrationDetailQuery(id)
//        apolloClient.query(guardRegistrationDetailQuery)
//            .enqueue(object : ApolloCall.Callback<GuardRegistrationDetailQuery.Data>() {
//                override fun onFailure(e: ApolloException) {
//
//                }
//
//                override fun onResponse(response: Response<GuardRegistrationDetailQuery.Data>) {
//                    guardRegistrationDetail.postValue(response.data()?.guardingAssignment)
//                }
//
//            })
//    }
}