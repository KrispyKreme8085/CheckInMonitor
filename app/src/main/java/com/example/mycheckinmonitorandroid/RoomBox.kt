package com.example.mycheckinmonitorandroid

import android.R
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

fun String.toComposeColor(): Color {
    val hex = this.removePrefix("#")

    return when (hex.length) {
        6 -> {
            // RRGGBB → add FF alpha
            val argb = ("FF$hex").toLong(16)
            Color(argb)
        }
        8 -> {
            // AARRGGBB
            Color(hex.toLong(16))
        }
        else -> throw IllegalArgumentException("Unknown color format: $this")
    }
}


val myColor = "#1E2C30".toComposeColor()

@Composable
fun RoomBox(name: String, occupants: String, maxOccupancy: String, isClosed: Boolean) {
    @Composable
    fun IsClosedText() {
        if (isClosed) {
            Text("CLOSED", color = Color.Red)
        } else {
            Text("$occupants / $maxOccupancy", color = Color.White)
        }
    }
    Column (modifier = Modifier
        .padding(10.dp)
    ) {
        Column(
            modifier = Modifier
                .clip(RoundedCornerShape(10.dp))
                .background(myColor)
                .width(300.dp)
                .padding(10.dp)
        ) {
            Text(name, color = Color.White, fontSize = 40.sp)
            IsClosedText()
        }
    }
}

@Composable
@Preview
fun RoomPreview() {
    RoomBox(
        name = "Room 1",
        occupants = "6",
        maxOccupancy = "7",
        isClosed = false
    )
}