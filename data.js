// DATABASE HỆ THỐNG KÉP - THUẬT TOÁN SINH NGẪU NHIÊN CHỐNG GIAN LẬN

const regionPools = [
    {
        prov: "Đồng Bằng Sông Cửu Long",
        natures: [
            "Quỹ đất nông nghiệp thu hẹp nhanh do <b>xâm nhập mặn</b> gay gắt, nền đất <b>phù sa yếu</b>.",
            "Tình trạng <b>sạt lở bờ sông, bờ biển</b> diễn biến phức tạp, mùa lũ thay đổi thất thường."
        ],
        pops: [
            "Tỉ lệ <b>xuất cư cao nhất nước</b> do sinh kế nông nghiệp truyền thống bấp bênh.",
            "Chất lượng nguồn lao động còn hạn chế, thiếu hụt nhân lực trẻ do di cư về các đô thị lớn."
        ],
        consequences: [
            "⚠️ CẢNH BÁO ENTROPY: Nuôi thủy sản công nghệ cao ồ ạt dễ phá vỡ rừng ngập mặn rào chắn và phát sinh ô nhiễm nguồn nước.",
            "⚠️ CẢNH BÁO ENTROPY: Bê tông hóa đê kè chống sạt lở làm thay đổi dòng chảy tự nhiên, cản trở sự di cư của các loài cá."
        ],
        correctJobs: [
            { icon: "🦐", title: "Kỹ sư IoT Thủy sản mặn", reason: "Thích ứng chủ động với xâm nhập mặn, ứng dụng công nghệ nâng cao giá trị." },
            { icon: "🌱", title: "Kỹ sư Nông nghiệp Thuận thiên", reason: "Phát triển các mô hình lúa-tôm, lúa-cá thích ứng với biến đổi khí hậu." },
            { icon: "🚁", title: "Phi công Drone Nông nghiệp", reason: "Giải quyết triệt để sự thiếu hụt nhân công do gia tăng xuất cư." },
            { icon: "🌾", title: "Kỹ sư Sinh học Chọn giống", reason: "Lai tạo giống lúa chịu mặn, chịu phèn, đảm bảo an ninh lương thực." }
        ],
        wrongJobs: [
            { icon: "🏗️", title: "Kỹ sư Luyện kim nặng", reason: "Bẫy logic! Nền đất yếu khiến chi phí xây dựng hạ tầng công nghiệp nặng đội lên quá cao." },
            { icon: "👕", title: "Công nhân May gia công", reason: "Bẫy logic! Thâm dụng lao động phổ thông không giải quyết được bài toán sinh kế bền vững trước thiên tai." },
            { icon: "🌲", title: "Kỹ sư Lâm nghiệp gỗ lớn", reason: "Bẫy logic! Không phù hợp sinh thái, vùng này chỉ phát triển rừng ngập mặn/rừng tràm." }
        ]
    },
    {
        prov: "Nam Trung Bộ",
        natures: [
            "Sông ngòi <b>ngắn dốc</b>, <b>mùa khô kéo dài</b> gây thiếu nước, nhưng <b>bức xạ nhiệt</b> dồi dào.",
            "Đường bờ biển khúc khuỷu, nhiều <b>vũng vịnh nước sâu</b> kín gió, thềm lục địa hẹp."
        ],
        pops: [
            "Dân số trẻ đông, <b>thiếu việc làm công nghiệp</b>, cần chuyển dịch cơ cấu ngành kinh tế.",
            "Nguồn lao động nghề cá dồi dào nhưng sinh kế bấp bênh do nguồn lợi thủy sản ven bờ suy giảm."
        ],
        consequences: [
            "⚠️ CẢNH BÁO ENTROPY: Phát triển cảng biển và du lịch quá nóng nguy cơ xung đột không gian với hệ sinh thái rạn san hô.",
            "⚠️ CẢNH BÁO ENTROPY: Các cánh đồng điện mặt trời khổng lồ tạo ra bức xạ nhiệt cục bộ và rác thải pin trong tương lai."
        ],
        correctJobs: [
            { icon: "☀️", title: "Kỹ sư Năng lượng Tái tạo", reason: "Phát triển điện mặt trời/gió, biến cái nắng gió khắc nghiệt thành tài nguyên." },
            { icon: "🏭", title: "Kỹ sư Cảng biển Logistics", reason: "Khai thác thế mạnh thềm lục địa hẹp, vũng vịnh nước sâu để phát triển vận tải biển." },
            { icon: "🐟", title: "Kỹ sư Nuôi biển xa bờ", reason: "Chuyển từ đánh bắt ven bờ cạn kiệt sang nuôi trồng hải sản xa bờ giá trị cao." },
            { icon: "🏖️", title: "Quản trị Du lịch Biển đảo", reason: "Khai thác tài nguyên du lịch biển phong phú, tạo nhiều việc làm dịch vụ." }
        ],
        wrongJobs: [
            { icon: "🌾", title: "Kỹ sư Nông nghiệp Lúa nước", reason: "Bẫy logic! Mùa khô kéo dài, hạn hán gay gắt, thâm canh lúa nước là đi ngược lợi thế tự nhiên." },
            { icon: "💧", title: "Kỹ sư Thủy điện lớn", reason: "Bẫy logic! Sông thiếu nước mùa khô, không thể vận hành thủy điện công suất lớn liên tục." },
            { icon: "⛏️", title: "Khai thác Than đá", reason: "Bẫy logic! Vùng không có thế mạnh về khoáng sản nhiên liệu quy mô lớn." }
        ]
    },
    {
        prov: "Đông Nam Bộ",
        natures: [
            "Vùng kinh tế trọng điểm, quỹ đất hẹp, <b>cạn kiệt không gian</b>, nguy cơ ô nhiễm lớn.",
            "Địa hình bán bình nguyên tương đối bằng phẳng, nền đất cứng, ổn định."
        ],
        pops: [
            "Thu hút mạnh dân nhập cư, tập trung lao động <b>đã qua đào tạo trình độ cao</b> lớn nhất.",
            "Mật độ dân số đô thị rất cao, sức ép lớn lên hạ tầng giao thông và nhà ở."
        ],
        consequences: [
            "⚠️ CẢNH BÁO ENTROPY: Bùng nổ kinh tế tri thức làm gia tăng hiệu ứng Đảo nhiệt đô thị và áp lực rác thải điện tử (E-waste).",
            "⚠️ CẢNH BÁO ENTROPY: Mở rộng không gian đô thị có nguy cơ bức tử các dòng sông và hệ thống thoát nước tự nhiên."
        ],
        correctJobs: [
            { icon: "💻", title: "Kỹ sư Vi mạch Bán dẫn", reason: "Chuyển dịch sang công nghiệp công nghệ cao, tận dụng nguồn nhân lực trí thức." },
            { icon: "📈", title: "Chuyên gia Tài chính Fintech", reason: "Tạo giá trị gia tăng khổng lồ mà không tiêu tốn quỹ đất công nghiệp." },
            { icon: "🏙️", title: "Quy hoạch Đô thị thông minh", reason: "Giải quyết sức ép về không gian sống, hạ tầng và giao thông nội thị." },
            { icon: "♻️", title: "Kỹ sư Môi trường & Xử lý Rác", reason: "Giải quyết áp lực ô nhiễm môi trường do đô thị hóa và công nghiệp hóa dày đặc." }
        ],
        wrongJobs: [
            { icon: "⛏️", title: "Kỹ sư Khai thác Mỏ", reason: "Bẫy logic! Vùng thiếu vắng khoáng sản lộ thiên quy mô lớn. Khai khoáng phá vỡ quy hoạch đô thị." },
            { icon: "👟", title: "Thợ thủ công Giày da", reason: "Bẫy logic! Ngành thâm dụng lao động giá rẻ, thâm dụng đất đai đang phải nhường chỗ cho công nghệ cao." },
            { icon: "☕", title: "Kỹ sư Nông lâm kết hợp", reason: "Bẫy logic! Nông nghiệp đang bị thu hẹp mạnh, không phải là hướng đi trọng tâm tạo ra đột phá." }
        ]
    },
    {
        prov: "Tây Nguyên",
        natures: [
            "Địa hình <b>cao nguyên xếp tầng</b>, <b>đất bazan</b> màu mỡ, diện tích rừng lớn nhất cả nước.",
            "Khí hậu cận xích đạo phân hóa theo độ cao, có mùa khô sâu sắc kéo dài."
        ],
        pops: [
            "Mật độ dân số <b>thấp nhất nước</b>, phân bố không đều, chủ yếu đồng bào dân tộc thiểu số.",
            "Trình độ lao động chưa cao, thiếu lao động chuyên môn kĩ thuật tại chỗ."
        ],
        consequences: [
            "⚠️ CẢNH BÁO ENTROPY: Mở rộng diện tích cây công nghiệp thiếu kiểm soát dẫn đến phá rừng ngầm và cạn kiệt mực nước ngầm tầng sâu.",
            "⚠️ CẢNH BÁO ENTROPY: Xây dựng đập thủy điện bậc thang làm thay đổi hệ sinh thái thủy sinh và dòng chảy tự nhiên của hạ lưu."
        ],
        correctJobs: [
            { icon: "☕", title: "Kỹ sư Cây công nghiệp Sinh thái", reason: "Phát triển cà phê, cao su bền vững, áp dụng tiêu chuẩn quốc tế trên đất bazan." },
            { icon: "🌳", title: "Chuyên gia Tín chỉ Carbon", reason: "Biến diện tích rừng nguyên sinh thành hàng hóa kinh tế xanh bền vững." },
            { icon: "🏕️", title: "Quản trị Du lịch Bản địa", reason: "Tạo sinh kế tại chỗ, bảo tồn văn hóa và nâng cao thu nhập cho đồng bào." },
            { icon: "💧", title: "Kỹ sư Thủy điện bậc thang", reason: "Khai thác thế năng dòng chảy trên các cao nguyên xếp tầng." }
        ],
        wrongJobs: [
            { icon: "🌬️", title: "Kỹ sư Điện gió ngoài khơi", reason: "Bẫy logic! Đây là vùng nội địa duy nhất không giáp biển." },
            { icon: "🌐", title: "Chuyên gia AI & Big Data", reason: "Bẫy logic! Thiếu cơ sở hạ tầng công nghệ lõi và nguồn nhân lực để phát triển diện rộng." },
            { icon: "⚓", title: "Kỹ sư Hàng hải", reason: "Bẫy logic! Vùng không có kinh tế biển, xuất khẩu phụ thuộc hạ tầng cảng Duyên hải." }
        ]
    },
    {
        prov: "Trung du & Miền núi Bắc Bộ",
        natures: [
            "Địa hình đồi núi dốc chia cắt mạnh, <b>khí hậu có mùa đông lạnh nhất nước</b>.",
            "Nhiều khoáng sản nhiên liệu (than đá), kim loại, phi kim loại trữ lượng lớn."
        ],
        pops: [
            "Phân bố dân cư thưa thớt, trình độ dân trí chưa đồng đều, hạ tầng tiếp cận dịch vụ yếu.",
            "Đa dạng bản sắc văn hóa các dân tộc thiểu số nhưng sinh kế còn phụ thuộc nông nghiệp."
        ],
        consequences: [
            "⚠️ CẢNH BÁO ENTROPY: Khai thác khoáng sản lộ thiên gây ô nhiễm nguồn nước ngầm, bụi và biến đổi địa hình. Cần phục hồi hoàn thổ sau khai thác.",
            "⚠️ CẢNH BÁO ENTROPY: Du lịch đại trà (Mass Tourism) tại vùng núi cao dễ làm đứt gãy văn hóa bản địa và sạt lở cảnh quan."
        ],
        correctJobs: [
            { icon: "🍎", title: "Kỹ sư Nông nghiệp Ôn đới", reason: "Khai thác đặc ân mùa đông lạnh để phát triển cây ăn quả, dược liệu cận nhiệt/ôn đới." },
            { icon: "⛏️", title: "Kỹ sư Khai khoáng Công nghệ mới", reason: "Tối ưu hóa khai thác than, khoáng sản đi đôi với bảo vệ môi trường hoàn thổ." },
            { icon: "🏕️", title: "Quản trị Du lịch Cộng đồng", reason: "Khai thác cảnh quan đồi núi và bản sắc dân tộc, xóa đói giảm nghèo tại chỗ." },
            { id: 4, icon: "💧", title: "Kỹ sư Vận hành Thủy điện", reason: "Khai thác trữ năng thủy điện lớn nhất nước (hệ thống sông Hồng, sông Đà)." }
        ],
        wrongJobs: [
            { icon: "⚓", title: "Quy hoạch Cảng biển nước sâu", reason: "Bẫy logic! Trừ Quảng Ninh, phần lớn lãnh thổ nằm sâu trong nội địa đồi núi." },
            { icon: "🏙️", title: "Quy hoạch siêu đô thị", reason: "Bẫy logic! Địa hình đứt gãy phức tạp, sạt lở cao không phù hợp đô thị tập trung khổng lồ." },
            { icon: "🌾", title: "Thâm canh Lúa nước quy mô lớn", reason: "Bẫy logic! Thiếu quỹ đất đồng bằng rộng lớn, chỉ canh tác bậc thang quy mô hẹp." }
        ]
    },
    {
        prov: "Đồng Bằng Sông Hồng",
        natures: [
            "Quỹ <b>đất nông nghiệp hẹp</b> nhất nước, <b>địa hình bằng phẳng</b>, lưới sông ngòi dày đặc.",
            "Chịu ảnh hưởng trực tiếp của bão, lũ lụt và các đợt gió mùa Đông Bắc lạnh giá."
        ],
        pops: [
            "Mật độ dân số <b>cao nhất nước</b>, tỉ lệ lao động qua đào tạo (39,2%) đứng đầu quốc gia.",
            "Lao động nông nghiệp có xu hướng dư thừa và già hóa do thanh niên chuyển sang khu công nghiệp."
        ],
        consequences: [
            "⚠️ CẢNH BÁO ENTROPY: Chuyển đổi ồ ạt đất lúa sang khu công nghiệp gây mất an ninh lương thực và phá vỡ cấu trúc thủy lợi, dẫn đến ngập úng đô thị.",
            "⚠️ CẢNH BÁO ENTROPY: Cường độ thâm canh quá cao gây suy kiệt độ phì nhiêu của đất và ô nhiễm nguồn nước mặt do hóa chất nông nghiệp."
        ],
        correctJobs: [
            { icon: "🏢", title: "Nông nghiệp Đô thị thông minh", reason: "Trồng trọt công nghệ cao (thủy canh, nhà kính) tạo giá trị lớn trên quỹ đất siêu hẹp." },
            { icon: "🤖", title: "Kỹ sư Trí tuệ Nhân tạo (AI)", reason: "Hấp thụ nguồn lực lao động đã qua đào tạo khổng lồ, phát triển kinh tế tri thức." },
            { icon: "🚗", title: "Kỹ sư Ô tô - Lắp ráp công nghệ", reason: "Tận dụng lao động có kĩ thuật và hạ tầng kết nối đồng bộ của Vùng kinh tế trọng điểm." },
            { icon: "🌊", title: "Kỹ sư Thủy lợi cấp cao", reason: "Bảo vệ đê điều, hệ thống tiêu thoát nước đô thị trước áp lực bão lũ lưu vực sông Hồng." }
        ],
        wrongJobs: [
            { icon: "⛏️", title: "Công nhân Khai thác Than", reason: "Bẫy logic! Than nâu ĐBSH nằm rất sâu, khai thác sẽ đánh sập cấu trúc không gian đồng bằng và an ninh lương thực." },
            { icon: "🌲", title: "Kỹ sư Lâm nghiệp", reason: "Bẫy logic! Quỹ đất đã khai thác triệt để cho cư trú và nông nghiệp, diện tích rừng rất ít." },
            { icon: "👶", title: "Tuyển Công nhân giản đơn giá rẻ", reason: "Bẫy logic! Làm lãng phí thế mạnh lao động trình độ cao số 1 cả nước của vùng." }
        ]
    },
    {
        prov: "Bắc Trung Bộ",
        natures: [
            "Lãnh thổ <b>hẹp ngang</b>, đồi núi lấn sát biển, thường xuyên chịu <b>bão, lũ quét</b> và gió phơn khô nóng.",
            "Tài nguyên rừng phòng hộ quan trọng, bờ biển dài, có các đồng bằng nhỏ hẹp."
        ],
        pops: [
            "Nguồn lao động dồi dào, chịu khó, nhưng tỉ lệ <b>xuất cư</b> tìm việc làm luôn ở mức cao.",
            "Chất lượng lao động đang cải thiện nhưng sinh kế gắn với tự nhiên nhiều rủi ro."
        ],
        consequences: [
            "⚠️ CẢNH BÁO ENTROPY: Quy hoạch hệ thống hồ chứa và thủy lợi nếu sai sót sẽ dẫn đến hiện tượng lũ nhân tạo hoặc suy giảm thảm rừng đầu nguồn.",
            "⚠️ CẢNH BÁO ENTROPY: Phát triển khu công nghiệp ven biển nếu quản lý chất thải kém sẽ lặp lại thảm họa môi trường biển, triệt tiêu sinh kế ngư dân."
        ],
        correctJobs: [
            { icon: "🌊", title: "Kỹ sư Thủy lợi & Cảnh báo thiên tai", reason: "Nghề sống còn: Ứng phó thời tiết cực đoan (bão, lũ, hạn hán) để bảo vệ sản xuất." },
            { icon: "🌳", title: "Kỹ sư Nông lâm kết hợp", reason: "Phát triển mô hình bảo vệ rừng đầu nguồn kết hợp sinh kế kinh tế đồi rừng." },
            { icon: "🏗️", title: "Kỹ sư Vật liệu Xây dựng", reason: "Khai thác thế mạnh tài nguyên đá vôi, cát thủy tinh dồi dào của vùng." },
            { icon: "🐟", title: "Chuyên gia Hậu cần nghề cá", reason: "Phát triển dịch vụ hậu cần và chế biến thủy sản dọc tuyến bờ biển dài." }
        ],
        wrongJobs: [
            { icon: "🚀", title: "Kỹ sư Hàng không Vũ trụ", reason: "Bẫy logic! Thiếu hụt nghiêm trọng hạ tầng công nghệ lõi và dòng vốn FDI." },
            { icon: "☕", title: "Trồng Cà phê quy mô lớn", reason: "Bẫy logic! Gió bão nhiều, thiếu đất bazan tập trung khiến cây công nghiệp dài ngày rủi ro cao." },
            { icon: "🌾", title: "Xuất khẩu Gạo quốc tế", reason: "Bẫy logic! Đồng bằng nhỏ hẹp, đất kém màu mỡ, không thể làm vựa lúa xuất khẩu trọng điểm." }
        ]
    },
    {
        prov: "Vùng Biển và Hải Đảo",
        natures: [
            "Vùng đặc quyền kinh tế rộng lớn, thềm lục địa <b>giàu tài nguyên</b> dầu khí, tiềm năng gió biển cực lớn.",
            "Hệ sinh thái rạn san hô, rừng ngập mặn đa dạng, nhiều bãi cá bãi tôm."
        ],
        pops: [
            "Cư dân trên đảo và ven bờ cần <b>sinh kế bền vững</b> gắn liền với bảo vệ an ninh quốc phòng.",
            "Lực lượng lao động nghề biển có kinh nghiệm nhưng đang thiếu tàu thuyền hiện đại."
        ],
        consequences: [
            "⚠️ CẢNH BÁO ENTROPY: Sự cố tràn dầu hoặc lắp đặt tuabin gió sai luồng lạch sẽ phá hủy rạn san hô, cản trở di cư của cá và sinh kế ngư dân truyền thống.",
            "⚠️ CẢNH BÁO ENTROPY: Đánh bắt bằng mìn, lưới rã cào làm cạn kiệt tầng đáy, đánh sập chuỗi thức ăn sinh thái biển."
        ],
        correctJobs: [
            { icon: "🛢️", title: "Kỹ sư Khai thác Dầu khí", reason: "Phát huy thế mạnh tài nguyên khoáng sản thềm lục địa (chủ yếu thềm phía Nam)." },
            { icon: "🌬️", title: "Kỹ sư Điện gió ngoài khơi (Offshore Wind)", reason: "Đón đầu xu hướng năng lượng xanh trên không gian biển rộng lớn và nhiều gió." },
            { icon: "⚓", title: "Lực lượng Tuần duyên & Kiểm ngư", reason: "Bảo vệ an ninh chủ quyền và hỗ trợ ngư dân bám biển sản xuất." },
            { icon: "🐠", title: "Nuôi trồng hải sản Sinh thái", reason: "Phát triển nuôi trai ngọc, tôm hùm gắn với bảo vệ cảnh quan quanh các đảo." }
        ],
        wrongJobs: [
            { icon: "🚇", title: "Quy hoạch Đô thị ngầm", reason: "Bẫy logic! Mật độ dân số các đảo chưa đủ lớn và địa chất phức tạp không phù hợp đô thị ngầm." },
            { icon: "🌾", title: "Trồng lúa nước hữu cơ", reason: "Bẫy logic! Thiếu đất phù sa ngọt và không gian, môi trường mặn không thể thâm canh lúa." },
            { icon: "🏭", title: "Khu công nghiệp Luyện thép", reason: "Bẫy logic! Quỹ đất trên đảo rất hẹp, hệ sinh thái biển cực kỳ nhạy cảm với chất thải công nghiệp nặng." }
        ]
    }
];

