package bkhn.mandevices.iot.mandevices.di

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import bkhn.mandevices.iot.mandevices.ActivityViewModel
import bkhn.mandevices.iot.mandevices.RegisterViewModel
import bkhn.mandevices.iot.mandevices.ui.guardRegistrations.guardRegistrationDetail.GuardRegistrationDetailViewModel
import bkhn.mandevices.iot.mandevices.ui.guardRegistrations.GuardRegistrationsViewModel
import bkhn.mandevices.iot.mandevices.ui.guardRegistrations.guardRegistrationDetail.GuardSessionViewModel
import bkhn.mandevices.iot.mandevices.ui.login.LoginViewModel
import bkhn.mandevices.iot.mandevices.viewModel.MyViewModelFactory
import dagger.Binds
import dagger.Module
import dagger.multibindings.IntoMap

@Module
abstract class ViewModelModule {

    @Binds
    @IntoMap
    @ViewModelKey(GuardRegistrationsViewModel::class)
    abstract fun bindUsersViewModel(guardRegistrationsViewModel: GuardRegistrationsViewModel): ViewModel
    @Binds
    @IntoMap
    @ViewModelKey(GuardSessionViewModel::class)
    abstract fun bindGuardSession(vm: GuardSessionViewModel): ViewModel

    @Binds
    @IntoMap
    @ViewModelKey(GuardRegistrationDetailViewModel::class)
    abstract fun bindGuardRegistrationDetailViewModel(vm: GuardRegistrationDetailViewModel): ViewModel

    @Binds
    @IntoMap
    @ViewModelKey(ActivityViewModel::class)
    abstract fun bindActivityViewModel(activityViewModel: ActivityViewModel): ViewModel

    @Binds
    @IntoMap
    @ViewModelKey(LoginViewModel::class)
    abstract fun bindLoginViewModel(loginViewModel: LoginViewModel): ViewModel

    @Binds
    @IntoMap
    @ViewModelKey(RegisterViewModel::class)
    abstract fun bindRegisterViewModel(registerViewModel: RegisterViewModel): ViewModel


    @Binds
    abstract fun bindViewModelFactory(factory: MyViewModelFactory): ViewModelProvider.Factory
}