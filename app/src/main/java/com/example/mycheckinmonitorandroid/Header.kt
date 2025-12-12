package com.example.mycheckinmonitorandroid

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun MenuPopup(
    isAllRooms: Boolean,
    onSelection: (Boolean) -> Unit
) {
    Column(
        modifier = Modifier.fillMaxWidth()
    ) {
        Text(
            "All Rooms",
            fontSize = 30.sp,
            textAlign = TextAlign.Center,
            modifier = Modifier
                .fillMaxWidth()
                .clickable { onSelection(true) }
        )

        HorizontalDivider()

        Text(
            "My Rooms",
            fontSize = 30.sp,
            textAlign = TextAlign.Center,
            modifier = Modifier
                .fillMaxWidth()
                .clickable { onSelection(false) }
        )
    }
}



@Composable
fun Header(
    isMenuShown: Boolean,
    onToggleMenu: () -> Unit,
    isAllRooms: Boolean,
    onRoomSelection: (Boolean) -> Unit
) {
    Column {
        Row(
            modifier = Modifier.padding(top = 40.dp)
        ) {
            Spacer(Modifier.width(20.dp))

            Image(
                painterResource(R.drawable.monitorlogo),
                contentDescription = "Logo",
                modifier = Modifier.width(200.dp)
            )

            Spacer(Modifier.width(20.dp))

            Image(
                painterResource(R.drawable.menu),
                contentDescription = "Menu",
                modifier = Modifier
                    .width(400.dp)
                    .height(70.dp)
                    .clickable { onToggleMenu() }
            )
        }

        HorizontalDivider()

        if (isMenuShown) {
            MenuPopup(
                isAllRooms = isAllRooms,
                onSelection = onRoomSelection
            )
        }
    }
}



@Preview
@Composable
fun HeaderPreview() {
    Header(
        isMenuShown = true,
        onToggleMenu = {},
        isAllRooms = true,
        onRoomSelection = {}
    )
}
