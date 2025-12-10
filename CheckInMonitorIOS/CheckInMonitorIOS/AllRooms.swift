//
//  AllRooms.swift
//  CheckInMonitorIOS
//
//  Created by Karson Mellott on 12/9/25.
//

import SwiftUI

struct AllRooms: View {
    
    var rooms: [RoomBox] = [
        RoomBox(name: "Room 1", occupants: "12", maxOccupancy: "50", isClosed: false),
        RoomBox(name: "Room 2", occupants: "0", maxOccupancy: "50", isClosed: false),
        RoomBox(name: "Room 3", occupants: "15", maxOccupancy: "50", isClosed: false),
        RoomBox(name: "Room 4", occupants: "1", maxOccupancy: "50", isClosed: false),
        RoomBox(name: "Room 5", occupants: "48", maxOccupancy: "50", isClosed: false),
        RoomBox(name: "Room 6", occupants: "0", maxOccupancy: "50", isClosed: false),
        RoomBox(name: "Room 7", occupants: "15", maxOccupancy: "50", isClosed: false),
        RoomBox(name: "Room 8", occupants: "0", maxOccupancy: "50", isClosed: true),
        RoomBox(name: "Room 9", occupants: "12", maxOccupancy: "50", isClosed: false),
        RoomBox(name: "Room 10", occupants: "1", maxOccupancy: "50", isClosed: false),
        RoomBox(name: "Room 11", occupants: "48", maxOccupancy: "50", isClosed: false),
    ]
        
    var body: some View {
        ZStack(alignment: .topTrailing) {
            ScrollView {
                Header()
                
                ForEach(rooms, id: \.self) { room in
                    NavigationLink(destination: BookRoom(room: room.name)) {
                        RoomBox(
                            name: room.name,
                            occupants: "\(room.occupants)",
                            maxOccupancy: "\(room.maxOccupancy)",
                            isClosed: room.isClosed
                        )
                    }
                }
            }
            MenuView()
        }
    }
}

#Preview {
    AllRooms()
}
