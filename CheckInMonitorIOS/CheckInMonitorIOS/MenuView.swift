//
//  MenuView.swift
//  CheckInMonitorIOS
//
//  Created by Karson Mellott on 12/9/25.
//

import SwiftUI

struct MenuView: View {
    var body: some View {
        Menu {
            NavigationLink(destination: AllRooms()) {
                Button("All Rooms") {
                    
                }
            }
            NavigationLink(destination: MyRooms()) {
                Button("My Rooms") {
                    
                }
            }
            
        } label: {
            Circle()
                .glassEffect()
                .frame(width: 90, height: 90)
                .background(.ultraThinMaterial)
                .clipShape(Circle())
                .overlay(
                    Circle().stroke(Color.white.opacity(0.2), lineWidth: 1)
                )
                .overlay {
                    Image(systemName: "line.3.horizontal")
                        .font(.system(size: 40, weight: .semibold))
                        .foregroundColor(.black)
                }
                .tint(.clear)
                .padding(.trailing, 20)
            
        }
    }
}

#Preview {
    MenuView()
}
