//
//  Header.swift
//  CheckInMonitorIOS
//
//  Created by Karson Mellott on 12/8/25.
//

import SwiftUI

struct Header: View {
    var body: some View {
        VStack {
            HStack {
                Image("Logo")
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .frame(width: 225, height: 75)
                    .padding(10)
                Spacer()
            }
            Color.black
                .frame(height: 2)
        }
    }
}


#Preview {
    Header()
}
