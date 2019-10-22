package bkhn.mandevices.iot.mandevices.ui.login


import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.viewModels
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelProviders
import androidx.navigation.fragment.findNavController
import bkhn.mandevices.iot.mandevices.ActivityViewModel
import bkhn.mandevices.iot.mandevices.R
import bkhn.mandevices.iot.mandevices.databinding.FragmentLoginBinding
import com.facebook.*
import com.facebook.login.LoginManager
import com.facebook.login.LoginResult
import dagger.android.support.DaggerFragment
import org.json.JSONException
import javax.inject.Inject


class LoginFragment : DaggerFragment() {

    @Inject
    lateinit var viewModelFactory: ViewModelProvider.Factory

    private val loginViewModel: LoginViewModel by viewModels {
        viewModelFactory
    }


    private lateinit var activityViewModel: ActivityViewModel

    private lateinit var callBackManager: CallbackManager

    private val fbToken = AccessToken.getCurrentAccessToken()
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val binding: FragmentLoginBinding =
            DataBindingUtil.inflate(
                inflater,
                R.layout.fragment_login, container, false
            )

        binding.fbLogin.setOnClickListener {
            LoginManager.getInstance().logIn(this, listOf("email"))
        }

        if (fbToken !== null) {
            loadEmail(fbToken)
        }
        activityViewModel = ViewModelProviders.of(activity!!).get(ActivityViewModel::class.java)
        println("debug: LoginFragment: $activityViewModel")


        callBackManager = CallbackManager.Factory.create()

        LoginManager.getInstance().registerCallback(callBackManager,
            object : FacebookCallback<LoginResult> {
                override fun onSuccess(result: LoginResult?) {


                    loadEmail(result?.accessToken!!)
//                    Profile.getCurrentProfile().apply {
//                        println(
//                            "debug: $name - $firstName - $lastName - $linkUri - $middleName - ${getProfilePictureUri(
//                                200,
//                                200
//                            )}"
//                        )
//
//                    }
                }

                override fun onCancel() {
                    println("debug: cancel login")
                }

                override fun onError(error: FacebookException?) {
                    println("debug - error: $error")
                }

            })

        return binding.root
    }


    private fun loadEmail(accessToken: AccessToken) {
        val request =
            GraphRequest.newMeRequest(
                accessToken
            ) { `object`, _ ->
                try {
                    val id = `object`?.getString("id")
                    val email = `object`?.getString("email")
                    val name = `object`?.get("name")
                    val avatar =
                        "https://graph.facebook.com/${id}/picture?type=normal?width=500?height=500"
                    println("debug - email: $email")
                    println("debug - name: $name")
                    println("debug - avatar: $avatar")

                    loginViewModel.fbLogin()
                    findNavController().popBackStack(R.id.loginFragment,true)
                    findNavController().navigate(R.id.guardRegistrationsFragment)
                } catch (e: JSONException) {
                    e.printStackTrace()
                }
            }
        val params = Bundle()
        params.putString("fields", "email,name,id")
        request.parameters = params
        request.executeAsync()


    }


    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        callBackManager.onActivityResult(requestCode, resultCode, data)
        super.onActivityResult(requestCode, resultCode, data)

        println("debug:loginFragment: $requestCode - $resultCode - $data")
    }
}
