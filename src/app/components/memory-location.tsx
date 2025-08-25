import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Coffee, TreePine, Building, Waves } from "lucide-react"

const locations = [
  {
    id: 1,
    name: "The Little Coffee Shop",
    address: "Downtown, Main Street",
    memory: "Where we had our first date and still go every Sunday morning. The barista knows our order by heart now.",
    icon: Coffee,
    color: "bg-primary",
  },
  {
    id: 2,
    name: "Sunset Park",
    address: "Hillside Avenue",
    memory:
      "Our favorite spot for evening walks and deep conversations. Where you first said you loved me under the old oak tree.",
    icon: TreePine,
    color: "bg-secondary",
  },
  {
    id: 3,
    name: "The Art Museum",
    address: "Cultural District",
    memory:
      "Our rainy day adventure that turned into a 3-hour exploration. You made every painting come alive with your stories.",
    icon: Building,
    color: "bg-accent",
  },
  {
    id: 4,
    name: "Moonlight Beach",
    address: "Coastal Highway",
    memory:
      "That magical weekend getaway where we watched the sunrise together and promised to always find time for adventures.",
    icon: Waves,
    color: "bg-primary",
  },
]

export function MemoryLocations() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Special Places</h2>
        <p className="text-gray-600">The locations where our love story unfolded</p>
      </div>

      <div className="grid gap-4">
        {locations.map((location, index) => {
          const Icon = location.icon
          const gradientClasses = [
            "bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200",
            "bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200",
            "bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200",
            "bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200",
          ]
          const iconColors = ["bg-amber-400", "bg-green-400", "bg-indigo-400", "bg-cyan-400"]

          return (
            <Card
              key={location.id}
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
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{location.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="w-3 h-3" />
                          <span>{location.address}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{location.memory}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200">
        <CardContent className="p-6 text-center">
          <MapPin className="w-8 h-8 text-pink-500 mx-auto mb-4" />
          <p className="text-gray-700 italic">
            "Home isn't a place, it's wherever I'm with you. But these places will always hold pieces of our hearts."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
