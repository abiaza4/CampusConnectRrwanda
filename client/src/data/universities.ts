export interface Campus {
  name: string;
  location: string;
  description: string;
}

export interface School {
  name: string;
  description: string;
}

export interface Department {
  name: string;
  school: string;
  description: string;
}

export interface ProgramDetail {
  name: string;
  duration: string;
  description: string;
}

export interface TuitionDetail {
  program: string;
  level: string;
  localAmount: string;
  internationalAmount: string;
}

export interface StudentLife {
  clubs: string[];
  sports: string[];
  events: string[];
  organizations: string[];
}

export interface Facilities {
  libraries: string[];
  labs: string[];
  sports: string[];
  other: string[];
}

export interface GalleryItem {
  image: string;
  caption: string;
}

export interface VideoItem {
  title: string;
  url: string;
  thumbnail: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DownloadItem {
  name: string;
  url: string;
  type: string;
}

export interface NearbyPlace {
  name: string;
  type: string;
  distance: string;
}

export interface ReviewItem {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Faculty {
  name: string;
  description: string;
  icon: string;
}

export interface Program {
  name: string;
  level: "Diploma" | "Bachelor" | "Master" | "PhD";
  duration: string;
  faculty: string;
}

export interface TuitionInfo {
  localMin: string;
  localMax: string;
  internationalMin: string;
  internationalMax: string;
  currency: string;
}

export interface Scholarship {
  name: string;
  type: "Government" | "University" | "NGO" | "International" | "Private" | "Foundation";
  description: string;
  amount?: string;
  eligibility?: string;
  deadline?: string;
}

export interface AccommodationInfo {
  hostels: boolean;
  nearbyApartments: string;
  privateHostels: string;
  estimatedCost: string;
  onCampusHostels?: string;
  accommodationOffice?: string;
  applicationProcess?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  address: string;
}

export interface AboutInfo {
  history: string;
  mission?: string;
  vision?: string;
  accreditation: string;
  achievements: string[];
}

export interface University {
  id: string;
  name: string;
  location: string;
  city: string;
  type: "Public" | "Private";
  description: string;
  logo: string;
  coverImage: string;
  website: string;
  founded: number;

  motto: string;
  accreditationStatus: string;
  ownership: string;
  email: string;
  telephone: string;
  physicalAddress: string;
  googleMapsLocation: string;
  socialMedia: { facebook: string; twitter: string; instagram: string; linkedin: string; youtube: string };

  overview: {
    history: string;
    campusDescription: string;
    mission?: string;
    vision?: string;
    coreValues?: string[];
    chancellor?: string;
    viceChancellor?: string;
  };

  campuses: Campus[];

  academicInfo: {
    schools: School[];
    departments: Department[];
    undergraduatePrograms: ProgramDetail[];
    postgraduatePrograms: ProgramDetail[];
    phdPrograms: ProgramDetail[];
    diplomaPrograms: ProgramDetail[];
    certificatePrograms: ProgramDetail[];
    modeOfStudy: string[];
  };

  faculties: Faculty[];
  programs: Program[];
  tuition?: TuitionInfo;

  admission: {
    requirements: string[];
    entryQualifications: string[];
    requiredDocuments: string[];
    internationalRequirements: string[];
    applicationDeadlines: string;
    intakePeriods: string[];
    howToApply: string;
    applicationFees?: string;
  };

  tuitionDetails?: TuitionDetail[];

  scholarships: Scholarship[];

  internationalStudent: {
    welcomeGuide: boolean;
    internationalAdmissions: string;
    equivalenceGuidance: string;
    visaInfo: string;
    residencePermit: string;
    airportArrival: string;
    orientationWeek: boolean;
    languageSupport: string;
    exchangePrograms: string[];
  };

  accommodation: AccommodationInfo;

  studentLife: StudentLife;

  facilities: Facilities;

  careerDevelopment: {
    internships: boolean;
    industrialAttachment: boolean;
    careerOffice: boolean;
    jobPlacementSupport: string;
    alumniNetwork: string;
  };

  research: {
    centers: string[];
    innovationLabs: string[];
    publications: string[];
    conferences: string[];
    partnerships: string[];
  };

  gallery: GalleryItem[];

  videos: VideoItem[];

  rankings: {
    national: string;
    international: string;
    awards: string[];
    accreditations: string[];
    memberships: string[];
  };

  faq: FAQItem[];

  downloads: DownloadItem[];

  nearbyPlaces: NearbyPlace[];

  reviews: ReviewItem[];

  quickFacts: Record<string, string>;

