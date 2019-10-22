package bkhn.mandevices.iot.mandevices.ui.guardRegistrations.guardRegistrationDetail

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import bkhn.mandevices.iot.mandevices.GuardingAssignmentQuery
import bkhn.mandevices.iot.mandevices.databinding.ListItemGuardSubscriberBinding

class GuardSessionAdapter :
    ListAdapter<GuardingAssignmentQuery.Subscriber, ViewHolder>(GuardSubscriberDiff()) {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return ViewHolder.from(parent)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

}

class ViewHolder private constructor(private val binding: ListItemGuardSubscriberBinding) :
    RecyclerView.ViewHolder(binding.root) {
    fun bind(item: GuardingAssignmentQuery.Subscriber) {
        binding.subscriber = item

        binding.executePendingBindings()

    }

    companion object {
        fun from(parent: ViewGroup): ViewHolder {
            val layoutInflater = LayoutInflater.from(parent.context)
            val binding = ListItemGuardSubscriberBinding.inflate(layoutInflater, parent, false)
            return ViewHolder(binding)
        }
    }

}


class GuardSubscriberDiff : DiffUtil.ItemCallback<GuardingAssignmentQuery.Subscriber>() {
    override fun areItemsTheSame(
        oldItem: GuardingAssignmentQuery.Subscriber,
        newItem: GuardingAssignmentQuery.Subscriber
    ): Boolean {
        return oldItem.user == newItem.user
    }

    override fun areContentsTheSame(
        oldItem: GuardingAssignmentQuery.Subscriber,
        newItem: GuardingAssignmentQuery.Subscriber
    ): Boolean {
        return oldItem == newItem
    }

}