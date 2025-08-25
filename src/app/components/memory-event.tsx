import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Heart, Star, Gift } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Our First Date",
    date: "March 15, 2023",
    description:
      "That nervous coffee date that turned into a 4-hour conversation. I knew you were special when you laughed at my awkward joke about the barista.",
    icon: Heart,
  },
  {
    id: 2,
    title: "First 'I Love You'",
    date: "May 22, 2023",
    description:
      "Under the stars in the park, when you whispered those three words that changed everything. My heart still skips a beat remembering that moment.",
    icon: Star,
  },
  {
    id: 3,
    title: "Moving In Together",
    date: "August 10, 2023",
    description:
      "The day we officially became a team. Building our little nest together, arguing over furniture placement, and realizing home is wherever you are.",
    icon: Gift,
  },
  {
    id: 4,
    title: "Our First Trip",
    date: "October 5, 2023",
    description:
      "That spontaneous weekend getaway where we got lost but found each other even more. Dancing in the rain and making memories that will last forever.",
    icon: Calendar,
  },
]

export function MemoryEvents() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Special Events</h2>
        <p className="text-gray-600">The moments that made us who we are today</p>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => {
          const Icon = event.icon
          const gradientClasses = [
            "bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200",
            "bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200",
            "bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200",
            "bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200",
          ]
          const iconColors = ["bg-pink-400", "bg-purple-400", "bg-blue-400", "bg-amber-400"]

          return (
            <Card
              key={event.id}
              className={`${gradientClasses[index]} shadow-lg hover:scale-105 transition-all duration-300`}
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div
                    className={`w-12 h-12 ${iconColors[index]} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                      <span className="text-sm text-gray-600">{event.date}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200">
        <CardContent className="p-6 text-center">
          <Heart className="w-8 h-8 text-pink-500 mx-auto mb-4" />
          <p className="text-gray-700 italic">
            "Every moment with you becomes a cherished memory, and every memory makes me love you more."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
