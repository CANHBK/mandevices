package bkhn.mandevices.iot.mandevices.ui.guardRegistrations.guardRegistrationDetail


import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.navigation.fragment.navArgs
import bkhn.mandevices.iot.mandevices.R
import bkhn.mandevices.iot.mandevices.databinding.FragmentGuardSessionBinding
import bkhn.mandevices.iot.mandevices.type.Session
import dagger.android.support.DaggerFragment
import javax.inject.Inject

/**
 * A simple [Fragment] subclass.
 */
class GuardSessionFragment : DaggerFragment() {

    @Inject
    lateinit var viewModelFactory: ViewModelProvider.Factory

    private val viewModel: GuardSessionViewModel by viewModels {
        viewModelFactory
    }

    private val args by navArgs<GuardSessionFragmentArgs>()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val binding: FragmentGuardSessionBinding =
            DataBindingUtil.inflate(inflater, R.layout.fragment_guard_session, container, false)

        viewModel.getSubscribersGuardSession(
            guardId = args.guardId, session = when (args.tabNumber) {
                0 -> listOf(Session.SANG)
                else -> listOf(Session.CHIEU)
            }
        )

        val adapter = GuardSessionAdapter()
        binding.listSubscriber.adapter = adapter

        viewModel.subscribers.observe(this, Observer {
            adapter.submitList(it)
        })
        return binding.root
    }


}
