package bkhn.mandevices.iot.mandevices.ui.guardRegistrations

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import bkhn.mandevices.iot.mandevices.GuardRegistrationQuery
import bkhn.mandevices.iot.mandevices.databinding.ListItemGuardRegistrationBinding


class GuardRegistrationsAdapter(val listener: GuardRegistrationListener) :
    ListAdapter<GuardRegistrationQuery.GuardingAssignment, ViewHolder>(GuardRegistrationDiffCallBack()) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return ViewHolder.from(parent)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = getItem(position)
        holder.bind(item, listener)

    }

}

class ViewHolder private constructor(private val binding: ListItemGuardRegistrationBinding) :
    RecyclerView.ViewHolder(binding.root) {

    fun bind(item: GuardRegistrationQuery.GuardingAssignment, listener: GuardRegistrationListener) {
        binding.guardRegistration = item
        binding.clickListener = (listener)
        binding.executePendingBindings()

    }

    companion object {
        fun from(parent: ViewGroup): ViewHolder {
            val layoutInflater = LayoutInflater.from(parent.context)
            val binding = ListItemGuardRegistrationBinding.inflate(layoutInflater, parent, false)
            return ViewHolder(binding)
        }
    }
}

class GuardRegistrationDiffCallBack :
    DiffUtil.ItemCallback<GuardRegistrationQuery.GuardingAssignment>() {
    override fun areItemsTheSame(
        oldItem: GuardRegistrationQuery.GuardingAssignment,
        newItem: GuardRegistrationQuery.GuardingAssignment
    ): Boolean {
        return oldItem.id == newItem.id
    }

    override fun areContentsTheSame(
        oldItem: GuardRegistrationQuery.GuardingAssignment,
        newItem: GuardRegistrationQuery.GuardingAssignment
    ): Boolean {
        return oldItem == newItem
    }

}

class GuardRegistrationListener(val itemClickListener: (guardRegistrationId: String) -> Unit) {
    fun itemClick(guardRegistration: GuardRegistrationQuery.GuardingAssignment) =
        itemClickListener(guardRegistration.id!!)
}