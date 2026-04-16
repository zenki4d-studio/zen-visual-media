import {
  MonitorPlay,
  MapPin,
  Settings,
  Cpu,
  Smartphone
} from "lucide-react";
import { TeamMember, Service, Project, SkillData } from "./types";

export const NAV_LINKS = [
  { name: "Zen", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "3d-tvc",
    title: "Video 3D TVC",
    description: "Định dạng tối ưu khi mang hình ảnh thương hiệu xuất hiện trước công chúng tại các địa điểm quảng cáo ngoài trời, các tòa nhà lớn.",
    icon: MonitorPlay,
  },
  {
    id: "3d-fooh",
    title: "Video 3D FOOH",
    description: "Video 3D quảng cáo ngoài trời (Fake Out Of Home).",
    icon: MapPin,
  },
  {
    id: "3d-explainer",
    title: "Video 3D Explainer",
    description: "Mô phỏng cấu tạo, giải thích hoạt động máy móc, công trình.",
    icon: Settings,
  },
  {
    id: "ai-production",
    title: "Video AI Production",
    description: "Các loại hình video sản xuất bằng AI.",
    icon: Cpu,
  },
  {
    id: "ar-filter",
    title: "Sản xuất AR Filter đa nền tảng",
    description: "Sản xuất AR Filter đa nền tảng.",
    icon: Smartphone,
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "zen",
    name: "Zen Visual Media",
    role: "Creative Agency",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    specialties: ["Visual", "Media", "3D Animation", "Brand Storytelling"]
  }
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Visual', A: 98, fullMark: 100 },
  { subject: 'Media', A: 95, fullMark: 100 },
  { subject: '3D Animation', A: 92, fullMark: 100 },
  { subject: 'Storytelling', A: 96, fullMark: 100 },
  { subject: 'AI Tech', A: 90, fullMark: 100 },
];

