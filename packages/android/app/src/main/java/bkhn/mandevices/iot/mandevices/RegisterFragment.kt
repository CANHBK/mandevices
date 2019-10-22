package bkhn.mandevices.iot.mandevices


import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelProviders

import androidx.navigation.Navigation
import bkhn.mandevices.iot.mandevices.databinding.FragmentRegisterBinding
import dagger.android.support.DaggerFragment
import javax.inject.Inject

/**
 * A simple [Fragment] subclass.
 */
class RegisterFragment : DaggerFragment() {

    lateinit var viewModel: RegisterViewModel

    @Inject
    lateinit var viewModelFactory:ViewModelProvider.Factory


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        val binding: FragmentRegisterBinding = DataBindingUtil.inflate(inflater,R.layout.fragment_register,container,false)
        viewModel = ViewModelProviders.of(this).get(RegisterViewModel::class.java)
        binding.viewModel=viewModel
        return binding.root
    }
}
