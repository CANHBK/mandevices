package bkhn.mandevices.iot.mandevices.di.app

import bkhn.mandevices.iot.mandevices.ui.login.LoginFragment
import bkhn.mandevices.iot.mandevices.RegisterFragment
import bkhn.mandevices.iot.mandevices.ui.guardRegistrations.guardRegistrationDetail.GuardRegistrationDetailFragment
import bkhn.mandevices.iot.mandevices.ui.guardRegistrations.GuardRegistrationsFragment
import bkhn.mandevices.iot.mandevices.ui.guardRegistrations.guardRegistrationDetail.GuardSessionFragment
import dagger.Module
import dagger.android.ContributesAndroidInjector

@Module
abstract class FragmentBuildersModule{
    @ContributesAndroidInjector
    abstract fun contributeRegisterFragment():RegisterFragment

    @ContributesAndroidInjector
    abstract fun contributeGuardSession():GuardSessionFragment

    @ContributesAndroidInjector
    abstract fun contributeGuardRegistrationDetailFragment(): GuardRegistrationDetailFragment

    @ContributesAndroidInjector
    abstract fun contributeLoginFragment(): LoginFragment

    @ContributesAndroidInjector
    abstract fun contributeUsersFragment():GuardRegistrationsFragment
}
