//
//  LeaveRoom.swift
//  CheckInMonitorIOS
//
//  Created by Karson Mellott on 12/10/25.
//

import SwiftUI

struct LeaveRoom: View {
    @State var isSelected = 0
    @State var name = ""
    var room: String
    
    var body: some View {
            
        Text("Book \(room)")
            .fontWeight(.bold)
            .font(.title)
            
        TextField("", text: $name, prompt: Text("Enter Group Name...")
            .foregroundColor(.white)
        )
            .padding()
            .background(Color(.darkBlue))
            .foregroundStyle(Color(.white))
            .frame(width: 300)
            .overlay(alignment: .bottom) {
                Rectangle()
                    .frame(height: 3)
                    .foregroundColor(isSelected == 1 ? .green : .clear)
            }
            .simultaneousGesture(TapGesture().onEnded {
                isSelected = 1
            })
        Button (role: .destructive) {
            
        } label: {
            Text("Book Room")
                .frame(width: 200, height: 40)
                .font(.title2)
        }
        .padding(20)
        .buttonStyle(.borderedProminent)
    }
}

#Preview {
    LeaveRoom(room: "Room 1")
}
