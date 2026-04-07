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
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
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
    titleNo: "Maybelline Teddy & Tint",
    category: "3D TVC",
    client: "Maybelline",
    thumbnail: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/TVC%20Commercial/3.%20Maybelline%20Teddy%20&%20Tint_1.mp4",
    description: "- Dự án Maybelline Teddy Tint mang đến một hành trình thị giác đầy phá cách, đưa chú gấu Teddy biểu tượng từ New York hiện đại đến 'đổ bộ' và trải nghiệm những góc phố đặc trưng nhất của Việt Nam.\n- Bằng việc kết hợp nhuần nhũn giữa các cảnh quay thực tế (Live-action) cùng kỹ thuật CGI và Motion Tracking chuyên sâu, đội ngũ Zen Visual Media đã tạo nên sự tương tác sống động giữa nhân vật 3D với môi trường đô thị. Điểm nhấn nằm ở việc mô phỏng chất liệu lông gấu (fur simulation) chân thực, kết hợp hiệu ứng ánh sáng vật lý giúp gấu Teddy khổng lồ trở nên gần gũi, tạo hiệu ứng thị giác Fake Out of Home (FOOH) ấn tượng, giúp nâng tầm chiến dịch quảng bá dòng son mới của Maybelline trên các nền tảng số.",
    descriptionEn: "- The Maybelline Teddy Tint project delivers a disruptive visual journey, bringing the iconic Teddy bear from modern New York to 'landing' and experiencing the most characteristic corners of Vietnam.\n- By seamlessly blending live-action footage with advanced CGI and deep Motion Tracking techniques, the Zen Visual Media team created a lifelike interaction between 3D characters and the urban environment. The highlight lies in the authentic fur simulation, combined with physical lighting effects that make the giant Teddy bear feel approachable, creating an impressive Fake Out of Home (FOOH) visual effect that elevates Maybelline's new lipstick campaign across digital platforms.",
    descriptionNo: "- Maybelline Teddy Tint-prosjektet leverer en banebrytende visuell reise, og bringer den ikoniske Teddy-bjørnen fra moderne New York til å 'lande' og oppleve de mest karakteristiske hjørnene av Vietnam.\n- Ved å sømløst blande live-action-opptak med avansert CGI og dype Motion Tracking-teknikker, har Zen Visual Media-teamet skapt et livaktig samspill mellom 3D-karakterer og det urbane miljøet. Høydepunktet ligger i den autentiske pelssimuleringen, kombinert med fysiske lyseffekter som gjør den gigantiske bamsen mer tilgjengelig, og som skaper en imponerende Fake Out of Home (FOOH) visuell effekt som løfter Maybellines nye leppestiftkampanje på digitale plattformer."
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
    titleNo: "Vinger for LyHan",
    category: "3D FOOH",
    client: "Lyhan",
    thumbnail: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "./videos/3D%20FOOH/9.%20Wing%20for%20LyHan.mp4",
    description: "WINGS for LyHan là một dự án 3D FOOH đầy cảm xúc, được cộng đồng Fan dành tặng riêng cho LyHan nhằm đánh dấu cột mốc ra mắt ca khúc “Rơi Tự Do” và chúc mừng danh hiệu Á quân tại hành trình “Em Xinh Say Hi”. Lấy hình tượng đôi cánh đen huyền ảo làm chủ đạo, video mô phỏng sự vươn mình mạnh mẽ và khí chất nghệ sĩ khác biệt của LyHan giữa không gian thực tế tại các địa danh nổi tiếng. Bằng công nghệ CGI tinh xảo và kỹ thuật Matchmoving chuẩn xác, đội ngũ Zen Visual Media đã hiện thực hóa tình cảm của cộng đồng người hâm mộ thành một trải nghiệm thị giác ấn tượng, nơi nghệ thuật và công nghệ giao thoa để tôn vinh hành trình rực rỡ của nữ ca sĩ.",
    descriptionEn: "WINGS for LyHan is an emotional 3D FOOH project, dedicated by the fan community to LyHan to mark the debut of the song “Rơi Tự Do” and celebrate her Runner-up title in the journey “Em Xinh Say Hi”. Centered around the imagery of mystical black wings, the video simulates LyHan's powerful rise and distinctive artistic aura amidst real-world locations at famous landmarks. Using sophisticated CGI technology and precise Matchmoving techniques, the Zen Visual Media team transformed the fan community's sentiment into an impressive visual experience, where art and technology intersect to honor the singer's brilliant journey.",
    descriptionNo: "WINGS for LyHan er et emosjonelt 3D FOOH-prosjekt, dedikert av fansen til LyHan for å markere debuten til sangen “Rơi Tự Do” og feire hennes andreplass i reisen “Em Xinh Say Hi”. Sentrert rundt bilder av mystiske svarte vinger, simulerer videoen LyHans kraftige vekst og distinkte kunstneriske aura midt i virkelige omgivelser ved kjente landemerker. Ved hjelp av sofistikert CGI-teknologi og presise Matchmoving-teknikker transformerte Zen Visual Media-teamet fansens følelser til en imponerende visuell opplevelse, der kunst og teknologi møtes for å hedre sangerens strålende reise."
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
];



export const SOCIALS = {
  email: "zennexus.pro@gmail.com",
  website: "zennexus.pro",
  tiktok: "Zen.visual.media",
  whatsapp: "+84 994 023 274"
};
