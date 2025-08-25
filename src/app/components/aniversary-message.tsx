import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"

export function AnniversaryMessage() {
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Happy Anniversary, My Love!</h2>
            <p className="text-sm text-gray-600">From: Your Forever Person 💕</p>
          </div>

          <div className="text-left space-y-4 text-gray-700">
            <p className="text-lg font-medium">My dearest love,</p>

            <p className="leading-relaxed">
              Today marks another year of our beautiful journey together, and I can't help but smile thinking about all
              the incredible moments we've shared. From our first awkward hello to the comfortable silences we now
              cherish, every day with you has been a gift.
            </p>

            <p className="leading-relaxed">
              You've been my partner in adventure, my comfort in difficult times, and my biggest supporter in all my
              dreams. The way you laugh at my terrible jokes, how you remember the little things that matter to me, and
              the warmth of your hand in mine - these are the treasures I carry in my heart every single day.
            </p>

            <p className="leading-relaxed">
              I love how we've grown together, creating our own little world filled with inside jokes, shared dreams,
              and endless love. You make ordinary moments feel magical, and I'm so grateful that I get to experience
              life with you by my side.
            </p>

            <p className="leading-relaxed">
              Here's to many more years of adventures, laughter, and love. Thank you for being exactly who you are and
              for loving me just as I am.
            </p>

            <div className="text-center mt-6">
              <p className="text-lg font-medium">
                Forever yours,
                <br />
                <span className="text-pink-600 font-semibold">Your Loving Partner ❤️</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
        <CardContent className="p-6 text-center">
          <p className="text-gray-700 italic">
            "In all the world, there is no heart for me like yours. In all the world, there is no love for you like
            mine."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
