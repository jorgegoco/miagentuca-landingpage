import React from "react"
import { VocalBridgeProvider } from "@vocalbridgeai/react"
import type { TokenResponse, VocalBridgeOptions } from "@vocalbridgeai/sdk"

export const VOICE_API_URL =
  import.meta.env.VITE_VOICE_API_URL || "https://voice.miagentuca.es"

// The API key lives on the token server; the browser only gets a short-lived token
const tokenProvider = async (): Promise<TokenResponse> => {
  const response = await fetch(`${VOICE_API_URL}/token`, { method: "POST" })
  if (!response.ok) {
    throw new Error(`Error al obtener el token de voz (${response.status})`)
  }
  const t = await response.json()
  return {
    url: t.connection_url,
    token: t.token,
    room_name: t.session_name,
    participant_identity: "visitante",
    expires_in: 3600,
    agent_mode: t.agent_mode,
  }
}

// Module-level so the provider always receives the same options object
const options: VocalBridgeOptions = {
  auth: { tokenProvider },
  participantName: "Visitante",
}

const VoiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <VocalBridgeProvider options={options}>{children}</VocalBridgeProvider>
)

export default VoiceProvider
