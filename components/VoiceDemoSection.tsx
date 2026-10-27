import React from "react"
import VoiceProvider from "./voice/VoiceProvider"
import VoiceDemo from "./voice/VoiceDemo"

const VoiceDemoSection: React.FC = () => {
  return (
    <section id="voice-demo" className="py-24 bg-navy-900">
      <div className="container mx-auto px-6 max-w-3xl">
        <VoiceProvider>
          <VoiceDemo />
        </VoiceProvider>
      </div>
    </section>
  )
}

export default VoiceDemoSection
