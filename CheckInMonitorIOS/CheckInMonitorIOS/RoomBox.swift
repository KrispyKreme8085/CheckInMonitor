//
//  RoomBox.swift
//  CheckInMonitorIOS
//
//  Created by Karson Mellott on 12/8/25.
//

import SwiftUI

struct RoomBox: View, Hashable {
    
    var name: String
    var occupants: String
    var maxOccupancy: String
    var isClosed: Bool
    
    func isClosedText() -> Text {
        if isClosed {
            Text("CLOSED")
                .foregroundStyle(Color.red)
        } else {
            Text("\(occupants) / \(maxOccupancy)")
        }
    }
    
    var body: some View {
        VStack (alignment: .leading) {
            Text("\(name)")
                .font(.largeTitle)
                .fontWeight(.bold)
                .padding()
                .padding(.bottom, -15)
            HStack {
                Text("\(isClosedText())")
                Spacer()
            }
            .padding()
            .padding(.top, -15)
        }
        .foregroundStyle(Color(.white))
        .background(Color(.darkBlue))
        .frame(width: 350)
        .clipShape(RoundedRectangle(cornerRadius: 20))
        .overlay {
            RoundedRectangle(cornerRadius: 20)
                .stroke(Color.black, lineWidth: 2)
        }
        .shadow(color: Color.black, radius: 10, x: 0, y: 1)
        .padding()
    }
}

#Preview {
    RoomBox(
        name: "Room 3B",
        occupants: "50",
        maxOccupancy: "75",
        isClosed: true
    )
}