export const PROJECTS: Project[] = [
  // 3D TVC (Updated Paths)
  {
    id: "3d-tvc-dragon",
    title: "Ngọc Rồng Đông Giang",
    titleEn: "East Giang Dragon Gem",
    category: "3D TVC",
    client: "Hòn ngọc Á châu",
    thumbnail: "https://images.unsplash.com/photo-1578305011741-f76110cb18f0?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/1.%20Ngọc%20Rồng%20Đông%20Giang_1.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  {
    id: "3d-tvc-grow-plus-chuoi",
    title: "Grow Plus+ Sữa Chuối",
    titleEn: "Grow Plus+ Banana Milk",
    category: "3D TVC",
    client: "Grow Plus+",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/2.%20Grow%20Plus+%20Sữa%20Chuối_1.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  {
    id: "3d-tvc-maybelline",
    title: "Maybelline Teddy & Tint",
    titleEn: "Maybelline Teddy & Tint",
    titleJp: "Maybelline Teddy & Tint",
    category: "3D TVC",
    client: "Maybelline",
    thumbnail: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/3.%20Maybelline%20Teddy%20&%20Tint_1.mp4",
    description: "- Dự án Maybelline Teddy Tint mang đến một hành trình thị giác đầy phá cách, đưa chú gấu Teddy biểu tượng từ New York hiện đại đến 'đổ bộ' và trải nghiệm những góc phố đặc trưng nhất của Việt Nam.\n- Bằng việc kết hợp nhuần nhũn giữa các cảnh quay thực tế (Live-action) cùng kỹ thuật CGI và Motion Tracking chuyên sâu, đội ngũ Zen Visual Media đã tạo nên sự tương tác sống động giữa nhân vật 3D với môi trường đô thị. Điểm nhấn nằm ở việc mô phỏng chất liệu lông gấu (fur simulation) chân thực, kết hợp hiệu ứng ánh sáng vật lý giúp gấu Teddy khổng lồ trở nên gần gũi, tạo hiệu ứng thị giác Fake Out of Home (FOOH) ấn tượng, giúp nâng tầm chiến dịch quảng bá dòng son mới của Maybelline trên các nền tảng số.",
    descriptionEn: "- The Maybelline Teddy Tint project delivers a disruptive visual journey, bringing the iconic Teddy bear from modern New York to 'landing' and experiencing the most characteristic corners of Vietnam.\n- By seamlessly blending live-action footage with advanced CGI and deep Motion Tracking techniques, the Zen Visual Media team created a lifelike interaction between 3D characters and the urban environment. The highlight lies in the authentic fur simulation, combined with physical lighting effects that make the giant Teddy bear feel approachable, creating an impressive Fake Out of Home (FOOH) visual effect that elevates Maybelline's new lipstick campaign across digital platforms.",
    descriptionJp: "- メイベリン・テディ・ティント・プロジェクトは、象徴的なテディベアを現代のニューヨークからベトナムの最も特徴的な街角へ「着陸」させ、体験させるという、常識を打ち破る視覚的な旅を提供します。\n- 実写映像と高度なCGI、深いモーショントラッキング技術をシームレスに融合させることで、Zen Visual Mediaチームは3Dキャラクターと都市環境との実物に近い相互作用を実現しました。ハイライトは、巨大なテディベアを親しみやすく感じさせる物理的な照明効果と組み合わせた本物の毛皮シミュレーションにあり、デジタルプラットフォーム全体でメイベリンの新しいリップスティックキャンペーンを向上させる印象的な Fake Out of Home (FOOH) 視覚効果を生み出しました。",
    descriptionKr: "- 메이블린 테디 틴트 프로젝트는 상징적인 테디 베어를 현대적인 뉴욕에서 베트남의 가장 특징적인 거리로 '착륙'시켜 체험하게 하는 파괴적인 시각적 여정을 선사합니다.\n- 실사 영상과 고급 CGI 및 심층 모션 트래킹 기술을 매끄럽게 결합하여, Zen Visual Media 팀은 3D 캐릭터와 도시 환경 사이의 실감 나는 상호작용을 만들어냈습니다. 하이라이트는 물리적 조명 효과와 결합된 사실적인 털 시뮬레이션에 있으며, 이는 거대한 테디 베어를 친숙하게 느껴지게 하여 디지털 플랫폼 전반에서 메이블린의 새로운 립스틱 캠페인을 격상시키는 인상적인 Fake Out of Home (FOOH) 시각 효과를 창출했습니다."
  },
  {
    id: "3d-tvc-hoka-sg",
    title: "Hoka Grand Opening - SAIGON CENTRE",
    titleEn: "Hoka Grand Opening - SAIGON CENTRE",
    category: "3D TVC",
    client: "Hoka",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/4.%20Hoka%20Grand%20Openning%20-%20SAIGON%20CENTRE_1.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  {
    id: "3d-tvc-vpbank",
    title: "Soundbox VPBANK",
    titleEn: "Soundbox VPBANK",
    category: "3D TVC",
    client: "VPBANK",
    thumbnail: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/5.%20Soundbox%20VPBANK_1.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  {
    id: "3d-tvc-hoka-hn",
    title: "Hoka Grand Opening HA NOI",
    titleEn: "Hoka Grand Opening HA NOI",
    category: "3D TVC",
    client: "Hoka",
    thumbnail: "https://images.unsplash.com/photo-1503376760367-11ea8eb2223b?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/6.%20Hoka%20Grand%20Opening%20HA%20NOI_1.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  {
    id: "3d-tvc-grow-plus-vang-sua",
    title: "GrowPlus+ Váng Sữa",
    titleEn: "GrowPlus+ Milk Whey",
    category: "3D TVC",
    client: "Grow Plus+",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/7.%20GrowPlus+%20Váng%20Sữa_1.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  {
    id: "3d-tvc-eucerin",
    title: "Eucerin TVC",
    titleEn: "Eucerin TVC",
    category: "3D TVC",
    client: "Eucerin",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/8-eucerin-tvc-1.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  {
    id: "3d-tvc-panasonic-be-bo-1",
    title: "Panasonic Bé Bố 1",
    titleEn: "Panasonic Baby Daddy 1",
    category: "3D TVC",
    client: "Panasonic",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/9-panasonic-baby-daddy-1.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  {
    id: "3d-tvc-panasonic-be-bo-2",
    title: "Panasonic Bé Bố 2",
    titleEn: "Panasonic Baby Daddy 2",
    category: "3D TVC",
    client: "Panasonic",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/9-panasonic-baby-daddy-2.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  {
    id: "3d-tvc-panasonic-be-bo-3",
    title: "Panasonic Bé Bố 3",
    titleEn: "Panasonic Baby Daddy 3",
    category: "3D TVC",
    client: "Panasonic",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/9-panasonic-baby-daddy-3.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  {
    id: "3d-tvc-gamuda",
    title: "Gamuda TVC",
    titleEn: "Gamuda TVC",
    category: "3D TVC",
    client: "Gamuda",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/10-gamuda-tvc-1.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  {
    id: "3d-tvc-samsung-s25",
    title: "Samsung S25 Ultra x Robert DAT",
    titleEn: "Samsung S25 Ultra x Robert DAT",
    category: "3D TVC",
    client: "Samsung",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/11-samsung-s25-ultra.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  {
    id: "3d-tvc-listerine",
    title: "Listerine TVC",
    titleEn: "Listerine TVC",
    category: "3D TVC",
    client: "Listerine",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/12-listerine-tvc-1.mp4",
    description: "Video Quảng cáo truyền hình",
    descriptionEn: "Television Commercial Video"
  },
  // 3D FOOH (New Videos)
  {
    id: "3d-fooh-tiktok-9",
    title: "Tiktok Shop 9",
    titleEn: "Tiktok Shop 9",
    category: "3D FOOH",
    client: "Tiktok Shop",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/1.%20Tiktok%20Shop%209.mp4",
    description: "Video 3D quảng cáo ngoài trời",
    descriptionEn: "3D FOOH Advertising Video"
  },
  {
    id: "3d-fooh-tiktok-10",
    title: "Tiktok Shop 10.10",
    titleEn: "Tiktok Shop 10.10",
    category: "3D FOOH",
    client: "Tiktok Shop",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/2.%20Tiktok%20Shop%2010.10.mp4",
    description: "Video 3D quảng cáo ngoài trời",
    descriptionEn: "3D FOOH Advertising Video"
  },
  {
    id: "3d-fooh-tiktok-11",
    title: "Tiktok Shop 11.11",
    titleEn: "Tiktok Shop 11.11",
    category: "3D FOOH",
    client: "Tiktok Shop",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/3.%20Tiktok%20Shop%2011.11.mp4",
    description: "Video 3D quảng cáo ngoài trời",
    descriptionEn: "3D FOOH Advertising Video"
  },
  {
    id: "3d-fooh-spotify-tlinh",
    title: "Digital Kite Spotify - Tlinh",
    titleEn: "Digital Kite Spotify - Tlinh",
    category: "3D FOOH",
    client: "Spotify",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/4.%20Digital%20Kite%20Spotify%20-%20Tlinh.mp4",
    description: "Video 3D quảng cáo ngoài trời",
    descriptionEn: "3D FOOH Advertising Video"
  },
  {
    id: "3d-fooh-msb",
    title: "MSBank 33 Year",
    titleEn: "MSBank 33 Year",
    category: "3D FOOH",
    client: "MSB",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/5.%20MSBank%2033%20Year.mp4",
    description: "Video 3D quảng cáo ngoài trời",
    descriptionEn: "3D FOOH Advertising Video"
  },
  {
    id: "3d-fooh-mysoul",
    title: "MySoul 1981",
    titleEn: "MySoul 1981",
    category: "3D FOOH",
    client: "Creative Lab",
    thumbnail: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/6.%20MySoul%201981.mp4",
    description: "Video 3D quảng cáo ngoài trời",
    descriptionEn: "3D FOOH Advertising Video"
  },
  {
    id: "3d-fooh-ograge",
    title: "OGRAGE Spotify",
    titleEn: "OGRAGE Spotify",
    category: "3D FOOH",
    client: "Spotify",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/7.%20OGRAGE%20Spotify.mp4",
    description: "Video 3D quảng cáo ngoài trời",
    descriptionEn: "3D FOOH Advertising Video"
  },
  {
    id: "3d-fooh-astroman",
    title: "Astroman VietNam",
    titleEn: "Astroman VietNam",
    category: "3D FOOH",
    client: "Creative Lab",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/8.%20Astroman%20VietNam.mp4",
    description: "Video 3D quảng cáo ngoài trời",
    descriptionEn: "3D FOOH Advertising Video"
  },
  {
    id: "3d-fooh-lyhan",
    title: "Wing for LyHan",
    titleEn: "Wing for LyHan",
    titleJp: "Wing for LyHan",
    titleKr: "Wing for LyHan",
    category: "3D FOOH",
    client: "Lyhan",
    thumbnail: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/9.%20Wing%20for%20LyHan.mp4",
    description: "WINGS for LyHan là một dự án 3D FOOH đầy cảm xúc, được cộng đồng Fan dành tặng riêng cho LyHan nhằm đánh dấu cột mốc ra mắt ca khúc “Rơi Tự Do” và chúc mừng danh hiệu Á quân tại hành trình “Em Xinh Say Hi”. Lấy hình tượng đôi cánh đen huyền ảo làm chủ đạo, video mô phỏng sự vươn mình mạnh mẽ và khí chất nghệ sĩ khác biệt của LyHan giữa không gian thực tế tại các địa danh nổi tiếng. Bằng công nghệ CGI tinh xảo và kỹ thuật Matchmoving chuẩn xác, đội ngũ Zen Visual Media đã hiện thực hóa tình cảm của cộng đồng người hâm mộ thành một trải nghiệm thị giác ấn tượng, nơi nghệ thuật và công nghệ giao thoa để tôn vinh hành trình rực rỡ của nữ ca sĩ.",
    descriptionEn: "WINGS for LyHan is an emotional 3D FOOH project, dedicated by the fan community to LyHan to mark the debut of the song “Rơi Tự Do” and celebrate her Runner-up title in the journey “Em Xinh Say Hi”. Centered around the imagery of mystical black wings, the video simulates LyHan's powerful rise and distinctive artistic aura amidst real-world locations at famous landmarks. Using sophisticated CGI technology and precise Matchmoving techniques, the Zen Visual Media team transformed the fan community's sentiment into an impressive visual experience, where art and technology intersect to honor the singer's brilliant journey.",
    descriptionJp: "WINGS for LyHanは、ファンのコミュニティからLyHanへ、楽曲「Rơi Tự Do」のデビューを記念し、「Em Xinh Say Hi」での準優勝を祝して捧げられた感動的な3D FOOHプロジェクトです。神秘的な黒い翼のイメージを中心に、有名なランドマークの実在の場所でLyHanの力強い立ち上がりと独特の芸術的オーラをシミュレートしています。精巧なCGI技術と正確なマッチムービング技術を用いて、Zen Visual Mediaチームはファンコミュニティの想いを印象的な視覚体験へと変え、芸術とテクノロジーが交差し、歌手の輝かしい旅を称えています。",
    descriptionKr: "WINGS for LyHan은 팬 커뮤니티가 LyHan에게 바치는 감동적인 3D FOOH 프로젝트로, 곡 “Rơi Tự Do”의 데뷔를 기념하고 “Em Xinh Say Hi” 여정에서의 준우승을 축하하기 위해 제작되었습니다. 신비로운 검은 날개의 이미지를 중심으로, 유명한 랜드마크의 실제 장소에서 LyHan의 강력한 도약과 독특한 예술적 아우라를 시뮬레이션합니다. 정교한 CGI 기술과 정밀한 매치무빙 기술을 사용하여, Zen Visual Media 팀은 팬 커뮤니티의 진심을 인상적인 시각적 경험으로 변화시켰으며, 예술과 기술이 만나 가수의 찬란한 여정을 기립니다."
  },
  {
    id: "3d-fooh-growplus-metro",
    title: "GrowPlus+ Metro SAIGON",
    titleEn: "GrowPlus+ Metro SAIGON",
    category: "3D FOOH",
    client: "Grow Plus+",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/10.%20GrowPlus+%20Metro%20SAIGON.mp4",
    description: "Video 3D quảng cáo ngoài trời",
    descriptionEn: "3D FOOH Advertising Video"
  },
  {
    id: "3d-fooh-olay",
    title: "OLAY Super Serium-",
    titleEn: "OLAY Super Serium-",
    category: "3D FOOH",
    client: "Olay",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/11-olay-super-serium.mp4",
    description: "Video 3D quảng cáo ngoài trời",
    descriptionEn: "3D FOOH Advertising Video"
  },
  {
    id: "3d-fooh-stubaki",
    title: "STUBAKI VIETNAM",
    titleEn: "STUBAKI VIETNAM",
    category: "3D FOOH",
    client: "Stubaki",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/12-stubaki-vietnam.mp4",
    description: "Video 3D quảng cáo ngoài trời",
    descriptionEn: "3D FOOH Advertising Video"
  },
  {
    id: "3d-fooh-panasonic-battery",
    title: "ALKALINE BATTERY Panasonic",
    titleEn: "ALKALINE BATTERY Panasonic",
    category: "3D FOOH",
    client: "Panasonic",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/13-alkaline-battery-panasonic.mp4",
    description: "Video 3D quảng cáo ngoài trời",
    descriptionEn: "3D FOOH Advertising Video"
  },
  // 3D Product (New Videos)
  {
    id: "3d-product-suitcase",
    title: "Xiaomi 90 Points Suitcase",
    titleEn: "Xiaomi 90 Points Suitcase",
    category: "3D Product",
    client: "Xiaomi",
    thumbnail: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20PRODUCT/1.%20Xiaomi%2090%20Points%20Suitcase-.mp4",
    description: "Video 3D sản phẩm",
    descriptionEn: "3D Product Video"
  },
  {
    id: "3d-product-lv-glass",
    title: "Color Glass LV",
    titleEn: "Color Glass LV",
    category: "3D Product",
    client: "Louis Vuitton",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20PRODUCT/2.%20Color%20Glass%20LV.mp4",
    description: "Video 3D sản phẩm",
    descriptionEn: "3D Product Video"
  },
  {
    id: "3d-product-serum",
    title: "Lavender Serum",
    titleEn: "Lavender Serum",
    category: "3D Product",
    client: "Creative Lab",
    thumbnail: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20PRODUCT/3.%20Lavender%20Serum.mp4",
    description: "Video 3D sản phẩm",
    descriptionEn: "3D Product Video"
  },
  {
    id: "3d-product-maybelline",
    title: "Maybelline Tint",
    titleEn: "Maybelline Tint",
    category: "3D Product",
    client: "Maybelline",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20PRODUCT/4.%20Maybelline%20Tint.mp4",
    description: "Video 3D sản phẩm",
    descriptionEn: "3D Product Video"
  },
  {
    id: "3d-product-ring",
    title: "Diamonds Ring",
    titleEn: "Diamonds Ring",
    category: "3D Product",
    client: "Creative Lab",
    thumbnail: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20PRODUCT/5.%20Diamonds%20Ring.mp4",
    description: "Video 3D sản phẩm",
    descriptionEn: "3D Product Video"
  },
  // 3D Explainer
  {
    id: "3d-explainer-bm",
    title: "BM Windows Panel Explaner",
    titleEn: "BM Windows Panel Explaner",
    category: "3D Explainer",
    client: "BM Windows",
    thumbnail: "https://images.unsplash.com/photo-1578305011741-f76110cb18f0?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20EXPLAINER/1.%20BM%20Windows%20Panel%20Explaner%20(%20Sydney%20)_1.mp4",
    description: "- Dự án tập trung vào việc hiện thực hóa các cấu kiện kỹ thuật phức tạp thành hình ảnh trực quan sinh động, Zen Visual Media đã trình diễn trọn vẹn kết cấu bên trong của hệ thống panel kính, giúp minh họa rõ nét quy trình lắp ghép và các ưu điểm cơ khí vượt trội.\n- Đây là công cụ đắc lực hỗ trợ đối tác chiến lược BM Windows trong việc giới thiệu giải pháp kiến trúc cao cấp đến khách hàng, đảm bảo tính chuẩn xác tuyệt đối về mặt kỹ thuật mà vẫn mang đậm tính thẩm mỹ hiện đại.",
    descriptionEn: "- The project focuses on realizing complex technical components into vivid visual images. Zen Visual Media has fully demonstrated the internal structure of the glass panel system, helping to clearly illustrate the assembly process and superior mechanical advantages.\n- This is a powerful tool to support strategic partner BM Windows in introducing high-end architectural solutions to customers, ensuring absolute technical accuracy while maintaining a bold, modern aesthetic.",
    descriptionJp: "- このプロジェクトは、複雑な技術コンポーネントを鮮やかな視覚的イメージへと具現化することに焦点を当てています。Zen Visual Mediaは、ガラスパネルシステムの内部構造を完全に実証し、組み立てプロセスと優れた機械的利点を明確に示すのに役立ちました。\n- これは、戦略的パートナーであるBM Windowsが、大胆で現代的な美学を維持しながら絶対的な技術的正確性を確保し、ハイエンドの建築ソリューションを顧客に紹介することをサポートするための強力なツールです。",
    descriptionKr: "- 이 프로젝트는 복잡한 기술 구성 요소를 생생한 시각적 이미지로 구현하는 데 중점을 둡니다. Zen Visual Media는 유리 패널 시스템의 내부 구조를 완벽하게 시연하여 조립 과정과 뛰어난 기계적 장점을 명확하게 설명하는 데 기여했습니다.\n- 이는 전략적 파트너인 BM Windows가 고객에게 하이엔드 건축 솔루션을 소개할 때, 대담하고 현대적인 미학을 유지하면서도 절대적인 기술적 정확성을 보장할 수 있도록 지원하는 강력한 도구입니다."
  },
  {
    id: "3d-explainer-skylight",
    title: "Skylight Panel LongThanh Airport",
    titleEn: "Skylight Panel LongThanh Airport",
    category: "3D Explainer",
    client: "Long Thanh Airport",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20EXPLAINER/2.%20Skylight%20Panel%20LongThanh%20Airport_1.mp4",
    description: "Mô phỏng cấu tạo, giải thích hoạt động máy móc, công trình.",
    descriptionEn: "Simulating structure, explaining operation of machinery and projects."
  },
  {
    id: "3d-explainer-slidedoor",
    title: "Slide Door Thermally",
    titleEn: "Slide Door Thermally",
    category: "3D Explainer",
    client: "Creative Lab",
    thumbnail: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20EXPLAINER/3.%20Slide%20Door%20Thermally_1.mp4",
    description: "Mô phỏng cấu tạo, giải thích hoạt động máy móc, công trình.",
    descriptionEn: "Simulating structure, explaining operation of machinery and projects."
  },
  {
    id: "3d-explainer-tiktokmaze",
    title: "TiktokMaze Planner",
    titleEn: "TiktokMaze Planner",
    category: "3D Explainer",
    client: "Tiktok Shop",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20EXPLAINER/4.%20TiktokMaze%20Planner.mp4",
    description: "Mô phỏng cấu tạo, giải thích hoạt động máy móc, công trình.",
    descriptionEn: "Simulating structure, explaining operation of machinery and projects."
  },
  // AI Production
  {
    id: "ai-production-mercedes",
    title: "TVC AI Mercedes AMG G63",
    titleEn: "TVC AI Mercedes AMG G63",
    category: "AI Production",
    client: "Mercedes",
    thumbnail: "https://images.unsplash.com/photo-1614728853913-1e221165d770?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/AI%20PRODUCTION/1.%20TVC%20AI%20Mercedes%20AMG%20G63_1.mp4",
    description: "Sản phẩm video được tạo ra hoàn toàn bằng AI.",
    descriptionEn: "Video production created entirely by AI."
  },
  {
    id: "ai-production-honda",
    title: "TVC AI Honda CRV",
    titleEn: "TVC AI Honda CRV",
    category: "AI Production",
    client: "Honda",
    thumbnail: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/AI%20PRODUCTION/2.%20TVC%20AI%20Honda%20CRV_1.mp4",
    description: "Sản phẩm video được tạo ra hoàn toàn bằng AI.",
    descriptionEn: "Video production created entirely by AI."
  },
  {
    id: "ai-production-teddy",
    title: "Teddy Tint Story",
    titleEn: "Teddy Tint Story",
    category: "AI Production",
    client: "Maybelline",
    thumbnail: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/AI%20PRODUCTION/3.%20Teddy%20Tint%20Story_1.mp4",
    description: "Sản phẩm video được tạo ra hoàn toàn bằng AI.",
    descriptionEn: "Video production created entirely by AI."
  },
  {
    id: "ai-production-eucerin",
    title: "TVC AI Eucerin",
    titleEn: "TVC AI Eucerin",
    category: "AI Production",
    client: "Eucerin",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/AI%20PRODUCTION/4.%20TVC%20AI%20Eucerin-.mp4",
    description: "Sản phẩm video được tạo ra hoàn toàn bằng AI.",
    descriptionEn: "Video production created entirely by AI."
  },
  {
    id: "ai-production-tiktok-shop",
    title: "Tiktok Shop AI",
    titleEn: "Tiktok Shop AI",
    category: "AI Production",
    client: "Tiktok Shop",
    thumbnail: "https://images.unsplash.com/photo-1614728853913-1e221165d770?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/AI%20PRODUCTION/5-tiktok-shop-ai.mp4",
    description: "Sản phẩm video được tạo ra hoàn toàn bằng AI.",
    descriptionEn: "Video production created entirely by AI."
  },
];



export const SOCIALS = {
  email: "zenvisualmedia.dn@gmail.com",
  website: "zenvisualmedia.com",
  tiktok: "Zen.visual.media",
  whatsapp: "+84 994 023 274"
};

