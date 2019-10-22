package bkhn.mandevices.iot.mandevices.ui.guardRegistrations.guardRegistrationDetail


import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.NavHostFragment
import bkhn.mandevices.iot.mandevices.R

/**
 * A simple [Fragment] subclass.
 */
class GuardSessionHostFragment private constructor() : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val rootView = inflater.inflate(R.layout.fragment_guard_session_host, container, false)
val navHost = childFragmentManager.findFragmentById(R.id.guard_session_host_fragment) as NavHostFragment?
        if(navHost!=null){
            val navController = navHost.navController
            val navInflater = navController.navInflater
            val graph = navInflater.inflate(R.navigation.nav_session_graphql)

            navHost.navController.setGraph(graph, arguments)
        }
        return rootView
    }

    companion object {
        private const val TAB_NUMBER = "tabNumber"
        private const val GUARD_ID ="guardId"

        fun newInstance(tabNumber: Int,guardId: String): GuardSessionHostFragment {
            val fragment = GuardSessionHostFragment()
            val bundle = Bundle()
            bundle.putInt(TAB_NUMBER, tabNumber)
            bundle.putString(GUARD_ID, guardId)
            fragment.arguments = bundle
            return fragment
        }
    }


}
