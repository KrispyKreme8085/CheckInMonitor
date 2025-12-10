//
//  MyRooms.swift
//  CheckInMonitorIOS
//
//  Created by Karson Mellott on 12/10/25.
//

import SwiftUI

struct MyRooms: View {
    
    var rooms: [RoomBox] = [
        RoomBox(name: "Room 1", occupants: "12", maxOccupancy: "50", isClosed: false),
    ]
    
    var body: some View {
        ZStack(alignment: .topTrailing) {
            ScrollView {
                Header()
                
                ForEach(rooms, id: \.self) { room in
                    NavigationLink(destination: LeaveRoom(room: room.name)) {
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
    MyRooms()
}
