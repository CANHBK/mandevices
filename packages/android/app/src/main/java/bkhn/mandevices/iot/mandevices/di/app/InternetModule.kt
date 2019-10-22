package bkhn.mandevices.iot.mandevices.di.app

import bkhn.mandevices.iot.mandevices.BuildConfig.API_ENDPOINT
import com.apollographql.apollo.ApolloClient
import dagger.Module
import dagger.Provides
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import java.util.concurrent.TimeUnit

@Module
class InternetModule {

    @Provides
    fun provideOkHttp(): OkHttpClient {
        val loggingInterceptor = HttpLoggingInterceptor()
        loggingInterceptor.level = HttpLoggingInterceptor.Level.BODY

        return OkHttpClient.Builder()
            .addInterceptor(loggingInterceptor)
            .connectTimeout(20,TimeUnit.SECONDS)
            .build()
    }

    @Provides
    fun provideApolloClient(okHttpClient: OkHttpClient): ApolloClient {

        return ApolloClient.builder()
            .serverUrl(API_ENDPOINT)
            .okHttpClient(okHttpClient)
            .build()
    }
}