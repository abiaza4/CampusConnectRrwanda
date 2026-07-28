import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const events = [
  {
    title: "University Open Day — UR College of Science & Technology",
    date: "August 15, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "UR Campus, Kigali",
    type: "Open Day",
    description: "Explore the campus, meet faculty, tour laboratories, and learn about engineering and ICT programs.",
  },
  {
    title: "Rwanda Education Fair 2026",
    date: "September 5, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "Kigali Convention Centre",
    type: "Education Fair",
    description: "Meet representatives from all accredited universities in Rwanda. Free admission for students and parents.",
  },
  {
    title: "Scholarship Application Workshop",
    date: "July 20, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Online (Zoom)",
    type: "Scholarship",
    description: "Learn how to prepare winning scholarship applications. Tips from successful scholarship recipients.",
  },
  {
    title: "MKU Rwanda Orientation Program",
    date: "September 1, 2026",
    time: "8:00 AM - 12:00 PM",
    location: "Mount Kenya University Rwanda, Kigali",
    type: "Orientation",
    description: "Welcome session for new students. Campus tour, registration guidance, and student life introduction.",
  },
  {
    title: "Career Fair — East Africa",
    date: "October 12, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Kigali Arena",
    type: "Career Fair",
    description: "Connect with employers from across East Africa. Resume reviews, mock interviews, and networking.",
  },
  {
    title: "International Students Welcome Event",
    date: "September 10, 2026",
    time: "3:00 PM - 7:00 PM",
    location: "Various Universities",
    type: "Orientation",
    description: "Cultural exchange event for international students arriving in Rwanda for the new academic year.",
  },
];

const typeColors: Record<string, string> = {
  "Open Day": "bg-emerald/10 text-emerald border-emerald/20",
  "Education Fair": "bg-navy/10 text-navy border-navy/20",
  "Scholarship": "bg-gold/10 text-gold border-gold/20",
  "Orientation": "bg-purple-100 text-purple-700 border-purple-200",
  "Career Fair": "bg-blue-100 text-blue-700 border-blue-200",
};

export default function Events() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Upcoming Events</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Education Events
              </h1>
              <p className="text-white/70 text-lg">
                University open days, education fairs, scholarship events, and career opportunities.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={`text-xs ${typeColors[event.type] || "bg-gray-100 text-gray-600"}`}>
                      {event.type}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald transition-colors" style={{ fontFamily: "'Fraunces', serif" }}>
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={12} className="text-emerald" /> {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock size={12} className="text-emerald" /> {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin size={12} className="text-emerald" /> {event.location}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