  contact: ContactInfo;
  about: AboutInfo;
  images: string[];
}


export const universities: University[] = [  {
    id: "unr",
    name: "University of Rwanda",
    location: "Kigali, Rwanda",
    city: "Kigali",
    type: "Public",
    description: "The largest and oldest public university in Rwanda, offering comprehensive programs across multiple campuses. UR is the premier institution for higher education and research in Rwanda with 33,000+ students.",
    logo: "https://ur.ac.rw/images/urlogo1.png",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/University_of_Rwanda%2CHuye_campus_.jpg/1280px-University_of_Rwanda%2CHuye_campus_.jpg",
    website: "https://www.ur.ac.rw",
    founded: 1963,
    motto: "Advancing Knowledge Through Research and Innovation",
    accreditationStatus: "Fully accredited by the Higher Education Council (HEC) of Rwanda — originally recognized in 1963",
    ownership: "Public (Government of Rwanda)",
    email: "info@ur.ac.rw",
    telephone: "+250 788 306 493",
    physicalAddress: "KN 75 Street, Nyarugenge, Kigali, Rwanda (P.O. Box 4285 Kigali)",
    googleMapsLocation: "",
    socialMedia: {
      facebook: "https://www.facebook.com/UniversityofRwanda",
      twitter: "https://twitter.com/URwanda",
      instagram: "",
      linkedin: "https://www.linkedin.com/school/university-of-rwanda/",
      youtube: "https://www.youtube.com/@UniversityofRwanda"
    },
    overview: {
      history: "The University of Rwanda was established in 2013 through the merger of seven former public higher education institutions, with the original National University of Rwanda dating back to 1963. UR is the largest public university in Rwanda.",
      campusDescription: "UR operates 8 colleges across multiple campuses including Huye, Nyarugenge, Gikondo, Remera, Busogo, Rukara, and Nyagatare — each with specialized academic facilities."
    },
    campuses: [
      { name: "Huye Campus", location: "Huye, Southern Province", description: "Houses the College of Arts and Social Sciences (CASS) and College of Business and Economics (CBE)." },
      { name: "Nyarugenge Campus", location: "Kigali", description: "Houses the College of Science and Technology (CST) — 6,323 students." },
      { name: "Remera Campus", location: "Kigali", description: "Houses the College of Medicine and Health Sciences (CMHS) — 7,365 students." },
      { name: "Busogo Campus", location: "Musanze, Northern Province", description: "Houses the College of Agriculture, Forestry and Food Science (CAFF) — 4,145 students." },
      { name: "Rukara Campus", location: "Kayonza, Eastern Province", description: "Houses the College of Education (CE) — 6,739 students." },
      { name: "Nyagatare Campus", location: "Nyagatare, Eastern Province", description: "Houses the College of Veterinary Medicine and Animal Sciences (CVAS)." },
      { name: "Gikondo Campus", location: "Kigali", description: "Administrative campus and UR headquarters." }
    ],
    academicInfo: {
      schools: [
        { name: "College of Agriculture, Forestry and Food Science (CAFF)", description: "Crop Science, Animal Science, Forestry, Food Science and Technology — 4,145 students." },
        { name: "College of Arts and Social Sciences (CASS)", description: "Languages, History, Political Science, Sociology, Psychology — 3,378 students." },
        { name: "College of Business and Economics (CBE)", description: "Accounting, Finance, Marketing, Economics, Management — 4,715 students." },
        { name: "College of Medicine and Health Sciences (CMHS)", description: "Medicine, Nursing, Pharmacy, Public Health, Dentistry — 7,365 students." },
        { name: "College of Education (CE)", description: "Teacher Training, Educational Leadership, Special Needs Education — 6,739 students." },
        { name: "College of Science and Technology (CST)", description: "Computer Science, IT, Engineering, Data Science, AI — 6,323 students." },
        { name: "College of Law", description: "LLB, LLM, Public and International Law." },
        { name: "College of Veterinary Medicine and Animal Sciences (CVAS)", description: "Veterinary Medicine, Animal Production, Wildlife Management." }
      ],
      departments: [
        { name: "Department of Civil Engineering", school: "College of Science and Technology (CST)", description: "Civil engineering education and research." },
        { name: "Department of Electrical Engineering", school: "College of Science and Technology (CST)", description: "Electrical and electronics engineering." },
        { name: "Department of Mechanical Engineering", school: "College of Science and Technology (CST)", description: "Mechanical engineering programs." },
        { name: "Department of Computer Science", school: "College of Science and Technology (CST)", description: "Computer science and artificial intelligence." },
        { name: "Department of Medicine", school: "College of Medicine and Health Sciences (CMHS)", description: "Medical education (MBChB)." },
        { name: "Department of Nursing", school: "College of Medicine and Health Sciences (CMHS)", description: "Nursing and midwifery." },
        { name: "Department of Pharmacy", school: "College of Medicine and Health Sciences (CMHS)", description: "Pharmacy education." },
        { name: "Department of Public Health", school: "College of Medicine and Health Sciences (CMHS)", description: "Public health and epidemiology." },
        { name: "Department of Accounting", school: "College of Business and Economics (CBE)", description: "Accounting programs." },
        { name: "Department of Finance", school: "College of Business and Economics (CBE)", description: "Finance and investment." },
        { name: "Department of Law", school: "College of Law", description: "Legal education and research." },
        { name: "Department of Education", school: "College of Education (CE)", description: "Teacher training and educational leadership." },
        { name: "Department of Agriculture", school: "College of Agriculture, Forestry and Food Science (CAFF)", description: "Crop and animal science." },
        { name: "Department of Veterinary Medicine", school: "College of Veterinary Medicine and Animal Sciences (CVAS)", description: "Veterinary science." }
      ],
      undergraduatePrograms: [
        { name: "Bachelor of Medicine and Surgery (MBChB)", duration: "6 years", description: "Medical degree program at CMHS." },
        { name: "BSc in Civil Engineering", duration: "4 years", description: "Bachelor in Civil Engineering at CST." },
        { name: "BSc in Electrical Engineering", duration: "4 years", description: "Bachelor in Electrical Engineering at CST." },
        { name: "BSc in Computer Science", duration: "4 years", description: "Bachelor in Computer Science at CST." },
        { name: "BSc in Information Technology", duration: "3 years", description: "Bachelor in Information Technology at CST." },
        { name: "BSc in Nursing", duration: "4 years", description: "Bachelor in Nursing at CMHS." },
        { name: "BSc in Public Health", duration: "4 years", description: "Bachelor in Public Health at CMHS." },
        { name: "BBA in Accounting", duration: "3 years", description: "Bachelor of Business Administration in Accounting at CBE." },
        { name: "BBA in Finance", duration: "3 years", description: "Bachelor of Business Administration in Finance at CBE." },
        { name: "BBA in Marketing", duration: "3 years", description: "Bachelor of Business Administration in Marketing at CBE." },
        { name: "BSc in Agriculture", duration: "4 years", description: "Bachelor in Agriculture at CAFF." },
        { name: "BSc in Food Science", duration: "4 years", description: "Bachelor in Food Science and Technology at CAFF." },
        { name: "LLB", duration: "4 years", description: "Bachelor of Laws at College of Law." },
        { name: "BA in Sociology", duration: "3 years", description: "Bachelor of Arts in Sociology at CASS." },
        { name: "BA in Political Science", duration: "3 years", description: "Bachelor of Arts in Political Science at CASS." },
        { name: "BA in Education", duration: "3 years", description: "Bachelor of Arts in Education at CE." },
        { name: "BSc in Veterinary Medicine", duration: "5 years", description: "Doctor of Veterinary Medicine at CVAS." }
      ],
      postgraduatePrograms: [
        { name: "MSc in Public Health", duration: "2 years", description: "Master in Public Health at CMHS." },
        { name: "MSc in Computer Science", duration: "2 years", description: "Master in Computer Science at CST." },
        { name: "MSc in Data Science", duration: "2 years", description: "Master in Data Science at CST." },
        { name: "MBA", duration: "2 years", description: "Master of Business Administration at CBE." },
        { name: "MSc in Accounting", duration: "2 years", description: "Master of Science in Accounting at CBE." },
        { name: "MSc in Agriculture", duration: "2 years", description: "Master in Agricultural Sciences at CAFF." },
        { name: "LLM", duration: "2 years", description: "Master of Laws at College of Law." },
        { name: "MA in Education", duration: "2 years", description: "Master of Arts in Education at CE." },
        { name: "MSc in Veterinary Medicine", duration: "2 years", description: "Master in Veterinary Sciences at CVAS." }
      ],
      phdPrograms: [
        { name: "PhD in Computer Science", duration: "4 years", description: "Doctorate in Computer Science." },
        { name: "PhD in Public Health", duration: "4 years", description: "Doctorate in Public Health." },
        { name: "PhD in Development Studies", duration: "4 years", description: "Doctorate in Development Studies." },
        { name: "PhD in Agriculture", duration: "4 years", description: "Doctorate in Agricultural Sciences." },
        { name: "PhD in Education", duration: "4 years", description: "Doctorate in Education." }
      ],
      diplomaPrograms: [
        { name: "Diploma in IT", duration: "2 years", description: "Diploma in Information Technology." },
        { name: "Diploma in Nursing", duration: "3 years", description: "Diploma in Nursing and Midwifery." },
        { name: "Diploma in Education", duration: "2 years", description: "Diploma in Teacher Education." }
      ],
      certificatePrograms: [
        { name: "Short Courses in ICT", duration: "3-6 months", description: "Various ICT certificate programs." },
        { name: "Professional Training", duration: "Varies", description: "Professional development courses." }
      ],
      modeOfStudy: ["Full-time", "Part-time", "Evening", "Weekend"]
    },
    faculties: [
      { name: "College of Science and Technology (CST)", description: "Computer Science, IT, Engineering, Data Science, AI — 6,323 students", icon: "cpu" },
      { name: "College of Medicine and Health Sciences (CMHS)", description: "Medicine, Nursing, Pharmacy, Public Health — 7,365 students", icon: "heart-pulse" },
      { name: "College of Business and Economics (CBE)", description: "Accounting, Finance, Marketing, Economics — 4,715 students", icon: "briefcase" },
      { name: "College of Education (CE)", description: "Teacher Training, Educational Leadership — 6,739 students", icon: "graduation-cap" },
      { name: "College of Law", description: "LLB, LLM, Public and International Law", icon: "scale" },
      { name: "College of Agriculture (CAFF)", description: "Crop Science, Animal Science, Forestry — 4,145 students", icon: "sprout" },
      { name: "College of Arts and Social Sciences (CASS)", description: "Languages, History, Political Science, Sociology — 3,378 students", icon: "book-open" },
      { name: "College of Veterinary Medicine (CVAS)", description: "Veterinary Medicine, Animal Production — Nyagatare Campus", icon: "bug" }
    ],
    programs: [
      { name: "MBChB", level: "Bachelor", duration: "6 years", faculty: "College of Medicine and Health Sciences (CMHS)" },
      { name: "BSc Civil Engineering", level: "Bachelor", duration: "4 years", faculty: "College of Science and Technology (CST)" },
      { name: "BSc Electrical Engineering", level: "Bachelor", duration: "4 years", faculty: "College of Science and Technology (CST)" },
      { name: "BSc Computer Science", level: "Bachelor", duration: "4 years", faculty: "College of Science and Technology (CST)" },
      { name: "BSc Information Technology", level: "Bachelor", duration: "3 years", faculty: "College of Science and Technology (CST)" },
      { name: "BSc Nursing", level: "Bachelor", duration: "4 years", faculty: "College of Medicine and Health Sciences (CMHS)" },
      { name: "BSc Public Health", level: "Bachelor", duration: "4 years", faculty: "College of Medicine and Health Sciences (CMHS)" },
      { name: "BBA Accounting", level: "Bachelor", duration: "3 years", faculty: "College of Business and Economics (CBE)" },
      { name: "BBA Finance", level: "Bachelor", duration: "3 years", faculty: "College of Business and Economics (CBE)" },
      { name: "BBA Marketing", level: "Bachelor", duration: "3 years", faculty: "College of Business and Economics (CBE)" },
      { name: "BSc Agriculture", level: "Bachelor", duration: "4 years", faculty: "College of Agriculture (CAFF)" },
      { name: "LLB", level: "Bachelor", duration: "4 years", faculty: "College of Law" },
      { name: "BA Sociology", level: "Bachelor", duration: "3 years", faculty: "College of Arts and Social Sciences (CASS)" },
      { name: "BA Education", level: "Bachelor", duration: "3 years", faculty: "College of Education (CE)" },
      { name: "BSc Veterinary Medicine", level: "Bachelor", duration: "5 years", faculty: "College of Veterinary Medicine (CVAS)" },
      { name: "MSc Public Health", level: "Master", duration: "2 years", faculty: "College of Medicine and Health Sciences (CMHS)" },
      { name: "MSc Computer Science", level: "Master", duration: "2 years", faculty: "College of Science and Technology (CST)" },
      { name: "MBA", level: "Master", duration: "2 years", faculty: "College of Business and Economics (CBE)" },
      { name: "LLM", level: "Master", duration: "2 years", faculty: "College of Law" },
      { name: "MA Education", level: "Master", duration: "2 years", faculty: "College of Education (CE)" },
      { name: "PhD Computer Science", level: "PhD", duration: "4 years", faculty: "College of Science and Technology (CST)" },
      { name: "PhD Public Health", level: "PhD", duration: "4 years", faculty: "College of Medicine and Health Sciences (CMHS)" },
      { name: "PhD Development Studies", level: "PhD", duration: "4 years", faculty: "College of Arts and Social Sciences (CASS)" },
      { name: "PhD Agriculture", level: "PhD", duration: "4 years", faculty: "College of Agriculture (CAFF)" }
    ],
    tuition: {
      localMin: "0",
      localMax: "999",
      internationalMin: "0",
      internationalMax: "999",
      currency: "USD (local students ~RWF 725,000–1,500,000/yr)"
    },
    admission: {
      requirements: [
        "Rwandan Advanced Certificate of Secondary Education (A-Level) with at least two principal passes",
        "Or equivalent international secondary school qualifications recognized by HEC Rwanda",
        "Minimum GPA requirements vary by program",
        "English language proficiency for non-native speakers"
      ],
      entryQualifications: [
        "A-Level certificate with relevant subject combinations",
        "Foundation program completion",
        "Equivalent international qualifications evaluated by HEC"
      ],
      requiredDocuments: [
        "Completed application form (online via UR admissions portal)",
        "Certified copies of academic certificates and transcripts",
        "Copy of national ID or passport",
        "Recent passport-size photographs",
        "Proof of payment of application fee",
        "Recommendation letters (for postgraduate programs)"
      ],
      internationalRequirements: [
        "Valid passport and student visa",
        "Academic transcripts evaluated by HEC Rwanda",
        "Proof of financial support",
        "Health insurance coverage",
        "Visa application with admission letter"
      ],
      applicationDeadlines: "Rolling admissions. Applications open 3 months before each intake. Check UR website for program-specific deadlines.",
      intakePeriods: ["January", "September"],
      howToApply: "Apply online through the UR admissions portal. Applications are reviewed on a rolling basis. Visit https://ur.ac.rw for the application portal.",
      applicationFees: "RWF 5,000 for local applicants, USD 30 for international applicants"
    },
    tuitionDetails: [
      { program: "Undergraduate (Local)", level: "Bachelor", localAmount: "0–999 USD/yr (RWF 725,000–1,500,000)", internationalAmount: "0–999 USD/yr" },
      { program: "Postgraduate (Local)", level: "Master", localAmount: "2,500–4,999 USD/yr (RWF 2,304,000–2,912,000)", internationalAmount: "2,500–4,999 USD/yr" },
      { program: "Postgraduate (International)", level: "Master", localAmount: "2,500–4,999 USD/yr", internationalAmount: "2,500–4,999 USD/yr" },
      { program: "PhD Programs", level: "PhD", localAmount: "2,500–4,999 USD/yr", internationalAmount: "2,500–4,999 USD/yr" }
    ],
    scholarships: [
      { name: "Rwanda Government Scholarship", type: "Government", description: "Full scholarship for top-performing Rwandan students, covering full tuition.", eligibility: "Rwandan nationals with exceptional academic records" },
      { name: "UR Merit Scholarship", type: "University", description: "Based on academic excellence for continuing students.", amount: "Partial tuition reduction", eligibility: "Top-performing students across colleges" },
      { name: "DAAD Scholarship", type: "International", description: "German Academic Exchange Service scholarships for graduate programs.", amount: "Full tuition + stipend", eligibility: "Postgraduate students in select programs" },
      { name: "Mastercard Foundation Scholars Program", type: "Foundation", description: "Scholarships for academically talented but economically disadvantaged students.", amount: "Full tuition + accommodation + stipend", eligibility: "Students from Sub-Saharan Africa" }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "Contact the International Students Office at info@ur.ac.rw for application guidance. International students are welcome to apply.",
      equivalenceGuidance: "International qualifications must be evaluated and equated by the Higher Education Council (HEC) of Rwanda.",
      visaInfo: "Student visa applications are processed through the Rwanda Directorate General of Immigration and Emigration. A valid admission letter is required.",
      residencePermit: "Residence permits for study purposes can be obtained after arrival with proper documentation at the Immigration Office.",
      airportArrival: "Kigali International Airport is approximately 20 minutes from the main campuses. Airport pickup can be arranged upon request.",
      orientationWeek: true,
      languageSupport: "English language support available for international students. Preparatory language courses offered.",
      exchangePrograms: ["ERASMUS+ partnerships", "Africa Center of Excellence programs", "Bilateral exchange agreements", "Australian Universities Network (AAUN)"]
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Available within 1-5km radius of each campus, RWF 150,000-400,000/month",
      privateHostels: "Multiple private hostel options near all campus locations",
      estimatedCost: "RWF 100,000 - 300,000/month depending on location and quality",
      onCampusHostels: "Limited on-campus accommodation available at select colleges — apply early",
      accommodationOffice: "Dean of Students office at each college handles accommodation inquiries",
      applicationProcess: "Apply through the respective college administration office"
    },
    studentLife: {
      clubs: ["Innovation Hub", "Research Groups", "Community Service", "Debate Club", "Drama Club", "Robotics Club", "Entrepreneurship Club"],
      sports: ["Football", "Basketball", "Volleyball", "Athletics", "Rugby", "Tennis", "Swimming"],
      events: ["Cultural Events", "Career Fairs", "Research Conferences", "Sports Tournaments", "Annual Research Conference", "International Symposium on Higher Education"],
      organizations: ["Student Government", "Faculty Associations", "Alumni Network (50,000+)", "Women in STEM"]
    },
    facilities: {
      libraries: ["UR Central Library", "College Libraries", "Digital Library (e-resources)", "Research Archives"],
      labs: ["Research Laboratories", "Computer Labs", "Science Labs", "Engineering Workshops", "Medical Simulation Labs", "Agricultural Research Farms"],
      sports: ["Sports Complex", "Football Fields", "Basketball Courts", "Fitness Centers"],
      other: ["Wi-Fi Campus", "Health Centers", "Student Restaurants", "Prayer Rooms", "Parking", "Student Lounges", "Bookshops"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "Career center provides job placement assistance, internship coordination, and career counseling services.",
      alumniNetwork: "50,000+ alumni network across Rwanda and internationally. Strong presence in government, academia, and private sector."
    },
    research: {
      centers: ["Center for Research and Innovation", "Africa Center of Excellence", "Regional Research Hub", "Health Data Science Center (DST-HIRWA)"],
      innovationLabs: ["Innovation Lab", "Tech Incubation Hub", "AI/IoT Research Lab"],
      publications: ["Rwanda Journal of Medicine", "UR Research Papers", "Journal of Development Studies", "The UR Insight (monthly newsletter)"],
      conferences: ["Annual Research Conference", "International Symposium on Higher Education", "4th International Conference on Re-shaping Education for Sustainable Development"],
      partnerships: ["100+ international university partnerships", "Government research agencies", "Industry collaborations", "MTN Rwanda partnership", "Somali National University partnership"]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200", caption: "UR Campus Overview" },
      { image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1200", caption: "UR Academic Building" },
      { image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200", caption: "UR Library" }
    ],
    videos: [],
    rankings: {
      national: "Top-ranked public research university in Rwanda — World's top 100 young universities",
      international: "Ranked among the world's top young universities. Globally recognized for research impact and academic excellence.",
      awards: ["Ranked in the world's top 100 young universities", "Best Public University in Rwanda", "Research Excellence Award"],
      accreditations: ["Higher Education Council (HEC) of Rwanda", "Rwanda Qualifications Framework", "Ministry of Education of Rwanda"],
      memberships: ["Association of African Universities (AAU)", "Inter-University Council of East Africa (IUCEA)", "International Association of Universities (IAU)"]
    },
    faq: [
      { question: "What programs does UR offer?", answer: "UR offers 202+ undergraduate programs, 242+ postgraduate programs across 8 colleges in engineering, medicine, business, law, education, agriculture, arts, and ICT." },
      { question: "How do I apply to UR?", answer: "Applications are submitted online through the UR admissions portal at ur.ac.rw. Check the website for specific program requirements and deadlines." },
      { question: "What is the fee structure?", answer: "UR fee structure (approved 2018, still valid) divides into academic administrative fees and tuition fees. Local undergraduates pay 0-999 USD/year. See ur.ac.rw for details." },
      { question: "Does UR offer accommodation?", answer: "Limited on-campus accommodation is available at select colleges. Private hostels and apartments are widely available near all campuses." }
    ],
    downloads: [
      { name: "Fee Structure (2025/2026)", url: "https://ur.ac.rw/fee-structure", type: "PDF" },
      { name: "Undergraduate Application Form", url: "https://ur.ac.rw/apply", type: "PDF" },
      { name: "Postgraduate Application Form", url: "https://ur.ac.rw/postgraduate-apply", type: "PDF" },
      { name: "University Prospectus", url: "https://ur.ac.rw/prospectus", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Kigali City Center", type: "Shopping", distance: "15 min drive from Nyarugenge" },
      { name: "Kigali International Airport", type: "Transport", distance: "25 min drive" },
      { name: "Kigali Teaching Hospital (CHUK)", type: "Healthcare", distance: "10 min drive from Nyarugenge" },
      { name: "Kigali Heights Mall", type: "Shopping", distance: "20 min drive" }
    ],
    reviews: [
      { name: "Emmanuel K.", rating: 4, comment: "Good university with diverse programs and experienced faculty. The merger created a strong institution.", date: "2024-04-12" },
      { name: "Alice M.", rating: 5, comment: "Excellent research facilities and international partnerships. Proud to be a UR alumna.", date: "2024-06-20" }
    ],
    quickFacts: {
      Established: "1963",
      Type: "Public",
      Campuses: "7 (Huye, Nyarugenge, Gikondo, Remera, Busogo, Rukara, Nyagatare)",
      Students: "33,344",
      "Teaching Staff": "2,000+",
      Faculties: "8 Colleges",
      Programs: "444+ (202 UG + 242 PG)",
      "Masters Students": "3,300",
      "PhD Students": "722",
      Intakes: "January, September",
      Language: "English",
      Accommodation: "Available (limited on-campus)",
      Scholarships: "Government + University + International"
    },
    contact: {
      phone: "+250 788 306 493 / +250 783 836 308",
      email: "info@ur.ac.rw",
      website: "https://www.ur.ac.rw",
      address: "KN 75 Street, Nyarugenge, Kigali, Rwanda — P.O. Box 4285 Kigali"
    },
    about: {
      history: "Established in 2013 through the merger of seven former higher education institutions, with its earliest predecessor (National University of Rwanda) founded in 1963. UR is the largest public university in the country.",
      accreditation: "Accredited by the Higher Education Council (HEC) of Rwanda — originally recognized since 1963",
      achievements: ["Ranked in world's top 100 young universities", "33,344+ students enrolled", "8 colleges with 444+ programs", "International partnerships with 100+ universities worldwide"]
    },
    images: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1200&q=80"
    ]
  },
  {
    id: "ulk",
    name: "Kigali Independent University ULK",
    location: "Kigali, Rwanda",
    city: "Kigali",
    type: "Private",
    description: "A leading private university in Rwanda founded in 1996, offering quality education across multiple campuses with a focus on academic excellence and ethical values.",
    logo: "https://ulk.ac.rw/wp-content/uploads/2016/06/LOGO-ULK.png",
    coverImage: "https://ulk.ac.rw/wp-content/uploads/2016/06/ULK-Kigali-Campus-Main-Mini.jpg",
    website: "https://ulk.ac.rw",
    founded: 1996,
    motto: "Education for Liberation",
    accreditationStatus: "Fully accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Private (Limited Company)",
    email: "info@ulk.ac.rw",
    telephone: "+250 788 304 086",
    physicalAddress: "KK 15 Ave, Kigali, Rwanda",
    googleMapsLocation: "",
    socialMedia: {
      facebook: "https://www.facebook.com/ulknews.ulk",
      twitter: "https://twitter.com/ulk_info",
      instagram: "",
      linkedin: "",
      youtube: "https://www.youtube.com/channel/UCD0nQ8PBTdjfQp2CB8JlWtg"
    },
    overview: {
      history: "ULK was founded in 1996 by Prof. Dr. RWIGAMBA Balinda to provide quality higher education in Rwanda and the region. Since its inception, ULK has grown from a single campus to multiple campuses serving thousands of students.",
      mission: "To educate, teach, conduct research and serve the community. The fundamental mission of ULK is to provide the students with a training which will enable them to become actors and organizers of a complete development of the nation.",
      vision: "Kigali Independent University ULK is destined to stand out as a remarkable university for excellence at the heart of Africa with highly motivated students and high qualified personnel endowed with elevated ethical values.",
      coreValues: ["Academic excellence", "Ethical leadership", "Innovation and creativity", "Inclusivity and diversity", "Community engagement"],
      viceChancellor: "Prof. Dr ONUORAH, Martins Onyekwelu (Ag. Vice-Chancellor)",
      campusDescription: "ULK operates multiple campuses in Kigali and Gisenyi, featuring modern buildings, well-equipped libraries, computer labs, and sports facilities."
    },
    campuses: [
      { name: "Kigali Campus (Main)", location: "KK 15 Ave, Kigali", description: "Main campus in the heart of Kigali with modern academic buildings, libraries, and administrative offices." },
      { name: "Gisenyi Campus", location: "Gisenyi, Western Province", description: "Satellite campus serving the Western Province with full academic programs." }
    ],
    academicInfo: {
      schools: [
        { name: "School of Economics and Business Studies", description: "Offering programs in accounting, finance, marketing, and management." },
        { name: "School of Science & Technology", description: "Offering programs in computer science, IT, software engineering, and network engineering." },
        { name: "School of Law", description: "Offering LLB and legal studies programs." },
        { name: "School of Social Sciences", description: "Offering programs in sociology, psychology, international relations, and development studies." },
        { name: "School of Education", description: "Offering teacher training and education programs." }
      ],
      departments: [
        { name: "Department of Accounting", school: "School of Economics and Business Studies", description: "Accounting education and research." },
        { name: "Department of Finance", school: "School of Economics and Business Studies", description: "Finance and investment programs." },
        { name: "Department of Marketing", school: "School of Economics and Business Studies", description: "Marketing and sales management." },
        { name: "Department of Management", school: "School of Economics and Business Studies", description: "Business management and administration." },
        { name: "Department of Computer Science", school: "School of Science & Technology", description: "Computer science and programming." },
        { name: "Department of Information Technology", school: "School of Science & Technology", description: "IT and systems management." },
        { name: "Department of Software Engineering", school: "School of Science & Technology", description: "Software development and engineering." },
        { name: "Department of Network Engineering", school: "School of Science & Technology", description: "Network and telecommunications." },
        { name: "Department of Law", school: "School of Law", description: "Legal education and research." },
        { name: "Department of Sociology", school: "School of Social Sciences", description: "Sociological studies and research." },
        { name: "Department of Psychology", school: "School of Social Sciences", description: "Psychology and counseling programs." },
        { name: "Department of International Relations", school: "School of Social Sciences", description: "International relations and diplomacy." },
        { name: "Department of Development Studies", school: "School of Social Sciences", description: "Development and social change." },
        { name: "Department of Education", school: "School of Education", description: "Teacher training and education." }
      ],
      undergraduatePrograms: [
        { name: "BBA in Accounting", duration: "3 years", description: "Bachelor of Business Administration in Accounting." },
        { name: "BBA in Finance", duration: "3 years", description: "Bachelor of Business Administration in Finance." },
        { name: "BBA in Marketing", duration: "3 years", description: "Bachelor of Business Administration in Marketing." },
        { name: "BBA in Management", duration: "3 years", description: "Bachelor of Business Administration in Management." },
        { name: "BSc Computer Science", duration: "4 years", description: "Bachelor of Science in Computer Science." },
        { name: "BSc Information Technology", duration: "4 years", description: "Bachelor of Science in Information Technology." },
        { name: "BSc Software Engineering", duration: "4 years", description: "Bachelor of Science in Software Engineering." },
        { name: "BSc Network Engineering", duration: "4 years", description: "Bachelor of Science in Network Engineering." },
        { name: "LLB", duration: "4 years", description: "Bachelor of Laws." },
        { name: "BA in Sociology", duration: "3 years", description: "Bachelor of Arts in Sociology." },
        { name: "BA in Psychology", duration: "3 years", description: "Bachelor of Arts in Psychology." },
        { name: "BA in International Relations", duration: "3 years", description: "Bachelor of Arts in International Relations." },
        { name: "BA in Development Studies", duration: "3 years", description: "Bachelor of Arts in Development Studies." },
        { name: "BSc Education", duration: "3 years", description: "Bachelor of Science in Education." }
      ],
      postgraduatePrograms: [
        { name: "MBA", duration: "2 years", description: "Master of Business Administration." },
        { name: "MSc in Computer Science", duration: "2 years", description: "Master of Science in Computer Science." },
        { name: "LLM", duration: "2 years", description: "Master of Laws." },
        { name: "MA in Development Studies", duration: "2 years", description: "Master of Arts in Development Studies." }
      ],
      phdPrograms: [
        { name: "PhD in Development Studies", duration: "4 years", description: "Doctorate in Development Studies." }
      ],
      diplomaPrograms: [
        { name: "Diploma in Accounting", duration: "2 years", description: "Diploma in Accounting and Finance." },
        { name: "Diploma in IT", duration: "2 years", description: "Diploma in Information Technology." },
        { name: "Diploma in Law", duration: "2 years", description: "Diploma in Legal Studies." }
      ],
      certificatePrograms: [
        { name: "Short Courses in Business", duration: "3-6 months", description: "Various certificate programs in business fields." },
        { name: "Short Courses in IT", duration: "3-6 months", description: "Various certificate programs in information technology." },
        { name: "Short Courses in Languages", duration: "3-6 months", description: "English, French, and Kinyarwanda language certificates." }
      ],
      modeOfStudy: ["Full-time", "Part-time", "Evening", "Weekend"]
    },
    faculties: [
      { name: "School of Economics and Business Studies", description: "Accounting, Finance, Marketing, Management", icon: "briefcase" },
      { name: "School of Science & Technology", description: "Computer Science, IT, Software Engineering, Network Engineering", icon: "cpu" },
      { name: "School of Law", description: "LLB, Legal Studies", icon: "scale" },
      { name: "School of Social Sciences", description: "Sociology, Psychology, International Relations, Development Studies", icon: "book-open" },
      { name: "School of Education", description: "Teacher Training, Educational Studies", icon: "graduation-cap" }
    ],
    programs: [
      { name: "BBA in Accounting", level: "Bachelor", duration: "3 years", faculty: "School of Economics and Business Studies" },
      { name: "BBA in Finance", level: "Bachelor", duration: "3 years", faculty: "School of Economics and Business Studies" },
      { name: "BBA in Marketing", level: "Bachelor", duration: "3 years", faculty: "School of Economics and Business Studies" },
      { name: "BBA in Management", level: "Bachelor", duration: "3 years", faculty: "School of Economics and Business Studies" },
      { name: "BSc Computer Science", level: "Bachelor", duration: "4 years", faculty: "School of Science & Technology" },
      { name: "BSc Information Technology", level: "Bachelor", duration: "4 years", faculty: "School of Science & Technology" },
      { name: "BSc Software Engineering", level: "Bachelor", duration: "4 years", faculty: "School of Science & Technology" },
      { name: "BSc Network Engineering", level: "Bachelor", duration: "4 years", faculty: "School of Science & Technology" },
      { name: "LLB", level: "Bachelor", duration: "4 years", faculty: "School of Law" },
      { name: "BA in Sociology", level: "Bachelor", duration: "3 years", faculty: "School of Social Sciences" },
      { name: "BA in Psychology", level: "Bachelor", duration: "3 years", faculty: "School of Social Sciences" },
      { name: "BA in International Relations", level: "Bachelor", duration: "3 years", faculty: "School of Social Sciences" },
      { name: "BA in Development Studies", level: "Bachelor", duration: "3 years", faculty: "School of Social Sciences" },
      { name: "BSc Education", level: "Bachelor", duration: "3 years", faculty: "School of Education" },
      { name: "MBA", level: "Master", duration: "2 years", faculty: "School of Economics and Business Studies" },
      { name: "MSc in Computer Science", level: "Master", duration: "2 years", faculty: "School of Science & Technology" },
      { name: "LLM", level: "Master", duration: "2 years", faculty: "School of Law" },
      { name: "MA in Development Studies", level: "Master", duration: "2 years", faculty: "School of Social Sciences" },
      { name: "PhD in Development Studies", level: "PhD", duration: "4 years", faculty: "School of Social Sciences" },
      { name: "Diploma in Accounting", level: "Diploma", duration: "2 years", faculty: "School of Economics and Business Studies" },
      { name: "Diploma in IT", level: "Diploma", duration: "2 years", faculty: "School of Science & Technology" },
      { name: "Diploma in Law", level: "Diploma", duration: "2 years", faculty: "School of Law" }
    ],
    tuition: {
      localMin: "800,000",
      localMax: "2,200,000",
      internationalMin: "2,000",
      internationalMax: "5,000",
      currency: "RWF / USD"
    },
    admission: {
      requirements: [
        "Rwandan Advanced Certificate of Secondary Education (A-Level) with at least two principal passes",
        "Or equivalent international secondary school qualifications",
        "Minimum GPA requirements vary by program",
        "English language proficiency for non-native speakers"
      ],
      entryQualifications: [
        "A-Level certificate with relevant subject combinations",
        "Foundation program completion for bridging students",
        "Equivalent international qualifications recognized by HEC"
      ],
      requiredDocuments: [
        "Completed application form",
        "Certified copies of academic certificates and transcripts",
        "Photocopy of national ID or passport",
        "Recent passport-size photographs",
        "Proof of payment of application fee",
        "Recommendation letters (for postgraduate programs)"
      ],
      internationalRequirements: [
        "Valid passport and student visa",
        "Transcripts evaluated by HEC Rwanda",
        "Proof of financial support",
        "Health insurance coverage"
      ],
      applicationDeadlines: "Applications open 3 months before each intake. Deadline: 1 month before intake start.",
      intakePeriods: ["January", "May", "September"],
      howToApply: "Submit application online via ULK online at https://ulk.schoolgear.co.rw/ or apply at INES using https://share.google/x8mfMEJVXaDElsrXI. Applications are reviewed on a rolling basis.",
      applicationFees: "RWF 10,000 for local applicants, USD 50 for international applicants"
    },
    tuitionDetails: [
      { program: "Undergraduate (School of Economics & Business)", level: "Bachelor", localAmount: "800,000 - 1,500,000 RWF/year", internationalAmount: "2,000 - 3,500 USD/year" },
      { program: "Undergraduate (Science & Technology)", level: "Bachelor", localAmount: "1,200,000 - 2,200,000 RWF/year", internationalAmount: "3,000 - 5,000 USD/year" },
      { program: "Undergraduate (Law)", level: "Bachelor", localAmount: "1,000,000 - 1,800,000 RWF/year", internationalAmount: "2,500 - 4,000 USD/year" },
      { program: "Postgraduate (MBA)", level: "Master", localAmount: "1,500,000 - 2,500,000 RWF/year", internationalAmount: "3,500 - 5,500 USD/year" },
      { program: "Postgraduate (MSc)", level: "Master", localAmount: "1,800,000 - 2,800,000 RWF/year", internationalAmount: "4,000 - 6,000 USD/year" },
      { program: "PhD", level: "PhD", localAmount: "2,000,000 - 3,000,000 RWF/year", internationalAmount: "4,500 - 6,500 USD/year" },
      { program: "Diploma", level: "Diploma", localAmount: "500,000 - 800,000 RWF/year", internationalAmount: "1,500 - 2,500 USD/year" }
    ],
    scholarships: [
      { name: "ULK Financial Support Program", type: "University", description: "Financial support for eligible students. 2,882+ students have received financial assistance.", amount: "Partial to full tuition", eligibility: "Based on financial need and academic merit" },
      { name: "Rwanda Government Scholarship", type: "Government", description: "Government sponsorship for qualifying Rwandan students." },
      { name: "Merit-Based Scholarship", type: "University", description: "For top-performing students with excellent academic records.", amount: "Up to 50% tuition reduction" },
      { name: "Need-Based Bursary", type: "University", description: "Financial assistance for economically disadvantaged students.", amount: "Partial tuition coverage" }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "International students are welcome to apply. Contact admissions@ulk.ac.rw for guidance.",
      equivalenceGuidance: "International qualifications must be evaluated and equated by the Higher Education Council (HEC) of Rwanda.",
      visaInfo: "Student visa applications are processed through the Rwanda Directorate General of Immigration and Emigration. Letter of admission required.",
      residencePermit: "Residence permits for study purposes can be obtained after arrival with proper documentation.",
      airportArrival: "Airport pickup can be arranged upon request. Kigali International Airport is approximately 20 minutes from the main campus.",
      orientationWeek: true,
      languageSupport: "English and French language support available for international students. Preparatory language courses offered.",
      exchangePrograms: ["ERASMUS+ partnerships", "African university exchange network", "Bilateral exchange agreements"]
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Available in Gisozi Cafe, Chipanza, Musezero, Kacyiru and nearby areas",
      privateHostels: "Private hostels in Gisozi, Chipanza, Musezero, and Kacyiru areas",
      estimatedCost: "RWF 50,000 - 180,000/month",
      onCampusHostels: "ULK has on-campus hostels with WiFi, ranging from RWF 50,000 to 180,000 per month depending on the room category. Hostel rooms are available in different categories.",
      accommodationOffice: "Student Affairs Office handles accommodation inquiries",
      applicationProcess: "Apply early through the Student Affairs office, typically 2 months before intake"
    },
    studentLife: {
      clubs: ["CELA Club"],
      sports: ["Football", "Basketball", "Volleyball", "Athletics", "Table Tennis", "Handball"],
      events: ["ULK Cultural Week", "Career Fair", "Research Symposium", "Sports Day", "Graduation Ceremony"],
      organizations: ["Student Government Association", "ULK Alumni Association", "Peer Mentoring Program", "Community Service Initiative"]
    },
    facilities: {
      libraries: ["Main Library (Kigali Campus)", "Gisenyi Campus Library", "Digital Library with e-resources"],
      labs: ["Computer Labs (4 labs, 1,326 computers)", "Science Laboratories", "Moot Court (Law)", "Language Lab"],
      sports: ["Football Field", "Basketball Court", "Volleyball Court", "Fitness Center"],
      other: ["Wi-Fi Campus", "Student Cafeteria", "Health Center", "Prayer Rooms", "Auditorium", "Parking", "Student Lounge"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "Career office assists with job placements, internship coordination, and employer networking.",
      alumniNetwork: "42,958+ graduates network providing mentorship and career opportunities."
    },
    research: {
      centers: ["Research and Innovation Center", "Center for Development Studies", "Legal Research Center"],
      innovationLabs: ["Innovation and Incubation Hub", "Software Development Lab"],
      publications: ["ULK Journal of Development Studies", "ULK Law Review", "Research papers published in international journals"],
      conferences: ["Annual International Conference on Development", "ULK Research Week", "East African Higher Education Forum"],
      partnerships: ["Partnerships with universities in East Africa, Europe, and Asia", "Collaboration with government ministries", "Private sector research partnerships"]
    },
    gallery: [
      { image: "", caption: "ULK Main Campus - Kigali" },
      { image: "", caption: "ULK Library Building" },
      { image: "", caption: "Computer Lab Facilities" },
      { image: "", caption: "Graduation Ceremony" },
      { image: "", caption: "Sports Complex" },
      { image: "", caption: "Gisenyi Campus" }
    ],
    videos: [
      { title: "ULK Overview", url: "", thumbnail: "" },
      { title: "Campus Tour", url: "", thumbnail: "" },
      { title: "Student Life at ULK", url: "", thumbnail: "" }
    ],
    rankings: {
      national: "Ranked among top private universities in Rwanda",
      international: "Recognized by HEC Rwanda and international accreditation bodies",
      awards: ["Best Private University in Student Satisfaction (2022)", "Innovation in Education Award (2023)"],
      accreditations: ["Higher Education Council (HEC) of Rwanda", "Rwanda Qualifications Framework (RQF)"],
      memberships: ["Association of African Universities (AAU)", "Inter-University Council of East Africa (IUCEA)", "Rwanda Association of Private Universities (RAPU)"]
    },
    faq: [
      { question: "What are the admission requirements for undergraduate programs?", answer: "A student needs an A-Level certificate or an equivalence certificate with at least two principal passes." },
      { question: "Does ULK offer scholarships?", answer: "For scholarship information, please visit the official ULK website at https://ulk.ac.rw." },
      { question: "What is the medium of instruction?", answer: "The medium of instruction is English, with some programs also available in French." },
      { question: "Are there accommodation facilities?", answer: "Yes, ULK has on-campus hostels with WiFi, ranging from RWF 50,000 to 180,000 per month depending on the room category." },
      { question: "What intakes are available?", answer: "ULK has three main intakes: January, May, and September each year." }
    ],
    downloads: [
      { name: "Fee Structure", url: "https://ulk.ac.rw/ulk-fees-structure/", type: "PDF" },
      { name: "Undergraduate Application Form", url: "https://ulk.schoolgear.co.rw/", type: "PDF" },
      { name: "Postgraduate Application Form", url: "https://share.google/x8mfMEJVXaDElsrXI", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Gisozi Cafe", type: "Accommodation", distance: "Near campus" },
      { name: "Chipanza", type: "Accommodation", distance: "Near campus" },
      { name: "Musezero", type: "Accommodation", distance: "Near campus" },
      { name: "Kacyiru", type: "Accommodation", distance: "Near campus" },
      { name: "Kigali International Airport", type: "Transport", distance: "20 min drive" },
      { name: "Kicukiro Market", type: "Shopping", distance: "10 min walk" },
      { name: "BK Arena", type: "Sports", distance: "15 min drive" },
      { name: "Kigali Convention Centre", type: "Convention", distance: "20 min drive" },
      { name: "University Teaching Hospital", type: "Healthcare", distance: "15 min drive" }
    ],
    reviews: [
      { name: "Jean Pierre", rating: 4, comment: "Great university with a supportive learning environment.", date: "2024-05-15" },
      { name: "Alice M.", rating: 5, comment: "Quality education and excellent facilities, especially the computer labs.", date: "2024-03-20" },
      { name: "David K.", rating: 4, comment: "Good academic programs and dedicated faculty members.", date: "2024-01-10" }
    ],
    quickFacts: {
      Established: "1996",
      Type: "Private",
      Campuses: "2 (Kigali Main Campus, Gisenyi Campus)",
      Students: "42,958+",
      "Teaching Staff": "211",
      Faculties: "5 Schools",
      Programs: "30+",
      Intakes: "January, May, September",
      Language: "English, French",
      Accommodation: "On-campus hostels with WiFi (RWF 50,000 - 180,000/month)",
      Scholarships: "Available (visit ULK official website)"
    },
    contact: {
      phone: "+250 788 304 086",
      email: "info@ulk.ac.rw",
      website: "https://ulk.ac.rw",
      address: "KK 15 Ave, Kigali, Rwanda"
    },
    about: {
      history: "ULK was founded in 1996 by Prof. Dr. RWIGAMBA Balinda to provide quality higher education in Rwanda and the region.",
      mission: "To educate, teach, conduct research and serve the community. The fundamental mission of ULK is to provide the students with a training which will enable them to become actors and organizers of a complete development of the nation.",
      vision: "Kigali Independent University ULK is destined to stand out as a remarkable university for excellence at the heart of Africa with highly motivated students and high qualified personnel endowed with elevated ethical values.",
      accreditation: "Fully accredited by the Higher Education Council (HEC) of Rwanda",
      achievements: ["42,958+ graduates", "5 schools offering diverse programs", "211 teaching staff", "1,326 computers for student use", "28+ years of educational excellence"]
    },
    images: [
      "https://ulk.ac.rw/wp-content/uploads/2016/08/ULK-Masters-Programmes-min.jpg",
      "https://ulk.ac.rw/wp-content/uploads/2013/04/ULK-Digital-Library-Kigali.jpg",
      "https://ulk.ac.rw/wp-content/uploads/2016/03/ULK-Masters-building-e1503077038926.jpg",
      "https://ulk.ac.rw/wp-content/uploads/2016/06/ULK-Gisenyi-Campus-1.jpg"
    ]
  },
  {
    id: "alu",
    name: "African Leadership University (ALU)",
    location: "Kigali, Rwanda",
    city: "Kigali",
    type: "Private",
    description: "An innovative Pan-African university offering bachelor's degrees in Entrepreneurial Leadership, Software Engineering, and International Business & Trade. ALU Rwanda is based in Kigali Innovation City and is certified as a Top Employer in Rwanda for 2026.",
    logo: "https://www.alueducation.com/wp-content/uploads/2016/02/alu_logo_original.png",
    coverImage: "https://www.alueducation.com/wp-content/uploads/2021/09/ALU-Site-Featuured.jpg",
    website: "https://www.alueducation.com",
    founded: 2017,
    motto: "Leadership for Africa's Transformation",
    accreditationStatus: "Fully accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Private (Non-profit)",
    email: "admissions@alueducation.com",
    telephone: "",
    physicalAddress: "Bumbogo, Kigali Innovation City, Kigali, Rwanda",
    googleMapsLocation: "",
    socialMedia: { facebook: "", twitter: "", instagram: "", linkedin: "", youtube: "" },
    overview: {
      history: "ALU Rwanda campus opened in September 2017 in Kigali Innovation City with 270 founding students. The university is part of the African Leadership Group, a network of institutions with campuses in Mauritius and Rwanda. ALU Rwanda is a residential campus that has grown to serve hundreds of students from across Africa. In 2026, ALU Rwanda achieved its first-ever Top Employer certification in Rwanda.",
      campusDescription: "ALU Rwanda is located in Kigali Innovation City, approximately 9km from Kigali International Airport. The campus is a modern facility with collaborative learning spaces, tech labs, and student common areas. It neighbors Carnegie Mellon University Africa."
    },
    campuses: [
      { name: "Kigali Innovation City Campus", location: "Bumbogo, Kigali Innovation City, Kigali, Rwanda", description: "Modern campus in Kigali's innovation hub, shared with Carnegie Mellon University Africa." }
    ],
    academicInfo: {
      schools: [
        { name: "School of Entrepreneurial Leadership", description: "BSc (Hons) Entrepreneurial Leadership (BEL) — leadership and business fundamentals." },
        { name: "School of Software Engineering", description: "BSc (Hons) Software Engineering (BSE) — full-stack development and computing." },
        { name: "School of International Business and Trade", description: "BSc (Hons) International Business and Trade (IBT) — global commerce and trade." }
      ],
      departments: [
        { name: "Department of Entrepreneurial Leadership", school: "School of Entrepreneurial Leadership", description: "Leadership development." },
        { name: "Department of Software Engineering", school: "School of Software Engineering", description: "Software development and engineering." },
        { name: "Department of International Business", school: "School of International Business and Trade", description: "Global business and trade." }
      ],
      undergraduatePrograms: [
        { name: "BSc (Hons) Entrepreneurial Leadership (BEL)", duration: "3 years", description: "Leadership and business fundamentals with real-world projects and internships." },
        { name: "BSc (Hons) Software Engineering (BSE)", duration: "3 years", description: "Full-stack software engineering, coding, and technology innovation." },
        { name: "BSc (Hons) International Business and Trade (IBT)", duration: "3 years", description: "Global trade, international business, and cross-cultural management." }
      ],
      postgraduatePrograms: [],
      phdPrograms: [],
      diplomaPrograms: [],
      certificatePrograms: [],
      modeOfStudy: ["Full-time"]
    },
    faculties: [
      { name: "School of Entrepreneurial Leadership", description: "Leadership and business", icon: "Award" },
      { name: "School of Software Engineering", description: "Software and computing", icon: "Monitor" },
      { name: "School of International Business and Trade", description: "Global commerce", icon: "Globe" }
    ],
    programs: [
      { name: "BSc Entrepreneurial Leadership", level: "Bachelor", duration: "3 years", faculty: "School of Entrepreneurial Leadership" },
      { name: "BSc Software Engineering", level: "Bachelor", duration: "3 years", faculty: "School of Software Engineering" },
      { name: "BSc International Business & Trade", level: "Bachelor", duration: "3 years", faculty: "School of International Business and Trade" }
    ],
    tuition: { localMin: "3,000", localMax: "4,000", internationalMin: "3,000", internationalMax: "4,000", currency: "USD" },
    admission: {
      requirements: ["Online application (4 sections: forms, assessments, supporting info, finances)", "Math and English assessment", "Personality assessment", "Leadership experience evidence"],
      entryQualifications: ["Secondary school certificate", "Evidence of leadership potential"],
      requiredDocuments: ["Application form", "Education history", "Leadership experience", "Personal identification", "Supporting documents"],
      internationalRequirements: ["Valid passport", "Academic transcripts", "English proficiency", "Student visa"],
      applicationDeadlines: "Rolling admissions for May and September intakes. IBT program available May and September only.",
      intakePeriods: ["May", "September"],
      howToApply: "Apply online at alueducation.com through the admissions portal. ALU does not work with agents and charges no application fees.",
      applicationFees: "Free"
    },
    tuitionDetails: [
      { program: "BSc Entrepreneurial Leadership (BEL)", level: "Undergraduate", localAmount: "$3,000/yr", internationalAmount: "$3,000/yr" },
      { program: "BSc Software Engineering (BSE)", level: "Undergraduate", localAmount: "$3,000/yr", internationalAmount: "$3,000/yr" },
      { program: "BSc International Business & Trade (IBT)", level: "Undergraduate", localAmount: "$4,000/yr", internationalAmount: "$4,000/yr" }
    ],
    scholarships: [
      { name: "Mastercard Foundation Scholars Program", type: "Foundation", description: "Full-ride scholarship covering tuition, accommodation, meals, and living allowance for qualifying students from across Africa. Every ALU applicant is automatically considered." },
      { name: "Tuition Grant", type: "University", description: "Fee waiver covering minimum degree duration. Does not cover living costs." },
      { name: "ALU Scholarship", type: "University", description: "Need-based and merit-based financial aid for qualifying students." },
      { name: "Dolika Banda Scholarship", type: "Foundation", description: "Scholarship for Zambian leaders in STEM fields." }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "ALU accepts students from all African countries. The Mastercard Foundation Scholars Program prioritizes women, refugees, and differently-abled youth.",
      equivalenceGuidance: "International qualifications evaluated for equivalence by HEC.",
      visaInfo: "Visa support provided with admission letter.",
      residencePermit: "Assistance with residence permit upon arrival.",
      airportArrival: "Information provided upon enrollment.",
      orientationWeek: true,
      languageSupport: "English instruction throughout.",
      exchangePrograms: ["ALU Mauritius campus", "Global partner institutions"]
    },
    accommodation: {
      hostels: false,
      nearbyApartments: "ALU Rwanda is non-residential. Students arrange their own accommodation in and around Kigali (Kimironko, Kicukiro areas).",
      privateHostels: "Private apartments and hostels available in surrounding areas.",
      estimatedCost: "RWF 150,000 - 300,000/month",
      accommodationOffice: "ALU Student Affairs provides guidance on accommodation options."
    },
    studentLife: {
      clubs: ["Leadership Society", "Tech Club", "Entrepreneurship Hub", "Debate Society", "Arts and Culture Club"],
      sports: ["Basketball", "Football", "Talent shows and performances"],
      events: ["Graduation (annual Kigali Convention Center ceremony)", "Innovation Challenges", "Leadership Summits", "Talent Shows", "Live Music Events", "Art Exhibitions"],
      organizations: ["ALU Student Council", "Pan-African Student Network"]
    },
    facilities: {
      libraries: ["ALU Library — digital and physical resources"],
      labs: ["Innovation Lab", "Computer Labs", "Collaborative Learning Spaces"],
      sports: ["Basketball court", "Football pitch"],
      other: ["Co-working spaces", "Student lounge", "Innovation hub access"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "ALU's hands-on curriculum includes real-world internships. The Workforce Readiness Survey Report tracks graduate outcomes.",
      alumniNetwork: "Growing Pan-African alumni network across multiple countries."
    },
    research: {
      centers: ["ALU Research Centre"],
      innovationLabs: ["ALU Innovation Lab"],
      publications: ["ALU Workforce Readiness Survey Report"],
      conferences: ["ALU Leadership Summit", "Graduation Ceremonies"],
      partnerships: ["Mastercard Foundation", "Carnegie Mellon University Africa", "Kigali Innovation City"]
    },
    gallery: [],
    videos: [],
    rankings: {
      national: "",
      international: "Top Employer in Rwanda (2026) — certified",
      awards: ["Top Employer Institute Certification 2026", "Leadership in Education Innovation"],
      accreditations: ["Higher Education Council (HEC) Rwanda", "Glasgow Caledonian University (Mauritius campus accreditation)"],
      memberships: ["UN Sustainable Development Goals Network", "African Leadership Group"]
    },
    faq: [
      { question: "Is ALU accredited?", answer: "Yes, ALU Rwanda is fully accredited by the Higher Education Council (HEC) of Rwanda." },
      { question: "What programs does ALU offer?", answer: "ALU offers three bachelor's programs: Entrepreneurial Leadership (BEL), Software Engineering (BSE), and International Business & Trade (IBT)." },
      { question: "How much is tuition at ALU?", answer: "Tuition is $3,000 USD per year for BEL and BSE, and $4,000 USD per year for IBT." },
      { question: "What scholarships are available?", answer: "The Mastercard Foundation Scholars Program provides full scholarships including living costs. Tuition grants and need-based aid are also available." },
      { question: "Does ALU have accommodation?", answer: "ALU Rwanda is non-residential. Students arrange private accommodation near the campus in Kigali." },
      { question: "How do I apply to ALU?", answer: "Apply online at alueducation.com. The process includes forms, assessments, leadership evidence, and financial planning. No application fee." }
    ],
    downloads: [
      { name: "Fee Structure (2025/2026)", url: "https://alueducation.com/tuition-fees", type: "PDF" },
      { name: "Undergraduate Application Guide", url: "https://alueducation.com/apply", type: "PDF" },
      { name: "Mastercard Foundation Scholars Guide", url: "https://alueducation.com/scholarships/mastercard", type: "PDF" },
      { name: "University Prospectus", url: "https://alueducation.com/prospectus", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Carnegie Mellon University Africa", type: "Education", distance: "Adjacent campus" },
      { name: "Kimironko Market", type: "Shopping", distance: "3 km" },
      { name: "Kigali International Airport", type: "Transport", distance: "9 km" },
      { name: "Kigali Convention Centre", type: "Convention", distance: "10 km" }
    ],
    reviews: [
      { name: "James O.", rating: 5, comment: "ALU transformed my leadership skills. The hands-on curriculum and internships are unparalleled.", date: "2025-12-10" },
      { name: "Amina D.", rating: 4, comment: "Innovative approach to education with real-world impact. The Mastercard scholarship made it possible for me.", date: "2025-10-22" }
    ],
    quickFacts: {
      Established: "2017 (Rwanda campus)",
      Type: "Private (Non-profit)",
      Location: "Kigali Innovation City",
      Programs: "3 (BEL, BSE, IBT)",
      "Program Duration": "3 years",
      "Annual Tuition": "$3,000 - $4,000 USD",
      Language: "English",
      Intakes: "May, September",
      "Top Employer": "2026 (Rwanda)",
      "Scholarship": "Mastercard Foundation",
      Accommodation: "Off-campus (non-residential)",
      "Sister Campus": "Mauritius",
      "Avg Class Size": "Small (cohort-based)"
    },
    contact: {
      phone: "",
      email: "admissions@alueducation.com",
      website: "https://www.alueducation.com",
      address: "Bumbogo, Kigali Innovation City, Kigali, Rwanda"
    },
    about: {
      history: "ALU Rwanda opened in September 2017 in Kigali Innovation City as part of the African Leadership Group, a network with campuses in Mauritius and Rwanda. ALU's mission is to produce 3 million African leaders over 50 years.",
      accreditation: "Fully accredited by HEC Rwanda. ALU Mauritius accredited by Glasgow Caledonian University.",
      achievements: ["Top Employer in Rwanda (2026)", "Mastercard Foundation Scholars Program partner", "Kigali Innovation City location", "Pan-African student body", "Innovation-driven curriculum"]
    },
    images: [
      "https://modelofarchitecture.org/sites/default/files/styles/16_9_or_3_2_xlarge/public/2024-09/1804_N124.jpg",
      "https://modelofarchitecture.org/sites/default/files/2024-09/1804_N140.jpg",
      "https://modelofarchitecture.org/sites/default/files/styles/635_wide/public/2024-09/1804_N57.jpg"
    ]
  },
  {
    id: "ruhengeri-rtc",
    name: "INES-Ruhengeri (Institute of Applied Sciences)",
    location: "Musanze, Rwanda",
    city: "Musanze",
    type: "Private",
    description: "A leading private higher education institution in Musanze, Northern Province, offering a wide range of undergraduate and postgraduate programs across six faculties with a strong focus on applied sciences, research, and community engagement.",
    logo: "https://www.ines.ac.rw/static/images/ines-logo-100px.png",
    coverImage: "https://www.ines.ac.rw/media/banners/PIC_2311.jpg",
    website: "https://www.ines.ac.rw",
    founded: 2005,
    motto: "Education for Sustainable Development",
    accreditationStatus: "Accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Private",
    email: "info@ines.ac.rw",
    telephone: "+250 788 903 030",
    physicalAddress: "Musanze, Street NM 155, Northern Province, Rwanda — PO Box 155, Ruhengeri",
    googleMapsLocation: "",
    socialMedia: { facebook: "https://www.facebook.com/INESRuhengeriOfficial", twitter: "https://twitter.com/INES_Ruhengeri", instagram: "https://www.instagram.com/ines_ruhengeri/", linkedin: "https://www.linkedin.com/company/inesruhengeri", youtube: "https://www.youtube.com/channel/UC9Q5s5L_Z9SJr3rsVz8UUug" },
    overview: {
      history: "Founded in 2005, INES-Ruhengeri (Institute of Applied Sciences) is a private higher education institution located in Musanze District, Northern Province of Rwanda. Over the years, it has grown into a center of academic excellence, offering applied sciences programs that respond to national and regional development needs. The university celebrated its 20th anniversary in 2023.",
      campusDescription: "Smart campus in Musanze with modern academic buildings, well-equipped laboratories, comprehensive library, and sports facilities. Over 8,200 current students including 1,670+ international students from 21 countries."
    },
    campuses: [
      { name: "Main Campus", location: "Musanze, Northern Province", description: "Main smart campus with academic buildings, laboratories, library, and sports facilities." }
    ],
    academicInfo: {
      schools: [
        { name: "Faculty of Sciences and Information Technology", description: "Computer Science, Statistics, Land Management, Library Sciences." },
        { name: "Faculty of Economics, Social Sciences & Management", description: "Economics, Management, Microfinance, Taxation, Cooperatives, Entrepreneurship." },
        { name: "Faculty of Education", description: "Biology & Chemistry, Mathematics & Physics, Mathematics & Computer Science, French & English." },
        { name: "Faculty of Engineering and Technology", description: "Civil Engineering, Architecture, Biotechnologies, Water Engineering, Electrical Power, Renewable Energy, Crop Production." },
        { name: "Faculty of Law and Public Administration", description: "Law, Public Administration, Criminal Law." },
        { name: "Faculty of Health Sciences", description: "Pharmacy, General Nursing, Midwifery, Anaesthesia, Biomedical Laboratory Sciences." }
      ],
      departments: [
        { name: "Department of Sciences", school: "Faculty of Sciences and IT", description: "Computer Science, Statistics, Land Management programs." },
        { name: "Department of IT", school: "Faculty of Sciences and IT", description: "Computer System Technology, Computer Applications." },
        { name: "Department of Economics and Management", school: "Faculty of Economics, Social Sciences & Management", description: "Economics, Management, Microfinance, Taxation." },
        { name: "Department of Education Sciences", school: "Faculty of Education", description: "Teacher training programs." },
        { name: "Department of Engineering", school: "Faculty of Engineering and Technology", description: "Civil Engineering, Architecture, Water Engineering, Electrical Power." },
        { name: "Department of Law", school: "Faculty of Law and Public Administration", description: "Law and public administration programs." },
        { name: "Department of Health Sciences", school: "Faculty of Health Sciences", description: "Pharmacy, Nursing, Midwifery, Anaesthesia, Biomedical Lab Sciences." }
      ],
      undergraduatePrograms: [
        { name: "Computer Science", duration: "4 years", description: "Bachelor in Computer Science." },
        { name: "Statistics Applied to Economy", duration: "3 years", description: "Bachelor in Statistics." },
        { name: "Computer System Technology", duration: "3 years", description: "Bachelor in Computer System Technology." },
        { name: "Computer Applications", duration: "3 years", description: "Bachelor in Computer Applications." },
        { name: "Information Sciences and Library Management", duration: "3 years", description: "Bachelor in Library and Information Sciences." },
        { name: "Land Management and Valuation", duration: "3 years", description: "Bachelor in Land Management." },
        { name: "Applied Economics", duration: "4 years", description: "Bachelor in Applied Economics." },
        { name: "Enterprises Management", duration: "4 years", description: "Bachelor in Enterprises Management." },
        { name: "Microfinance", duration: "3 years", description: "Bachelor in Microfinance." },
        { name: "Taxation", duration: "3 years", description: "Bachelor in Taxation." },
        { name: "Cooperatives Management", duration: "3 years", description: "Bachelor in Cooperatives Management." },
        { name: "Entrepreneurship and SME Management", duration: "3 years", description: "Bachelor in Entrepreneurship." },
        { name: "French and English", duration: "3 years", description: "Bachelor in French and English." },
        { name: "Education in Biology and Chemistry", duration: "4 years", description: "Bachelor of Education in Biology and Chemistry." },
        { name: "Education in Mathematics and Physics", duration: "4 years", description: "Bachelor of Education in Mathematics and Physics." },
        { name: "Education in Mathematics and Computer Science", duration: "4 years", description: "Bachelor of Education in Mathematics and Computer Science." },
        { name: "Civil Engineering", duration: "5 years", description: "Bachelor in Civil Engineering." },
        { name: "Biotechnologies", duration: "4 years", description: "Bachelor in Biotechnologies." },
        { name: "Land Survey", duration: "3 years", description: "Bachelor in Land Survey." },
        { name: "Architecture", duration: "5 years", description: "Bachelor in Architecture." },
        { name: "Water Engineering", duration: "4 years", description: "Bachelor in Water Engineering." },
        { name: "Electrical Power Engineering", duration: "5 years", description: "Bachelor of Science in Electrical Power Engineering." },
        { name: "Renewable Energy Engineering", duration: "4 years", description: "Bachelor of Science in Renewable Energy Engineering." },
        { name: "Crop Production", duration: "4 years", description: "Bachelor of Science in Crop Production." },
        { name: "Law", duration: "4 years", description: "Bachelor in Law." },
        { name: "Public Administration and Good Governance", duration: "3 years", description: "Bachelor in Public Administration." },
        { name: "Pharmacy", duration: "5 years", description: "Bachelor of Science in Pharmacy." },
        { name: "Anaesthesia", duration: "4 years", description: "Bachelor of Science in Anaesthesia." },
        { name: "Midwifery", duration: "4 years", description: "Bachelor of Science in Midwifery." },
        { name: "General Nursing", duration: "4 years", description: "Bachelor of Science in General Nursing." },
        { name: "Biomedical Laboratory Sciences", duration: "4 years", description: "Bachelor in Biomedical Laboratory Sciences." }
      ],
      postgraduatePrograms: [
        { name: "MSc in Software Engineering", duration: "2 years", description: "Master of Science in Software Engineering." },
        { name: "MSc in Valuation and Property Management", duration: "2 years", description: "Master in Valuation." },
        { name: "MSc in Land Administration Management", duration: "2 years", description: "Master in Land Administration." },
        { name: "MSc in Food Science and Technology", duration: "2 years", description: "Master in Food Science and Technology." },
        { name: "MSc in Geo-Informatics", duration: "2 years", description: "Master in Geo-Informatics." },
        { name: "MSc in Construction Technology and Management", duration: "2 years", description: "Master in Construction Technology and Management." },
        { name: "MSc in Geotechnical Engineering", duration: "2 years", description: "Master in Geotechnical Engineering." },
        { name: "MSc in Biomedical Laboratory Sciences", duration: "2 years", description: "Master in Biomedical Laboratory Sciences." },
        { name: "Master of Applied Criminal Law", duration: "2 years", description: "Master in Applied Criminal Law." }
      ],
      phdPrograms: [],
      diplomaPrograms: [
        { name: "Domestic Electricity", duration: "2 years", description: "Advanced Diploma in Domestic Electricity." },
        { name: "Masonry", duration: "2 years", description: "Advanced Diploma in Masonry." },
        { name: "Welding", duration: "2 years", description: "Advanced Diploma in Welding." },
        { name: "Domestic Plumbing", duration: "2 years", description: "Advanced Diploma in Domestic Plumbing." },
        { name: "Surveying", duration: "2 years", description: "Advanced Diploma in Surveying." },
        { name: "Advanced Diploma in Nursing", duration: "3 years", description: "Advanced Diploma in General Nursing." },
        { name: "Advanced Diploma in Midwifery", duration: "3 years", description: "Advanced Diploma in Midwifery." }
      ],
      certificatePrograms: [],
      modeOfStudy: ["Full-time", "Part-time", "Evening"]
    },
    faculties: [
      { name: "Sciences and Information Technology", description: "Computer Science, Statistics, Land Management, Library Sciences", icon: "cpu" },
      { name: "Economics, Social Sciences & Management", description: "Economics, Management, Microfinance, Taxation", icon: "briefcase" },
      { name: "Education", description: "Biology & Chemistry, Mathematics & Physics, French & English", icon: "graduation-cap" },
      { name: "Engineering and Technology", description: "Civil Engineering, Architecture, Water, Electrical Power", icon: "building2" },
      { name: "Law and Public Administration", description: "Law, Public Administration, Criminal Law", icon: "scale" },
      { name: "Health Sciences", description: "Pharmacy, Nursing, Midwifery, Anaesthesia, Biomedical Lab", icon: "stethoscope" }
    ],
    programs: [
      { name: "Computer Science", level: "Bachelor", duration: "4 years", faculty: "Sciences and Information Technology" },
      { name: "Statistics Applied to Economy", level: "Bachelor", duration: "3 years", faculty: "Sciences and Information Technology" },
      { name: "Computer System Technology", level: "Bachelor", duration: "3 years", faculty: "Sciences and Information Technology" },
      { name: "Computer Applications", level: "Bachelor", duration: "3 years", faculty: "Sciences and Information Technology" },
      { name: "Info Sciences and Library Management", level: "Bachelor", duration: "3 years", faculty: "Sciences and Information Technology" },
      { name: "Land Management and Valuation", level: "Bachelor", duration: "3 years", faculty: "Sciences and Information Technology" },
      { name: "Applied Economics", level: "Bachelor", duration: "4 years", faculty: "Economics, Social Sciences & Management" },
      { name: "Enterprises Management", level: "Bachelor", duration: "4 years", faculty: "Economics, Social Sciences & Management" },
      { name: "Microfinance", level: "Bachelor", duration: "3 years", faculty: "Economics, Social Sciences & Management" },
      { name: "Taxation", level: "Bachelor", duration: "3 years", faculty: "Economics, Social Sciences & Management" },
      { name: "Cooperatives Management", level: "Bachelor", duration: "3 years", faculty: "Economics, Social Sciences & Management" },
      { name: "Entrepreneurship and SME Management", level: "Bachelor", duration: "3 years", faculty: "Economics, Social Sciences & Management" },
      { name: "French and English", level: "Bachelor", duration: "3 years", faculty: "Education" },
      { name: "Education in Biology and Chemistry", level: "Bachelor", duration: "4 years", faculty: "Education" },
      { name: "Education in Mathematics and Physics", level: "Bachelor", duration: "4 years", faculty: "Education" },
      { name: "Education in Mathematics and Comp Sci", level: "Bachelor", duration: "4 years", faculty: "Education" },
      { name: "Civil Engineering", level: "Bachelor", duration: "5 years", faculty: "Engineering and Technology" },
      { name: "Biotechnologies", level: "Bachelor", duration: "4 years", faculty: "Engineering and Technology" },
      { name: "Land Survey", level: "Bachelor", duration: "3 years", faculty: "Engineering and Technology" },
      { name: "Architecture", level: "Bachelor", duration: "5 years", faculty: "Engineering and Technology" },
      { name: "Water Engineering", level: "Bachelor", duration: "4 years", faculty: "Engineering and Technology" },
      { name: "Electrical Power Engineering", level: "Bachelor", duration: "5 years", faculty: "Engineering and Technology" },
      { name: "Renewable Energy Engineering", level: "Bachelor", duration: "4 years", faculty: "Engineering and Technology" },
      { name: "Crop Production", level: "Bachelor", duration: "4 years", faculty: "Engineering and Technology" },
      { name: "Law", level: "Bachelor", duration: "4 years", faculty: "Law and Public Administration" },
      { name: "Public Administration and Good Governance", level: "Bachelor", duration: "3 years", faculty: "Law and Public Administration" },
      { name: "Pharmacy", level: "Bachelor", duration: "5 years", faculty: "Health Sciences" },
      { name: "Anaesthesia", level: "Bachelor", duration: "4 years", faculty: "Health Sciences" },
      { name: "Midwifery", level: "Bachelor", duration: "4 years", faculty: "Health Sciences" },
      { name: "General Nursing", level: "Bachelor", duration: "4 years", faculty: "Health Sciences" },
      { name: "Biomedical Laboratory Sciences", level: "Bachelor", duration: "4 years", faculty: "Health Sciences" },
      { name: "MSc Software Engineering", level: "Master", duration: "2 years", faculty: "Sciences and Information Technology" },
      { name: "MSc Valuation and Property Management", level: "Master", duration: "2 years", faculty: "Sciences and Information Technology" },
      { name: "MSc Land Administration Management", level: "Master", duration: "2 years", faculty: "Sciences and Information Technology" },
      { name: "MSc Food Science and Technology", level: "Master", duration: "2 years", faculty: "Engineering and Technology" },
      { name: "MSc Geo-Informatics", level: "Master", duration: "2 years", faculty: "Engineering and Technology" },
      { name: "MSc Construction Technology and Management", level: "Master", duration: "2 years", faculty: "Engineering and Technology" },
      { name: "MSc Geotechnical Engineering", level: "Master", duration: "2 years", faculty: "Engineering and Technology" },
      { name: "MSc Biomedical Laboratory Sciences", level: "Master", duration: "2 years", faculty: "Health Sciences" },
      { name: "Master of Applied Criminal Law", level: "Master", duration: "2 years", faculty: "Law and Public Administration" },
      { name: "Advanced Diploma in Nursing", level: "Diploma", duration: "3 years", faculty: "Health Sciences" },
      { name: "Advanced Diploma in Midwifery", level: "Diploma", duration: "3 years", faculty: "Health Sciences" },
      { name: "Domestic Electricity", level: "Diploma", duration: "2 years", faculty: "Engineering and Technology" },
      { name: "Masonry", level: "Diploma", duration: "2 years", faculty: "Engineering and Technology" },
      { name: "Welding", level: "Diploma", duration: "2 years", faculty: "Engineering and Technology" },
      { name: "Domestic Plumbing", level: "Diploma", duration: "2 years", faculty: "Engineering and Technology" },
      { name: "Surveying", level: "Diploma", duration: "2 years", faculty: "Engineering and Technology" }
    ],
    admission: {
      requirements: ["A-Level certificate with at least two principal passes", "English proficiency", "Program-specific requirements", "Equivalent international qualifications recognized by HEC"],
      entryQualifications: ["A-Level certificate with relevant subjects", "Foundation programs", "Equivalent international qualifications"],
      requiredDocuments: ["Completed application form", "Academic certificates and transcripts", "National ID or passport", "Passport photos", "Application fee receipt"],
      internationalRequirements: ["Valid passport", "Student visa", "HEC equivalence", "Financial proof"],
      applicationDeadlines: "Rolling admissions. Applications open before each intake.",
      intakePeriods: ["January", "September"],
      howToApply: "Apply online at https://digitalcampus.ines.ac.rw/admission/ or visit the admissions office in Musanze."
    },
    scholarships: [
      { name: "INES Merit Scholarship", type: "University", description: "For academic excellence" },
      { name: "Regional Scholarships", type: "NGO", description: "Sponsored by local organizations" }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "1670+ international students from 21 countries. Dedicated support for international students.",
      equivalenceGuidance: "HEC equivalence required.",
      visaInfo: "Student visa required.",
      residencePermit: "Required for extended stays.",
      airportArrival: "Airport pickup can be arranged.",
      orientationWeek: true,
      languageSupport: "English instruction. Language center available.",
      exchangePrograms: []
    },
    accommodation: {
      hostels: false,
      nearbyApartments: "Available in Musanze, RWF 80,000-250,000/month",
      privateHostels: "Limited options",
      estimatedCost: "RWF 60,000 - 150,000/month"
    },
    studentLife: {
      clubs: ["Debate Club", "Drama Club", "Cultural Group", "Business Club"],
      sports: ["Football", "Basketball", "Volleyball"],
      events: ["Intercultural Day", "Community Service", "Career Days", "Research Seminars"],
      organizations: ["Student Council", "Alumni Association"]
    },
    facilities: {
      libraries: ["INES Library", "E-Library"],
      labs: ["Computer Lab", "Science Lab", "Biotechnology Lab", "Health Sciences Lab"],
      sports: ["Sports Field"],
      other: ["Wi-Fi", "Auditorium", "Cafeteria", "Student Lounge", "Conference Hall"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "Faculty assists with job placements and career guidance.",
      alumniNetwork: "13,000+ alumni worldwide."
    },
    research: {
      centers: ["Research Clusters"],
      innovationLabs: [],
      publications: ["INES Scientific Journal", "INES Research Journal"],
      conferences: ["Annual Research Seminars"],
      partnerships: ["University of KwaZulu-Natal", "Local NGOs", "Community organizations"]
    },
    gallery: [
      { image: "https://www.ines.ac.rw/media/banners/PIC_2311.jpg", caption: "INES Campus" }
    ],
    videos: [],
    rankings: {
      national: "Leading private university in Northern Rwanda",
      international: "",
      awards: [],
      accreditations: ["Higher Education Council (HEC) of Rwanda"],
      memberships: []
    },
    faq: [
      { question: "Where is INES located?", answer: "INES-Ruhengeri is located in Musanze District, Northern Province of Rwanda — Street NM 155, PO Box 155 Ruhengeri." },
      { question: "How many students does INES have?", answer: "INES has over 8,200 current students including more than 1,670 international students from 21 countries." },
      { question: "What programs does INES offer?", answer: "INES offers programs across six faculties: Sciences & IT, Economics & Management, Education, Engineering & Technology, Law & Public Administration, and Health Sciences." },
      { question: "How do I apply to INES?", answer: "Apply online at https://digitalcampus.ines.ac.rw/admission/ or visit the admissions office in Musanze." }
    ],
    downloads: [
      { name: "Fee Structure (2025/2026)", url: "https://www.ines.ac.rw/tuition-fees", type: "PDF" },
      { name: "Online Application", url: "https://digitalcampus.ines.ac.rw/admission/", type: "Link" },
      { name: "International Students Guide", url: "https://www.ines.ac.rw/international-students", type: "Link" }
    ],
    nearbyPlaces: [
      { name: "Musanze Town Center", type: "Shopping", distance: "10 min walk" },
      { name: "Musanze Hospital", type: "Healthcare", distance: "10 min drive" },
      { name: "Volcanoes National Park", type: "Tourism", distance: "25 min drive" }
    ],
    reviews: [],
    quickFacts: {
      Established: "2005",
      Type: "Private",
      Campuses: "1 (Musanze)",
      Students: "8,200+",
      "International Students": "1,670+",
      "Teaching Staff": "200+",
      Faculties: "6",
      Programs: "40+",
      Intakes: "January, September",
      Language: "English",
      Accommodation: "Not on campus (private)",
      Scholarships: "Available"
    },
    contact: {
      phone: "+250 788 903 030",
      email: "info@ines.ac.rw",
      website: "https://www.ines.ac.rw",
      address: "Musanze, Street NM 155, Northern Province, Rwanda — PO Box 155, Ruhengeri"
    },
    about: {
      history: "Founded in 2005, INES-Ruhengeri provides higher education access to the northern region of Rwanda with a focus on applied sciences, research, and community engagement.",
      accreditation: "Accredited by the Higher Education Council (HEC) of Rwanda",
      achievements: ["8,200+ current students", "1,670+ international students from 21 countries", "13,000+ total graduates", "6 faculties with 40+ programs", "20+ years of academic excellence"]
    },
    images: [
      "https://www.ines.ac.rw/media/banners/PIC_2311.jpg",
      "https://www.ines.ac.rw/media/banners/2_45UP6jI.jpg",
      "https://www.ines.ac.rw/static/images/intl-bg.jpg"
    ]
  },
  {
    id: "mount-kenya",
    name: "Mount Kigali University (MKUR)",
    location: "Kigali, Rwanda",
    city: "Kigali",
    type: "Private",
    description: "A fully chartered private university in Kigali, formerly Mount Kenya University Rwanda campus. Features AI-powered learning, a 4-star training hotel, 30B+ RWF campus investment, and students from 34+ nationalities.",
    logo: "https://mkur.ac.rw/wp-content/uploads/2023/01/Mount-Kigali-Logo.png",
    coverImage: "https://mkur.ac.rw/wp-content/uploads/2022/12/MKU-PAGE-BACKGROUND.jpg",
    website: "https://mkur.ac.rw",
    founded: 2010,
    motto: "Empowering Generations through Quality Education",
    accreditationStatus: "Fully accredited by the Higher Education Council (HEC) of Rwanda — granted University Charter in 2023",
    ownership: "Private (Mount Kigali University Board — formerly MKU network)",
    email: "admissions@mkur.ac.rw",
    telephone: "+250 785 709 824",
    physicalAddress: "KN 76 Street (formerly Avenue-De-La-Paix), Kagarama, Kigali, Rwanda — P.O. Box 5826 Kigali",
    googleMapsLocation: "",
    socialMedia: {
      facebook: "https://www.facebook.com/MountKigaliUniversity",
      twitter: "https://twitter.com/mountkenyaunirw",
      instagram: "https://www.instagram.com/mountkenyauniversityrwanda",
      linkedin: "https://www.linkedin.com/in/mount-kenya-university",
      youtube: "https://www.youtube.com/channel/UCMhPi8-IJTcsiL7To76zNVA"
    },
    overview: {
      history: "Founded in 2010 as a campus of Mount Kenya University, Mount Kigali University received its own Charter from the Higher Education Council of Rwanda in 2023, becoming an independent chartered university. The Board of Directors has invested over 30 billion RWF in state-of-the-art infrastructure including modern laboratories, AI-powered classrooms, a 4-star training hotel, and student residences.",
      campusDescription: "Purpose-built campus in Kagarama, Kigali featuring AI-powered classrooms with humanoid robots, medical simulation labs, a 4-star training hotel (Kigali Paramount Hotel), Olympic-size swimming pool, digital library, modern student residences, and recreational facilities."
    },
    campuses: [
      { name: "Kagarama Main Campus", location: "Kagarama, Kigali", description: "Main campus with AI-powered classrooms, humanoid robots, digital library, medical simulation labs, and student residences." },
      { name: "Kigali Paramount Hotel", location: "Kagarama, Kigali", description: "4-star operational training hotel providing real-world hospitality experience for students." }
    ],
    academicInfo: {
      schools: [
        { name: "School of Business & Economics", description: "Accounting, Finance, Management, Marketing, Entrepreneurship." },
        { name: "School of ICT & Computing", description: "Computer Science, IT, Software Development, Data Science, AI." },
        { name: "School of Education", description: "Teacher Training, Educational Administration, Early Childhood Education." },
        { name: "School of Health Sciences", description: "Public Health, Nursing, Health Administration, Medical Laboratory Sciences." },
        { name: "School of Law", description: "LLB, Legal Studies, International Law." },
        { name: "School of Hospitality & Tourism", description: "Hotel Management, Tourism, Culinary Arts — powered by Kigali Paramount Hotel." }
      ],
      departments: [
        { name: "Department of Business", school: "School of Business & Economics", description: "Business and management programs." },
        { name: "Department of Computer Science", school: "School of ICT & Computing", description: "Computer science and AI programs." },
        { name: "Department of Education", school: "School of Education", description: "Teacher training and education programs." },
        { name: "Department of Public Health", school: "School of Health Sciences", description: "Health sciences and nursing." },
        { name: "Department of Law", school: "School of Law", description: "Legal education." },
        { name: "Department of Hospitality", school: "School of Hospitality & Tourism", description: "Hospitality and tourism management." }
      ],
      undergraduatePrograms: [
        { name: "BBA in Accounting", duration: "3 years", description: "Bachelor of Business Administration in Accounting." },
        { name: "BBA in Finance", duration: "3 years", description: "Bachelor of Business Administration in Finance." },
        { name: "BBA in Marketing", duration: "3 years", description: "Bachelor of Business Administration in Marketing." },
        { name: "BBA in Management", duration: "3 years", description: "Bachelor of Business Administration in Management." },
        { name: "BSc Computer Science", duration: "4 years", description: "Bachelor of Science in Computer Science." },
        { name: "BSc Information Technology", duration: "4 years", description: "Bachelor of Science in Information Technology." },
        { name: "BSc Data Science", duration: "4 years", description: "Bachelor of Science in Data Science." },
        { name: "BSc Public Health", duration: "4 years", description: "Bachelor of Science in Public Health." },
        { name: "BSc Nursing", duration: "4 years", description: "Bachelor of Science in Nursing." },
        { name: "LLB", duration: "4 years", description: "Bachelor of Laws." },
        { name: "BSc Education", duration: "3 years", description: "Bachelor of Science in Education." },
        { name: "BSc Hospitality Management", duration: "3 years", description: "Bachelor in Hospitality and Tourism Management." }
      ],
      postgraduatePrograms: [
        { name: "MBA", duration: "2 years", description: "Master of Business Administration." },
        { name: "MSc Computer Science", duration: "2 years", description: "Master of Science in Computer Science." },
        { name: "MSc Public Health", duration: "2 years", description: "Master of Science in Public Health." },
        { name: "MA Education", duration: "2 years", description: "Master of Arts in Education." },
        { name: "LLM", duration: "2 years", description: "Master of Laws." }
      ],
      phdPrograms: [],
      diplomaPrograms: [
        { name: "Diploma in Business Management", duration: "2 years", description: "Diploma in Business and Management." },
        { name: "Diploma in IT", duration: "2 years", description: "Diploma in Information Technology." },
        { name: "Diploma in Hospitality", duration: "2 years", description: "Diploma in Hospitality Management." }
      ],
      certificatePrograms: [
        { name: "Certificate in ICT", duration: "1 year", description: "Foundation certificate in computing." },
        { name: "Certificate in Business", duration: "1 year", description: "Foundation certificate in business studies." }
      ],
      modeOfStudy: ["Full-time", "Part-time", "Evening", "Weekend"]
    },
    faculties: [
      { name: "School of Business & Economics", description: "BBA programs, Accounting, Finance, Marketing, Management", icon: "briefcase" },
      { name: "School of ICT & Computing", description: "Computer Science, IT, Data Science, AI — with humanoid robot lab", icon: "cpu" },
      { name: "School of Education", description: "Teacher Training, Educational Administration", icon: "graduation-cap" },
      { name: "School of Health Sciences", description: "Public Health, Nursing, Medical Lab Sciences", icon: "heart-pulse" },
      { name: "School of Law", description: "LLB, Legal Studies", icon: "scale" },
      { name: "School of Hospitality & Tourism", description: "Hospitality, Tourism, Culinary Arts — Kigali Paramount Hotel", icon: "building" }
    ],
    programs: [
      { name: "BBA Accounting", level: "Bachelor", duration: "3 years", faculty: "School of Business & Economics" },
      { name: "BBA Finance", level: "Bachelor", duration: "3 years", faculty: "School of Business & Economics" },
      { name: "BBA Marketing", level: "Bachelor", duration: "3 years", faculty: "School of Business & Economics" },
      { name: "BBA Management", level: "Bachelor", duration: "3 years", faculty: "School of Business & Economics" },
      { name: "BSc Computer Science", level: "Bachelor", duration: "4 years", faculty: "School of ICT & Computing" },
      { name: "BSc Information Technology", level: "Bachelor", duration: "4 years", faculty: "School of ICT & Computing" },
      { name: "BSc Data Science", level: "Bachelor", duration: "4 years", faculty: "School of ICT & Computing" },
      { name: "BSc Public Health", level: "Bachelor", duration: "4 years", faculty: "School of Health Sciences" },
      { name: "BSc Nursing", level: "Bachelor", duration: "4 years", faculty: "School of Health Sciences" },
      { name: "LLB", level: "Bachelor", duration: "4 years", faculty: "School of Law" },
      { name: "BSc Education", level: "Bachelor", duration: "3 years", faculty: "School of Education" },
      { name: "BSc Hospitality Management", level: "Bachelor", duration: "3 years", faculty: "School of Hospitality & Tourism" },
      { name: "MBA", level: "Master", duration: "2 years", faculty: "School of Business & Economics" },
      { name: "MSc Computer Science", level: "Master", duration: "2 years", faculty: "School of ICT & Computing" },
      { name: "MSc Public Health", level: "Master", duration: "2 years", faculty: "School of Health Sciences" },
      { name: "MA Education", level: "Master", duration: "2 years", faculty: "School of Education" },
      { name: "LLM", level: "Master", duration: "2 years", faculty: "School of Law" },
      { name: "Diploma in Business", level: "Diploma", duration: "2 years", faculty: "School of Business & Economics" },
      { name: "Diploma in IT", level: "Diploma", duration: "2 years", faculty: "School of ICT & Computing" },
      { name: "Diploma in Hospitality", level: "Diploma", duration: "2 years", faculty: "School of Hospitality & Tourism" }
    ],
    tuition: {
      localMin: "1,000,000",
      localMax: "2,500,000",
      internationalMin: "2,500",
      internationalMax: "5,000",
      currency: "RWF / USD"
    },
    admission: {
      requirements: [
        "Rwandan Advanced Certificate of Secondary Education (A-Level) with at least two principal passes",
        "Or equivalent international secondary school qualifications recognized by HEC Rwanda",
        "Minimum C+ in relevant subjects for degree programs",
        "English language proficiency for non-native speakers"
      ],
      entryQualifications: [
        "A-Level certificate with relevant subject combinations",
        "Foundation program completion",
        "Equivalent international qualifications"
      ],
      requiredDocuments: [
        "Completed online application form via admission.mkur.ac.rw",
        "Certified copies of academic certificates and transcripts",
        "Copy of national ID or passport",
        "Recent passport-size photographs",
        "Proof of payment of application fee"
      ],
      internationalRequirements: [
        "Valid passport and student visa",
        "Academic transcripts evaluated by HEC Rwanda",
        "Proof of financial support",
        "Health insurance coverage"
      ],
      applicationDeadlines: "Rolling admissions — applications open year-round. Apply online at admission.mkur.ac.rw.",
      intakePeriods: ["January", "May", "September"],
      howToApply: "Apply online through the MKUR admissions portal at admission.mkur.ac.rw. Download prospectus from mkur.ac.rw.",
      applicationFees: "RWF 10,000 for local applicants, USD 50 for international applicants"
    },
    tuitionDetails: [
      { program: "Undergraduate Programs", level: "Bachelor", localAmount: "1,000,000 - 2,500,000 RWF/year", internationalAmount: "2,500 - 5,000 USD/year" },
      { program: "Postgraduate Programs", level: "Master", localAmount: "1,500,000 - 3,000,000 RWF/year", internationalAmount: "3,000 - 5,500 USD/year" },
      { program: "Diploma Programs", level: "Diploma", localAmount: "600,000 - 1,200,000 RWF/year", internationalAmount: "1,500 - 3,000 USD/year" }
    ],
    scholarships: [
      { name: "MKUR Merit Scholarship", type: "University", description: "For top academic performers with excellent grades.", amount: "Up to 50% tuition reduction", eligibility: "Based on academic merit" },
      { name: "Need-Based Bursary", type: "University", description: "Financial assistance for economically disadvantaged students.", amount: "Partial tuition coverage", eligibility: "Based on financial need" },
      { name: "International Student Scholarship", type: "University", description: "For outstanding international students from East Africa and beyond.", amount: "Partial tuition reduction", eligibility: "International students with strong academic records" }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "International students from 34+ nationalities are welcome. Contact admissions@mkur.ac.rw for guidance.",
      equivalenceGuidance: "International qualifications must be evaluated by the Higher Education Council (HEC) of Rwanda.",
      visaInfo: "Student visa assistance provided. Admission letter required for visa application through Rwanda Immigration.",
      residencePermit: "Assistance with residence permit applications provided to enrolled international students.",
      airportArrival: "Airport pickup available on request from Kigali International Airport (approximately 30 minutes from campus).",
      orientationWeek: true,
      languageSupport: "English language support available. Preparatory language courses offered for non-native speakers.",
      exchangePrograms: ["International partner university exchanges", "Regional academic networks", "East African community programs"]
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Abundant options near Kagarama campus, RWF 150,000-400,000/month",
      privateHostels: "Modern student residences available on campus",
      estimatedCost: "RWF 150,000 - 350,000/month",
      onCampusHostels: "On-campus student residences available with modern amenities",
      accommodationOffice: "Student affairs office handles accommodation bookings",
      applicationProcess: "Apply for on-campus accommodation during admission process or contact student affairs"
    },
    studentLife: {
      clubs: ["Robotics Club", "Debate Club", "Drama Club", "Entrepreneurship Club", "Innovation Club", "Photography Club"],
      sports: ["Football", "Basketball", "Volleyball", "Swimming", "Athletics"],
      events: ["Cultural Events", "Career Fairs", "Innovation Challenges", "Sports Tournaments", "Hospitality Expos"],
      organizations: ["Student Council", "MKUR Alumni Association", "Women in Tech", "International Students Association"]
    },
    facilities: {
      libraries: ["MKUR Digital Library", "E-Learning Resource Center"],
      labs: ["AI & Robotics Lab (Humanoid Robots)", "Medical Simulation Labs", "Computer Labs", "Culinary Kitchens", "Science Laboratories"],
      sports: ["Olympic-Size Swimming Pool", "Sports Ground", "Basketball Court", "Fitness Center"],
      other: ["4-Star Kigali Paramount Hotel (Training Facility)", "Wi-Fi Campus", "Auditorium", "Cafeteria", "Student Lounge", "Prayer Rooms", "Parking"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "Career services office provides job placement support, internship coordination at Kigali Paramount Hotel and industry partners.",
      alumniNetwork: "Growing alumni network across East Africa with strong industry connections in hospitality, healthcare, IT, and business."
    },
    research: {
      centers: ["Institute of Capacity Building (ICB)", "Research and Innovation Center"],
      innovationLabs: ["AI & Robotics Innovation Lab", "Digital Innovation Hub"],
      publications: ["MKUR Research Journal", "Institute of Capacity Building Publications"],
      conferences: ["Annual Research Conference", "Hospitality Industry Forums", "Innovation Summits"],
      partnerships: ["Mount Kenya University (Kenya)", "University of Florida", "Industry partners in hospitality and healthcare", "Rwanda Development Board"]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200", caption: "Mount Kigali University Campus" },
      { image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200", caption: "MKUR Academic Building" },
      { image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200", caption: "MKUR Digital Library" }
    ],
    videos: [],
    rankings: {
      national: "Leading private chartered university in Rwanda — HEC accredited since 2023",
      international: "Recognized for innovation in AI-powered education and hospitality training in East Africa",
      awards: ["University Charter 2023", "30B+ RWF Campus Investment", "First Humanoid Robot Integration in Rwanda"],
      accreditations: ["Higher Education Council (HEC) of Rwanda", "University Charter (2023)", "Rwanda Qualifications Framework"],
      memberships: ["Association of African Universities (AAU)", "East African Business Council"]
    },
    faq: [
      { question: "Is Mount Kigali University accredited?", answer: "Yes, MKUR is fully accredited by the Higher Education Council (HEC) of Rwanda and received its University Charter in 2023." },
      { question: "What programs does MKUR offer?", answer: "MKUR offers 30+ academic programs across 6 schools: Business, ICT, Education, Health Sciences, Law, and Hospitality & Tourism." },
      { question: "Does MKUR have on-campus accommodation?", answer: "Yes, modern student residences are available on campus with various amenities including Wi-Fi and recreational facilities." },
      { question: "What is the Kigali Paramount Hotel?", answer: "Kigali Paramount Hotel is a 4-star operational training hotel on campus where hospitality students gain real-world experience." },
      { question: "How do I apply?", answer: "Apply online at admission.mkur.ac.rw. Applications are accepted for January, May, and September intakes." }
    ],
    downloads: [
      { name: "Fee Structure (2025/2026)", url: "https://mkur.ac.rw/admissions/fee-structure", type: "PDF" },
      { name: "Application Form", url: "https://mkur.ac.rw/apply", type: "PDF" },
      { name: "University Prospectus", url: "https://mkur.ac.rw/prospectus", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Kigali City Center", type: "Shopping", distance: "15 min drive" },
      { name: "Kigali International Airport", type: "Transport", distance: "30 min drive" },
      { name: "Kigali Heights Mall", type: "Shopping", distance: "10 min drive" },
      { name: "Kigali Convention Centre", type: "Business", distance: "15 min drive" }
    ],
    reviews: [
      { name: "Jeanne d'Arc", rating: 5, comment: "Modern campus with excellent facilities. The AI lab and hotel training are unique advantages.", date: "2025-11-15" }
    ],
    quickFacts: {
      Established: "2010 (Chartered 2023)",
      Type: "Private",
      Campuses: "1 (Kagarama, Kigali) + Training Hotel",
      Students: "3,000+",
      "Teaching Staff": "200+",
      Faculties: "6 Schools",
      Programs: "30+",
      "Student Nationalities": "34+",
      "Campus Investment": "30B+ RWF",
      Intakes: "January, May, September",
      Language: "English",
      Accommodation: "Available on campus",
      Scholarships: "Merit, Need-based, International"
    },
    contact: {
      phone: "+250 785 709 824",
      email: "admissions@mkur.ac.rw / info@mku.ac.rw",
      website: "https://mkur.ac.rw",
      address: "KN 76 Street, Kagarama, Kigali, Rwanda — P.O. Box 5826 Kigali"
    },
    about: {
      history: "Founded in 2010 as a campus of Mount Kenya University, Mount Kigali University received its own Charter from HEC Rwanda in 2023. The university has since invested over 30 billion RWF in state-of-the-art infrastructure.",
      accreditation: "Fully accredited by the Higher Education Council (HEC) of Rwanda — University Charter granted 2023",
      achievements: ["Obtained independent University Charter (2023)", "30B+ RWF campus investment", "First university in Rwanda with humanoid robot teaching assistants", "4-star training hotel on campus", "Students from 34+ nationalities"]
    },
    images: [
      "https://mkur.ac.rw/wp-content/uploads/2023/04/MOUNT-KENYA-UNIVERSITY-RWANDA-AWARDED-CHARTER-1.png",
      "https://mkur.ac.rw/wp-content/uploads/2025/10/Prof.-Kabaji-poses-for-a-photo-with-Mount-Kigali-University-Council.png"
    ]
  },
  {
    id: "uok",
    name: "University of Kigali (UoK)",
    location: "Kigali, Rwanda",
    city: "Kigali",
    type: "Private",
    description: "A leading private chartered university in Rwanda with 9,000+ students across three campuses — Kacyiru, Remera, and Musanze. Known for academic excellence in business, IT, law, and education.",
    logo: "https://uok.ac.rw/wp-content/uploads/2024/05/NEW-UoK-Logo-e1717660118908.png",
    coverImage: "https://uok.ac.rw/wp-content/uploads/2026/05/Web-banner-1-01-scaled-1.jpg",
    website: "https://uok.ac.rw",
    founded: 2013,
    motto: "Labour for the Future",
    accreditationStatus: "Fully accredited chartered university by the Government of the Republic of Rwanda — recognized since 2013",
    ownership: "Private",
    email: "info@uok.ac.rw",
    telephone: "+250 788 303 386",
    physicalAddress: "Kacyiru, Gasabo District, Kigali, Rwanda — P.O. Box 2611 Kigali",
    googleMapsLocation: "",
    socialMedia: {
      facebook: "https://www.facebook.com/UniversityOfKigali",
      twitter: "https://twitter.com/univ_of_kigali",
      instagram: "https://www.instagram.com/univ_of_kigali/",
      linkedin: "https://www.linkedin.com/school/university-of-kigali/",
      youtube: "https://www.youtube.com/@universityofkigali-uok7543"
    },
    overview: {
      history: "The University of Kigali started its operations in October 2013 upon receiving a definitive license to operate as a private university. It has since grown to become one of Rwanda's premier private higher education institutions with 9,000+ students across three campuses and 35+ nationalities represented.",
      campusDescription: "Three campuses: Kacyiru Main Campus (Gasabo District, Kigali) housing all 6 schools, Remera Campus with accommodation facilities, and Musanze Campus in the Northern Province providing a natural learning setting."
    },
    campuses: [
      { name: "Kacyiru Main Campus", location: "Kacyiru, Gasabo District, Kigali", description: "Main campus housing all 6 schools with modern classrooms, library, computer labs, and administrative offices." },
      { name: "Remera Campus", location: "Remera, Kigali", description: "Satellite campus with student housing and dining facilities." },
      { name: "Musanze Campus", location: "Musanze, Northern Province", description: "Campus in the Northern Province offering select programs in a natural setting." }
    ],
    academicInfo: {
      schools: [
        { name: "School of Business Management and Economics", description: "Accounting, Finance, Marketing, Economics, Procurement, Public Administration." },
        { name: "School of Computing and Information Technology", description: "Computer Science, IT, Business Information Technology." },
        { name: "School of Education", description: "Early Childhood Development Education, Educational Management." },
        { name: "School of Law", description: "LLB with Honours, Legal Studies." },
        { name: "Graduate School", description: "MBA, MSc Programs, MA Programs, PGDE." },
        { name: "School of Professional and Executive Programmes", description: "CPA, ACCA, CIPS, CIFA, CAT, CIA, REM and other professional certifications." }
      ],
      departments: [
        { name: "Department of Accounting", school: "School of Business Management and Economics", description: "Accounting and finance programs." },
        { name: "Department of Finance", school: "School of Business Management and Economics", description: "Finance and investment programs." },
        { name: "Department of Marketing", school: "School of Business Management and Economics", description: "Marketing and sales management." },
        { name: "Department of Economics", school: "School of Business Management and Economics", description: "Economics and policy analysis." },
        { name: "Department of Procurement", school: "School of Business Management and Economics", description: "Supplies and procurement management." },
        { name: "Department of Computer Science", school: "School of Computing and Information Technology", description: "Computer science and programming." },
        { name: "Department of Information Technology", school: "School of Computing and Information Technology", description: "IT and systems management." },
        { name: "Department of Law", school: "School of Law", description: "Legal education and research." },
        { name: "Department of Education", school: "School of Education", description: "Teacher training and education management." }
      ],
      undergraduatePrograms: [
        { name: "BSc (Hons) Accounting", duration: "3 years", description: "Bachelor of Science with Honours in Accounting." },
        { name: "BSc (Hons) Finance", duration: "3 years", description: "Bachelor of Science with Honours in Finance." },
        { name: "BSc (Hons) Marketing", duration: "3 years", description: "Bachelor of Science with Honours in Marketing." },
        { name: "BSc (Hons) Economics", duration: "3 years", description: "Bachelor of Science with Honours in Economics." },
        { name: "BSc (Hons) Supplies and Procurement Management", duration: "3 years", description: "Bachelor of Science with Honours in Supplies and Procurement Management." },
        { name: "BSc (Hons) Computer Science", duration: "4 years", description: "Bachelor of Science with Honours in Computer Science." },
        { name: "BSc (Hons) Information Technology", duration: "3 years", description: "Bachelor of Science with Honours in Information Technology." },
        { name: "BSc (Hons) Business Information Technology", duration: "3 years", description: "Bachelor of Science with Honours in Business Information Technology." },
        { name: "BA in Public Administration and Local Governance", duration: "3 years", description: "Bachelor of Arts in Public Administration and Local Governance." },
        { name: "Bachelor of Education (Hons) in Early Childhood Development Education", duration: "3 years", description: "Bachelor of Education with Honours in Early Childhood Development Education." },
        { name: "Bachelor Degree with Honours in Law (LLB)", duration: "4 years", description: "Bachelor Degree with Honours in Law." }
      ],
      postgraduatePrograms: [
        { name: "Executive Master of Business Administration (EMBA)", duration: "2 years", description: "Executive MBA for experienced professionals." },
        { name: "MBA in Accounting and Finance", duration: "2 years", description: "Master of Business Administration in Accounting and Finance." },
        { name: "MBA in Human Resource Management", duration: "2 years", description: "Master of Business Administration in Human Resource Management." },
        { name: "MBA in Project Management", duration: "2 years", description: "Master of Business Administration in Project Management." },
        { name: "MSc in Project Management", duration: "2 years", description: "Master of Science in Project Management." },
        { name: "MSc in Information Technology", duration: "2 years", description: "Master of Science in Information Technology." },
        { name: "MSc in Procurement and Supply Chain Management", duration: "2 years", description: "Master of Science in Procurement and Supply Chain Management." },
        { name: "MSc in Finance", duration: "2 years", description: "Master of Science in Finance." },
        { name: "MSc in Economics", duration: "2 years", description: "Master of Science in Economics." },
        { name: "MSc in Human Resource Management", duration: "2 years", description: "Master of Science in Human Resource Management." },
        { name: "MSc in Business Information Technology", duration: "2 years", description: "Master of Science in Business Information Technology." },
        { name: "MSc in Entrepreneurship", duration: "2 years", description: "Master of Science in Entrepreneurship." },
        { name: "MA in Public Policy and Management", duration: "2 years", description: "Master of Arts in Public Policy and Management." },
        { name: "MA in Public Administration", duration: "2 years", description: "Master of Arts in Public Administration." },
        { name: "Master of Education Management and Administration", duration: "2 years", description: "Master of Education Management and Administration." },
        { name: "Post Graduate Diploma in Education (PGDE)", duration: "1 year", description: "Post Graduate Diploma in Education for aspiring teachers." }
      ],
      phdPrograms: [],
      diplomaPrograms: [],
      certificatePrograms: [
        { name: "Certificate in Dyslexia Studies", duration: "6 months", description: "Certificate program in Dyslexia Studies." },
        { name: "Certificate in Sign Language Interpretation", duration: "6 months", description: "Professional sign language interpretation." },
        { name: "Certificate in Autism Studies", duration: "6 months", description: "Certificate program in Autism Studies." },
        { name: "Certificate in Sign Language", duration: "6 months", description: "Basic sign language skills." },
        { name: "Special Needs and Inclusive Education Management", duration: "6 months", description: "Inclusive education management certificate." }
      ],
      modeOfStudy: ["Full-time", "Part-time", "Evening", "Weekend"]
    },
    faculties: [
      { name: "School of Business Management and Economics", description: "Accounting, Finance, Marketing, Economics, Procurement, Public Admin", icon: "briefcase" },
      { name: "School of Computing and Information Technology", description: "Computer Science, IT, Business Information Technology", icon: "cpu" },
      { name: "School of Education", description: "Early Childhood Development, Educational Management", icon: "graduation-cap" },
      { name: "School of Law", description: "LLB, Legal Studies", icon: "scale" },
      { name: "Graduate School", description: "MBA, MSc, MA, PGDE Programs", icon: "book-open" },
      { name: "School of Professional and Executive Programmes", description: "CPA, ACCA, CIPS, CIFA, CAT, CIA Professional Certifications", icon: "award" }
    ],
    programs: [
      { name: "BSc (Hons) Accounting", level: "Bachelor", duration: "3 years", faculty: "School of Business Management and Economics" },
      { name: "BSc (Hons) Finance", level: "Bachelor", duration: "3 years", faculty: "School of Business Management and Economics" },
      { name: "BSc (Hons) Marketing", level: "Bachelor", duration: "3 years", faculty: "School of Business Management and Economics" },
      { name: "BSc (Hons) Economics", level: "Bachelor", duration: "3 years", faculty: "School of Business Management and Economics" },
      { name: "BSc (Hons) Supplies and Procurement Management", level: "Bachelor", duration: "3 years", faculty: "School of Business Management and Economics" },
      { name: "BSc (Hons) Computer Science", level: "Bachelor", duration: "4 years", faculty: "School of Computing and Information Technology" },
      { name: "BSc (Hons) Information Technology", level: "Bachelor", duration: "3 years", faculty: "School of Computing and Information Technology" },
      { name: "BSc (Hons) Business Information Technology", level: "Bachelor", duration: "3 years", faculty: "School of Computing and Information Technology" },
      { name: "BA Public Administration and Local Governance", level: "Bachelor", duration: "3 years", faculty: "School of Business Management and Economics" },
      { name: "BEd (Hons) Early Childhood Development Education", level: "Bachelor", duration: "3 years", faculty: "School of Education" },
      { name: "LLB (Hons)", level: "Bachelor", duration: "4 years", faculty: "School of Law" },
      { name: "Executive MBA", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MBA Accounting and Finance", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MBA Human Resource Management", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MBA Project Management", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MSc Project Management", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MSc Information Technology", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MSc Procurement and Supply Chain Management", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MSc Finance", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MSc Economics", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MSc Human Resource Management", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MSc Business Information Technology", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MSc Entrepreneurship", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MA Public Policy and Management", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MA Public Administration", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "MEd Management and Administration", level: "Master", duration: "2 years", faculty: "Graduate School" },
      { name: "PGDE", level: "Master", duration: "1 year", faculty: "Graduate School" }
    ],
    tuition: {
      localMin: "170,000",
      localMax: "533,400",
      internationalMin: "1,100",
      internationalMax: "2,500",
      currency: "RWF/trimester (UG) / USD/year (International)"
    },
    admission: {
      requirements: [
        "Rwandan Advanced Certificate of Secondary Education (A-Level) with at least two principal passes in relevant subjects",
        "Or equivalent international secondary school qualifications recognized by HEC Rwanda",
        "Minimum grades vary by program — C+ and above for most Bachelor programs",
        "English language proficiency for non-native speakers"
      ],
      entryQualifications: [
        "A-Level certificate with relevant subject combinations",
        "Foundation program completion for bridging students",
        "Equivalent international qualifications evaluated by HEC"
      ],
      requiredDocuments: [
        "Completed online application form via admissions.uok.ac.rw",
        "Certified copies of academic certificates and transcripts",
        "Copy of national ID or passport",
        "Recent passport-size photographs",
        "Proof of payment of application fee"
      ],
      internationalRequirements: [
        "Valid passport and student visa (if applicable)",
        "Academic transcripts evaluated by HEC Rwanda",
        "Proof of financial support",
        "Health insurance coverage"
      ],
      applicationDeadlines: "Rolling admissions — May 2026 and September 2026 intakes open. Apply online at admissions.uok.ac.rw.",
      intakePeriods: ["January", "May", "September"],
      howToApply: "Apply online through the UoK admissions portal at admissions.uok.ac.rw. Applications are reviewed on a rolling basis.",
      applicationFees: "Contact UoK admissions office for current application fee"
    },
    tuitionDetails: [
      { program: "Business Management & Economics / Law (UG per trimester)", level: "Bachelor", localAmount: "170,000 RWF/trimester (30,000 + 4x35,000)", internationalAmount: "1,100 USD/year" },
      { program: "Information Technology (UG per trimester)", level: "Bachelor", localAmount: "180,000 RWF/trimester (30,000 + 4x37,500)", internationalAmount: "1,100 USD/year" },
      { program: "PGDE (per trimester)", level: "Master", localAmount: "192,200 RWF/trimester (30,000 + 4x40,500)", internationalAmount: "Variable" },
      { program: "Masters Programs (per trimester)", level: "Master", localAmount: "533,400 RWF/trimester (55,000 + 4x119,600)", internationalAmount: "2,500 USD total" }
    ],
    scholarships: [
      { name: "UoK Merit Scholarship", type: "University", description: "Merit-based scholarships for top-performing students.", eligibility: "Based on academic excellence" },
      { name: "UoK Financial Assistance", type: "University", description: "Need-based financial support for eligible students.", eligibility: "Based on financial need" },
      { name: "Government Sponsorship", type: "Government", description: "Rwanda Government sponsorship for qualifying students." }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "UoK welcomes international students from 35+ countries. Contact admissions@uok.ac.rw for guidance.",
      equivalenceGuidance: "International qualifications must be evaluated by the Higher Education Council (HEC) of Rwanda.",
      visaInfo: "Student visa assistance provided. Admission letter required for visa application through Rwanda Immigration.",
      residencePermit: "Residence permits for study purposes can be obtained after arrival with proper documentation.",
      airportArrival: "Kigali International Airport is approximately 20 minutes from Kacyiru campus. Airport pickup can be arranged.",
      orientationWeek: true,
      languageSupport: "English language support available. Centre for Modern Languages offers language courses.",
      exchangePrograms: ["International partner university exchanges", "Regional academic networks", "Strategic partnership programs"]
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Available near all campuses — RWF 100,000-350,000/month",
      privateHostels: "Accommodation available at Remera campus",
      estimatedCost: "RWF 100,000 - 300,000/month",
      onCampusHostels: "Housing and dining available at Remera campus",
      accommodationOffice: "Office of the Dean of Students handles accommodation inquiries",
      applicationProcess: "Apply through the Dean of Students office or during admission process"
    },
    studentLife: {
      clubs: ["Entrepreneurship Club", "Debate Club", "Drama Club", "Music Club", "Cultural Club", "Sports Clubs", "Chaplaincy"],
      sports: ["Football", "Basketball", "Volleyball", "Athletics"],
      events: ["Cultural Events", "Career Fairs", "International Conference on Digital Innovation and Higher Education", "UoK Newsletter"],
      organizations: ["Student Guild Council", "Clubs and Societies", "Alumni Association", "International Students Association"]
    },
    facilities: {
      libraries: ["UoK Main Library", "E-Learning Portal", "UoK Electronic Library", "Institutional Repository"],
      labs: ["Computer Labs", "SCIT Labs", "Research Centers"],
      sports: ["Sports Grounds", "Basketball Courts"],
      other: ["Wi-Fi Campus", "Health Services", "Student Housing & Dining", "Chaplaincy", "Prayer Rooms", "Auditorium"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "Career services and enterprise business center provide job placement support and entrepreneurial guidance.",
      alumniNetwork: "10,000+ alumni worldwide with strong presence in public and private sectors across East Africa."
    },
    research: {
      centers: ["Enterprise Business Center and Innovation Hub", "Centre for Economic Governance and Leadership", "Research Communities of Scholarship"],
      innovationLabs: ["Enterprise Business Center and Innovation Hub"],
      publications: ["Journal of Financial and Management Sciences", "Kigali International Journal of Education", "UoK Newsletter"],
      conferences: ["International Conference on Digital Innovation and Higher Education", "International Conference on Green and Sustainable Development", "International Conference on Artificial Intelligence and Education"],
      partnerships: ["Strategic partnerships with industry and government", "International academic partnerships", "Research collaboration networks"]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200", caption: "UoK Kacyiru Campus" },
      { image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200", caption: "UoK Academic Building" }
    ],
    videos: [],
    rankings: {
      national: "Leading private chartered university in Rwanda — fully accredited since 2013",
      international: "Growing international recognition with students from 35+ countries",
      awards: ["Fully Chartered University by Government of Rwanda"],
      accreditations: ["Ministry of Education of Rwanda", "Higher Education Council (HEC) of Rwanda", "Rwanda Qualifications Framework"],
      memberships: ["Association of African Universities (AAU)", "East African Business and Education Networks"]
    },
    faq: [
      { question: "Is UoK accredited?", answer: "Yes, the University of Kigali is a fully accredited chartered university by the Government of the Republic of Rwanda since 2013." },
      { question: "What programs does UoK offer?", answer: "UoK offers 28+ programs across 6 schools including Business, Computing, Education, Law, Graduate studies, and Professional certifications." },
      { question: "How much is tuition at UoK?", answer: "Undergraduate tuition ranges from 170,000-180,000 RWF/trimester for local students. International students pay approximately 1,100 USD/year for undergraduate programs." },
      { question: "Does UoK have campuses outside Kigali?", answer: "Yes, UoK has three campuses: Kacyiru (Main) and Remera in Kigali, and Musanze Campus in the Northern Province." }
    ],
    downloads: [
      { name: "Fee Structure (2025/2026)", url: "https://uok.ac.rw/admissions/fees", type: "PDF" },
      { name: "Undergraduate Application Form", url: "https://uok.ac.rw/apply", type: "PDF" },
      { name: "Postgraduate Application Form", url: "https://uok.ac.rw/postgraduate-apply", type: "PDF" },
      { name: "University Prospectus", url: "https://uok.ac.rw/prospectus", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Kigali City Center", type: "Shopping", distance: "10 min drive from Kacyiru" },
      { name: "Kigali International Airport", type: "Transport", distance: "20 min drive" },
      { name: "Kigali Convention Centre", type: "Business", distance: "10 min drive" },
      { name: "Kigali Heights Mall", type: "Shopping", distance: "10 min drive" }
    ],
    reviews: [
      { name: "Patrick N.", rating: 4, comment: "Good private university with flexible study options including evening and weekend classes.", date: "2025-08-15" }
    ],
    quickFacts: {
      Established: "2013",
      Type: "Private",
      Campuses: "3 (Kacyiru, Remera, Musanze)",
      Students: "9,000+",
      "Teaching Staff": "300+",
      Faculties: "6 Schools",
      Programs: "28+",
      "Alumni Worldwide": "10,000+",
      "Countries Represented": "35+",
      Intakes: "January, May, September",
      Language: "English",
      Accommodation: "Available (Remera Campus)",
      Scholarships: "Merit + Need-based"
    },
    contact: {
      phone: "+250 788 303 386 / +250 789 009 221",
      email: "info@uok.ac.rw",
      website: "https://uok.ac.rw",
      address: "Kacyiru, Gasabo District, Kigali, Rwanda — P.O. Box 2611 Kigali"
    },
    about: {
      history: "Started operations in October 2013 upon receiving a definitive license to operate as a private university. Has grown to 9,000+ students across three campuses with students from 35+ countries.",
      accreditation: "Fully accredited chartered university by the Government of the Republic of Rwanda since 2013",
      achievements: ["9,000+ enrolled students", "10,000+ alumni worldwide", "3 campuses across Rwanda", "Students from 35+ countries", "6 schools with 28+ active programs"]
    },
    images: [
      "https://uok.ac.rw/wp-content/uploads/2026/05/Web-banner-2-02-scaled-1.jpg",
      "https://uok.ac.rw/wp-content/uploads/2026/05/Web-banner-1-01-scaled-1.jpg"
    ]
  },
  {
    id: "cmu",
    name: "Carnegie Mellon University Africa",
    location: "Kigali, Rwanda",
    city: "Kigali",
    type: "Private",
    description: "The only U.S. research university offering master's degrees with full-time faculty, staff and operations in Africa. CMU-Africa provides world-class graduate education in engineering, artificial intelligence, and information technology to develop the next generation of African leaders and innovators.",
    logo: "https://engineering.cmu.edu/_files/favicon/favicon-32x32.png",
    coverImage: "https://www.africa.engineering.cmu.edu/_files/images/cmu-africa-thumbnail.png",
    website: "https://www.africa.engineering.cmu.edu",
    founded: 2011,
    motto: "My heart is in the work",
    accreditationStatus: "Accredited by the Higher Education Council (HEC) of Rwanda and Middle States Commission on Higher Education (USA)",
    ownership: "Private (U.S. research university)",
    email: "africa-info@andrew.cmu.edu",
    telephone: "",
    physicalAddress: "Regional ICT Center of Excellence Bldg, Kigali Innovation City, Bumbogo, BP 6150, Kigali, Rwanda",
    googleMapsLocation: "",
    socialMedia: {
      facebook: "https://www.facebook.com/cmu.africa",
      twitter: "https://x.com/cmu_africa",
      instagram: "https://www.instagram.com/cmuafrica/",
      linkedin: "https://www.linkedin.com/school/carnegie-mellon-university-africa/",
      youtube: "https://www.youtube.com/user/CMURwanda"
    },
    overview: {
      history: "CMU-Africa was established in 2011 through a partnership between Carnegie Mellon University and the Government of Rwanda to address the critical shortage of high-quality engineering talent in Africa. It is CMU's first degree-granting campus outside the United States, located in Kigali Innovation City.",
      campusDescription: "CMU-Africa is located in Kigali Innovation City, a USD 10 million state-of-the-art campus built with support from the African Development Bank. The campus features modern classrooms, a 500-seat stadium, advanced ICT infrastructure, collaborative spaces, and serves as a regional ICT center of excellence."
    },
    campuses: [
      { name: "Kigali Innovation City Campus", location: "Bumbogo, Kigali Innovation City, Kigali, Rwanda", description: "State-of-the-art purpose-built campus with smart classrooms, a 500-seat stadium, advanced servers and digital infrastructure." }
    ],
    academicInfo: {
      schools: [
        { name: "School of Electrical and Computer Engineering", description: "MS in Electrical and Computer Engineering (MS ECE) - wireless networks, machine learning, data analytics, robotics, energy systems, IoT, and software engineering." },
        { name: "School of Information Technology", description: "MS in Information Technology (MSIT) - 16-month professional master's program." },
        { name: "School of Engineering Artificial Intelligence", description: "MS in Engineering Artificial Intelligence (MS EAI) - 16-month program focused on AI applications." }
      ],
      departments: [
        { name: "Department of Electrical and Computer Engineering", school: "School of Electrical and Computer Engineering", description: "ECE research and instruction." },
        { name: "Department of Information Technology", school: "School of Information Technology", description: "IT systems and management." },
        { name: "Department of Artificial Intelligence", school: "School of Engineering Artificial Intelligence", description: "AI and machine learning." }
      ],
      undergraduatePrograms: [],
      postgraduatePrograms: [
        { name: "MS Electrical and Computer Engineering", duration: "10 months", description: "Research-based program with thesis option covering wireless, ML, data analytics, robotics, and IoT." },
        { name: "MS Information Technology", duration: "16 months", description: "Professional master's program for IT professionals." },
        { name: "MS Engineering Artificial Intelligence", duration: "16 months", description: "Advanced AI engineering and applications." }
      ],
      phdPrograms: [],
      diplomaPrograms: [],
      certificatePrograms: [
        { name: "Professional Certificate in Technology", duration: "Varies", description: "Professional certificates in technology fields." }
      ],
      modeOfStudy: ["Full-time"]
    },
    faculties: [
      { name: "Electrical and Computer Engineering", description: "ECE, ML, IoT, robotics", icon: "Cpu" },
      { name: "Information Technology", description: "IT systems and management", icon: "Monitor" },
      { name: "Artificial Intelligence", description: "AI and machine learning", icon: "Brain" }
    ],
    programs: [
      { name: "MS Electrical & Computer Engineering", level: "Master", duration: "10 months", faculty: "Electrical and Computer Engineering" },
      { name: "MS Information Technology", level: "Master", duration: "16 months", faculty: "Information Technology" },
      { name: "MS Engineering Artificial Intelligence", level: "Master", duration: "16 months", faculty: "Artificial Intelligence" }
    ],
    tuition: { localMin: "16,000", localMax: "16,000", internationalMin: "60,300", internationalMax: "60,300", currency: "USD" },
    admission: {
      requirements: ["Bachelor's degree in related field", "Completed online application", "Competency tests", "TOEFL/IELTS (if applicable)"],
      entryQualifications: ["Bachelor's degree in engineering, computer science, or related field", "Strong academic record"],
      requiredDocuments: ["Online application form", "Academic transcripts", "Letters of recommendation", "Statement of purpose", "Resume/CV"],
      internationalRequirements: ["Valid passport", "Academic transcripts", "English proficiency (TOEFL >90 or IELTS >6.5)", "Student visa"],
      applicationDeadlines: "Early deadline: December 15 (for test fee coverage), Final deadline: January 15",
      intakePeriods: ["August"],
      howToApply: "Apply online at africa.engineering.cmu.edu. Submit application, transcripts, letters of recommendation, statement of purpose, and resume.",
      applicationFees: "Not specified"
    },
    tuitionDetails: [
      { program: "MS ECE", level: "Postgraduate", localAmount: "$16,000/yr", internationalAmount: "$60,300/yr" },
      { program: "MS IT", level: "Postgraduate", localAmount: "$16,000/yr", internationalAmount: "$60,300/yr" },
      { program: "MS EAI", level: "Postgraduate", localAmount: "$16,000/yr", internationalAmount: "$60,300/yr" }
    ],
    scholarships: [
      { name: "Mastercard Foundation Scholars Program", type: "Foundation", description: "Full scholarship covering tuition, fees, medical insurance, travel, living costs, leadership training for high-potential African students." },
      { name: "Government of Rwanda Grant", type: "Government", description: "Reduces tuition for qualified Rwandan students." },
      { name: "Innovators Forward Fellowship Fund", type: "University", description: "Fellowship for promising innovators." },
      { name: "Mandela Institute for Development Studies (MINDS)", type: "Foundation", description: "Scholarship for leadership development." },
      { name: "Smart Africa Scholarship", type: "Foundation", description: "Scholarship for African students in technology fields." }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "CMU-Africa welcomes students from all African countries. Need-based financial aid is available for all students.",
      equivalenceGuidance: "International qualifications evaluated for equivalence.",
      visaInfo: "Student visa support provided upon admission.",
      residencePermit: "Assistance with residence permit upon arrival.",
      airportArrival: "Information provided upon enrollment.",
      orientationWeek: true,
      languageSupport: "English instruction. TOEFL/IELTS required for non-native speakers.",
      exchangePrograms: ["CMU Pittsburgh (USA)", "CMU Silicon Valley (USA)"]
    },
    accommodation: {
      hostels: false,
      nearbyApartments: "CMU-Africa is non-residential. Students arrange their own accommodation near the Kigali Innovation City area.",
      privateHostels: "Private apartments and shared housing available in nearby areas like Kimironko and Kicukiro.",
      estimatedCost: "$1,800 - $3,000/year for housing",
      accommodationOffice: "Student services provides guidance on accommodation options."
    },
    studentLife: {
      clubs: ["Tech Club", "Innovation Society", "Women in Engineering", "Entrepreneurship Club", "Debate Society"],
      sports: ["Football", "Basketball", "Volleyball", "500-seat stadium facilities"],
      events: ["Innovation Challenges", "Career Fairs", "Networking Events", "Guest Lectures from Industry Leaders"],
      organizations: ["Student Government", "Alumni Network"]
    },
    facilities: {
      libraries: ["Digital library with access to CMU's global resources"],
      labs: ["Advanced computing labs", "AI/ML lab", "Embedded systems lab", "IoT lab"],
      sports: ["500-seat stadium", "Sports courts"],
      other: ["Smart classrooms with global lecture capabilities", "Innovation hub", "Student common areas", "Advanced ICT infrastructure"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "CMU-Africa has strong industry connections across Africa. Career services support job placement, internships, and entrepreneurship opportunities.",
      alumniNetwork: "Global CMU alumni network plus Africa-specific alumni community."
    },
    research: {
      centers: ["CMU-Africa Research Centre"],
      innovationLabs: ["Innovation Lab", "AI Research Lab"],
      publications: ["Research papers in IEEE, ACM, and top conferences"],
      conferences: ["Annual Research Symposium", "Industry Partnerships Conference"],
      partnerships: ["Government of Rwanda", "Mastercard Foundation", "African Development Bank", "Smart Africa", "MINDS"]
    },
    gallery: [],
    videos: [],
    rankings: {
      national: "Top-ranked engineering graduate programs in Rwanda",
      international: "Carnegie Mellon University ranks Top 20 in the US and #1 in 7 undergraduate programs (analytics, AI, cybersecurity, etc.)",
      awards: ["Top engineering school award", "Innovation in Education"],
      accreditations: ["Middle States Commission on Higher Education (USA)", "Higher Education Council (HEC) Rwanda"],
      memberships: ["Association of American Universities", "World Economic Forum"]
    },
    faq: [
      { question: "Is CMU-Africa different from CMU Pittsburgh?", answer: "CMU-Africa offers the same CMU-quality education with the same degree as CMU Pittsburgh. Students can spend a semester at Pittsburgh or Silicon Valley campuses." },
      { question: "What programs does CMU-Africa offer?", answer: "Three master's programs: MS in Electrical & Computer Engineering (ECE), MS in Information Technology (IT), and MS in Engineering Artificial Intelligence (EAI)." },
      { question: "How much is tuition at CMU-Africa?", answer: "African students pay $16,000/year. International students pay $60,300/year. Need-based financial aid is available for all African students." },
      { question: "Does CMU-Africa offer undergraduate programs?", answer: "No, CMU-Africa currently offers only master's degree programs. It also offers a Bridge Program for final-year undergraduates." },
      { question: "Is CMU-Africa accredited?", answer: "Yes, CMU-Africa is accredited by the Middle States Commission on Higher Education (USA) and recognized by HEC Rwanda." }
    ],
    downloads: [
      { name: "Fee Structure (2025/2026)", url: "https://africa.engineering.cmu.edu/admissions/tuition.html", type: "PDF" },
      { name: "MS Programs Guide", url: "https://africa.engineering.cmu.edu/academics/programs/index.html", type: "PDF" },
      { name: "Financial Aid Guide", url: "https://africa.engineering.cmu.edu/admissions/tuition.html", type: "PDF" },
      { name: "How to Apply", url: "https://africa.engineering.cmu.edu/admissions/how-to-apply.html", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "ALU Rwanda", type: "Education", distance: "Adjacent campus" },
      { name: "Kigali International Airport", type: "Transport", distance: "9 km" },
      { name: "Kimironko Market", type: "Shopping", distance: "4 km" },
      { name: "Kigali Convention Centre", type: "Convention", distance: "12 km" }
    ],
    reviews: [
      { name: "Emmanuel K.", rating: 5, comment: "World-class education with global recognition. The financial aid makes it accessible for African students.", date: "2025-11-20" },
      { name: "Grace M.", rating: 4, comment: "Excellent faculty and resources. The opportunity to study at Pittsburgh campus is a huge plus.", date: "2025-08-15" }
    ],
    quickFacts: {
      Established: "2011",
      Type: "Private (US-based)",
      "Campus Location": "Kigali Innovation City",
      Programs: "3 Master's programs",
      "Program Duration": "10-16 months",
      "Annual Tuition (African)": "$16,000 USD",
      "Annual Tuition (Intl)": "$60,300 USD",
      Language: "English",
      Intake: "August",
      "Financial Aid": "Need-based for all African students",
      Accommodation: "Off-campus (non-residential)",
      "Total Students": "100+ per cohort",
      "Parent University": "Carnegie Mellon University (USA)"
    },
    contact: {
      phone: "",
      email: "africa-info@andrew.cmu.edu",
      website: "https://www.africa.engineering.cmu.edu",
      address: "Regional ICT Center of Excellence Bldg, Kigali Innovation City - Bumbogo, BP 6150, Kigali, Rwanda"
    },
    about: {
      history: "Established in 2011 through partnership between Carnegie Mellon University and the Government of Rwanda. CMU-Africa is CMU's first degree-granting campus outside the US.",
      accreditation: "Accredited by Middle States Commission on Higher Education (USA) and HEC Rwanda.",
      achievements: ["First US research university with full operations in Africa", "Mastercard Foundation Scholars Program partner", "Strategic partnership with Government of Rwanda", "State-of-the-art Kigali Innovation City campus"]
    },
    images: [
      "https://www.africa.engineering.cmu.edu/_files/images/homepage/cybersecurity-homepage.png",
      "https://www.africa.engineering.cmu.edu/_files/images/index/ai-robotics-2.png",
      "https://www.africa.engineering.cmu.edu/_files/images/homepage/africa-energy-mobility.png"
    ]
  },
  {
    id: "ughe",
    name: "University of Global Health Equity (UGHE)",
    location: "Butaro, Rwanda",
    city: "Butaro",
    type: "Private",
    description: "A health sciences university transforming the way healthcare is delivered worldwide. UGHE trains compassionate, skilled health professionals committed to serving vulnerable populations, offering tuition-free medical education with a public service agreement.",
    logo: "https://ughe.org/wp-content/uploads/2026/04/UGHE-H.png",
    coverImage: "https://ughe.org/wp-content/uploads/2026/04/study-at-UGHE.jpg",
    website: "https://ughe.org",
    founded: 2015,
    motto: "Radically changing the way health care is delivered around the world",
    accreditationStatus: "Accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Private (Non-profit, Partners In Health initiative)",
    email: "info@ughe.org",
    telephone: "+250 786 405 072",
    physicalAddress: "Butaro, Burera District, Northern Province, Rwanda",
    googleMapsLocation: "",
    socialMedia: {
      facebook: "https://www.facebook.com/ughe.org",
      twitter: "https://twitter.com/ughe_org",
      instagram: "https://www.instagram.com/ughe_org/",
      linkedin: "https://www.linkedin.com/company/university-of-global-health-equity",
      youtube: ""
    },
    overview: {
      history: "UGHE was launched in September 2015 as an initiative of Partners In Health, founded by Dr. Paul Farmer and colleagues. The university was built on a 250-acre campus gifted by the Butaro community, with catalytic support from the Cummings Foundation, Bill & Melinda Gates Foundation, and the Government of Rwanda.",
      campusDescription: "UGHE's main campus is located on 250 acres in Butaro, a rural district in Northern Province. The campus features state-of-the-art classrooms, teaching laboratories, a clinical simulation center, information commons, dining facilities, and residential accommodations. It is complemented by an administrative office in Kigali Heights."
    },
    campuses: [
      { name: "Butaro Campus (Main)", location: "Butaro, Burera District, Northern Province, Rwanda", description: "250-acre rural campus with classrooms, simulation labs, clinical training center, and residential facilities." },
      { name: "Kigali Administrative Office", location: "KG 7 Ave, Kigali Heights, 5th Floor, East Wing, Kigali, Rwanda", description: "Administrative offices in Kigali city center." }
    ],
    academicInfo: {
      schools: [
        { name: "School of Medicine", description: "MBBS-Master of Science in Global Health Delivery (MBBS-MGHD) - 6.8-year dual degree program." },
        { name: "School of Global Health Delivery", description: "Master of Science in Global Health Delivery (MGHD) - concentrations in Global Surgery, Health Management, One Health, Social and Community Medicine, Gender, Sexual and Reproductive Health." },
        { name: "Centre for Nursing and Midwifery", description: "Training and capacity building for nurses and midwives across Africa." }
      ],
      departments: [
        { name: "Department of Medicine", school: "School of Medicine", description: "Medical education and clinical training." },
        { name: "Department of Global Health", school: "School of Global Health Delivery", description: "Global health research and education." },
        { name: "Department of Nursing", school: "Centre for Nursing and Midwifery", description: "Nursing and midwifery education." }
      ],
      undergraduatePrograms: [
        { name: "MBBS-Master of Science in Global Health Delivery", duration: "6.8 years", description: "Dual degree program integrating medical training with global health delivery science." }
      ],
      postgraduatePrograms: [
        { name: "MSc Global Health Delivery", duration: "1-2 years", description: "Concentrations in Global Surgery, Health Management, One Health, Social and Community Medicine, Gender Health." }
      ],
      phdPrograms: [],
      diplomaPrograms: [],
      certificatePrograms: [
        { name: "Executive Education in Global Health", duration: "Varies", description: "Executive education for health professionals." },
        { name: "Nursing Leadership Certificate", duration: "Varies", description: "Leadership training for nurses and midwives." }
      ],
      modeOfStudy: ["Full-time"]
    },
    faculties: [
      { name: "School of Medicine", description: "Medical education, surgery, clinical sciences", icon: "Heart" },
      { name: "School of Global Health Delivery", description: "Global health delivery, health management", icon: "Globe" },
      { name: "Centre for Nursing and Midwifery", description: "Nursing, midwifery, healthcare leadership", icon: "User" }
    ],
    programs: [
      { name: "MBBS-MSc Global Health Delivery", level: "Bachelor", duration: "6.8 years", faculty: "School of Medicine" },
      { name: "MSc Global Health Delivery", level: "Master", duration: "1-2 years", faculty: "School of Global Health Delivery" }
    ],
    tuition: { localMin: "0", localMax: "0", internationalMin: "0", internationalMax: "0", currency: "USD" },
    admission: {
      requirements: ["Strong academic record in sciences", "Commitment to serving vulnerable populations", "Leadership potential", "Personal statement", "Interviews"],
      entryQualifications: ["Secondary school certificate with strong science background (for MBBS)", "Bachelor's degree (for MGHD)"],
      requiredDocuments: ["Application form", "Academic transcripts", "Personal statement", "Letters of recommendation", "Identification"],
      internationalRequirements: ["Valid passport", "Academic transcripts", "English proficiency", "Student visa"],
      applicationDeadlines: "Annual intake, typically closing in January for MBBS-MGHD program",
      intakePeriods: ["August/September"],
      howToApply: "Apply online at ughe.org. All admitted students sign a Public Service Agreement committing to serve vulnerable populations in their home countries.",
      applicationFees: "Free"
    },
    tuitionDetails: [
      { program: "MBBS-MSc Global Health Delivery", level: "Undergraduate", localAmount: "Free (scholarship)", internationalAmount: "Free (scholarship)" },
      { program: "MSc Global Health Delivery", level: "Postgraduate", localAmount: "Varies (need-based)", internationalAmount: "Varies (need-based)" }
    ],
    scholarships: [
      { name: "UGHE Full Scholarship", type: "University", description: "Full tuition coverage for the entire MBBS-MGHD program. All admitted students receive scholarship support through the Public Service Agreement." },
      { name: "Mastercard Foundation Scholars Program", type: "Foundation", description: "Full scholarship for qualifying African students committed to social impact." },
      { name: "UGHE Named Scholarships", type: "University", description: "Full tuition coverage for select incoming students with strong commitment to health equity." },
      { name: "Need-Based Scholarship", type: "University", description: "Individualized financial aid based on assessed financial need." }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "UGHE welcomes students from across Africa and globally. The MBBS-MGHD program is open to applicants from Burundi, DRC, Eritrea, Lesotho, Liberia, Malawi, Sierra Leone, South Sudan, Sudan, Tanzania, Rwanda, and refugees from all African countries.",
      equivalenceGuidance: "International qualifications evaluated for equivalence by HEC.",
      visaInfo: "Visa support provided with admission letter.",
      residencePermit: "Assistance with residence permit upon arrival.",
      airportArrival: "Airport pickup and transport to Butaro available.",
      orientationWeek: true,
      languageSupport: "English instruction throughout.",
      exchangePrograms: ["Northwestern University (USA)", "Harvard Medical School (USA)", "Global partner institutions"]
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "On-campus residential accommodation available for students at Butaro campus.",
      privateHostels: "Limited off-campus options in Butaro Town.",
      estimatedCost: "Included in scholarship support",
      accommodationOffice: "Student affairs office manages on-campus housing."
    },
    studentLife: {
      clubs: ["Global Health Society", "Community Health Club", "Research Interest Group", "Debate and Discussion Forum"],
      sports: ["Football", "Volleyball", "Basketball", "Athletics"],
      events: ["Global Health Conference", "Community Health Days", "Research Symposium", "Cultural Events"],
      organizations: ["Student Council", "Community Health Outreach Program"]
    },
    facilities: {
      libraries: ["UGHE Library - digital and physical health sciences resources"],
      labs: ["Clinical Simulation Center", "Teaching Laboratories", "Anatomy Lab", "Computer Labs"],
      sports: ["Sports fields", "Athletic facilities"],
      other: ["Information commons", "Dining hall", "Residential buildings", "Butaro Level 2 Teaching Hospital (affiliated)"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "Career services, mentorship programs, and partnerships with global health institutions. Graduates serve in their home countries through the Public Service Agreement.",
      alumniNetwork: "Expanding alumni network spanning 24+ countries."
    },
    research: {
      centers: ["UGHE Research Centre", "Social Medicine Research Group"],
      innovationLabs: ["Clinical Simulation and Innovation Lab"],
      publications: ["Research on global health delivery, social medicine, health equity"],
      conferences: ["Annual Global Health Research Symposium"],
      partnerships: ["Partners In Health", "Cummings Foundation", "Bill & Melinda Gates Foundation", "Harvard Medical School", "Northwestern University", "Government of Rwanda"]
    },
    gallery: [],
    videos: [],
    rankings: {
      national: "Leading health sciences university in rural Rwanda",
      international: "Recognized globally for innovative medical education and health equity approach",
      awards: ["Partners In Health Excellence Award", "Innovation in Medical Education"],
      accreditations: ["Higher Education Council (HEC) Rwanda"],
      memberships: ["Global Health Equity Network", "Partners In Health Academic Alliance"]
    },
    faq: [
      { question: "Is UGHE free?", answer: "Yes, the MBBS-MGHD program is tuition-free. All admitted students receive scholarship support and sign a Public Service Agreement to serve vulnerable populations in their home countries." },
      { question: "What programs does UGHE offer?", answer: "UGHE offers an MBBS-MSc in Global Health Delivery (6.8 years), an MSc in Global Health Delivery (1-2 years), and various executive education programs in nursing, midwifery, and global health." },
      { question: "Where is UGHE located?", answer: "UGHE's main campus is in Butaro, Burera District, Northern Province, Rwanda, approximately a 2-hour drive from Kigali." },
      { question: "Is UGHE accredited?", answer: "Yes, UGHE is fully accredited by the Higher Education Council (HEC) of Rwanda." },
      { question: "Who can apply to UGHE?", answer: "UGHE accepts students from multiple African countries including Rwanda, Burundi, DRC, Eritrea, Lesotho, Liberia, Malawi, Sierra Leone, South Sudan, Sudan, Tanzania, and refugees from all African countries." }
    ],
    downloads: [
      { name: "MBBS-MGHD Program Guide", url: "https://ughe.org/academics/mbbs-mghd", type: "PDF" },
      { name: "Admissions Information", url: "https://ughe.org/admissions", type: "PDF" },
      { name: "MSc Global Health Delivery Guide", url: "https://ughe.org/academics/mghd", type: "PDF" },
      { name: "University Prospectus", url: "https://ughe.org/about", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Butaro District Hospital", type: "Healthcare", distance: "On-campus" },
      { name: "Volcanoes National Park", type: "Tourism", distance: "45 min drive" },
      { name: "Kigali City", type: "City", distance: "2 hours drive" },
      { name: "Ruhande Arboretum", type: "Nature", distance: "30 min drive" }
    ],
    reviews: [
      { name: "Dr. Marie C.", rating: 5, comment: "UGHE provides a world-class medical education with a heart for the most vulnerable. The community-based training is unmatched.", date: "2025-07-10" },
      { name: "Peter K.", rating: 4, comment: "Challenging but rewarding. The Public Service Agreement ensures we give back to our communities.", date: "2025-04-22" }
    ],
    quickFacts: {
      Established: "2015",
      Type: "Private (Non-profit)",
      Location: "Butaro, Burera District",
      "Programs": "MBBS-MGHD, MSc GHD",
      "Program Duration": "6.8 years (MBBS), 1-2 years (MSc)",
      Tuition: "Free (full scholarship)",
      Language: "English",
      Intake: "August/September",
      "Chancellor": "Dr. Jim Yong Kim",
      "Founder": "Partners In Health",
      Accommodation: "On-campus (included)",
      "Partner Hospital": "Butaro Level 2 Teaching Hospital",
      "Students Served": "From 24+ countries"
    },
    contact: {
      phone: "+250 786 405 072",
      email: "info@ughe.org",
      website: "https://ughe.org",
      address: "Butaro, Burera District, Northern Province, Rwanda"
    },
    about: {
      history: "UGHE launched in September 2015 as a Partners In Health initiative with support from Cummings Foundation, Bill & Melinda Gates Foundation, and Government of Rwanda. The Butaro campus was completed in January 2019 and inaugurated by President Paul Kagame.",
      accreditation: "Fully accredited by HEC Rwanda.",
      achievements: ["First tuition-free medical education model in Rwanda", "250-acre rural campus built with community partnership", "Graduates serving in 24+ countries", "Innovative MBBS-MGHD dual degree program"]
    },
    images: [
      "https://ughe.org/wp-content/uploads/2026/04/DJI_20241028143002_0024_V-2-scaled.jpg",
      "https://ughe.org/wp-content/uploads/2026/04/To-replace-the-white-coat-ceremony-picture-scaled.jpg",
      "https://ughe.org/wp-content/uploads/2026/04/Rwanda_20240109_MBBSClass2029_Ahabinshuti3525-scaled.jpg"
    ]
  },
  {
    id: "kepler",
    name: "Kepler College",
    location: "Kigali, Rwanda",
    city: "Kigali",
    type: "Private",
    description: "A nonprofit higher education institution preparing young Africans for the future of work through innovative blended learning. Kepler College combines online and in-person instruction with career readiness training, achieving 90% graduate employment within 6 months.",
    logo: "https://keplercollege.ac.rw/wp-content/uploads/2020/02/Kepler-logo.png",
    coverImage: "https://keplercollege.ac.rw/wp-content/uploads/2025/10/53231338740_ff0bdb1feb_o.jpg",
    website: "https://keplercollege.ac.rw",
    founded: 2013,
    motto: "Preparing young Africans for the future of work",
    accreditationStatus: "Accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Private (Non-profit)",
    email: "admissions@keplercollege.ac.rw",
    telephone: "+250 788 998 102",
    physicalAddress: "KG 29 Ave 16, Kigali, Rwanda",
    googleMapsLocation: "",
    socialMedia: {
      facebook: "https://www.facebook.com/kepler",
      twitter: "https://twitter.com/KeplerHQ",
      instagram: "",
      linkedin: "https://rw.linkedin.com/company/kepler-",
      youtube: ""
    },
    overview: {
      history: "Kepler launched in 2004 as Orphans of Rwanda, becoming Generation Rwanda in 2010. In 2013, Kepler partnered with Southern New Hampshire University (SNHU) to offer accredited US degrees with in-person support. Kepler College was established as an accredited Rwandan degree-granting institution offering its own bachelor's programs while maintaining the SNHU partnership.",
      campusDescription: "Kepler College is located in Kigali, Rwanda, with modern facilities designed for blended learning. The campus combines physical classrooms with online learning infrastructure, career development centers, and collaborative spaces."
    },
    campuses: [
      { name: "Kigali Campus", location: "KG 29 Ave 16, Kigali, Rwanda", description: "Main campus in Kigali with blended learning facilities, career center, and student support services." }
    ],
    academicInfo: {
      schools: [
        { name: "School of Business and Management", description: "Bachelor of Arts in Project Management and online SNHU programs in Management and Communication." },
        { name: "School of Data and Analytics", description: "Bachelor of Science in Business Analytics." }
      ],
      departments: [
        { name: "Department of Project Management", school: "School of Business and Management", description: "Project management education and training." },
        { name: "Department of Business Analytics", school: "School of Data and Analytics", description: "Data analytics and business intelligence." }
      ],
      undergraduatePrograms: [
        { name: "BA in Project Management", duration: "3 years", description: "Accredited bachelor's program focused on project management skills and competencies." },
        { name: "BSc in Business Analytics", duration: "3 years", description: "Data-driven decision-making and business analytics." }
      ],
      postgraduatePrograms: [],
      phdPrograms: [],
      diplomaPrograms: [
        { name: "Foundation/Preparatory Program (Iteme)", duration: "1 year", description: "Preparatory program for secondary school graduates to develop English and academic skills." }
      ],
      certificatePrograms: [
        { name: "SNHU Professional Certificate", duration: "Varies", description: "Professional certificates through SNHU partnership." }
      ],
      modeOfStudy: ["Blended (Online + In-person)", "Full-time"]
    },
    faculties: [
      { name: "Business and Management", description: "Project management, leadership, communication", icon: "Briefcase" },
      { name: "Data and Analytics", description: "Business analytics, data science", icon: "BarChart" }
    ],
    programs: [
      { name: "BA Project Management", level: "Bachelor", duration: "3 years", faculty: "Business and Management" },
      { name: "BSc Business Analytics", level: "Bachelor", duration: "3 years", faculty: "Data and Analytics" }
    ],
    tuition: { localMin: "1,650", localMax: "1,650", internationalMin: "3,200", internationalMax: "3,200", currency: "USD" },
    admission: {
      requirements: ["Secondary school diploma with minimum 2 principal passes", "Kepler entrance exam", "Personal statement", "Interview"],
      entryQualifications: ["Secondary school certificate recognized by Rwanda Education Regulatory Agency", "Minimum 60% average in senior classes"],
      requiredDocuments: ["Application form", "Secondary school transcripts", "National exam scores", "Personal identification", "Police clearance (intl students)"],
      internationalRequirements: ["Valid passport", "Academic transcripts", "Student visa"],
      applicationDeadlines: "Rolling admissions with specific intake periods",
      intakePeriods: ["April", "September"],
      howToApply: "Apply online at keplercollege.ac.rw. Submit the application form, upload required documents, and complete the entrance exam.",
      applicationFees: "Not specified"
    },
    tuitionDetails: [
      { program: "BA Project Management", level: "Undergraduate", localAmount: "$1,650/yr", internationalAmount: "$3,200/yr" },
      { program: "BSc Business Analytics", level: "Undergraduate", localAmount: "$1,650/yr", internationalAmount: "$3,200/yr" }
    ],
    scholarships: [
      { name: "Income Share Agreement", type: "University", description: "Rwandan students can defer tuition payment through an income share agreement, paying after securing employment." },
      { name: "Full Scholarship (Refugees & PWD)", type: "University", description: "Full scholarship for refugees in Rwanda and people with disabilities who pass the admissions tests." },
      { name: "Upfront Payment Discount", type: "University", description: "10% discount for students paying annual fees in full upfront." }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "Kepler accepts international students from across Africa. Full scholarships available for refugees.",
      equivalenceGuidance: "International qualifications evaluated for equivalence.",
      visaInfo: "Visa support provided with admission letter.",
      residencePermit: "Assistance with residence permit upon arrival.",
      airportArrival: "Information provided upon enrollment.",
      orientationWeek: true,
      languageSupport: "English instruction with foundation program for language development.",
      exchangePrograms: []
    },
    accommodation: {
      hostels: false,
      nearbyApartments: "Kepler College is non-residential. Students arrange their own accommodation near the Kigali campus.",
      privateHostels: "Affordable private hostels and apartments available in surrounding areas of Kigali.",
      estimatedCost: "RWF 100,000 - 200,000/month",
      accommodationOffice: "Student services provides guidance on finding accommodation."
    },
    studentLife: {
      clubs: ["Entrepreneurship Club", "Tech Club", "Leadership Society", "Creative Arts Club"],
      sports: ["Football", "Basketball", "Volleyball"],
      events: ["Career Fairs", "Innovation Challenges", "Guest Speaker Series", "Networking Events"],
      organizations: ["Student Government", "Kepler Alumni Network"]
    },
    facilities: {
      libraries: ["Digital library with online resources"],
      labs: ["Computer labs with internet access", "Online learning platforms"],
      sports: ["Nearby sports facilities"],
      other: ["Blended learning classrooms", "Career center", "Student lounge", "Co-working spaces"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "90% of graduates employed within 6 months. Career services include job placement support, resume workshops, interview coaching, and partnerships with 400+ employer organizations.",
      alumniNetwork: "Growing network of Kepler alumni employed across Rwanda and Africa."
    },
    research: {
      centers: [],
      innovationLabs: [],
      publications: ["Employment outcomes reports"],
      conferences: ["Annual Career Fair", "Industry Partnership Forums"],
      partnerships: ["Southern New Hampshire University (SNHU)", "400+ employer organizations", "IKEA Foundation"]
    },
    gallery: [],
    videos: [],
    rankings: {
      national: "Leading blended-learning institution in Rwanda",
      international: "",
      awards: ["Employment Innovation Award", "Education Access Leadership"],
      accreditations: ["Higher Education Council (HEC) Rwanda"],
      memberships: ["African Leadership Network", "Global Education Innovation Network"]
    },
    faq: [
      { question: "Is Kepler accredited?", answer: "Yes, Kepler College is fully accredited by the Higher Education Council (HEC) of Rwanda. Its SNHU partnership provides US-accredited degrees." },
      { question: "What programs does Kepler offer?", answer: "Kepler offers BA in Project Management, BSc in Business Analytics (own degrees), plus SNHU online programs in Management and Communication." },
      { question: "How much is tuition at Kepler?", answer: "Annual tuition is $1,650 USD for Rwandan students and $3,200 USD for international students. Financial aid and income share agreements are available." },
      { question: "What is Kepler's employment rate?", answer: "90% of Kepler graduates are employed within 6 months of graduation, supported by partnerships with over 400 employer organizations." },
      { question: "Does Kepler offer scholarships?", answer: "Yes, including Income Share Agreements, full scholarships for refugees and people with disabilities, and a 10% discount for upfront payment." }
    ],
    downloads: [
      { name: "Fee Structure (2025/2026)", url: "https://keplercollege.ac.rw/how-to-apply", type: "PDF" },
      { name: "Undergraduate Application Guide", url: "https://keplercollege.ac.rw/how-to-apply", type: "PDF" },
      { name: "BA Project Management Guide", url: "https://keplercollege.ac.rw/ba-in-project-management-full-time", type: "PDF" },
      { name: "BSc Business Analytics Guide", url: "https://keplercollege.ac.rw/bsc-in-business-analytics-full-time", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Kigali City Center", type: "Shopping", distance: "10 min drive" },
      { name: "Kigali International Airport", type: "Transport", distance: "15 min drive" },
      { name: "Kimironko Market", type: "Shopping", distance: "5 min drive" },
      { name: "Kigali Convention Centre", type: "Convention", distance: "12 min drive" }
    ],
    reviews: [
      { name: "Jean D.", rating: 5, comment: "Kepler's blended learning model helped me gain practical skills while studying. The career support is excellent.", date: "2025-09-18" },
      { name: "Alice M.", rating: 4, comment: "Great programs with real employment outcomes. The income share agreement made education affordable for me.", date: "2025-06-05" }
    ],
    quickFacts: {
      Established: "2013",
      Type: "Private (Non-profit)",
      Location: "Kigali",
      Programs: "BA Project Management, BSc Business Analytics",
      "Program Duration": "3 years",
      "Annual Tuition (Local)": "$1,650 USD",
      "Annual Tuition (Intl)": "$3,200 USD",
      Language: "English",
      Intakes: "April, September",
      "Employment Rate": "90% within 6 months",
      Accommodation: "Off-campus",
      "Partner University": "Southern New Hampshire University (SNHU)",
      Scholarships: "Available (Income Share, Full, Merit)"
    },
    contact: {
      phone: "+250 788 998 102",
      email: "admissions@keplercollege.ac.rw",
      website: "https://keplercollege.ac.rw",
      address: "KG 29 Ave 16, Kigali, Rwanda"
    },
    about: {
      history: "Kepler began in 2004 as Orphans of Rwanda and evolved through Generation Rwanda (2010) to become Kepler (2013). Kepler College was established as an accredited degree-granting institution offering its own bachelor's programs alongside the historic SNHU partnership.",
      accreditation: "Accredited by HEC Rwanda. SNHU degrees accredited in the US.",
      achievements: ["90% employment rate within 6 months of graduation", "400+ employer partnerships", "Income Share Agreement model", "Refugee education program", "Blended learning innovation"]
    },
    images: [
      "https://keplercollege.ac.rw/wp-content/uploads/2025/09/54579554461_70a75cb254_o-scaled.jpg",
      "https://keplercollege.ac.rw/wp-content/uploads/2026/06/55320020249_4eae304e2f_o-scaled.jpg",
      "https://keplercollege.ac.rw/wp-content/uploads/2026/06/55255518088_5d487404a2_o-scaled.jpg"
    ]
  },
  {
    id: "ktu",
    name: "Kigali Technical University (KTU)",
    location: "Kigali, Rwanda",
    city: "Kigali",
    type: "Public",
    description: "A leading public technical university focused on engineering, applied sciences, and technology education. KTU is known for its hands-on, practical approach to learning.",
    logo: "",
    coverImage: "",
    website: "https://www.ktu.ac.rw",
    founded: 2016,
    motto: "Technology and Innovation for Development",
    accreditationStatus: "Accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Public (Government of Rwanda)",
    email: "info@ktu.ac.rw",
    telephone: "+250 788 123 456",
    physicalAddress: "KN 4 Ave, Kigali, Rwanda",
    googleMapsLocation: "",
    socialMedia: { facebook: "", twitter: "", instagram: "", linkedin: "", youtube: "" },
    overview: {
      history: "Founded in 2016, KTU was established to meet Rwanda's growing demand for technical and engineering professionals.",
      campusDescription: "Modern campus in Kigali with engineering workshops, ICT labs, and innovation spaces."
    },
    campuses: [
      { name: "Main Campus", location: "KN 4 Ave, Kigali", description: "Main campus with engineering and ICT facilities." }
    ],
    academicInfo: {
      schools: [
        { name: "School of Engineering", description: "Civil, Electrical, Mechanical, Chemical Engineering." },
        { name: "School of ICT", description: "Software Engineering, Networking, Cybersecurity." },
        { name: "School of Applied Sciences", description: "Physics, Chemistry, Mathematics." },
        { name: "School of Business", description: "Accounting, Management, Finance." }
      ],
      departments: [
        { name: "Department of Civil Engineering", school: "School of Engineering", description: "Civil engineering." },
        { name: "Department of Electrical Engineering", school: "School of Engineering", description: "Electrical engineering." },
        { name: "Department of Mechanical Engineering", school: "School of Engineering", description: "Mechanical engineering." },
        { name: "Department of Software Engineering", school: "School of ICT", description: "Software engineering." },
        { name: "Department of Networking", school: "School of ICT", description: "Networking and cybersecurity." }
      ],
      undergraduatePrograms: [
        { name: "BSc Civil Engineering", duration: "4 years", description: "Bachelor in Civil Engineering." },
        { name: "BSc Electrical Engineering", duration: "4 years", description: "Bachelor in Electrical Engineering." },
        { name: "BSc Software Engineering", duration: "4 years", description: "Bachelor in Software Engineering." }
      ],
      postgraduatePrograms: [
        { name: "MSc Engineering Management", duration: "2 years", description: "Master in Engineering Management." }
      ],
      phdPrograms: [],
      diplomaPrograms: [
        { name: "Diploma in IT", duration: "2 years", description: "Diploma in Information Technology." }
      ],
      certificatePrograms: [],
      modeOfStudy: ["Full-time", "Part-time", "Evening"]
    },
    faculties: [
      { name: "Engineering", description: "Civil, Electrical, Mechanical, Chemical", icon: "wrench" },
      { name: "ICT", description: "Software Engineering, Networking, Cybersecurity", icon: "cpu" },
      { name: "Applied Sciences", description: "Physics, Chemistry, Mathematics", icon: "flask-conical" },
      { name: "Business", description: "Accounting, Management, Finance", icon: "briefcase" }
    ],
    programs: [
      { name: "BSc Civil Engineering", level: "Bachelor", duration: "4 years", faculty: "Engineering" },
      { name: "BSc Electrical Engineering", level: "Bachelor", duration: "4 years", faculty: "Engineering" },
      { name: "BSc Software Engineering", level: "Bachelor", duration: "4 years", faculty: "ICT" },
      { name: "Diploma in IT", level: "Diploma", duration: "2 years", faculty: "ICT" },
      { name: "MSc Engineering Management", level: "Master", duration: "2 years", faculty: "Engineering" }
    ],
    tuition: {
      localMin: "600,000",
      localMax: "1,200,000",
      internationalMin: "1,500",
      internationalMax: "3,500",
      currency: "RWF / USD"
    },
    admission: {
      requirements: ["A-Level certificate with science subjects", "Proficiency in English", "Meet program-specific requirements"],
      entryQualifications: ["A-Level certificate", "Advanced diploma for top-up programs", "Equivalent international qualifications"],
      requiredDocuments: ["Completed application", "Academic transcripts", "ID copy", "Passport photos", "Application fee"],
      internationalRequirements: ["Valid passport", "Student visa", "Academic equivalence", "Financial proof"],
      applicationDeadlines: "Rolling admissions. Two intakes per year.",
      intakePeriods: ["January", "September"],
      howToApply: "Apply online through KTU admissions portal.",
      applicationFees: "RWF 10,000 local, USD 40 international"
    },
    tuitionDetails: [
      { program: "Engineering Programs (per year)", level: "Bachelor", localAmount: "600,000 - 1,200,000 RWF/year", internationalAmount: "1,500 - 3,500 USD/year" },
      { program: "ICT Programs (per year)", level: "Bachelor", localAmount: "600,000 - 1,000,000 RWF/year", internationalAmount: "1,500 - 3,000 USD/year" },
      { program: "Business Programs (per year)", level: "Bachelor", localAmount: "500,000 - 900,000 RWF/year", internationalAmount: "1,200 - 2,500 USD/year" },
      { program: "Postgraduate Programs", level: "Master", localAmount: "1,200,000 - 2,000,000 RWF/year", internationalAmount: "2,500 - 4,000 USD/year" }
    ],
    scholarships: [
      { name: "Rwanda Government Scholarship", type: "Government", description: "For top STEM students", eligibility: "Rwandan nationals with strong academic records" },
      { name: "Industry Partnership Scholarships", type: "NGO", description: "Sponsored by partner companies in engineering and technology" },
      { name: "KTU Merit Scholarship", type: "University", description: "For top-performing continuing students" }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "International students welcome. Contact the admissions office.",
      equivalenceGuidance: "HEC equivalence required for international qualifications.",
      visaInfo: "Student visa through Rwanda Immigration with admission letter.",
      residencePermit: "Required for stays over 90 days.",
      airportArrival: "Airport pickup can be arranged.",
      orientationWeek: true,
      languageSupport: "English language support available.",
      exchangePrograms: []
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Available within 2km, RWF 120,000-350,000/month",
      privateHostels: "Several options nearby",
      estimatedCost: "RWF 80,000 - 200,000/month"
    },
    studentLife: {
      clubs: ["Engineering Club", "Robotics Team", "Entrepreneurship Program", "Innovation Lab"],
      sports: ["Football", "Basketball", "Volleyball"],
      events: ["Tech Fairs", "Hackathons", "Industry Visits"],
      organizations: ["Student Council", "Engineering Society"]
    },
    facilities: {
      libraries: ["KTU Library"],
      labs: ["Engineering Workshops", "ICT Labs", "Science Laboratories", "Computer Labs"],
      sports: ["Sports Field", "Basketball Court"],
      other: ["Wi-Fi", "Health Center", "Workshop Studios", "Student Lounge"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "Career office links students with industry partners for placements.",
      alumniNetwork: "5,000+ graduates working in various industries."
    },
    research: {
      centers: ["Engineering Research Center", "Tech Innovation Hub"],
      innovationLabs: ["Robotics Lab", "3D Printing Lab"],
      publications: ["KTU Engineering Journal", "Conference papers"],
      conferences: ["Annual Engineering Conference", "Tech Summit"],
      partnerships: ["Industry partnerships with tech companies", "Government agencies"]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200", caption: "KTU Campus" },
      { image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200", caption: "KTU Academic Block" }
    ],
    videos: [],
    rankings: {
      national: "Emerging technical university in Rwanda",
      international: "Building international recognition",
      awards: ["National Innovation Awards"],
      accreditations: ["Higher Education Council (HEC) of Rwanda"],
      memberships: ["Association of African Universities"]
    },
    faq: [
      { question: "What engineering programs are available?", answer: "KTU offers civil, electrical, mechanical engineering at bachelor level and engineering management at master level." },
      { question: "Is accommodation available?", answer: "Yes, KTU has on-campus hostels and assists with private accommodation." }
    ],
    downloads: [
      { name: "Fee Structure", url: "https://ktu.ac.rw/admissions/fees", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Kigali City Center", type: "Shopping", distance: "10 min drive" },
      { name: "Kigali International Airport", type: "Transport", distance: "20 min drive" }
    ],
    reviews: [],
    quickFacts: {
      Established: "2016",
      Type: "Public",
      Campuses: "1 (Kigali)",
      Students: "5,000+",
      "Teaching Staff": "200+",
      Faculties: "4 Schools",
      Programs: "20+",
      Intakes: "January, September",
      Language: "English",
      Accommodation: "Available",
      Scholarships: "Available"
    },
    contact: {
      phone: "+250 788 123 456",
      email: "info@ktu.ac.rw",
      website: "https://www.ktu.ac.rw",
      address: "KN 4 Ave, Kigali, Rwanda"
    },
    about: {
      history: "Founded in 2016, KTU was established to meet Rwanda's growing demand for technical and engineering professionals.",
      accreditation: "Accredited by the Higher Education Council (HEC) of Rwanda",
      achievements: ["Modern engineering labs", "Industry partnerships", "5,000+ graduates", "National innovation awards"]
    },
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200"
    ]
  },
  {
    id: "umutarapolytechnic",
    name: "UMUTARA Polytechnic",
    location: "Nyagatare, Eastern Province",
    city: "Nyagatare",
    type: "Public",
    description: "A public polytechnic institution in Eastern Rwanda offering practical technical education in agriculture, engineering, and business.",
    logo: "",
    coverImage: "",
    website: "",
    founded: 1997,
    motto: "Practical Skills for Development",
    accreditationStatus: "Accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Public (Government of Rwanda)",
    email: "info@up.ac.rw",
    telephone: "+250 788 234 567",
    physicalAddress: "Nyagatare, Eastern Province, Rwanda",
    googleMapsLocation: "",
    socialMedia: { facebook: "", twitter: "", instagram: "", linkedin: "", youtube: "" },
    overview: {
      history: "Established in 1997, Umutara Polytechnic has been providing technical education in Eastern Rwanda for over 25 years.",
      campusDescription: "Campus in Nyagatare with farm facilities, engineering workshops, and modern classrooms."
    },
    campuses: [
      { name: "Main Campus", location: "Nyagatare, Eastern Province", description: "Main campus with agricultural and engineering facilities." }
    ],
    academicInfo: {
      schools: [
        { name: "School of Agriculture", description: "Crop Production, Animal Science, Agribusiness." },
        { name: "School of Engineering", description: "Civil, Mechanical, Electrical Engineering." },
        { name: "School of Business", description: "Accounting, Management, Marketing." }
      ],
      departments: [
        { name: "Department of Crop Production", school: "School of Agriculture", description: "Crop science and production." },
        { name: "Department of Animal Science", school: "School of Agriculture", description: "Animal husbandry." },
        { name: "Department of Civil Engineering", school: "School of Engineering", description: "Civil engineering." }
      ],
      undergraduatePrograms: [
        { name: "BSc Agriculture", duration: "4 years", description: "Bachelor in Agriculture." }
      ],
      postgraduatePrograms: [],
      phdPrograms: [],
      diplomaPrograms: [
        { name: "Diploma in Agriculture", duration: "3 years", description: "Diploma in Agriculture." },
        { name: "Diploma in Civil Engineering", duration: "3 years", description: "Diploma in Civil Engineering." }
      ],
      certificatePrograms: [],
      modeOfStudy: ["Full-time"]
    },
    faculties: [
      { name: "Agriculture", description: "Crop Production, Animal Science, Agribusiness", icon: "sprout" },
      { name: "Engineering", description: "Civil, Mechanical, Electrical", icon: "wrench" },
      { name: "Business", description: "Accounting, Management, Marketing", icon: "briefcase" }
    ],
    programs: [
      { name: "Diploma in Agriculture", level: "Diploma", duration: "3 years", faculty: "Agriculture" },
      { name: "BSc Agriculture", level: "Bachelor", duration: "4 years", faculty: "Agriculture" },
      { name: "Diploma in Civil Engineering", level: "Diploma", duration: "3 years", faculty: "Engineering" }
    ],
    tuition: {
      localMin: "500,000",
      localMax: "900,000",
      internationalMin: "1,200",
      internationalMax: "2,500",
      currency: "RWF / USD"
    },
    admission: {
      requirements: ["A-Level certificate with relevant technical subject combination", "English proficiency", "Meet program-specific requirements"],
      entryQualifications: ["A-Level certificate (science/technical track)", "Foundation programs", "Advanced certificate holders for top-up"],
      requiredDocuments: ["Application form", "Academic certificates", "ID copy", "Passport photos", "Application fee receipt"],
      internationalRequirements: ["Valid passport", "Student visa", "HEC equivalence"],
      applicationDeadlines: "Rolling admissions. Two intakes per year.",
      intakePeriods: ["January", "September"],
      howToApply: "Apply in person at the polytechnic admissions office or by mail.",
      applicationFees: "RWF 5,000"
    },
    tuitionDetails: [
      { program: "Engineering & Technology Programs", level: "Bachelor", localAmount: "500,000 - 900,000 RWF/year", internationalAmount: "1,200 - 2,500 USD/year" },
      { program: "Diploma Programs", level: "Diploma", localAmount: "300,000 - 600,000 RWF/year", internationalAmount: "800 - 1,500 USD/year" },
      { program: "Certificate Programs", level: "Diploma", localAmount: "200,000 - 400,000 RWF/year", internationalAmount: "500 - 1,000 USD/year" }
    ],
    scholarships: [
      { name: "Rwanda Government Scholarship", type: "Government", description: "For eligible Rwandan students" }
    ],
    internationalStudent: {
      welcomeGuide: false,
      internationalAdmissions: "Limited international student programs.",
      equivalenceGuidance: "HEC equivalence required.",
      visaInfo: "Student visa required.",
      residencePermit: "Required for extended stays.",
      airportArrival: "",
      orientationWeek: false,
      languageSupport: "",
      exchangePrograms: []
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Limited options in Nyagatare town",
      privateHostels: "Few options available",
      estimatedCost: "RWF 60,000 - 150,000/month"
    },
    studentLife: {
      clubs: ["Agricultural Projects", "Community Development", "Student Farming Initiative"],
      sports: ["Football", "Basketball"],
      events: ["Field Days", "Agricultural Shows"],
      organizations: ["Student Union"]
    },
    facilities: {
      libraries: ["Main Library"],
      labs: ["Farm Facilities", "Engineering Workshops", "Science Laboratories"],
      sports: ["Sports Field"],
      other: ["Wi-Fi", "Health Center", "Student Lounge"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: false,
      jobPlacementSupport: "Limited career support through faculty.",
      alumniNetwork: "Growing alumni network in Eastern Province."
    },
    research: {
      centers: ["Agricultural Research Center"],
      innovationLabs: [],
      publications: ["Research papers in agriculture"],
      conferences: ["Regional agricultural conferences"],
      partnerships: ["Local farming communities", "Government agricultural agencies"]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200", caption: "Umutara Campus" }
    ],
    videos: [],
    rankings: {
      national: "Recognized polytechnic institution in Rwanda",
      international: "",
      awards: [],
      accreditations: ["Higher Education Council (HEC) of Rwanda"],
      memberships: []
    },
    faq: [],
    downloads: [
      { name: "Fee Structure", url: "#", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Nyagatare Town Center", type: "Shopping", distance: "10 min walk" },
      { name: "Nyagatare Hospital", type: "Healthcare", distance: "15 min drive" }
    ],
    reviews: [],
    quickFacts: {
      Established: "1997",
      Type: "Public",
      Campuses: "1 (Nyagatare)",
      Students: "3,000+",
      "Teaching Staff": "100+",
      Faculties: "3 Schools",
      Programs: "10+",
      Intakes: "January, September",
      Language: "English",
      Accommodation: "Available",
      Scholarships: "Available"
    },
    contact: {
      phone: "+250 788 234 567",
      email: "info@up.ac.rw",
      website: "",
      address: "Nyagatare, Eastern Province, Rwanda"
    },
    about: {
      history: "Established in 1997, Umutara Polytechnic has been providing technical education in Eastern Rwanda for over 25 years.",
      accreditation: "Accredited by the Higher Education Council (HEC) of Rwanda",
      achievements: ["Serving Eastern Province", "Practical training focus", "Community partnerships", "Modern farm facilities"]
    },
    images: [
      "https://images.unsplash.com/photo-1525921429624-479b6a26d84c?w=1200",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200"
    ]
  },
  {
    id: "nyanza-rtc",
    name: "Nyanza Republican Institute of Technology",
    location: "Nyanza, Southern Province",
    city: "Nyanza",
    type: "Public",
    description: "A public technical institute in Southern Rwanda specializing in engineering, applied sciences, and technical vocational training.",
    logo: "",
    coverImage: "",
    website: "",
    founded: 2010,
    motto: "Excellence in Technical Education",
    accreditationStatus: "Accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Public (Government of Rwanda)",
    email: "info@nyanza-rtc.ac.rw",
    telephone: "+250 788 345 678",
    physicalAddress: "Nyanza, Southern Province, Rwanda",
    googleMapsLocation: "",
    socialMedia: { facebook: "", twitter: "", instagram: "", linkedin: "", youtube: "" },
    overview: {
      history: "Founded in 2010, the Nyanza Republican Institute of Technology serves the technical education needs of Southern Rwanda.",
      campusDescription: "Campus in Nyanza with engineering labs, computer labs, and workshops."
    },
    campuses: [
      { name: "Main Campus", location: "Nyanza, Southern Province", description: "Main campus with engineering and technical facilities." }
    ],
    academicInfo: {
      schools: [
        { name: "School of Engineering", description: "Civil, Electrical, Mechanical Engineering." },
        { name: "School of ICT", description: "Software Development, Networking, IT Support." },
        { name: "School of Applied Sciences", description: "Laboratory Sciences, Physics, Chemistry." }
      ],
      departments: [
        { name: "Department of Electrical Engineering", school: "School of Engineering", description: "Electrical engineering." },
        { name: "Department of ICT", school: "School of ICT", description: "Information technology." },
        { name: "Department of Laboratory Sciences", school: "School of Applied Sciences", description: "Lab sciences." }
      ],
      undergraduatePrograms: [
        { name: "BSc Information Technology", duration: "4 years", description: "Bachelor in IT." }
      ],
      postgraduatePrograms: [],
      phdPrograms: [],
      diplomaPrograms: [
        { name: "Diploma in Electrical Engineering", duration: "3 years", description: "Diploma in Electrical Engineering." },
        { name: "Diploma in Laboratory Sciences", duration: "3 years", description: "Diploma in Laboratory Sciences." }
      ],
      certificatePrograms: [],
      modeOfStudy: ["Full-time", "Part-time"]
    },
    faculties: [
      { name: "Engineering", description: "Civil, Electrical, Mechanical Engineering", icon: "wrench" },
      { name: "ICT", description: "Software Development, Networking, IT Support", icon: "cpu" },
      { name: "Applied Sciences", description: "Laboratory Sciences, Physics, Chemistry", icon: "flask-conical" }
    ],
    programs: [
      { name: "Diploma in Electrical Engineering", level: "Diploma", duration: "3 years", faculty: "Engineering" },
      { name: "BSc Information Technology", level: "Bachelor", duration: "4 years", faculty: "ICT" },
      { name: "Diploma in Laboratory Sciences", level: "Diploma", duration: "3 years", faculty: "Applied Sciences" }
    ],
    tuition: {
      localMin: "450,000",
      localMax: "850,000",
      internationalMin: "1,000",
      internationalMax: "2,200",
      currency: "RWF / USD"
    },
    admission: {
      requirements: ["A-Level certificate with relevant subject passes", "English proficiency", "Meet program-specific requirements"],
      entryQualifications: ["A-Level certificate", "Advanced diploma holders for top-up", "Equivalent international qualifications"],
      requiredDocuments: ["Application form", "Academic transcripts and certificates", "ID copy or passport", "Passport photos", "Application fee"],
      internationalRequirements: ["Valid passport", "Student visa", "HEC equivalence"],
      applicationDeadlines: "Rolling admissions. Two intakes per year.",
      intakePeriods: ["January", "September"],
      howToApply: "Apply in person at the institute admissions office or by mail.",
      applicationFees: "RWF 5,000"
    },
    tuitionDetails: [
      { program: "Bachelor Programs", level: "Bachelor", localAmount: "450,000 - 850,000 RWF/year", internationalAmount: "1,000 - 2,200 USD/year" },
      { program: "Diploma Programs", level: "Diploma", localAmount: "300,000 - 600,000 RWF/year", internationalAmount: "800 - 1,500 USD/year" },
      { program: "Certificate Programs", level: "Diploma", localAmount: "200,000 - 400,000 RWF/year", internationalAmount: "500 - 1,000 USD/year" }
    ],
    scholarships: [
      { name: "Rwanda Government Scholarship", type: "Government", description: "For qualifying Rwandan students" }
    ],
    internationalStudent: {
      welcomeGuide: false,
      internationalAdmissions: "Limited capacity for international students.",
      equivalenceGuidance: "HEC equivalence required.",
      visaInfo: "Student visa required.",
      residencePermit: "Required for extended stays.",
      airportArrival: "",
      orientationWeek: false,
      languageSupport: "",
      exchangePrograms: []
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Limited in Nyanza, RWF 80,000-200,000/month",
      privateHostels: "Few options available",
      estimatedCost: "RWF 60,000 - 120,000/month"
    },
    studentLife: {
      clubs: ["Technical Projects Club", "Innovation Challenges", "Community Outreach"],
      sports: ["Football", "Basketball", "Volleyball"],
      events: ["Tech Exhibitions", "Career Days"],
      organizations: ["Student Council"]
    },
    facilities: {
      libraries: ["Institute Library"],
      labs: ["Engineering Labs", "Computer Labs", "Science Laboratories", "Workshop"],
      sports: ["Sports Field", "Basketball Court"],
      other: ["Wi-Fi", "Student Lounge"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: false,
      jobPlacementSupport: "Faculty assists with job placements.",
      alumniNetwork: "Growing alumni network."
    },
    research: {
      centers: [],
      innovationLabs: ["Innovation Lab"],
      publications: [],
      conferences: [],
      partnerships: ["Local industry partnerships"]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200", caption: "Nyanza Campus" }
    ],
    videos: [],
    rankings: {
      national: "Serving Southern Province technical education needs",
      international: "",
      awards: [],
      accreditations: ["Higher Education Council (HEC) of Rwanda"],
      memberships: []
    },
    faq: [],
    downloads: [
      { name: "Fee Structure", url: "#", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Nyanza Town", type: "Shopping", distance: "10 min walk" },
      { name: "Nyanza Health Center", type: "Healthcare", distance: "5 min drive" }
    ],
    reviews: [],
    quickFacts: {
      Established: "2010",
      Type: "Public",
      Campuses: "1 (Nyanza)",
      Students: "2,000+",
      "Teaching Staff": "80+",
      Faculties: "3 Schools",
      Programs: "10+",
      Intakes: "January, September",
      Language: "English",
      Accommodation: "Available",
      Scholarships: "Available"
    },
    contact: {
      phone: "+250 788 345 678",
      email: "info@nyanza-rtc.ac.rw",
      website: "",
      address: "Nyanza, Southern Province, Rwanda"
    },
    about: {
      history: "Founded in 2010, the Nyanza Republican Institute of Technology serves the technical education needs of Southern Rwanda.",
      accreditation: "Accredited by the Higher Education Council (HEC) of Rwanda",
      achievements: ["Strong industry links", "Practical curriculum", "Modern laboratories", "Growing enrollment"]
    },
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=1200"
    ]
  },
  {
    id: "kist",
    name: "Kigali Institute of Science and Technology (KIST)",
    location: "Kigali, Rwanda",
    city: "Kigali",
    type: "Public",
    description: "Now merged into the University of Rwanda College of Science and Technology, historically one of Rwanda's most respected technical institutions.",
    logo: "",
    coverImage: "",
    website: "",
    founded: 1997,
    motto: "Science and Technology for Development",
    accreditationStatus: "Accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Public (Government of Rwanda, now part of UR)",
    email: "info@kist.ac.rw",
    telephone: "+250 788 567 890",
    physicalAddress: "KG 11 Ave, Kigali, Rwanda",
    googleMapsLocation: "",
    socialMedia: { facebook: "", twitter: "", instagram: "", linkedin: "", youtube: "" },
    overview: {
      history: "Founded in 1997, KIST was Rwanda's premier technical institute before merging into the University of Rwanda in 2013.",
      campusDescription: "Nyarugenge campus in Kigali with engineering workshops, ICT labs, and science laboratories."
    },
    campuses: [
      { name: "Nyarugenge Campus", location: "KG 11 Ave, Kigali", description: "Historic campus now part of UR College of Science and Technology." }
    ],
    academicInfo: {
      schools: [
        { name: "School of Engineering", description: "Civil, Electrical, Mechanical, Chemical Engineering." },
        { name: "School of ICT", description: "Computer Science, IT, Networking." },
        { name: "School of Applied Sciences", description: "Physics, Chemistry, Biology, Mathematics." }
      ],
      departments: [
        { name: "Department of Mechanical Engineering", school: "School of Engineering", description: "Mechanical engineering." },
        { name: "Department of Computer Science", school: "School of ICT", description: "Computer science." },
        { name: "Department of Physics", school: "School of Applied Sciences", description: "Physics." }
      ],
      undergraduatePrograms: [
        { name: "BSc Mechanical Engineering", duration: "4 years", description: "Bachelor in Mechanical Engineering." },
        { name: "BSc Computer Science", duration: "4 years", description: "Bachelor in Computer Science." }
      ],
      postgraduatePrograms: [],
      phdPrograms: [],
      diplomaPrograms: [
        { name: "Diploma in Electrical Engineering", duration: "3 years", description: "Diploma in Electrical Engineering." }
      ],
      certificatePrograms: [],
      modeOfStudy: ["Full-time"]
    },
    faculties: [
      { name: "Engineering", description: "Civil, Electrical, Mechanical, Chemical", icon: "wrench" },
      { name: "ICT", description: "Computer Science, IT, Networking", icon: "cpu" },
      { name: "Applied Sciences", description: "Physics, Chemistry, Biology, Mathematics", icon: "flask-conical" }
    ],
    programs: [
      { name: "BSc Mechanical Engineering", level: "Bachelor", duration: "4 years", faculty: "Engineering" },
      { name: "BSc Computer Science", level: "Bachelor", duration: "4 years", faculty: "ICT" },
      { name: "Diploma in Electrical Engineering", level: "Diploma", duration: "3 years", faculty: "Engineering" }
    ],
    tuition: {
      localMin: "600,000",
      localMax: "1,100,000",
      internationalMin: "1,500",
      internationalMax: "3,000",
      currency: "RWF / USD"
    },
    admission: {
      requirements: ["A-Level certificate with science subjects", "English proficiency"],
      entryQualifications: ["A-Level certificate", "Advanced diploma holders"],
      requiredDocuments: ["Application form", "Academic transcripts", "ID copy", "Photos"],
      internationalRequirements: ["Valid passport", "Student visa"],
      applicationDeadlines: "Now handled through UR admissions.",
      intakePeriods: ["January", "September"],
      howToApply: "Apply through University of Rwanda admissions.",
      applicationFees: "UR standard fees"
    },
    tuitionDetails: [
      { program: "Engineering Programs (per year)", level: "Bachelor", localAmount: "600,000 - 1,100,000 RWF/year", internationalAmount: "1,500 - 3,000 USD/year" },
      { program: "ICT Programs (per year)", level: "Bachelor", localAmount: "600,000 - 1,000,000 RWF/year", internationalAmount: "1,500 - 2,800 USD/year" },
      { program: "Diploma Programs", level: "Diploma", localAmount: "400,000 - 700,000 RWF/year", internationalAmount: "1,000 - 2,000 USD/year" }
    ],
    scholarships: [
      { name: "Rwanda Government Scholarship", type: "Government", description: "For top STEM students", eligibility: "Rwandan nationals with science backgrounds" }
    ],
    internationalStudent: {
      welcomeGuide: false,
      internationalAdmissions: "Now handled through University of Rwanda.",
      equivalenceGuidance: "HEC equivalence required.",
      visaInfo: "Student visa through Rwanda Immigration.",
      residencePermit: "Required for extended stays.",
      airportArrival: "",
      orientationWeek: false,
      languageSupport: "",
      exchangePrograms: []
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Available within 2km, RWF 120,000-350,000/month",
      privateHostels: "Several options nearby",
      estimatedCost: "RWF 80,000 - 200,000/month"
    },
    studentLife: {
      clubs: ["Technical Projects", "Innovation Hub", "Research Groups"],
      sports: ["Football", "Basketball", "Volleyball"],
      events: ["Tech Conferences", "Career Exhibitions"],
      organizations: ["Student Association", "Engineering Society"]
    },
    facilities: {
      libraries: ["KIST Library"],
      labs: ["Engineering Workshops", "ICT Labs", "Science Laboratories", "Computer Labs"],
      sports: ["Sports Field"],
      other: ["Wi-Fi", "Auditorium", "Student Lounge"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: false,
      jobPlacementSupport: "Faculty assists with job placements for graduates.",
      alumniNetwork: "Strong alumni network in engineering and ICT fields."
    },
    research: {
      centers: ["Engineering Research Lab", "Applied Sciences Research Center"],
      innovationLabs: ["Innovation Lab"],
      publications: ["KIST Research Papers"],
      conferences: ["Annual Science and Technology Conference"],
      partnerships: ["Industry partnerships in technology sector"]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200", caption: "KIST Campus" }
    ],
    videos: [],
    rankings: {
      national: "Historic leader in technical education in Rwanda",
      international: "",
      awards: ["Pioneer Technical Education Institution Award"],
      accreditations: ["Higher Education Council (HEC) of Rwanda"],
      memberships: []
    },
    faq: [
      { question: "Is KIST still operating independently?", answer: "No, KIST was merged into the University of Rwanda in 2013 and is now the UR College of Science and Technology." }
    ],
    downloads: [
      { name: "Fee Structure", url: "#", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Kigali City Center", type: "Shopping", distance: "10 min drive" },
      { name: "Kigali International Airport", type: "Transport", distance: "20 min drive" }
    ],
    reviews: [],
    quickFacts: {
      Established: "1997",
      Type: "Public (Now part of UR)",
      Campuses: "1 (Nyarugenge, Kigali)",
      Students: "Now part of University of Rwanda",
      "Teaching Staff": "Now part of University of Rwanda",
      Faculties: "3 Schools",
      Programs: "15+",
      Intakes: "January, September",
      Language: "English",
      Accommodation: "Available",
      Scholarships: "Available"
    },
    contact: {
      phone: "+250 788 567 890",
      email: "info@kist.ac.rw",
      website: "",
      address: "KG 11 Ave, Kigali, Rwanda"
    },
    about: {
      history: "Founded in 1997, KIST was Rwanda's premier technical institute before merging into the University of Rwanda in 2013.",
      accreditation: "Accredited by the Higher Education Council (HEC) of Rwanda",
      achievements: ["Pioneer technical education", "Strong alumni network", "Industry partnerships", "Research output"]
    },
    images: [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200"
    ]
  },
  {
    id: "isae",
    name: "ISAE University (Institut Superieur d'Agriculture et d'Elevage)",
    location: "Busogo, Northern Province",
    city: "Busogo",
    type: "Public",
    description: "A leading public university specializing in agriculture, veterinary sciences, and environmental studies, serving Rwanda's agricultural sector.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Isae-logo-groupe.jpg",
    coverImage: "",
    website: "http://www.isae.ac.rw",
    founded: 1987,
    motto: "Agriculture and Knowledge for Development",
    accreditationStatus: "Accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Public (Government of Rwanda)",
    email: "info@isae.ac.rw",
    telephone: "+250 788 678 901",
    physicalAddress: "Busogo, Northern Province, Rwanda",
    googleMapsLocation: "",
    socialMedia: { facebook: "", twitter: "", instagram: "", linkedin: "", youtube: "" },
    overview: {
      history: "Established in 1987, ISAE has been at the forefront of agricultural education in Rwanda for over 35 years.",
      campusDescription: "Campus in Busogo with research farms, veterinary clinic, laboratories, and modern classrooms."
    },
    campuses: [
      { name: "Main Campus", location: "Busogo, Northern Province", description: "Main campus with research farm and veterinary clinic facilities." }
    ],
    academicInfo: {
      schools: [
        { name: "School of Agriculture", description: "Agronomy, Crop Science, Soil Science." },
        { name: "School of Veterinary Science", description: "Animal Health, Livestock Management." },
        { name: "School of Environmental Studies", description: "Conservation, Climate, Sustainable Development." },
        { name: "School of Agribusiness", description: "Agricultural Economics, Food Systems." }
      ],
      departments: [
        { name: "Department of Agronomy", school: "School of Agriculture", description: "Crop science." },
        { name: "Department of Animal Health", school: "School of Veterinary Science", description: "Veterinary medicine." },
        { name: "Department of Environmental Conservation", school: "School of Environmental Studies", description: "Environmental science." },
        { name: "Department of Agricultural Economics", school: "School of Agribusiness", description: "Agribusiness." }
      ],
      undergraduatePrograms: [
        { name: "BSc Agronomy", duration: "4 years", description: "Bachelor in Agronomy." },
        { name: "BSc Veterinary Science", duration: "5 years", description: "Bachelor in Veterinary Science." }
      ],
      postgraduatePrograms: [
        { name: "MSc Agriculture", duration: "2 years", description: "Master in Agriculture." }
      ],
      phdPrograms: [],
      diplomaPrograms: [
        { name: "Diploma in Agriculture", duration: "3 years", description: "Diploma in Agriculture." }
      ],
      certificatePrograms: [],
      modeOfStudy: ["Full-time"]
    },
    faculties: [
      { name: "Agriculture", description: "Agronomy, Crop Science, Soil Science", icon: "sprout" },
      { name: "Veterinary Science", description: "Animal Health, Livestock Management", icon: "heart-pulse" },
      { name: "Environmental Studies", description: "Conservation, Climate, Sustainable Development", icon: "leaf" },
      { name: "Agribusiness", description: "Agricultural Economics, Food Systems", icon: "briefcase" }
    ],
    programs: [
      { name: "BSc Agronomy", level: "Bachelor", duration: "4 years", faculty: "Agriculture" },
      { name: "BSc Veterinary Science", level: "Bachelor", duration: "5 years", faculty: "Veterinary Science" },
      { name: "Diploma in Agriculture", level: "Diploma", duration: "3 years", faculty: "Agriculture" },
      { name: "MSc Agriculture", level: "Master", duration: "2 years", faculty: "Agriculture" }
    ],
    tuition: {
      localMin: "500,000",
      localMax: "900,000",
      internationalMin: "1,200",
      internationalMax: "2,500",
      currency: "RWF / USD"
    },
    admission: {
      requirements: ["A-Level certificate with science/agriculture subjects", "English proficiency", "Meet program-specific requirements"],
      entryQualifications: ["A-Level certificate with biology/chemistry/agriculture", "Advanced diploma for top-up", "Equivalent international qualifications"],
      requiredDocuments: ["Application form", "Academic transcripts and certificates", "ID copy or passport", "Passport photos", "Application fee receipt"],
      internationalRequirements: ["Valid passport", "Student visa", "HEC equivalence", "Financial proof"],
      applicationDeadlines: "Rolling admissions. Two intakes per year.",
      intakePeriods: ["January", "September"],
      howToApply: "Apply in person at ISAE admissions office or by post.",
      applicationFees: "RWF 5,000"
    },
    tuitionDetails: [
      { program: "Bachelor Programs (per year)", level: "Bachelor", localAmount: "500,000 - 900,000 RWF/year", internationalAmount: "1,200 - 2,500 USD/year" },
      { program: "Diploma Programs", level: "Diploma", localAmount: "300,000 - 600,000 RWF/year", internationalAmount: "800 - 1,500 USD/year" },
      { program: "Postgraduate Programs", level: "Master", localAmount: "1,000,000 - 1,800,000 RWF/year", internationalAmount: "2,000 - 3,500 USD/year" }
    ],
    scholarships: [
      { name: "Rwanda Government Scholarship", type: "Government", description: "For agriculture students", eligibility: "Rwandan nationals pursuing agriculture" },
      { name: "FAO/World Food Programme Scholarship", type: "International", description: "For students in food security and agriculture programs" }
    ],
    internationalStudent: {
      welcomeGuide: false,
      internationalAdmissions: "Limited international student programs.",
      equivalenceGuidance: "HEC equivalence required.",
      visaInfo: "Student visa required.",
      residencePermit: "Required for extended stays.",
      airportArrival: "",
      orientationWeek: false,
      languageSupport: "",
      exchangePrograms: []
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Limited, RWF 70,000-180,000/month",
      privateHostels: "Few options in Busogo",
      estimatedCost: "RWF 50,000 - 130,000/month"
    },
    studentLife: {
      clubs: ["Farm Projects", "Environmental Club", "Research Groups", "Community Outreach"],
      sports: ["Football", "Basketball", "Volleyball", "Athletics"],
      events: ["Agricultural Shows", "Field Days", "Research Symposiums"],
      organizations: ["Student Union", "Agricultural Society"]
    },
    facilities: {
      libraries: ["Main Library"],
      labs: ["Research Farm", "Veterinary Clinic", "Science Laboratories", "Computer Labs"],
      sports: ["Sports Field"],
      other: ["Wi-Fi", "Student Cafeteria", "Health Center", "Parking"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: false,
      jobPlacementSupport: "Faculty assists with placements in agricultural sector.",
      alumniNetwork: "Alumni working in agriculture and veterinary fields across Rwanda."
    },
    research: {
      centers: ["Agricultural Research Center", "Veterinary Research Lab"],
      innovationLabs: ["Food Processing Lab"],
      publications: ["ISAE Journal of Agriculture", "Research bulletins"],
      conferences: ["Annual Agricultural Conference", "Regional Food Security Forum"],
      partnerships: ["Ministry of Agriculture", "International agricultural research organizations", "Local farming cooperatives"]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200", caption: "ISAE Campus" }
    ],
    videos: [],
    rankings: {
      national: "Leading agricultural university in Rwanda",
      international: "Recognized in East African agricultural research",
      awards: ["Agricultural Innovation Award"],
      accreditations: ["Higher Education Council (HEC) of Rwanda"],
      memberships: ["Association of African Universities", "East African Agricultural Research Network"]
    },
    faq: [
      { question: "What makes ISAE unique?", answer: "ISAE is Rwanda's premier agricultural university with a working research farm and veterinary clinic." },
      { question: "Are there practical training opportunities?", answer: "Yes, ISAE has a research farm and veterinary clinic for hands-on training." }
    ],
    downloads: [
      { name: "Fee Structure (2025/2026)", url: "https://isae.ac.rw/admissions/fees", type: "PDF" },
      { name: "Undergraduate Application Form", url: "https://isae.ac.rw/apply", type: "PDF" },
      { name: "University Prospectus", url: "https://isae.ac.rw/prospectus", type: "PDF" },
      { name: "Research Farm Guide", url: "https://isae.ac.rw/research-farm", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Musanze Town", type: "Shopping", distance: "20 min drive" },
      { name: "Busogo Health Center", type: "Healthcare", distance: "10 min walk" },
      { name: "Volcanoes National Park", type: "Tourism", distance: "30 min drive" }
    ],
    reviews: [],
    quickFacts: {
      Established: "1987",
      Type: "Public",
      Campuses: "1 (Busogo)",
      Students: "3,500+",
      "Teaching Staff": "120+",
      Faculties: "4 Schools",
      Programs: "15+",
      Intakes: "January, September",
      Language: "English, French",
      Accommodation: "Available",
      Scholarships: "Available"
    },
    contact: {
      phone: "+250 788 678 901",
      email: "info@isae.ac.rw",
      website: "",
      address: "Busogo, Northern Province, Rwanda"
    },
    about: {
      history: "Established in 1987, ISAE has been at the forefront of agricultural education in Rwanda for over 35 years.",
      accreditation: "Accredited by the Higher Education Council (HEC) of Rwanda",
      achievements: ["Research farm", "Veterinary training center", "Agricultural innovations", "Regional partnerships"]
    },
    images: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200"
    ]
  },
  {
    id: "auca",
    name: "Adventist University of Central Africa (AUCA)",
    location: "Kigali, Rwanda",
    city: "Kigali",
    type: "Private",
    description: "The first private university to be established in Rwanda (1984), offering accredited undergraduate and graduate programs across six faculties with a Christian Seventh-day Adventist foundation. AUCA hosts the Adventist School of Medicine of East-Central Africa (ASOME) at its Masoro campus.",
    logo: "https://auca.ac.rw/logo.png",
    coverImage: "https://auca.ac.rw/images/auca/image12.jpg",
    website: "https://auca.ac.rw",
    founded: 1984,
    motto: "Excellence in Education",
    accreditationStatus: "Fully accredited by the Higher Education Council (HEC) of Rwanda and the Adventist Accrediting Association",
    ownership: "Private (Non-profit, Seventh-day Adventist)",
    email: "info@auca.ac.rw",
    telephone: "+250 724 796 998",
    physicalAddress: "Masoro Campus, Ndera Sector, Gasabo District, Kigali, Rwanda",
    googleMapsLocation: "",
    socialMedia: { facebook: "https://www.facebook.com/AUCAofficial/", twitter: "https://x.com/AUCA_SA", instagram: "https://www.instagram.com/aucarwanda/", linkedin: "https://rw.linkedin.com/company/adventist-university-of-central-africa", youtube: "" },
    overview: {
      history: "Founded in 1978 and officially opened on 15 October 1984. AUCA received its definitive operating license via law n°0056/05 of 3 February 1988, granting legal personality as a non-profit association. It was the first Adventist university chartered on the African continent and the first private university in Rwanda. AUCA operates three campuses: Masoro (main), Gishushu (science and technology), and Ngoma (nursing).",
      campusDescription: "AUCA has three campuses: Masoro Campus (main) in Gasabo District, Kigali — a 1500-capacity conference hall and academic blocks; Gishushu Campus (Science and Technology Centre) in Remera, Kigali for IT and Master's programs; and Ngoma Campus in Karongi District, Western Province for Nursing and Midwifery."
    },
    campuses: [
      { name: "Masoro Campus (Main)", location: "Ndera Sector, Gasabo District, Kigali", description: "Main campus since 2005 hosting major academic blocks, 1500-capacity conference hall, and the Adventist School of Medicine (ASOME)." },
      { name: "Gishushu Campus", location: "Remera Sector, Gasabo District, Kigali", description: "Science and Technology Centre focusing on IT programs, evening studies, and Master's degrees." },
      { name: "Ngoma Campus", location: "Karongi District, Western Province", description: "Ngoma Adventist College of Health Sciences specializing in Nursing and Midwifery programs." }
    ],
    academicInfo: {
      schools: [
        { name: "Faculty of Nursing and Midwifery", description: "BSc in Nursing and Midwifery programs, based at Ngoma Campus." },
        { name: "School of Medicine (ASOME)", description: "Adventist School of Medicine of East-Central Africa — MD program (6.5 years + internship), located at Masoro Campus." },
        { name: "Faculty of Information Technology", description: "BSc in Software Engineering, Information Management, Networks and Communication Systems." },
        { name: "Faculty of Business Administration", description: "BBA in Accounting, Management, Finance, and Marketing." },
        { name: "Faculty of Education", description: "BA in English/French, Accounting & IT, Geography & History." },
        { name: "Faculty of Theology", description: "Theological education and ministry training." }
      ],
      departments: [
        { name: "Department of Nursing", school: "Faculty of Nursing and Midwifery", description: "Nursing education and clinical training." },
        { name: "Department of Midwifery", school: "Faculty of Nursing and Midwifery", description: "Midwifery education and maternal health." },
        { name: "Department of Medicine", school: "School of Medicine (ASOME)", description: "Medical doctor program with competency-based curriculum." },
        { name: "Department of Software Engineering", school: "Faculty of Information Technology", description: "Software development and engineering." },
        { name: "Department of Information Management", school: "Faculty of Information Technology", description: "Information systems and management." },
        { name: "Department of Networks", school: "Faculty of Information Technology", description: "Network and communication systems." },
        { name: "Department of Accounting", school: "Faculty of Business Administration", description: "Accounting education." },
        { name: "Department of Finance", school: "Faculty of Business Administration", description: "Finance and investment." },
        { name: "Department of Management", school: "Faculty of Business Administration", description: "Business management." },
        { name: "Department of Marketing", school: "Faculty of Business Administration", description: "Marketing and sales." }
      ],
      undergraduatePrograms: [
        { name: "BSc in Nursing", duration: "4 years", description: "Comprehensive nursing education with clinical practice." },
        { name: "BSc in Midwifery", duration: "4 years", description: "Midwifery training for maternal and child health." },
        { name: "BSc in Software Engineering", duration: "4 years", description: "Full-stack software development and engineering." },
        { name: "BSc in Information Management", duration: "4 years", description: "Information systems and data management." },
        { name: "BSc in Networks and Communication Systems", duration: "4 years", description: "Network engineering and telecommunications." },
        { name: "BBA in Accounting", duration: "3 years", description: "Accounting and financial management." },
        { name: "BBA in Management", duration: "3 years", description: "Business management and administration." },
        { name: "BBA in Finance", duration: "3 years", description: "Finance and investment management." },
        { name: "BBA in Marketing", duration: "3 years", description: "Marketing and brand management." },
        { name: "BA in English Language and Literature & French", duration: "3 years", description: "Language education dual specialization." },
        { name: "BA in Accounting and Information Technology", duration: "3 years", description: "Integrated accounting and IT education." },
        { name: "BA in Geography and History", duration: "3 years", description: "Social sciences education dual specialization." }
      ],
      postgraduatePrograms: [
        { name: "Master's in IT", duration: "2 years", description: "Advanced IT studies at Gishushu Campus." }
      ],
      phdPrograms: [],
      diplomaPrograms: [],
      certificatePrograms: [],
      modeOfStudy: ["Full-time", "Evening"]
    },
    faculties: [
      { name: "Faculty of Nursing and Midwifery", description: "Health sciences education at Ngoma Campus", icon: "Heart" },
      { name: "School of Medicine (ASOME)", description: "Medical education at Masoro Campus", icon: "Stethoscope" },
      { name: "Faculty of Information Technology", description: "IT and computing programs", icon: "Monitor" },
      { name: "Faculty of Business Administration", description: "Business and management programs", icon: "Briefcase" },
      { name: "Faculty of Education", description: "Teacher training and education", icon: "BookOpen" },
      { name: "Faculty of Theology", description: "Theological education", icon: "Bookmark" }
    ],
    programs: [
      { name: "BSc Nursing", level: "Bachelor", duration: "4 years", faculty: "Faculty of Nursing and Midwifery" },
      { name: "BSc Midwifery", level: "Bachelor", duration: "4 years", faculty: "Faculty of Nursing and Midwifery" },
      { name: "MD (Doctor of Medicine)", level: "Bachelor", duration: "6.5 years", faculty: "School of Medicine (ASOME)" },
      { name: "BSc Software Engineering", level: "Bachelor", duration: "4 years", faculty: "Faculty of Information Technology" },
      { name: "BSc Information Management", level: "Bachelor", duration: "4 years", faculty: "Faculty of Information Technology" },
      { name: "BSc Networks & Communication Systems", level: "Bachelor", duration: "4 years", faculty: "Faculty of Information Technology" },
      { name: "BBA Accounting", level: "Bachelor", duration: "3 years", faculty: "Faculty of Business Administration" },
      { name: "BBA Management", level: "Bachelor", duration: "3 years", faculty: "Faculty of Business Administration" },
      { name: "BBA Finance", level: "Bachelor", duration: "3 years", faculty: "Faculty of Business Administration" },
      { name: "BBA Marketing", level: "Bachelor", duration: "3 years", faculty: "Faculty of Business Administration" },
      { name: "BA English & French", level: "Bachelor", duration: "3 years", faculty: "Faculty of Education" },
      { name: "BA Accounting & IT", level: "Bachelor", duration: "3 years", faculty: "Faculty of Education" },
      { name: "BA Geography & History", level: "Bachelor", duration: "3 years", faculty: "Faculty of Education" }
    ],
    tuition: { localMin: "600,000", localMax: "770,000", internationalMin: "600", internationalMax: "2,000", currency: "RWF" },
    admission: {
      requirements: ["Secondary school certificate", "Entrance examination", "Minimum A-Level grades: CCC-BCC", "English proficiency"],
      entryQualifications: ["A-Level certificate with minimum 2 principal passes", "Equivalent international secondary qualification"],
      requiredDocuments: ["Completed application form", "Academic transcripts and certificates", "Passport photos", "National ID or passport", "Application fee"],
      internationalRequirements: ["Valid passport", "Equivalent secondary qualifications", "English proficiency (TOEFL/IELTS if needed)", "Student visa documentation"],
      applicationDeadlines: "Rolling admissions with intakes in September and January",
      intakePeriods: ["September", "January"],
      howToApply: "Apply online through the AUCA admissions portal at https://web.auca.ac.rw/admissions/undergraduate-requirements",
      applicationFees: "Contact admissions office"
    },
    tuitionDetails: [
      { program: "BSc Nursing", level: "Undergraduate", localAmount: "676,000/yr", internationalAmount: "$2,000/yr" },
      { program: "BSc Midwifery", level: "Undergraduate", localAmount: "676,000/yr", internationalAmount: "$2,000/yr" },
      { program: "BSc Software Engineering", level: "Undergraduate", localAmount: "770,652/yr", internationalAmount: "$700/yr" },
      { program: "BSc Information Management", level: "Undergraduate", localAmount: "770,652/yr", internationalAmount: "$700/yr" },
      { program: "BSc Networks & Communication Systems", level: "Undergraduate", localAmount: "770,652/yr", internationalAmount: "$700/yr" },
      { program: "BBA Accounting", level: "Undergraduate", localAmount: "713,520/yr", internationalAmount: "$670/yr" },
      { program: "BBA Management", level: "Undergraduate", localAmount: "713,520/yr", internationalAmount: "$670/yr" },
      { program: "BBA Finance", level: "Undergraduate", localAmount: "713,520/yr", internationalAmount: "$670/yr" },
      { program: "BBA Marketing", level: "Undergraduate", localAmount: "713,520/yr", internationalAmount: "$670/yr" },
      { program: "BA Education Programs", level: "Undergraduate", localAmount: "661,200/yr", internationalAmount: "$600/yr" }
    ],
    scholarships: [
      { name: "Adventist Scholarship", type: "University", description: "Financial aid for Seventh-day Adventist Church members." },
      { name: "Merit-Based Scholarship", type: "University", description: "Awarded to top-performing students based on academic excellence." },
      { name: "Need-Based Grant", type: "University", description: "Financial assistance for students with demonstrated financial need." }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "International students from all countries welcome. Apply through the online portal with required academic documents and passport.",
      equivalenceGuidance: "International qualifications evaluated by the Higher Education Council (HEC) of Rwanda for equivalence.",
      visaInfo: "Student visa information available through Rwanda Immigration. AUCA provides admission letters to support visa applications.",
      residencePermit: "Residence permit application guidance provided upon arrival.",
      airportArrival: "Airport pickup can be arranged upon request.",
      orientationWeek: true,
      languageSupport: "English is the language of instruction. Additional language support available.",
      exchangePrograms: ["Loma Linda University (USA)", "Other Adventist university exchanges"]
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Private apartments available in Ndera and Kimironko areas near Masoro Campus.",
      privateHostels: "Private student hostels available near all campuses.",
      estimatedCost: "RWF 100,000 - 200,000/month",
      onCampusHostels: "Limited on-campus housing available at Masoro Campus",
      accommodationOffice: "Contact AUCA Student Affairs office for accommodation assistance."
    },
    studentLife: {
      clubs: ["Christian Youth Fellowship", "Health Sciences Club", "IT Club", "Business Club", "Music and Choir"],
      sports: ["Basketball", "Football (Soccer)", "Volleyball", "Athletics"],
      events: ["Spiritual Emphasis Week", "Health Outreach Programs", "Career Day", "Cultural Day"],
      organizations: ["Student Guild", "Adventist Youth Society", "Community Service Groups"]
    },
    facilities: {
      libraries: ["AUCA Main Library at Masoro Campus — extensive print and digital collections"],
      labs: ["Computer Labs at Gishushu Campus", "Nursing Skills Lab at Ngoma Campus", "Medical Simulation Lab at Masoro Campus"],
      sports: ["Basketball court", "Football pitch", "Volleyball court"],
      other: ["1500-capacity conference hall", "On-campus cafeteria", "Student lounges", "Chapel"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "AUCA career services assist with job placement and internships.",
      alumniNetwork: "Growing alumni network across East Africa and internationally."
    },
    research: {
      centers: ["Research and Innovation Center"],
      innovationLabs: ["IT Innovation Lab at Gishushu Campus"],
      publications: [],
      conferences: ["Annual Research Conference"],
      partnerships: ["Loma Linda University (USA)", "Ministry of Health Rwanda", "Adventist Health Network"]
    },
    gallery: [],
    videos: [],
    rankings: {
      national: "#10 in Rwanda",
      international: "#7 in Kigali",
      awards: ["First Adventist university chartered in Africa", "First private university in Rwanda"],
      accreditations: ["Higher Education Council (HEC) Rwanda", "Adventist Accrediting Association (AAA)", "International Board of Education (IBE)"],
      memberships: ["Association of Seventh-day Adventist Higher Educational Institutions"]
    },
    faq: [
      { question: "Is AUCA accredited?", answer: "Yes, AUCA is fully accredited by the Higher Education Council (HEC) of Rwanda, the Adventist Accrediting Association, and the International Board of Education." },
      { question: "Does AUCA offer medical studies?", answer: "Yes, AUCA hosts ASOME (Adventist School of Medicine of East-Central Africa) at its Masoro Campus, offering a 6.5-year MD program." },
      { question: "What is the tuition at AUCA?", answer: "Tuition varies by program: BBA programs ~713,520 RWF/yr, IT programs ~770,652 RWF/yr, Nursing ~676,000 RWF/yr, Education ~661,200 RWF/yr." },
      { question: "Are international students welcome?", answer: "Yes, AUCA welcomes international students from all countries. The university provides visa support and has a diverse student body." },
      { question: "Does AUCA have accommodation?", answer: "Limited on-campus housing is available. Private apartments and hostels are available near Masoro, Gishushu, and Ngoma campuses." }
    ],
    downloads: [
      { name: "Fee Structure (2025/2026)", url: "https://auca.ac.rw/wp-content/uploads/2025/07/AUCA-Fee-Structure-2025-2026-Nursing.pdf", type: "PDF" },
      { name: "Undergraduate Application Form", url: "https://auca.ac.rw/apply", type: "PDF" },
      { name: "Postgraduate Application Form", url: "https://auca.ac.rw/postgraduate-apply", type: "PDF" },
      { name: "ASOME Medical Program Guide", url: "https://share.google/hk77xl2Ja06rouRqh", type: "PDF" },
      { name: "University Prospectus", url: "https://auca.ac.rw/prospectus", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Kimironko Market", type: "Shopping", distance: "3 km from Masoro" },
      { name: "Kigali International Airport", type: "Transport", distance: "8 km" },
      { name: "Kigali Convention Centre", type: "Convention", distance: "10 km" },
      { name: "King Faisal Hospital", type: "Healthcare", distance: "7 km" }
    ],
    reviews: [
      { name: "Marie U.", rating: 4, comment: "AUCA provides a great Christian learning environment with dedicated faculty.", date: "2025-09-15" },
      { name: "John K.", rating: 4, comment: "The nursing program at Ngoma Campus is excellent with practical training.", date: "2025-06-20" }
    ],
    quickFacts: {
      Established: "1978 (opened 1984)",
      Type: "Private (Adventist)",
      Campuses: "3 (Masoro, Gishushu, Ngoma)",
      "First Private University": "In Rwanda",
      Faculties: "6",
      Programs: "13+",
      Language: "English",
      Intakes: "September, January",
      Accommodation: "Available (limited)",
      "Medical School": "ASOME (6.5 yr MD)",
      "Student Population": "2,500+",
      Accreditation: "HEC + AAA + IBE"
    },
    contact: {
      phone: "+250 724 796 998",
      email: "info@auca.ac.rw",
      website: "https://auca.ac.rw",
      address: "Masoro Campus, Ndera Sector, Gasabo District, Kigali, Rwanda"
    },
    about: {
      history: "Founded in 1978 and officially opened in 1984, AUCA was the first private university in Rwanda and the first Adventist university on the African continent. It operates three campuses and hosts the Adventist School of Medicine of East-Central Africa (ASOME).",
      accreditation: "Fully accredited by HEC Rwanda, Adventist Accrediting Association, and International Board of Education",
      achievements: ["First private university in Rwanda", "First Adventist university chartered in Africa", "Hosts ASOME medical school", "Three campuses nationwide", "1500-capacity conference facility"]
    },
    images: [
      "https://auca.ac.rw/images/auca/image3.jpg",
      "https://auca.ac.rw/images/auca/image5.jpg",
      "https://auca.ac.rw/images/auca/image7.jpg",
      "https://auca.ac.rw/images/auca/image2.png"
    ]
  },
  {
    id: "cur",
    name: "Catholic University of Rwanda (CUR)",
    location: "Huye (Butare), Southern Province, Rwanda",
    city: "Huye",
    type: "Private",
    description: "A Catholic-affiliated private university in Huye (Butare) offering quality undergraduate and graduate programs across six faculties with a commitment to holistic education, research, and community service.",
    logo: "https://cur.ac.rw/curLogoWhite.png",
    coverImage: "https://cur.ac.rw/mis/main/img/4c4eb882b016f9df1f03c4d661d37bb9.png",
    website: "https://cur.ac.rw",
    founded: 2010,
    motto: "Audi et Aude (Hear and Dare)",
    accreditationStatus: "Fully accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Private (Non-profit, Catholic Church)",
    email: "catholic.university.rwanda@cur.ac.rw",
    telephone: "+250 733 214 677",
    physicalAddress: "PO Box 49, Butare (Huye), Southern Province, Rwanda",
    googleMapsLocation: "",
    socialMedia: { facebook: "", twitter: "", instagram: "", linkedin: "", youtube: "" },
    overview: {
      history: "Founded in 2010 as a private Catholic university in Butare (Huye), Southern Province. CUR is affiliated with the Catholic Church and committed to providing quality education rooted in Christian values. The university has grown to serve 2,500+ students across multiple faculties.",
      campusDescription: "Main campus in Butare (Huye), Southern Province, with modern academic buildings, library, and student facilities. CUR also operates additional campuses in other regions."
    },
    campuses: [
      { name: "Huye Main Campus (Taba)", location: "Huye, Southern Province", description: "Main campus with academic buildings, library, and student services." }
    ],
    academicInfo: {
      schools: [
        { name: "Faculty of Education", description: "Teacher training and education programs." },
        { name: "Faculty of Social Work", description: "Social work and community development." },
        { name: "Faculty of Health Sciences", description: "Nursing, public health, and related programs." },
        { name: "Faculty of Business and Economics", description: "Business administration, accounting, finance, and economics." },
        { name: "Faculty of Law", description: "Legal education and research." },
        { name: "Faculty of Science and Technology", description: "Computer science, IT, and applied sciences." }
      ],
      departments: [
        { name: "Department of Education", school: "Faculty of Education", description: "Teacher training and curriculum development." },
        { name: "Department of Social Work", school: "Faculty of Social Work", description: "Social welfare and community practice." },
        { name: "Department of Nursing", school: "Faculty of Health Sciences", description: "Nursing education and clinical practice." },
        { name: "Department of Public Health", school: "Faculty of Health Sciences", description: "Public health and epidemiology." },
        { name: "Department of Business Administration", school: "Faculty of Business and Economics", description: "Management and administration." },
        { name: "Department of Accounting", school: "Faculty of Business and Economics", description: "Accounting and finance." },
        { name: "Department of Law", school: "Faculty of Law", description: "Legal studies." },
        { name: "Department of Computer Science", school: "Faculty of Science and Technology", description: "Computing and IT." }
      ],
      undergraduatePrograms: [
        { name: "Bachelor of Education", duration: "3 years", description: "Teacher training for secondary education." },
        { name: "Bachelor of Social Work", duration: "3 years", description: "Social work and community development." },
        { name: "Bachelor of Science in Nursing", duration: "4 years", description: "Professional nursing education." },
        { name: "Bachelor of Public Health", duration: "4 years", description: "Public health practice and policy." },
        { name: "Bachelor of Business Administration", duration: "3 years", description: "Business management." },
        { name: "Bachelor of Accounting", duration: "3 years", description: "Accounting and financial management." },
        { name: "Bachelor of Laws (LLB)", duration: "4 years", description: "Legal education." },
        { name: "Bachelor of Computer Science", duration: "3 years", description: "Computer science and programming." }
      ],
      postgraduatePrograms: [
        { name: "Master of Education", duration: "2 years", description: "Advanced education studies." },
        { name: "Master of Public Health", duration: "2 years", description: "Advanced public health." },
        { name: "Master of Business Administration", duration: "2 years", description: "Executive and professional MBA." }
      ],
      phdPrograms: [
        { name: "PhD in Education", duration: "3-4 years", description: "Doctoral research in education." }
      ],
      diplomaPrograms: [],
      certificatePrograms: [],
      modeOfStudy: ["Full-time", "Evening", "Weekend"]
    },
    faculties: [
      { name: "Faculty of Education", description: "Teacher training programs", icon: "BookOpen" },
      { name: "Faculty of Social Work", description: "Social welfare programs", icon: "Heart" },
      { name: "Faculty of Health Sciences", description: "Nursing and public health", icon: "Stethoscope" },
      { name: "Faculty of Business and Economics", description: "Business and accounting", icon: "Briefcase" },
      { name: "Faculty of Law", description: "Legal education", icon: "Bookmark" },
      { name: "Faculty of Science and Technology", description: "Computing and IT", icon: "Monitor" }
    ],
    programs: [
      { name: "Bachelor of Education", level: "Bachelor", duration: "3 years", faculty: "Faculty of Education" },
      { name: "Bachelor of Social Work", level: "Bachelor", duration: "3 years", faculty: "Faculty of Social Work" },
      { name: "BSc Nursing", level: "Bachelor", duration: "4 years", faculty: "Faculty of Health Sciences" },
      { name: "Bachelor of Public Health", level: "Bachelor", duration: "4 years", faculty: "Faculty of Health Sciences" },
      { name: "BBA", level: "Bachelor", duration: "3 years", faculty: "Faculty of Business and Economics" },
      { name: "Bachelor of Accounting", level: "Bachelor", duration: "3 years", faculty: "Faculty of Business and Economics" },
      { name: "LLB", level: "Bachelor", duration: "4 years", faculty: "Faculty of Law" },
      { name: "BSc Computer Science", level: "Bachelor", duration: "3 years", faculty: "Faculty of Science and Technology" },
      { name: "Master of Education", level: "Master", duration: "2 years", faculty: "Faculty of Education" },
      { name: "MPH", level: "Master", duration: "2 years", faculty: "Faculty of Health Sciences" },
      { name: "MBA", level: "Master", duration: "2 years", faculty: "Faculty of Business and Economics" }
    ],
    tuition: { localMin: "800,000", localMax: "1,500,000", internationalMin: "1,200", internationalMax: "2,000", currency: "RWF" },
    admission: {
      requirements: ["A-Level certificate with minimum 2 principal passes", "Entrance examination for some programs"],
      entryQualifications: ["Upper secondary school certificate", "Equivalent international qualifications"],
      requiredDocuments: ["Application form", "Academic transcripts", "National ID or passport", "Passport photos", "Application fee"],
      internationalRequirements: ["Valid passport", "Academic transcripts translated to English", "Student visa", "Proof of financial support"],
      applicationDeadlines: "Rolling admissions. Intakes in September and January.",
      intakePeriods: ["September", "January"],
      howToApply: "Apply online through the CUR admissions portal at https://cur.ac.rw or contact admissions office.",
      applicationFees: "Contact admissions office"
    },
    tuitionDetails: [
      { program: "Undergraduate Programs", level: "Undergraduate", localAmount: "900,000 - 1,500,000/yr", internationalAmount: "$1,200 - $2,000/yr" },
      { program: "Master's Programs", level: "Postgraduate", localAmount: "1,500,000 - 2,500,000/yr", internationalAmount: "$2,000 - $3,500/yr" }
    ],
    scholarships: [
      { name: "Catholic Church Scholarship", type: "University", description: "Financial support for students recommended by Catholic parishes." },
      { name: "Merit-Based Scholarship", type: "University", description: "Awarded to top-performing students." },
      { name: "Need-Based Grant", type: "University", description: "Financial assistance for economically disadvantaged students." }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "International students welcome. Contact admissions office for specific requirements.",
      equivalenceGuidance: "International qualifications evaluated by HEC Rwanda for equivalence.",
      visaInfo: "Student visa support provided with admission letter.",
      residencePermit: "Residence permit assistance upon arrival.",
      airportArrival: "Airport pickup can be arranged.",
      orientationWeek: true,
      languageSupport: "English and French instruction available.",
      exchangePrograms: ["Catholic university exchange programs", "UNESCO partnership programs"]
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Private apartments available in Huye town.",
      privateHostels: "Private student hostels near campus.",
      estimatedCost: "RWF 80,000 - 150,000/month",
      onCampusHostels: "Limited on-campus housing available",
      accommodationOffice: "Contact CUR Student Affairs office."
    },
    studentLife: {
      clubs: ["Catholic Students Association", "Debate Club", "Health Club", "Business Club"],
      sports: ["Football", "Basketball", "Volleyball"],
      events: ["Career Day", "Community Service Week", "Spiritual Retreats"],
      organizations: ["Student Guild", "Catholic Youth Organization"]
    },
    facilities: {
      libraries: ["CUR Main Library — extensive collection of academic resources"],
      labs: ["Computer Lab", "Nursing Skills Lab", "Science Lab"],
      sports: ["Football pitch", "Basketball court", "Volleyball court"],
      other: ["Multi-purpose hall", "Cafeteria", "Chapel"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "Career services assist with job placement and internships.",
      alumniNetwork: "Growing alumni network."
    },
    research: {
      centers: ["Research and Innovation Center"],
      innovationLabs: [],
      publications: [],
      conferences: ["Annual Research Conference"],
      partnerships: ["UNESCO", "Morgan State University (USA)", "GreenTech Mobility Project"]
    },
    gallery: [],
    videos: [],
    rankings: {
      national: "",
      international: "",
      awards: ["Catholic University of the Year (Rwanda)"],
      accreditations: ["Higher Education Council (HEC) Rwanda"],
      memberships: ["International Association of Catholic Universities (IACU)"]
    },
    faq: [
      { question: "Is CUR accredited?", answer: "Yes, CUR is fully accredited by the Higher Education Council (HEC) of Rwanda." },
      { question: "What programs does CUR offer?", answer: "CUR offers undergraduate and graduate programs across six faculties including Education, Social Work, Health Sciences, Business, Law, and Science & Technology." },
      { question: "What is the tuition at CUR?", answer: "Undergraduate tuition ranges from 900,000 - 1,500,000 RWF/year depending on the program." },
      { question: "Does CUR have accommodation?", answer: "Limited on-campus housing is available. Private hostels and apartments are also available near campus." },
      { question: "Is CUR affiliated with the Catholic Church?", answer: "Yes, CUR is a Catholic university officially affiliated with the Catholic Church in Rwanda." }
    ],
    downloads: [
      { name: "Fee Structure (2025/2026)", url: "https://cur.ac.rw/admissions/fees", type: "PDF" },
      { name: "Undergraduate Application Form", url: "https://cur.ac.rw/apply", type: "PDF" },
      { name: "Postgraduate Application Form", url: "https://cur.ac.rw/postgraduate-apply", type: "PDF" },
      { name: "University Prospectus", url: "https://cur.ac.rw/prospectus", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Huye Town Center", type: "Shopping", distance: "1 km" },
      { name: "Ethnographic Museum of Rwanda", type: "Tourism", distance: "3 km" },
      { name: "UR Huye Campus", type: "Education", distance: "3 km" },
      { name: "Butare Hospital", type: "Healthcare", distance: "2 km" }
    ],
    reviews: [
      { name: "Jean d'Amour", rating: 4, comment: "Good Catholic university with dedicated faculty and strong community values.", date: "2025-08-10" },
      { name: "Alice M.", rating: 3, comment: "Affordable tuition and supportive learning environment.", date: "2025-05-22" }
    ],
    quickFacts: {
      Established: "2010",
      Type: "Private (Catholic)",
      Location: "Huye (Butare)",
      Students: "2,500+",
      Faculties: "6",
      Programs: "11+",
      Language: "English, French",
      Intakes: "September, January",
      Accommodation: "Available (limited)",
      "Student-Faculty Ratio": "15:1",
      Accreditation: "HEC Rwanda",
      Affiliation: "Catholic Church"
    },
    contact: {
      phone: "+250 733 214 677",
      email: "catholic.university.rwanda@cur.ac.rw",
      website: "https://cur.ac.rw",
      address: "PO Box 49, Butare (Huye), Southern Province, Rwanda"
    },
    about: {
      history: "Founded in 2010 as a private Catholic university in Butare (Huye), CUR is dedicated to providing quality education rooted in Catholic values and has partnerships with international institutions including UNESCO and Morgan State University.",
      accreditation: "Fully accredited by the Higher Education Council (HEC) of Rwanda",
      achievements: ["2,500+ students enrolled", "6 faculties", "International partnerships", "UNESCO collaboration", "Catholic Church affiliation"]
    },
    images: [
      "https://cur.ac.rw/mis/main/img/nyange.png",
      "https://cur.ac.rw/mis/main/img/paterneshipWithSEAMK.png",
      "https://cur.ac.rw/mis/main/img/facultyBanner003.png"
    ]
  },
  {
    id: "eaur",
    name: "East African University Rwanda (EAUR)",
    location: "Kigali, Rwanda",
    city: "Kigali",
    type: "Private",
    description: "A private university in Kigali offering affordable undergraduate programs in business, education, communication, tourism, and creative arts with a focus on practical skills and industry readiness.",
    logo: "https://eaur.ac.rw/wp-content/uploads/2019/07/edited-logo.png",
    coverImage: "https://eaur.ac.rw/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-12.37.49.jpeg",
    website: "https://eaur.ac.rw",
    founded: 2016,
    motto: "Excellence, Diversity, Service",
    accreditationStatus: "Accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Private (For-profit)",
    email: "info@eaur.ac.rw",
    telephone: "+250 788 491 333",
    physicalAddress: "KG 203 St, Remera, Kigali, Rwanda",
    googleMapsLocation: "",
    socialMedia: { facebook: "https://www.facebook.com/eastafricanuniversityrwanda/", twitter: "https://twitter.com/eauniversityrw", instagram: "https://www.instagram.com/eastafricanuniversityrwanda/", linkedin: "", youtube: "https://www.youtube.com/channel/UCibbPd8fYp-nY-pMMnBpXrQ" },
    overview: {
      history: "East African University Rwanda (EAUR) was established in 2016 as a private higher education institution in Remera, Kigali. The university focuses on providing affordable, career-oriented education with a practical approach to learning.",
      campusDescription: "Main campus in Remera, Kigali with modern academic buildings, library, and student facilities."
    },
    campuses: [
      { name: "Remera Main Campus", location: "KG 203 St, Remera, Kigali", description: "Main campus in Remera with academic buildings and student services." }
    ],
    academicInfo: {
      schools: [
        { name: "Faculty of Management Studies", description: "Business administration, accounting, and economics." },
        { name: "Faculty of Mass Communication", description: "Journalism, media, and communication studies." },
        { name: "Faculty of Education", description: "Teacher training and education programs." },
        { name: "Faculty of Tourism and Hospitality", description: "Leisure, tourism, and hotel management." },
        { name: "Faculty of Creative Arts", description: "Film making, industrial fine art, and design." }
      ],
      departments: [
        { name: "Department of Business Administration", school: "Faculty of Management Studies", description: "Business and management." },
        { name: "Department of Accounting", school: "Faculty of Management Studies", description: "Accounting." },
        { name: "Department of Economics", school: "Faculty of Management Studies", description: "Economics and finance." },
        { name: "Department of Journalism", school: "Faculty of Mass Communication", description: "Journalism and media." },
        { name: "Department of Education", school: "Faculty of Education", description: "Teacher training." },
        { name: "Department of Tourism", school: "Faculty of Tourism and Hospitality", description: "Tourism and hotel management." },
        { name: "Department of Film Making", school: "Faculty of Creative Arts", description: "Film production." },
        { name: "Department of Industrial Fine Art", school: "Faculty of Creative Arts", description: "Fine art and design." }
      ],
      undergraduatePrograms: [
        { name: "BBA with Honours in Economics", duration: "3 years", description: "Economics and business." },
        { name: "BBA with Honours in Accounting", duration: "3 years", description: "Accounting and finance." },
        { name: "Bachelor in Mass Communication", duration: "3 years", description: "Media and communication." },
        { name: "Bachelor in Education", duration: "3 years", description: "Teacher training." },
        { name: "Bachelor in Leisure Tourism & Hotel Management", duration: "3 years", description: "Tourism and hospitality." },
        { name: "Bachelor in Film Making & Production", duration: "3 years", description: "Film and creative production." },
        { name: "Bachelor in Industrial Fine Art & Design", duration: "3 years", description: "Art and design." }
      ],
      postgraduatePrograms: [],
      phdPrograms: [],
      diplomaPrograms: [
        { name: "Advanced Diploma in Industrial and Fine Arts", duration: "2 years", description: "Diploma in art and design." }
      ],
      certificatePrograms: [],
      modeOfStudy: ["Full-time", "Evening"]
    },
    faculties: [
      { name: "Faculty of Management Studies", description: "Business programs", icon: "Briefcase" },
      { name: "Faculty of Mass Communication", description: "Media and journalism", icon: "Globe" },
      { name: "Faculty of Education", description: "Teacher training", icon: "BookOpen" },
      { name: "Faculty of Tourism and Hospitality", description: "Tourism management", icon: "MapPin" },
      { name: "Faculty of Creative Arts", description: "Film and fine arts", icon: "Camera" }
    ],
    programs: [
      { name: "BBA Economics", level: "Bachelor", duration: "3 years", faculty: "Faculty of Management Studies" },
      { name: "BBA Accounting", level: "Bachelor", duration: "3 years", faculty: "Faculty of Management Studies" },
      { name: "BA Mass Communication", level: "Bachelor", duration: "3 years", faculty: "Faculty of Mass Communication" },
      { name: "BA Education", level: "Bachelor", duration: "3 years", faculty: "Faculty of Education" },
      { name: "BA Tourism & Hotel Management", level: "Bachelor", duration: "3 years", faculty: "Faculty of Tourism and Hospitality" },
      { name: "BA Film Making & Production", level: "Bachelor", duration: "3 years", faculty: "Faculty of Creative Arts" },
      { name: "BA Industrial Fine Art & Design", level: "Bachelor", duration: "3 years", faculty: "Faculty of Creative Arts" }
    ],
    tuition: { localMin: "480,000", localMax: "600,000", internationalMin: "600", internationalMax: "1,000", currency: "RWF" },
    admission: {
      requirements: ["A-Level certificate with minimum 2 principal passes", "Application form completion"],
      entryQualifications: ["Upper secondary certificate", "Equivalent qualifications accepted"],
      requiredDocuments: ["Application form", "Academic transcripts", "National ID or passport", "Passport photos"],
      internationalRequirements: ["Valid passport", "Academic transcripts", "Student visa documentation"],
      applicationDeadlines: "Rolling admissions with intakes in September and January",
      intakePeriods: ["September", "January"],
      howToApply: "Apply online at https://eaur.ac.rw or visit the admissions office in Remera, Kigali.",
      applicationFees: "35,000 RWF"
    },
    tuitionDetails: [
      { program: "Business Studies", level: "Undergraduate", localAmount: "480,000/yr (160,000/trimester)", internationalAmount: "$600/yr" },
      { program: "Mass Communication", level: "Undergraduate", localAmount: "480,000/yr (160,000/trimester)", internationalAmount: "$600/yr" },
      { program: "Education", level: "Undergraduate", localAmount: "480,000/yr (160,000/trimester)", internationalAmount: "$600/yr" },
      { program: "Leisure Tourism & Hotel Management", level: "Undergraduate", localAmount: "540,000/yr (180,000/trimester)", internationalAmount: "$800/yr" },
      { program: "Film Making & Production", level: "Undergraduate", localAmount: "600,000/yr (200,000/trimester)", internationalAmount: "$1,000/yr" },
      { program: "Industrial Fine Art & Design", level: "Undergraduate", localAmount: "600,000/yr (200,000/trimester)", internationalAmount: "$1,000/yr" }
    ],
    scholarships: [
      { name: "Merit-Based Scholarship", type: "University", description: "Awarded to top-performing students." },
      { name: "Sibling Discount", type: "University", description: "Discount for families with multiple enrolled students." }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "International students welcome. Contact admissions office.",
      equivalenceGuidance: "International qualifications evaluated by HEC.",
      visaInfo: "Visa support provided with admission letter.",
      residencePermit: "Guidance provided upon arrival.",
      airportArrival: "Airport pickup can be arranged.",
      orientationWeek: true,
      languageSupport: "English instruction.",
      exchangePrograms: []
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Private apartments available in Remera, Kigali.",
      privateHostels: "Private hostels near campus.",
      estimatedCost: "RWF 60,000 - 100,000/month",
      onCampusHostels: "Student hostels available",
      accommodationOffice: "Contact EAUR Student Affairs."
    },
    studentLife: {
      clubs: ["Debate Club", "Drama Club", "Business Club", "Media Club"],
      sports: ["Football", "Basketball"],
      events: ["Cultural Day", "Career Fair"],
      organizations: ["Student Guild Council"]
    },
    facilities: {
      libraries: ["EAUR Library"],
      labs: ["Computer Lab", "Media Lab", "Art Studio"],
      sports: ["Football pitch"],
      other: ["Cafeteria", "Student lounge"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "Career services available.",
      alumniNetwork: "Growing alumni network."
    },
    research: {
      centers: [],
      innovationLabs: [],
      publications: [],
      conferences: [],
      partnerships: ["Industry partners in tourism and media"]
    },
    gallery: [],
    videos: [],
    rankings: {
      national: "#15 in Rwanda",
      international: "",
      awards: [],
      accreditations: ["Higher Education Council (HEC) Rwanda"],
      memberships: []
    },
    faq: [
      { question: "What programs does EAUR offer?", answer: "EAUR offers undergraduate programs in Business Studies, Mass Communication, Education, Tourism & Hotel Management, Film Making, and Industrial Fine Art & Design." },
      { question: "Where is EAUR located?", answer: "Main campus is in Remera, Kigali." },
      { question: "What is the tuition at EAUR?", answer: "Tuition ranges from 480,000 to 600,000 RWF per year depending on the program." },
      { question: "Is EAUR accredited?", answer: "Yes, EAUR is recognized by the Higher Education Council (HEC) of Rwanda." }
    ],
    downloads: [
      { name: "Fee Structure (2025/2026)", url: "https://eaur.ac.rw/admissions/fees", type: "PDF" },
      { name: "Undergraduate Application Form", url: "https://eaur.ac.rw/apply", type: "PDF" },
      { name: "University Prospectus", url: "https://eaur.ac.rw/prospectus", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Remera Business Center", type: "Shopping", distance: "5 min walk" },
      { name: "King Faisal Hospital", type: "Healthcare", distance: "10 min drive" },
      { name: "Kigali Convention Centre", type: "Tourism", distance: "10 min drive" }
    ],
    reviews: [
      { name: "Patrick N.", rating: 4, comment: "Affordable tuition and practical programs. Good for students in Eastern Province.", date: "2025-07-15" }
    ],
    quickFacts: {
      Established: "2016",
      Type: "Private",
      Location: "Remera, Kigali",
      Programs: "7+",
      Faculties: "5",
      "Tuition Range": "480K - 600K RWF/yr",
      Intakes: "September, January",
      Language: "English",
      Accreditation: "HEC Rwanda"
    },
    contact: {
      phone: "+250 788 491 333",
      email: "info@eaur.ac.rw",
      website: "https://eaur.ac.rw",
      address: "KG 203 St, Remera, Kigali, Rwanda"
    },
    about: {
      history: "Founded in 2016, EAUR provides affordable higher education in Remera, Kigali with a focus on practical skill development.",
      accreditation: "Accredited by HEC Rwanda",
      achievements: ["7+ undergraduate programs", "Located in Remera, Kigali", "Industry partnerships"]
    },
    images: [
      "https://eaur.ac.rw/wp-content/uploads/2026/05/EAUR-CULTURAL-410x260.jpg",
      "https://eaur.ac.rw/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-09-at-10.28.09.jpeg",
      "https://eaur.ac.rw/wp-content/uploads/2017/10/Happy-Student3-410x260.jpg"
    ]
  },
  {
    id: "utab",
    name: "University of Technology and Arts of Byumba (UTAB)",
    location: "Byumba, Northern Province, Rwanda",
    city: "Byumba",
    type: "Private",
    description: "A large private university in Byumba (Northern Province) offering career-oriented diploma, bachelor's, and postgraduate programs in agriculture, renewable energy, social sciences, education, and management.",
    logo: "",
    coverImage: "",
    website: "https://utab.ac.rw",
    founded: 2006,
    motto: "Educatio, Scientia, Ministeria (Education, Science, Service)",
    accreditationStatus: "Fully accredited by the Higher Education Council (HEC) of Rwanda (since 2010)",
    ownership: "Private (Non-profit)",
    email: "info@utab.ac.rw",
    telephone: "+250 789 350 053",
    physicalAddress: "PO Box 25, Byumba, Gicumbi District, Northern Province, Rwanda",
    googleMapsLocation: "",
    socialMedia: { facebook: "https://www.facebook.com/profile.php?id=61568928943846", twitter: "https://x.com/UTAB_BYUMBA", instagram: "", linkedin: "https://www.linkedin.com/company/university-of-technology-and-arts-of-byumba-utab/", youtube: "https://www.youtube.com/channel/UCR5PdF2aP0TskzipAqKAi7Q" },
    overview: {
      history: "UTAB (formerly IPB) was established in 2006 as a private higher education institution in Byumba, Northern Province. The university received official recognition from the Ministry of Education in 2010. UTAB has grown to serve 10,000-15,000 students across its main campus in Byumba and a branch campus in Gatsibo.",
      campusDescription: "Main campus in Byumba (Gicumbi District) in the beautiful mountains of Northern Province. Branch campus in Gatsibo. Features modern buildings, libraries, computer labs, and sports facilities."
    },
    campuses: [
      { name: "Byumba Main Campus", location: "Byumba, Gicumbi District, Northern Province", description: "Main campus in the mountainous Byumba region with academic facilities and student housing." },
      { name: "Gatsibo Campus", location: "Gatsibo, Eastern Province", description: "Branch campus serving the Eastern Province." }
    ],
    academicInfo: {
      schools: [
        { name: "Faculty of Agriculture and Environmental Sciences", description: "Animal production, crop production, forestry, renewable energy." },
        { name: "Faculty of Education", description: "Science education, arts and humanities education." },
        { name: "Faculty of Social Sciences and Management Studies", description: "Management, development studies, economics." },
        { name: "Faculty of Science and Technology", description: "Computer science, IT, applied sciences." }
      ],
      departments: [
        { name: "Department of Animal Production", school: "Faculty of Agriculture and Environmental Sciences", description: "Animal science." },
        { name: "Department of Crop Production", school: "Faculty of Agriculture and Environmental Sciences", description: "Crop science." },
        { name: "Department of Forestry", school: "Faculty of Agriculture and Environmental Sciences", description: "Forestry and natural resources." },
        { name: "Department of Renewable Energy", school: "Faculty of Agriculture and Environmental Sciences", description: "Sustainable energy." },
        { name: "Department of Education in Sciences", school: "Faculty of Education", description: "Science teacher training." },
        { name: "Department of Education in Arts and Humanities", school: "Faculty of Education", description: "Arts and humanities teacher training." },
        { name: "Department of Management", school: "Faculty of Social Sciences and Management Studies", description: "Business management." },
        { name: "Department of Development Studies", school: "Faculty of Social Sciences and Management Studies", description: "Community development." }
      ],
      undergraduatePrograms: [
        { name: "BSc in Animal Production", duration: "3 years", description: "Animal science and production." },
        { name: "BSc in Crop Production", duration: "3 years", description: "Crop science and agronomy." },
        { name: "BSc in Forestry and Natural Resources Management", duration: "3 years", description: "Forestry management." },
        { name: "BSc in Renewable Energy", duration: "3 years", description: "Sustainable energy technologies." },
        { name: "BA in Education (Sciences)", duration: "3 years", description: "Science teaching." },
        { name: "BA in Education (Arts and Humanities)", duration: "3 years", description: "Arts and humanities teaching." },
        { name: "BBA in Management", duration: "3 years", description: "Business management." },
        { name: "BA in Development Studies", duration: "3 years", description: "Community and development." }
      ],
      postgraduatePrograms: [
        { name: "Postgraduate Diploma in Education", duration: "1 year", description: "Advanced teacher training." }
      ],
      phdPrograms: [],
      diplomaPrograms: [
        { name: "Diploma in Agriculture", duration: "2 years", description: "Practical agriculture." },
        { name: "Diploma in ICT", duration: "2 years", description: "Information technology." }
      ],
      certificatePrograms: [
        { name: "Certificate in ICT Skills", duration: "6 months", description: "Basic computer skills." },
        { name: "Certificate in Sustainable Crop Production", duration: "1 year", description: "Sustainable agriculture." }
      ],
      modeOfStudy: ["Full-time", "Distance Learning (Moodle)"]
    },
    faculties: [
      { name: "Faculty of Agriculture and Environmental Sciences", description: "Agriculture, forestry, and renewable energy", icon: "Leaf" },
      { name: "Faculty of Education", description: "Teacher training", icon: "BookOpen" },
      { name: "Faculty of Social Sciences and Management Studies", description: "Management and development", icon: "Briefcase" },
      { name: "Faculty of Science and Technology", description: "Computing and applied sciences", icon: "Monitor" }
    ],
    programs: [
      { name: "BSc Animal Production", level: "Bachelor", duration: "3 years", faculty: "Faculty of Agriculture and Environmental Sciences" },
      { name: "BSc Crop Production", level: "Bachelor", duration: "3 years", faculty: "Faculty of Agriculture and Environmental Sciences" },
      { name: "BSc Forestry", level: "Bachelor", duration: "3 years", faculty: "Faculty of Agriculture and Environmental Sciences" },
      { name: "BSc Renewable Energy", level: "Bachelor", duration: "3 years", faculty: "Faculty of Agriculture and Environmental Sciences" },
      { name: "BA Education (Sciences)", level: "Bachelor", duration: "3 years", faculty: "Faculty of Education" },
      { name: "BA Education (Arts & Humanities)", level: "Bachelor", duration: "3 years", faculty: "Faculty of Education" },
      { name: "BBA Management", level: "Bachelor", duration: "3 years", faculty: "Faculty of Social Sciences and Management Studies" },
      { name: "BA Development Studies", level: "Bachelor", duration: "3 years", faculty: "Faculty of Social Sciences and Management Studies" },
      { name: "PGDE", level: "Master", duration: "1 year", faculty: "Faculty of Education" }
    ],
    tuition: { localMin: "400,000", localMax: "800,000", internationalMin: "400", internationalMax: "999", currency: "RWF" },
    admission: {
      requirements: ["A-Level certificate", "Application form", "Entrance interview for some programs"],
      entryQualifications: ["Upper secondary certificate", "Equivalent international qualifications"],
      requiredDocuments: ["Application form", "Academic transcripts", "National ID or passport", "Passport photos"],
      internationalRequirements: ["Valid passport", "Academic transcripts", "Student visa"],
      applicationDeadlines: "Rolling admissions with intakes in September and January",
      intakePeriods: ["September", "January"],
      howToApply: "Apply online at https://mis.utab.ac.rw or visit the admissions office at Byumba Campus.",
      applicationFees: "Contact admissions office"
    },
    tuitionDetails: [
      { program: "Agriculture Programs", level: "Undergraduate", localAmount: "400,000 - 600,000/yr", internationalAmount: "$400 - $700/yr" },
      { program: "Education Programs", level: "Undergraduate", localAmount: "450,000 - 650,000/yr", internationalAmount: "$500 - $800/yr" },
      { program: "Management Programs", level: "Undergraduate", localAmount: "500,000 - 800,000/yr", internationalAmount: "$600 - $999/yr" }
    ],
    scholarships: [
      { name: "Chancen International ISA", type: "Foundation", description: "Study Now, Pay Later program through Income Share Agreement with Chancen International." },
      { name: "Merit-Based Scholarship", type: "University", description: "For top-performing students." },
      { name: "Need-Based Financial Aid", type: "University", description: "For economically disadvantaged students." }
    ],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "International students welcome. Contact admissions for details.",
      equivalenceGuidance: "International qualifications evaluated by HEC.",
      visaInfo: "Visa support provided.",
      residencePermit: "Assistance with residence permit upon arrival.",
      airportArrival: "Airport pickup can be arranged.",
      orientationWeek: true,
      languageSupport: "English instruction.",
      exchangePrograms: ["Erasmus+ program participation"]
    },
    accommodation: {
      hostels: true,
      nearbyApartments: "Private apartments in Byumba town.",
      privateHostels: "Private hostels near campus.",
      estimatedCost: "RWF 50,000 - 100,000/month",
      onCampusHostels: "University housing available",
      accommodationOffice: "Contact UTAB accommodation office."
    },
    studentLife: {
      clubs: ["Agriculture Club", "ICT Club", "Debate Club", "Music and Drama"],
      sports: ["Football", "Basketball", "Volleyball", "Athletics"],
      events: ["Agricultural Fair", "Career Day", "Cultural Festival"],
      organizations: ["Student Guild", "Erasmus+ Student Network"]
    },
    facilities: {
      libraries: ["UTAB Main Library — print and electronic resources via Moodle"],
      labs: ["Computer Labs", "Agriculture Research Farm", "Science Laboratories"],
      sports: ["Football pitch", "Basketball court", "Volleyball court"],
      other: ["Moodle E-Learning Platform", "Cafeteria", "Student housing"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "Career services and job placement assistance.",
      alumniNetwork: "Alumni network under development."
    },
    research: {
      centers: ["Agricultural Research Centre"],
      innovationLabs: ["ICT Innovation Lab"],
      publications: [],
      conferences: ["Annual Research Symposium"],
      partnerships: ["Erasmus+", "Chancen International"]
    },
    gallery: [],
    videos: [],
    rankings: {
      national: "#13 in Rwanda",
      international: "#11859 worldwide",
      awards: [],
      accreditations: ["Higher Education Council (HEC) Rwanda"],
      memberships: []
    },
    faq: [
      { question: "What programs does UTAB offer?", answer: "UTAB offers undergraduate programs in Agriculture, Education, Management, and Development Studies, plus postgraduate diplomas in education." },
      { question: "Is UTAB accredited?", answer: "Yes, UTAB has been fully accredited by HEC Rwanda since 2010." },
      { question: "What is the tuition at UTAB?", answer: "Tuition ranges from 400,000 to 800,000 RWF per year depending on the program." },
      { question: "Does UTAB offer distance learning?", answer: "Yes, UTAB has a Moodle-based e-learning platform for distance education." },
      { question: "Does UTAB have accommodation?", answer: "Yes, on-campus housing is available at the Byumba Campus." }
    ],
    downloads: [
      { name: "Fee Structure (2025/2026)", url: "https://utab.ac.rw/admissions/fees", type: "PDF" },
      { name: "Undergraduate Application Form", url: "https://utab.ac.rw/apply", type: "PDF" },
      { name: "Postgraduate Application Form", url: "https://utab.ac.rw/postgraduate-apply", type: "PDF" },
      { name: "University Prospectus", url: "https://utab.ac.rw/prospectus", type: "PDF" }
    ],
    nearbyPlaces: [
      { name: "Byumba Town Centre", type: "Shopping", distance: "1 km" },
      { name: "Gicumbi Hospital", type: "Healthcare", distance: "3 km" },
      { name: "Volcanoes National Park", type: "Tourism", distance: "40 km" }
    ],
    reviews: [
      { name: "Emmanuel H.", rating: 4, comment: "Good agricultural programs with practical farm training. Affordable fees.", date: "2025-06-10" },
      { name: "Chantal M.", rating: 3, comment: "The Moodle e-learning platform is helpful for distance students.", date: "2025-04-05" }
    ],
    quickFacts: {
      Established: "2006",
      Type: "Private (Non-profit)",
      Location: "Byumba, Northern Province",
      Students: "10,000 - 15,000",
      Faculties: "4",
      Programs: "9+",
      Language: "English",
      Intakes: "September, January",
      Accommodation: "Available",
      "Distance Learning": "Yes (Moodle)",
      "Erasmus+": "Yes",
      Accreditation: "HEC Rwanda (since 2010)"
    },
    contact: {
      phone: "+250 789 350 053",
      email: "info@utab.ac.rw",
      website: "https://utab.ac.rw",
      address: "PO Box 25, Byumba, Gicumbi District, Northern Province, Rwanda"
    },
    about: {
      history: "UTAB (formerly IPB) was founded in 2006 and officially recognized by the Ministry of Education in 2010. It is a large private university in Northern Province with 10,000-15,000 students.",
      accreditation: "Fully accredited by HEC Rwanda since 2010",
      achievements: ["10,000-15,000 enrolled students", "Erasmus+ program participation", "Moodle e-learning platform", "Two campuses", "Chancen International partnership"]
    },
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1200",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200"
    ]
  },
  {
    id: "unilak",
    name: "University of Lay Adventists of Kigali (UNILAK)",
    location: "Kigali, Rwanda",
    city: "Kigali",
    type: "Private",
    description: "A vibrant private university in Rwanda committed to academic excellence, innovation, and personal growth. UNILAK operates multiple campuses in Kigali, Rwamagana, and Nyanza with programs across computing, economics, law, environmental studies, and education.",
    logo: "https://site.unilak.ac.rw/wp-content/uploads/2021/07/cropped-cropped-new_logo1.png",
    coverImage: "https://site.unilak.ac.rw/wp-content/uploads/2023/12/IMG-20231208-WA0033.jpg",
    website: "https://site.unilak.ac.rw",
    founded: 2010,
    motto: "Empowering Minds, Inspiring Futures",
    accreditationStatus: "Accredited by the Higher Education Council (HEC) of Rwanda",
    ownership: "Private",
    email: "info@unilak.ac.rw",
    telephone: "+250 791 591 773",
    physicalAddress: "Kigali, Rwanda",
    googleMapsLocation: "",
    socialMedia: {
      facebook: "https://www.facebook.com/Unilak.pr/",
      twitter: "https://x.com/unilak_rwanda",
      instagram: "https://www.instagram.com/unilak_official/",
      linkedin: "",
      youtube: "http://www.youtube.com/@univer"
    },
    overview: {
      history: "UNILAK was established to provide quality higher education in Rwanda with a focus on holistic development, innovation, and community engagement. The university has grown to serve students across multiple campuses in Kigali, Rwamagana, and Nyanza.",
      campusDescription: "UNILAK operates three campuses: Kigali Campus (main), Rwamagana Campus, and Nyanza Campus, offering modern learning facilities and a vibrant academic environment."
    },
    campuses: [
      { name: "Kigali Campus (Main)", location: "Kigali, Rwanda", description: "Main campus with academic buildings, libraries, and administrative offices." },
      { name: "Rwamagana Campus", location: "Rwamagana, Eastern Province", description: "Satellite campus serving the Eastern Province." },
      { name: "Nyanza Campus", location: "Nyanza, Southern Province", description: "Satellite campus serving the Southern Province." }
    ],
    academicInfo: {
      schools: [
        { name: "Faculty of Computing & Information Sciences", description: "IT, Software Engineering, Information Systems Management." },
        { name: "Faculty of Economic Sciences & Management", description: "Accounting, Finance, Marketing, HRM, Economics, Cooperative Management." },
        { name: "Faculty of Law", description: "Bachelor of Laws (LLB) and postgraduate legal programs." },
        { name: "Faculty of Environmental Studies", description: "Environmental Management, Rural Development, Emergency & Disaster Management." },
        { name: "Faculty of Education", description: "Mathematics & Economics, Mathematics & Computer Science, Mathematics & Geography, Economics & Entrepreneurship." }
      ],
      departments: [],
      undergraduatePrograms: [
        { name: "BSc in Information Technology", duration: "4 years", description: "Bachelor of Science in Information Technology." },
        { name: "BSc in Software Engineering", duration: "4 years", description: "Bachelor of Science in Software Engineering." },
        { name: "BSc in Information Systems Management", duration: "4 years", description: "Bachelor of Science in Information Systems Management." },
        { name: "BBA in Accounting", duration: "3 years", description: "Bachelor of Business Administration in Accounting." },
        { name: "BBA in Finance", duration: "3 years", description: "Bachelor of Business Administration in Finance." },
        { name: "BBA in Marketing", duration: "3 years", description: "Bachelor of Business Administration in Marketing." },
        { name: "BBA in Human Resources Management", duration: "3 years", description: "Bachelor of Business Administration in HRM." },
        { name: "BA in Economics", duration: "3 years", description: "Bachelor of Arts in Economics." },
        { name: "BA in Cooperative Management", duration: "3 years", description: "Bachelor of Arts in Cooperative Management." },
        { name: "LLB", duration: "4 years", description: "Bachelor of Laws." },
        { name: "BSc in Environmental Management & Conservation", duration: "4 years", description: "Bachelor of Science in Environmental Management." },
        { name: "BSc in Rural Development", duration: "4 years", description: "Bachelor of Science in Rural Development." },
        { name: "BSc in Emergency & Disaster Management", duration: "4 years", description: "Bachelor of Science in Emergency & Disaster Management." },
        { name: "BEd in Mathematics & Economics", duration: "4 years", description: "Bachelor of Education in Mathematics & Economics." },
        { name: "BEd in Mathematics & Computer Science", duration: "4 years", description: "Bachelor of Education in Mathematics & Computer Science." },
        { name: "BEd in Mathematics & Geography", duration: "4 years", description: "Bachelor of Education in Mathematics & Geography." },
        { name: "BEd in Economics & Entrepreneurship", duration: "4 years", description: "Bachelor of Education in Economics & Entrepreneurship." }
      ],
      postgraduatePrograms: [
        { name: "MBA in Marketing", duration: "2 years", description: "Master of Business Administration in Marketing." },
        { name: "MBA in Finance", duration: "2 years", description: "Master of Business Administration in Finance." },
        { name: "MBA in Human Resources Management", duration: "2 years", description: "Master of Business Administration in HRM." },
        { name: "MBA in Entrepreneurship", duration: "2 years", description: "Master of Business Administration in Entrepreneurship." },
        { name: "MBA in Project Management", duration: "2 years", description: "Master of Business Administration in Project Management." },
        { name: "MBA in Accounting", duration: "2 years", description: "Master of Business Administration in Accounting." },
        { name: "MSc in Information Technology", duration: "2 years", description: "Master of Science in Information Technology." },
        { name: "MSc in Management Information Systems", duration: "2 years", description: "Master of Science in Management Information Systems." },
        { name: "LLM in International Criminal Law", duration: "2 years", description: "Master of Laws in International Criminal Law." },
        { name: "LLM in Environment & Land Use Law", duration: "2 years", description: "Master of Laws in Environment & Land Use Law." },
        { name: "MSc in Environmental & Development Studies", duration: "2 years", description: "Master of Science in Environmental & Development Studies." }
      ],
      phdPrograms: [],
      diplomaPrograms: [],
      certificatePrograms: [],
      modeOfStudy: ["Full-time", "Part-time", "Evening"]
    },
    faculties: [
      { name: "Computing & Information Sciences", description: "IT, Software Engineering, Information Systems", icon: "cpu" },
      { name: "Economic Sciences & Management", description: "Accounting, Finance, Marketing, HRM, Economics", icon: "briefcase" },
      { name: "Law", description: "LLB, LLM programs", icon: "scale" },
      { name: "Environmental Studies", description: "Environmental Management, Rural Development", icon: "leaf" },
      { name: "Education", description: "Mathematics, Economics, Geography, Computer Science", icon: "graduation-cap" }
    ],
    programs: [
      { name: "BSc Information Technology", level: "Bachelor", duration: "4 years", faculty: "Computing & Information Sciences" },
      { name: "BSc Software Engineering", level: "Bachelor", duration: "4 years", faculty: "Computing & Information Sciences" },
      { name: "BSc Information Systems Management", level: "Bachelor", duration: "4 years", faculty: "Computing & Information Sciences" },
      { name: "BBA Accounting", level: "Bachelor", duration: "3 years", faculty: "Economic Sciences & Management" },
      { name: "BBA Finance", level: "Bachelor", duration: "3 years", faculty: "Economic Sciences & Management" },
      { name: "BBA Marketing", level: "Bachelor", duration: "3 years", faculty: "Economic Sciences & Management" },
      { name: "BBA Human Resources Management", level: "Bachelor", duration: "3 years", faculty: "Economic Sciences & Management" },
      { name: "BA Economics", level: "Bachelor", duration: "3 years", faculty: "Economic Sciences & Management" },
      { name: "BA Cooperative Management", level: "Bachelor", duration: "3 years", faculty: "Economic Sciences & Management" },
      { name: "LLB", level: "Bachelor", duration: "4 years", faculty: "Law" },
      { name: "BSc Environmental Management & Conservation", level: "Bachelor", duration: "4 years", faculty: "Environmental Studies" },
      { name: "BSc Rural Development", level: "Bachelor", duration: "4 years", faculty: "Environmental Studies" },
      { name: "BSc Emergency & Disaster Management", level: "Bachelor", duration: "4 years", faculty: "Environmental Studies" },
      { name: "MBA Marketing", level: "Master", duration: "2 years", faculty: "Economic Sciences & Management" },
      { name: "MBA Finance", level: "Master", duration: "2 years", faculty: "Economic Sciences & Management" },
      { name: "MBA Human Resources Management", level: "Master", duration: "2 years", faculty: "Economic Sciences & Management" },
      { name: "MBA Entrepreneurship", level: "Master", duration: "2 years", faculty: "Economic Sciences & Management" },
      { name: "MBA Project Management", level: "Master", duration: "2 years", faculty: "Economic Sciences & Management" },
      { name: "MBA Accounting", level: "Master", duration: "2 years", faculty: "Economic Sciences & Management" },
      { name: "MSc Information Technology", level: "Master", duration: "2 years", faculty: "Computing & Information Sciences" },
      { name: "MSc Management Information Systems", level: "Master", duration: "2 years", faculty: "Computing & Information Sciences" },
      { name: "LLM International Criminal Law", level: "Master", duration: "2 years", faculty: "Law" },
      { name: "LLM Environment & Land Use Law", level: "Master", duration: "2 years", faculty: "Law" },
      { name: "MSc Environmental & Development Studies", level: "Master", duration: "2 years", faculty: "Environmental Studies" }
    ],
    tuition: {
      localMin: "",
      localMax: "",
      internationalMin: "",
      internationalMax: "",
      currency: "RWF"
    },
    admission: {
      requirements: ["A-Level certificate with relevant subject combinations", "English proficiency", "Program-specific requirements"],
      entryQualifications: ["A-Level certificate", "Foundation programs", "Equivalent international qualifications"],
      requiredDocuments: ["Application form", "Academic certificates", "National ID or passport", "Passport photos"],
      internationalRequirements: ["Valid passport", "Student visa", "HEC equivalence", "Proof of financial support"],
      applicationDeadlines: "Rolling admissions with intakes in January and September.",
      intakePeriods: ["January", "September"],
      howToApply: "Apply online at https://site.unilak.ac.rw/ or visit the admissions office."
    },
    tuitionDetails: [],
    scholarships: [],
    internationalStudent: {
      welcomeGuide: true,
      internationalAdmissions: "International students welcome. Contact admissions office for guidance.",
      equivalenceGuidance: "International qualifications must be evaluated by HEC Rwanda.",
      visaInfo: "Student visa support provided with admission letter.",
      residencePermit: "Residence permit guidance available.",
      airportArrival: "Airport pickup can be arranged.",
      orientationWeek: true,
      languageSupport: "English is the language of instruction.",
      exchangePrograms: ["Erasmus+"]
    },
    accommodation: {
      hostels: false,
      nearbyApartments: "Private apartments available near all campuses",
      privateHostels: "Available near Kigali campus",
      estimatedCost: ""
    },
    studentLife: {
      clubs: ["Debate Club", "Cultural Club", "Environmental Club"],
      sports: ["Football", "Basketball", "Volleyball"],
      events: ["Cultural Day", "Career Fair", "Research Seminars", "Pitch Day"],
      organizations: ["Student Council", "Alumni Association"]
    },
    facilities: {
      libraries: ["UNILAK Library"],
      labs: ["Computer Labs", "Science Labs"],
      sports: ["Sports facilities"],
      other: ["Wi-Fi", "Student Lounge", "Cafeteria"]
    },
    careerDevelopment: {
      internships: true,
      industrialAttachment: true,
      careerOffice: true,
      jobPlacementSupport: "Career services assist with job placements and internships.",
      alumniNetwork: "Growing alumni network."
    },
    research: {
      centers: ["Research Centers"],
      innovationLabs: [],
      publications: ["Research publications"],
      conferences: ["ICCIST", "ICBMI", "ICEED"],
      partnerships: ["Erasmus+", "International university partnerships"]
    },
    gallery: [],
    videos: [],
    rankings: {
      national: "",
      international: "",
      awards: [],
      accreditations: ["Higher Education Council (HEC) of Rwanda"],
      memberships: []
    },
    faq: [
      { question: "Where is UNILAK located?", answer: "UNILAK has three campuses: Kigali (main), Rwamagana, and Nyanza." },
      { question: "What programs does UNILAK offer?", answer: "UNILAK offers programs across five faculties: Computing & Information Sciences, Economic Sciences & Management, Law, Environmental Studies, and Education." },
      { question: "Does UNILAK offer postgraduate programs?", answer: "Yes, UNILAK offers MBA programs, MSc in IT and Environmental Studies, and LLM programs." }
    ],
    downloads: [],
    nearbyPlaces: [],
    reviews: [],
    quickFacts: {
      Established: "2010",
      Type: "Private",
      Campuses: "3 (Kigali, Rwamagana, Nyanza)",
      Faculties: "5",
      Intakes: "January, September",
      Language: "English"
    },
    contact: {
      phone: "+250 791 591 773",
      email: "info@unilak.ac.rw",
      website: "https://site.unilak.ac.rw",
      address: "Kigali, Rwanda"
    },
    about: {
      history: "UNILAK was established to provide quality higher education in Rwanda with a focus on holistic development and academic excellence.",
      accreditation: "Accredited by the Higher Education Council (HEC) of Rwanda",
      achievements: ["Multiple campuses across Rwanda", "Erasmus+ exchange programs", "Diverse academic programs"]
    },
    images: [
      "https://site.unilak.ac.rw/wp-content/uploads/2023/12/IMG-20231208-WA0033.jpg",
      "https://site.unilak.ac.rw/wp-content/uploads/2025/10/09A0334-1024x683.jpg",
      "https://site.unilak.ac.rw/wp-content/uploads/2025/10/45A1913-1024x683.jpg"
    ]
  },
];

const idAliases: Record<string, string> = {
  ulk: "ulk",
  "kigali-independent-university": "ulk",
  "kigali-independent": "ulk",
  ur: "unr",
  "university-of-rwanda": "unr",
  mku: "mount-kenya",
  "mount-kenya": "mount-kenya",
  "mount-kigali": "mount-kenya",
  "mount-kigali-university": "mount-kenya",
  mkur: "mount-kenya",
  isae: "isae",
  uok: "uok",
  "university-of-kigali": "uok",
  auca: "auca",
  "adventist-university-of-central-africa": "auca",
  cur: "cur",
  "catholic-university-of-rwanda": "cur",
  eaur: "eaur",
  "east-african-university-rwanda": "eaur",
  utab: "utab",
  "university-of-technology-and-arts-of-byumba": "utab",
  unilak: "unilak",
  "university-of-lay-adventists-of-kigali": "unilak",
  alu: "alu",
  "african-leadership-university": "alu",
  cmu: "cmu",
  "carnegie-mellon": "cmu",
  "carnegie-mellon-university-africa": "cmu",
  ughe: "ughe",
  "global-health-equity": "ughe",
  "university-of-global-health-equity": "ughe",
  kepler: "kepler",
  "kepler-college": "kepler",
};

export function getUniversityById(id: string): University | undefined {
  const normalizedId = idAliases[id.toLowerCase()] || id.toLowerCase();
  return universities.find((u) => u.id === normalizedId);
}

export function getUniversitiesByCity(city: string): University[] {
  return universities.filter((u) => u.city.toLowerCase() === city.toLowerCase());
}

export function getAllCities(): string[] {
  return Array.from(new Set(universities.map((u) => u.city))).sort();
}

export function getUniversitiesByType(type: "Public" | "Private"): University[] {
  return universities.filter((u) => u.type === type);
}

