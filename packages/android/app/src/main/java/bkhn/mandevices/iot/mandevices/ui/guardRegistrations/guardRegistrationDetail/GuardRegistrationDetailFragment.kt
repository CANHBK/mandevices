package bkhn.mandevices.iot.mandevices.ui.guardRegistrations.guardRegistrationDetail


import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.lifecycle.ViewModelProvider
import bkhn.mandevices.iot.mandevices.R
import bkhn.mandevices.iot.mandevices.databinding.FragmentGuardRegistrationDetailBinding
import dagger.android.support.DaggerFragment
import javax.inject.Inject

/**
 * A simple [Fragment] subclass.
 */
class GuardRegistrationDetailFragment : DaggerFragment() {

    @Inject
    lateinit var viewModelFactory: ViewModelProvider.Factory

    private val viewModel: GuardRegistrationDetailViewModel by viewModels {
        viewModelFactory
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val binding: FragmentGuardRegistrationDetailBinding = DataBindingUtil.inflate(
            inflater,
            R.layout.fragment_guard_registration_detail,
            container,
            false
        )
        binding.lifecycleOwner = this
        val args =
            GuardRegistrationDetailFragmentArgs.fromBundle(
                arguments!!
            )
        val adapter = TabsAdapter(childFragmentManager, 2,args.guardRegistrationId)
        binding.viewpager.adapter = adapter
        binding.tabLayout.setupWithViewPager(binding.viewpager)
        for (i in 0 until binding.tabLayout.tabCount) {
            when (i) {
                0 -> binding.tabLayout.getTabAt(i)!!.text = getString(R.string.morning)
                1 -> binding.tabLayout.getTabAt(i)!!.text = getString(R.string.afternoon)
            }
        }
        return binding.root
    }



}
