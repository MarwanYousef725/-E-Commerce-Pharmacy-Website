export type ProductCategory =
  | "medicines"
  | "supplements"
  | "personal-care"
  | "beauty"
  | "sports"
  | "herbs"
  | "home-healthcare"
  | "mother-baby";

export type Product = {
  id: string;
  name: string;
  nameAr: string;
  category: ProductCategory;
  categoryLabel: string;
  categoryLabelAr: string;
  price: number;
  currency: string;
  description: string;
  descriptionAr: string;
  image: string;
  inStock: boolean;
  bestSeller?: boolean;
  badge?: "best-seller" | "out-of-stock";
};

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export const products: Product[] = [
  {
    id: "1",
    name: "Betadine Mouthwash And Gargle 250 ml",
    nameAr: "بيتادين غسول فم وغرغرة 250 مل",
    category: "medicines",
    categoryLabel: "Sore Throat, Mouthwash/Gargle",
    categoryLabelAr: "التهاب الحلق، غسول/غرغرة",
    price: 49.6,
    currency: "PKR",
    description: "Antiseptic mouthwash for sore throat relief",
    descriptionAr: "غسول فم مطهر للتخفيف من التهاب الحلق",
    image: "https://picsum.photos/seed/serenemeds-01/600/600",
    inStock: false,
    badge: "out-of-stock",
  },
  {
    id: "2",
    name: "Mucosolvan 30mg / 5ml Syrup 100 ml Sugar Free",
    nameAr: "موكوسولفان 30 مجم / 5 مل شراب 100 مل خالي من السكر",
    category: "medicines",
    categoryLabel: "Cough Remedies",
    categoryLabelAr: "علاج السعال",
    price: 22.5,
    currency: "PKR",
    description: "Effective cough syrup, sugar free formula",
    descriptionAr: "شراب فعال للسعال، خالي من السكر",
    image: "https://picsum.photos/seed/serenemeds-02/600/600",
    inStock: true,
    bestSeller: true,
    badge: "best-seller",
  },
  {
    id: "3",
    name: "Panadol Migraine Tablets 24's",
    nameAr: "بانادول مايجرين أقراص 24",
    category: "medicines",
    categoryLabel: "Headache & Migraine",
    categoryLabelAr: "الصداع والشقيقة",
    price: 29.5,
    currency: "PKR",
    description: "Fast relief for migraine and headache pain",
    descriptionAr: "تخفيف سريع لآلام الشقيقة والصداع",
    image: "https://picsum.photos/seed/serenemeds-03/600/600",
    inStock: true,
    bestSeller: true,
    badge: "best-seller",
  },
  {
    id: "4",
    name: "Zyrtec 1mg/Ml Oral Sol 75ml",
    nameAr: "زيرتك 1 مجم/مل محلول فموي 75 مل",
    category: "medicines",
    categoryLabel: "Allergy",
    categoryLabelAr: "الحساسية",
    price: 17.5,
    currency: "PKR",
    description: "Antihistamine for allergy relief",
    descriptionAr: "مضاد للهستامين للتخفيف من الحساسية",
    image: "https://picsum.photos/seed/serenemeds-04/600/600",
    inStock: true,
    badge: "best-seller",
  },
  {
    id: "5",
    name: "Centrum Multivitamin Adults 60 Tabs",
    nameAr: "سنتروم فيتامينات متعددة للبالغين 60 قرص",
    category: "supplements",
    categoryLabel: "Nutrition Supplements",
    categoryLabelAr: "مكملات غذائية",
    price: 89.99,
    currency: "PKR",
    description: "Complete daily multivitamin for adults",
    descriptionAr: "فيتامينات متعددة يومية كاملة للبالغين",
    image: "https://picsum.photos/seed/serenemeds-05/600/600",
    inStock: true,
    bestSeller: true,
    badge: "best-seller",
  },
  {
    id: "6",
    name: "CeraVe Moisturizing Cream 340g",
    nameAr: "سيرافي كريم مرطب 340 جم",
    category: "beauty",
    categoryLabel: "Skincare",
    categoryLabelAr: "العناية بالبشرة",
    price: 45.0,
    currency: "PKR",
    description: "Hydrating moisturizer for dry skin",
    descriptionAr: "مرطب للبشرة الجافة",
    image: "https://picsum.photos/seed/serenemeds-06/600/600",
    inStock: true,
  },
  {
    id: "7",
    name: "Optimum Nutrition Whey Protein 2lb",
    nameAr: "أوبتيمم نيوتريشن بروتين مصل اللبن 2 رطل",
    category: "sports",
    categoryLabel: "Sports Nutrition",
    categoryLabelAr: "تغذية رياضية",
    price: 125.0,
    currency: "PKR",
    description: "Premium whey protein for muscle recovery",
    descriptionAr: "بروتين مصل اللبن الممتاز لاستعادة العضلات",
    image: "https://picsum.photos/seed/serenemeds-07/600/600",
    inStock: true,
    bestSeller: true,
    badge: "best-seller",
  },
  {
    id: "8",
    name: "Omron Blood Pressure Monitor",
    nameAr: "جهاز أومرون لقياس ضغط الدم",
    category: "home-healthcare",
    categoryLabel: "Home Healthcare",
    categoryLabelAr: "الرعاية المنزلية",
    price: 199.0,
    currency: "PKR",
    description: "Accurate digital blood pressure monitor",
    descriptionAr: "جهاز رقمي دقيق لقياس ضغط الدم",
    image: "https://picsum.photos/seed/serenemeds-08/600/600",
    inStock: true,
  },
  {
    id: "9",
    name: "Pampers Baby Diapers Size 4 - 44 Pack",
    nameAr: "بامبرز حفاضات أطفال مقاس 4 - 44 حفاضة",
    category: "mother-baby",
    categoryLabel: "Mother & Baby Care",
    categoryLabelAr: "الأم والطفل",
    price: 35.0,
    currency: "PKR",
    description: "Soft and absorbent baby diapers",
    descriptionAr: "حفاضات أطفال ناعمة وممتصة",
    image: "https://picsum.photos/seed/serenemeds-09/600/600",
    inStock: true,
  },
  {
    id: "10",
    name: "Black Seed Oil 100ml",
    nameAr: "زيت الحبة السوداء 100 مل",
    category: "herbs",
    categoryLabel: "Herbs",
    categoryLabelAr: "أعشاب",
    price: 28.0,
    currency: "PKR",
    description: "Pure cold-pressed black seed oil",
    descriptionAr: "زيت حبة سوداء نقي معصور على البارد",
    image: "https://picsum.photos/seed/serenemeds-10/600/600",
    inStock: false,
    badge: "out-of-stock",
  },
  {
    id: "11",
    name: "Dove Deep Moisture Body Wash 1L",
    nameAr: "دوف غسول جسم مرطب عميق 1 لتر",
    category: "personal-care",
    categoryLabel: "Personal Care",
    categoryLabelAr: "العناية الشخصية",
    price: 18.5,
    currency: "PKR",
    description: "Nourishing body wash with NutriumMoisture",
    descriptionAr: "غسول جسم مغذٍ مع NutriumMoisture",
    image: "https://picsum.photos/seed/serenemeds-11/600/600",
    inStock: true,
  },
  {
    id: "12",
    name: "Panadol Extra 24 Tablets",
    nameAr: "بانادول إكستra 24 قرص",
    category: "medicines",
    categoryLabel: "Pain Relief",
    categoryLabelAr: "تسكين الألم",
    price: 15.0,
    currency: "PKR",
    description: "Extra strength pain relief tablets",
    descriptionAr: "أقراص قوية لتسكين الألم",
    image: "https://picsum.photos/seed/serenemeds-12/600/600",
    inStock: true,
    bestSeller: true,
    badge: "best-seller",
  },
];

