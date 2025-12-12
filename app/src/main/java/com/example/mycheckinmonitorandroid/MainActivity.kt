package com.example.mycheckinmonitorandroid

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.mycheckinmonitorandroid.ui.theme.MyCheckInMonitorAndroidTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            MyCheckInMonitorAndroidTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    Greeting(
                        name = "Android",
                        modifier = Modifier.padding(innerPadding)
                    )
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    var isMenuShown by remember { mutableStateOf(false) }
    var isAllRooms by remember { mutableStateOf(true) }

    Column {
        Header(
            isMenuShown = isMenuShown,
            onToggleMenu = { isMenuShown = !isMenuShown },
            isAllRooms = isAllRooms,
            onRoomSelection = { selected -> isAllRooms = selected }
        )

        if (isAllRooms) {
            AllRooms()
        } else {
            MyRooms()
        }
    }

}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    MyCheckInMonitorAndroidTheme {
        Greeting("Android")
    }
}