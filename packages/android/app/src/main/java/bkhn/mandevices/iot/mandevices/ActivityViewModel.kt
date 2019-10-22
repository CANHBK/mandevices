package bkhn.mandevices.iot.mandevices

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import javax.inject.Inject

class ActivityViewModel @Inject constructor() : ViewModel() {
    init {
        println("debug: ActivityViewModel init")
    }

    var email = MutableLiveData<String>()
    var name = MutableLiveData<String>()
    override fun onCleared() {
        super.onCleared()
        println("debug: ActivityViewModel cleared")
    }
}