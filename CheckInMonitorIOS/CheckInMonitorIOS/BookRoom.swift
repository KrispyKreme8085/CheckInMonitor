//
//  BookRoom.swift
//  CheckInMonitorIOS
//
//  Created by Karson Mellott on 12/10/25.
//

import SwiftUI

struct BookRoom: View {
    @State var isSelected = 0
    @State var name = ""
    @State var groupSize = ""
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
            
        TextField("", text: $groupSize, prompt: Text("Enter Group Size...")
            .foregroundColor(.white)
        )
            .padding()
            .background(Color(.darkBlue))
            .foregroundStyle(Color(.white))
            .frame(width: 300)
            .overlay(alignment: .bottom) {
                Rectangle()
                    .frame(height: 3)
                    .foregroundColor(isSelected == 2 ? .green : .clear)
            }
            .simultaneousGesture(TapGesture().onEnded {
                isSelected = 2
            })
        Button {
            
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
    BookRoom(room: "Room 1")
}
