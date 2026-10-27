import React from "react"
import VoiceProvider from "./voice/VoiceProvider"
import MicButton from "./voice/MicButton"

const VoiceDemoSection: React.FC = () => {
  return (
    <section id="voice-demo" className="py-24 bg-navy-900">
      <div className="container mx-auto px-6">
        <VoiceProvider>
          <MicButton />
        </VoiceProvider>
      </div>
    </section>
  )
}

export default VoiceDemoSection