export const categoryFilters = [
  { value: "all", labelEn: "All Categories", labelAr: "جميع الفئات" },
  { value: "medicines", labelEn: "Medicines", labelAr: "الأدوية" },
  { value: "supplements", labelEn: "Supplements", labelAr: "مكملات" },
  { value: "beauty", labelEn: "Beauty Care", labelAr: "الجمال" },
  { value: "sports", labelEn: "Sports Nutrition", labelAr: "تغذية رياضية" },
  { value: "herbs", labelEn: "Herbs", labelAr: "أعشاب" },
  { value: "home-healthcare", labelEn: "Home Healthcare", labelAr: "رعاية منزلية" },
  { value: "mother-baby", labelEn: "Mother & Baby", labelAr: "أم وطفل" },
  { value: "personal-care", labelEn: "Personal Care", labelAr: "عناية شخصية" },
];

export const brands = [
  "Pfizer", "GSK", "Novartis", "Sanofi", "Abbott", "Roche",
  "Merck", "Bayer", "Johnson", "AstraZeneca", "Cipla", "Sun Pharma",
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Ahmed",
    nameAr: "سارة أحمد",
    role: "Regular Customer",
    roleAr: "عميلة دائمة",
    text: "SereneMeds has been my go-to pharmacy for 3 years. Fast delivery and genuine products every time!",
    textAr: "سيرين مeds صيدليتي المفضلة منذ 3 سنوات. توصيل سريع ومنتجات أصلية دائماً!",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=47",
  },
  {
    id: "2",
    name: "Mohammed Ali",
    nameAr: "محمد علي",
    role: "Verified Buyer",
    roleAr: "مشتري موثق",
    text: "The WhatsApp ordering is so convenient. I get my prescriptions delivered within 30 minutes!",
    textAr: "الطلب عبر واتساب مريح جداً. أحصل على وصفاتي خلال 30 دقيقة!",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=12",
  },
  {
    id: "3",
    name: "Fatima Hassan",
    nameAr: "فاطمة حسن",
    role: "Health Enthusiast",
    roleAr: "مهتمة بالصحة",
    text: "Best prices on supplements and skincare. The consultation support is incredibly helpful.",
    textAr: "أفضل الأسعار على المكملات والعناية بالبشرة. الدعم الاستشاري مفيد للغاية.",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=32",
  },
  {
    id: "4",
    name: "James Wilson",
    nameAr: "جيمس ويلسون",
    role: "Sports Athlete",
    roleAr: "رياضي",
    text: "Great sports nutrition section with authentic products. Highly recommend for athletes!",
    textAr: "قسم تغذية رياضية رائع بمنتجات أصلية. أنصح به بشدة للرياضيين!",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=8",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Why Ignoring A Tantrum Might Not Always Work (& What To Do Instead)",
    titleAr: "لماذا تجاهل نوبة الغضب قد لا ينجح دائماً (وماذا تفعل بدلاً من ذلك)",
    image: "https://picsum.photos/seed/serenemeds-blog-01/1200/800",
    date: "May 15, 2026",
  },
  {
    id: "2",
    title: "5 Essential Vitamins Every Adult Should Take Daily",
    titleAr: "5 فيتامينات أساسية يجب على كل بالغ تناولها يومياً",
    image: "https://picsum.photos/seed/serenemeds-blog-02/1200/800",
    date: "May 10, 2026",
  },
  {
    id: "3",
    title: "Understanding Seasonal Allergies: Prevention & Treatment",
    titleAr: "فهم الحساسية الموسمية: الوقاية والعلاج",
    image: "https://picsum.photos/seed/serenemeds-blog-03/1200/800",
    date: "May 5, 2026",
  },
  {
    id: "4",
    title: "The Complete Guide to Skincare Routine for All Skin Types",
    titleAr: "الدليل الكامل لروتين العناية بالبشرة لجميع أنواع البشرة",
    image: "https://picsum.photos/seed/serenemeds-blog-04/1200/800",
    date: "Apr 28, 2026",
  },
  {
    id: "5",
    title: "Home Healthcare Essentials Every Family Should Have",
    titleAr: "أساسيات الرعاية الصحية المنزلية التي يجب أن يمتلكها كل عائلة",
    image: "https://picsum.photos/seed/serenemeds-blog-05/1200/800",
    date: "Apr 20, 2026",
  },
];

export const stats = [
  { value: 32, suffix: " Million+", labelKey: "users" as const },
  { value: 36, suffix: " Million+", labelKey: "orders" as const },
  { value: 99000, suffix: "+", labelKey: "items" as const },
  { value: 19500, suffix: "+", labelKey: "pincodes" as const },
];

export const aboutStats = [
  { value: 15, suffix: "+", labelKey: "years" as const },
  { value: 500, suffix: "K+", labelKey: "customers" as const },
  { value: 10000, suffix: "+", labelKey: "products" as const },
  { value: 30, suffix: " min", labelKey: "delivery" as const },
];
