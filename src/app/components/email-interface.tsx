"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ArrowLeft } from "lucide-react"
import { AnniversaryMessage } from "./aniversary-message"
import { MemoryEvents } from "./memory-event"
import { MemoryLocations } from "./memory-location"

type ViewType = "inbox" | "message" | "events" | "locations"

export function EmailInterface() {
  const [currentView, setCurrentView] = useState<ViewType>("inbox")

  const renderContent = () => {
    switch (currentView) {
      case "message":
        return <AnniversaryMessage />
      case "events":
        return <MemoryEvents />
      case "locations":
        return <MemoryLocations />
      default:
        return (
          <div className="space-y-6 px-4">
            <Card
              className="cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 shadow-lg"
              onClick={() => setCurrentView("message")}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-4">
                  <p className="text-lg text-gray-700 font-medium mb-6">
                    I know I've been distant and
                    <br />
                    I'm truly sorry
                  </p>
                </div>

                <div className="relative mb-6">
                  <img src="/images/cute-character.png" alt="Cute character" className="w-32 h-32 mx-auto" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-pink-500 ml-1" />
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 font-medium">I love you so forgive me</p>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-lg"
              onClick={() => setCurrentView("events")}
            >
              <CardContent className="p-8 text-center">
                <p className="text-lg text-gray-700 font-medium mb-6">
                  Our beautiful moments
                  <br />
                  together
                </p>

                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center">
                    <span className="text-4xl">💕</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-purple-500 ml-1" />
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 font-medium">Tap to see our special events</p>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-lg"
              onClick={() => setCurrentView("locations")}
            >
              <CardContent className="p-8 text-center">
                <p className="text-lg text-gray-700 font-medium mb-6">
                  Places where we
                  <br />
                  fell in love
                </p>

                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🗺️</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-blue-500 ml-1" />
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 font-medium">Explore our memory map</p>
              </CardContent>
            </Card>
          </div>
        )
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100">
      {currentView !== "inbox" && (
        <Button
          variant="ghost"
          onClick={() => setCurrentView("inbox")}
          className="mb-6 text-gray-700 hover:bg-white/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      )}

      <div className="animate-fade-in">{renderContent()}</div>
    </div>
  )
}
