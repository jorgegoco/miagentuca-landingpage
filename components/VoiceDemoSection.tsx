import React, { useState } from "react"
import VoiceProvider from "./voice/VoiceProvider"
import MicButton from "./voice/MicButton"
import ProposalCard, { emptyProposal, Proposal } from "./voice/ProposalCard"
import SectorChips from "./voice/SectorChips"

const VoiceDemoSection: React.FC = () => {
  const [proposal, setProposal] = useState<Proposal>(emptyProposal)

  return (
    <section id="voice-demo" className="py-24 bg-navy-900">
      <div className="container mx-auto px-6 max-w-3xl flex flex-col items-center gap-8">
        <VoiceProvider>
          <MicButton />
        </VoiceProvider>
        <SectorChips
          selected={proposal.sector}
          onSelect={(sector) => setProposal({ ...proposal, sector })}
        />
        <ProposalCard proposal={proposal} highlightedStep={null} />
      </div>
    </section>
  )
}

export default VoiceDemoSection
