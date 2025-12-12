package com.example.mycheckinmonitorandroid

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview

@Composable
fun AllRooms() {
    data class Room(
        val name: String,
        val occupants: String,
        val maxOccupancy: String,
        val isClosed: Boolean
    )

    Column(
        modifier = Modifier
            .fillMaxSize()
    ) {
        val rooms = listOf(
            Room(name = "Room 1", occupants = "12", maxOccupancy = "50", isClosed = false),
            Room(name = "Room 2", occupants = "12", maxOccupancy = "50", isClosed = false),
            Room(name = "Room 3", occupants = "12", maxOccupancy = "50", isClosed = true),
            Room(name = "Room 4", occupants = "12", maxOccupancy = "50", isClosed = false),
            Room(name = "Room 5", occupants = "12", maxOccupancy = "50", isClosed = false),
            Room(name = "Room 6", occupants = "12", maxOccupancy = "50", isClosed = false),
            Room(name = "Room 7", occupants = "12", maxOccupancy = "50", isClosed = false),
            Room(name = "Room 7", occupants = "12", maxOccupancy = "50", isClosed = false),
            Room(name = "Room 7", occupants = "12", maxOccupancy = "50", isClosed = false),
            Room(name = "Room 7", occupants = "12", maxOccupancy = "50", isClosed = false)
        )

        val scrollState = rememberScrollState()

        Column(
            modifier = Modifier
                .fillMaxSize()
                .verticalScroll(rememberScrollState())
            ,
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            rooms.forEach { room ->
                RoomBox(
                    name = room.name,
                    occupants = room.occupants,
                    maxOccupancy = room.maxOccupancy,
                    isClosed = room.isClosed
                )

            }
        }
    }
}

@Preview
@Composable
fun AllRoomsPreview() {
    AllRooms()
}