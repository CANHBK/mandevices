package bkhn.mandevices.iot.mandevices.ui.guardRegistrations.guardRegistrationDetail

import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentManager
import androidx.fragment.app.FragmentPagerAdapter

class TabsAdapter(
    manager: FragmentManager,
    private val numTabs: Int,
    private val guardId:String
) : FragmentPagerAdapter(manager) {
    override fun getItem(position: Int): Fragment {
        return GuardSessionHostFragment.newInstance(position,guardId)
    }


    override fun getCount(): Int = numTabs

}