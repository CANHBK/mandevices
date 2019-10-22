package bkhn.mandevices.iot.mandevices.di

import android.app.Application
import bkhn.mandevices.iot.mandevices.BaseApplication
import bkhn.mandevices.iot.mandevices.di.app.ActivityBuildersModule
import bkhn.mandevices.iot.mandevices.di.app.AppModule
import dagger.BindsInstance
import dagger.Component
import dagger.android.AndroidInjector
import dagger.android.support.AndroidSupportInjectionModule
import javax.inject.Singleton

@Singleton
@Component(modules = [AndroidSupportInjectionModule::class, ActivityBuildersModule::class, AppModule::class])
interface AppComponent : AndroidInjector<BaseApplication> {

    @Component.Builder
    interface Builder {

        @BindsInstance
        fun application(application: Application): Builder

        fun build(): AppComponent
    }
}