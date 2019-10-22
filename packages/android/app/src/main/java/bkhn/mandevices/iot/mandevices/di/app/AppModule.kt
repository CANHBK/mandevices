package bkhn.mandevices.iot.mandevices.di.app

import bkhn.mandevices.iot.mandevices.di.ViewModelModule
import dagger.Module
import dagger.Provides

@Module(includes = [ViewModelModule::class,InternetModule::class])
class AppModule {

    @Provides
    fun s(): String {
        return "canh"
    }
}