import React from "react"

export const SECTORS = ["Gestoría", "Taller", "Clínica", "Comercio", "Hostelería", "Otro"]

interface SectorChipsProps {
  selected: string
  onSelect: (sector: string) => void
  disabled?: boolean
}

const SectorChips: React.FC<SectorChipsProps> = ({ selected, onSelect, disabled }) => (
  <div className="flex flex-wrap justify-center gap-2">
    {SECTORS.map((sector) => (
      <button
        key={sector}
        onClick={() => onSelect(sector)}
        disabled={disabled}
        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
          selected === sector
            ? "bg-electric-500 border-electric-500 text-white"
            : "border-navy-700 text-slate-300 hover:border-electric-400 hover:text-electric-400"
        }`}
      >
        {sector}
      </button>
    ))}
  </div>
)

export default SectorChips
