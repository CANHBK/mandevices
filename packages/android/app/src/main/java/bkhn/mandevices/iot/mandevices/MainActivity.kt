package bkhn.mandevices.iot.mandevices

import android.os.Bundle
import android.view.Menu
import androidx.activity.viewModels
import androidx.databinding.DataBindingUtil
import androidx.drawerlayout.widget.DrawerLayout
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.setupWithNavController
import bkhn.mandevices.iot.mandevices.databinding.ActivityMainBinding
import bkhn.mandevices.iot.mandevices.databinding.HeaderDrawerBinding
import com.facebook.login.LoginManager
import dagger.android.support.DaggerAppCompatActivity
import javax.inject.Inject


class MainActivity : DaggerAppCompatActivity() {


    @Inject
    lateinit var viewModelFactory: ViewModelProvider.Factory

    private val activityViewModel: ActivityViewModel by viewModels {
        viewModelFactory
    }

    private val navController by lazy {
        findNavController(R.id.nav_host_fragment)
    }


    private lateinit var binding: ActivityMainBinding

    @Inject
    lateinit var name: String

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)


        setupToolbar()
        setupDrawer()

        activityViewModel.email.observe(this, Observer {

            println("debug: Activity: ${activityViewModel.email.value}")
        })

        navController.addOnDestinationChangedListener { _, destination, _ ->
            run {
                when (destination.id) {
                    R.id.loginFragment -> {
                        binding.drawerLayout.setDrawerLockMode(DrawerLayout.LOCK_MODE_LOCKED_CLOSED)
                        supportActionBar?.hide()
                    }
                    else -> {
                        binding.drawerLayout.setDrawerLockMode(DrawerLayout.LOCK_MODE_UNLOCKED)
                        supportActionBar?.show()
                    }
                }
            }
        }

    }

    private fun setupToolbar() {
        val toolbar = binding.toolbar
        setSupportActionBar(toolbar)
        toolbar.setOnMenuItemClickListener {
            println("debug: item $it")
            when (it.itemId) {
                R.id.logOutAction -> {
                    LoginManager.getInstance().logOut()
                    navController.popBackStack(R.id.guardRegistrationsFragment, true)
                    navController.navigate(R.id.loginFragment)
                }
            }

            false
        }
        val appBarConfiguration by lazy {
            AppBarConfiguration(setOf(R.id.guardRegistrationsFragment, R.id.loginFragment), binding.drawerLayout)
        }
        toolbar.setupWithNavController(navController, appBarConfiguration)
    }

    private fun setupDrawer() {
        val drawerBinding: HeaderDrawerBinding =
            DataBindingUtil.inflate(layoutInflater, R.layout.header_drawer, binding.drawer, false)
        drawerBinding.name.setOnClickListener {
            println("debug: header click")
            binding.drawerLayout.closeDrawers()
            navController.navigate(R.id.accountFragment)
        }
        binding.drawer.setupWithNavController(navController)
        binding.drawer.addHeaderView(drawerBinding.root)
    }

    //    val resetToken =
//        NavigationView.OnNavigationItemSelectedListener { p0 ->
//            println("debug: item $p0")
//            false
//        }


    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.setting, menu)
        return true
    }


}
