package bkhn.mandevices.iot.mandevices.ui.guardRegistrations


import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.navigation.fragment.findNavController
import bkhn.mandevices.iot.mandevices.R
import bkhn.mandevices.iot.mandevices.databinding.FragmentGuardRegistrationsBinding
import com.google.android.material.snackbar.Snackbar
import dagger.android.support.DaggerFragment
import javax.inject.Inject

class GuardRegistrationsFragment : DaggerFragment() {

    @Inject
    lateinit var viewModelFactory: ViewModelProvider.Factory

    private lateinit var binding: FragmentGuardRegistrationsBinding
    private val guardRegistrationsViewModel: GuardRegistrationsViewModel by viewModels {
        viewModelFactory
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment


        binding = DataBindingUtil.inflate(
            inflater,
            R.layout.fragment_guard_registrations,
            container,
            false
        )
        binding.lifecycleOwner = this
        binding.swipeRefreshLayout.setOnRefreshListener {
            guardRegistrationsViewModel.getGuardingAssignment()
        }

        val adapter = GuardRegistrationsAdapter(GuardRegistrationListener { guardRegistrationId ->
            this.findNavController().navigate(
                GuardRegistrationsFragmentDirections.actionGuardRegistrationsFragmentToGuardRegistrationDetailFragment(
                    guardRegistrationId
                )
            )
        })

        binding.guardRegistrationList.adapter = adapter
        guardRegistrationsViewModel.getGuardingAssignment()
        guardRegistrationsViewModel.guardRegistrations.observe(this, Observer {
            adapter.submitList(it)
            binding.swipeRefreshLayout.isRefreshing = false
        })

        binding.button.setOnClickListener {
            Snackbar.make(it, "Click", Snackbar.LENGTH_SHORT).show()
        }
        return binding.root
    }

}