// Trắc nghiệm cấp cứu (Revive)
const reviveQuestions = [
    { q: "Năm 2024, nhóm tuổi từ 65 trở lên ở VN chiếm khoảng bao nhiêu %?", options: ["A. Dưới 5%", "B. Khoảng 7%", "C. 9,3%", "D. Hơn 15%"], ans: 2 },
    { q: "Đồng bằng sông Hồng có tỉ lệ lao động đã qua đào tạo cao nhất nước, đạt mức:", options: ["A. 20,4%", "B. 28,4%", "C. 33,1%", "D. 39,2%"], ans: 3 },
    { q: "Năm 2024, quy mô dân số nước ta đạt khoảng:", options: ["A. 96,5 triệu người", "B. 98,2 triệu người", "C. 101,3 triệu người", "D. 115,2 triệu người"], ans: 2 },
    { q: "Tác động tiêu cực lớn nhất của đô thị hóa tự phát đối với dân cư nước ta là gì?", options: ["A. Mất bản sắc văn hóa", "B. Sức ép việc làm, hạ tầng và y tế", "C. Suy giảm dân số tự nhiên", "D. Thiếu lao động phổ thông"], ans: 1 },
    { q: "Chất lượng lao động Việt Nam hiện nay còn hạn chế nhất ở điểm nào?", options: ["A. Sự cần cù, sáng tạo", "B. Tỉ lệ lao động chưa qua đào tạo cao", "C. Kinh nghiệm sản xuất nông nghiệp", "D. Khả năng thích ứng máy móc"], ans: 1 }
];