package bkhn.mandevices.iot.mandevices

import android.util.Log
import androidx.lifecycle.ViewModel
import com.apollographql.apollo.ApolloCall
import com.apollographql.apollo.ApolloClient
import com.apollographql.apollo.api.Response
import com.apollographql.apollo.exception.ApolloException
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import javax.inject.Inject


class RegisterViewModel @Inject constructor() : ViewModel() {
    private val tag = "RegisterViewModel";
    var name: String? = null
    var email: String? = null
    var password: String? = null
    var rePassword: String? = null
    var course: String? = null

    private var apolloClient: ApolloClient

    init {
        Log.i(tag, "init")
        val BASE_URL = "http://10.0.2.2:5000/graphql"

        val loggingInterceptor = HttpLoggingInterceptor()
        loggingInterceptor.level = HttpLoggingInterceptor.Level.BODY
        val okHttpClient = OkHttpClient.Builder()
            .addInterceptor(loggingInterceptor)
            .build()
        apolloClient = ApolloClient.builder()
            .serverUrl(BASE_URL)
            .okHttpClient(okHttpClient)
            .build()
    }

    override fun onCleared() {
        super.onCleared()
        Log.i(tag, "cleared")
    }

    fun onRegister() {
        Log.i(tag, "register click")
        Log.i(tag, "${name} - ${email} - ${password} - ${rePassword} - ${course}")
        if (password !== rePassword) {
            Log.e(tag, "Mật khẩu không khớp")
        }
        val registerMutation =
            RegisterMutation(
                name = name!!,
                email = email!!,
                password = password!!,
                course = course!!.toInt()
            )

        apolloClient.mutate(registerMutation).enqueue(
            object : ApolloCall.Callback<RegisterMutation.Data>() {
                override fun onFailure(e: ApolloException) {
                    Log.i(tag, e.toString())
                }

                override fun onResponse(response: Response<RegisterMutation.Data>) {
                    Log.i(tag, response.toString())
                }

            }
        )
    }
}