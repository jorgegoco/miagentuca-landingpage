import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FileCheck,
  ShoppingCart,
  Sparkles,
  Upload,
  Search,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  X,
  ExternalLink,
  Lightbulb,
  ChevronDown,
  Brain,
  Cog,
  Zap,
} from "lucide-react"

// API Base URLs
const API_URLS = {
  gestoria: "https://gestoria.miagentuca.es",
  compras: "https://compras.miagentuca.es",
  explain: "https://explain.miagentuca.es",
}

// Types
interface PriceRange {
  low: number
  high: number
}

interface GestoriaResult {
  document_type: string
  extracted_data: Record<string, unknown>
  confidence: number
}

interface Supplier {
  name: string
  unit_price?: number
  unit?: string
  total_price?: number
  shipping_cost?: number
  delivery_days?: number
  min_order?: number
  in_stock?: boolean
  price_confidence?: "estimated" | "reference"
  price_range?: PriceRange
}

interface ComprasResult {
  success: boolean
  product_parsed?: {
    name: string
    category?: string
    specifications: string
    quantity: number
  }
  suppliers: Supplier[]
  recommendations?: {
    best_price?: string
    fastest_delivery?: string
    best_value?: string
    reasoning?: string
  }
  procurement_tips?: string[]
  procurement_strategy?: string
  estimated_as_of?: string
  error?: string | null
}

interface ExplainResult {
  directive: string
  execution_code: string
  flowchart: string
}

type DemoTab = "gestoria" | "compras" | "explain"

const demos = [
  {
    id: "gestoria" as DemoTab,
    title: "Clasificador de Documentos",
    subtitle: "Gestorías",
    icon: <FileCheck className="w-5 h-5" />,
    gradient: "from-blue-500 to-indigo-600",
    description: "Sube un PDF y el agente lo clasifica automáticamente",
  },
  {
    id: "compras" as DemoTab,
    title: "Agente de Compras",
    subtitle: "Cualquier negocio",
    icon: <ShoppingCart className="w-5 h-5" />,
    gradient: "from-cyan-500 to-blue-600",
    description: "Busca productos y compara proveedores al instante",
  },
  {
    id: "explain" as DemoTab,
    title: "Generador de Agentes",
    subtitle: "Tu proceso",
    icon: <Sparkles className="w-5 h-5" />,
    gradient: "from-purple-500 to-violet-600",
    description: "Describe un proceso y genera la arquitectura del agente",
  },
]

const DemoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DemoTab>("gestoria")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Gestoria state
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [gestoriaResult, setGestoriaResult] = useState<GestoriaResult | null>(
    null,
  )

  // Compras state
  const [productQuery, setProductQuery] = useState("")
  const [productQuantity, setProductQuantity] = useState(1)
  const [productUrgency, setProductUrgency] = useState("normal")
  const [comprasResult, setComprasResult] = useState<ComprasResult | null>(null)
  const [isPipelineOpen, setIsPipelineOpen] = useState(false)

  // Explain state
  const [processDescription, setProcessDescription] = useState("")
  const [explainResult, setExplainResult] = useState<ExplainResult | null>(null)

  const resetResults = () => {
    setGestoriaResult(null)
    setComprasResult(null)
    setExplainResult(null)
    setError(null)
    setSelectedFile(null)
    setProductQuery("")
    setProcessDescription("")
  }

  const handleTabChange = (tab: DemoTab) => {
    setActiveTab(tab)
    resetResults()
  }

  // Gestoria handler
  const handleGestoriaSubmit = async () => {
    if (!selectedFile) return

    setIsLoading(true)
    setError(null)
    setGestoriaResult(null)

    try {
      const formData = new FormData()
      formData.append("file", selectedFile)

      const response = await fetch(`${API_URLS.gestoria}/classify`, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorText = await response.text().catch(() => "")
        throw new Error(
          `Error al clasificar el documento (${response.status})${errorText ? `: ${errorText}` : ""}`,
        )
      }

      const result = await response.json()
      setGestoriaResult(result)
    } catch (err) {
      if (err instanceof TypeError && err.message.includes("fetch")) {
        setError(
          "No se puede conectar con el servidor. El demo puede no estar disponible.",
        )
      } else {
        setError(
          err instanceof Error ? err.message : "Error al procesar el documento",
        )
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Compras handler
  const handleComprasSubmit = async () => {
    if (!productQuery.trim()) return

    setIsLoading(true)
    setError(null)
    setComprasResult(null)

    try {
      const response = await fetch(`${API_URLS.compras}/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: productQuery,
          quantity: productQuantity,
          urgency: productUrgency,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text().catch(() => "")
        throw new Error(
          `Error al buscar proveedores (${response.status})${errorText ? `: ${errorText}` : ""}`,
        )
      }

      const result = await response.json()
      setComprasResult(result)
    } catch (err) {
      if (err instanceof TypeError && err.message.includes("fetch")) {
        setError(
          "No se puede conectar con el servidor. El demo puede no estar disponible.",
        )
      } else {
        setError(
          err instanceof Error ? err.message : "Error al buscar proveedores",
        )
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Explain handler
  const handleExplainSubmit = async () => {
    if (!processDescription.trim()) return

    setIsLoading(true)
    setError(null)
    setExplainResult(null)

    try {
      const response = await fetch(`${API_URLS.explain}/explain`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          process_description: processDescription,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text().catch(() => "")
        throw new Error(
          `Error al generar la arquitectura (${response.status})${errorText ? `: ${errorText}` : ""}`,
        )
      }

      const result = await response.json()
      setExplainResult(result)
    } catch (err) {
      if (err instanceof TypeError && err.message.includes("fetch")) {
        setError(
          "No se puede conectar con el servidor. El demo puede no estar disponible.",
        )
      } else {
        setError(
          err instanceof Error
            ? err.message
            : "Error al generar la arquitectura",
        )
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="demos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-navy-900 mb-6"
          >
            Prueba los agentes{" "}
            <span className="text-electric-600">en vivo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Interactúa con demos reales de agentes de inteligencia artificial
            usando la arquitectura de 3 capas basada en microservicios
          </motion.p>
        </div>

        {/* Demo Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex border-b border-slate-200">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => handleTabChange(demo.id)}
                className={`flex-1 px-4 py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === demo.id
                    ? "bg-navy-900 text-white"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {demo.icon}
                <span className="hidden sm:inline">{demo.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {/* Gestoria Demo */}
              {activeTab === "gestoria" && (
                <motion.div
                  key="gestoria"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      Clasificador de Documentos
                    </h3>
                    <p className="text-slate-600">
                      Sube un PDF (factura, contrato, formulario fiscal) y el
                      agente lo clasificará automáticamente.
                    </p>
                  </div>

                  {/* Disclaimer */}
                  <div className="mb-6 p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-electric-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Estas demos son pruebas de concepto simplificadas para garantizar la sostenibilidad del servicio. La arquitectura real permite procesar flujos de trabajo ilimitados y datos privados complejos.
                    </p>
                  </div>

                  {/* Upload Area - Drag & Drop Zone */}
                  <div className="mb-6">
                    <input
                      type="file"
                      id="pdf-upload"
                      accept=".pdf,application/pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file && file.size > 2 * 1024 * 1024) {
                          setError("El archivo excede 2MB. Por favor, selecciona un archivo más pequeño.")
                          setSelectedFile(null)
                        } else {
                          setError(null)
                          setSelectedFile(file || null)
                        }
                      }}
                      className="sr-only"
                    />
                    <label
                      htmlFor="pdf-upload"
                      onDragOver={(e) => {
                        e.preventDefault()
                        setIsDragging(true)
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={(e) => {
                        e.preventDefault()
                        setIsDragging(false)
                        const file = e.dataTransfer.files?.[0]
                        if (file) {
                          if (!file.type.includes("pdf")) {
                            setError("Por favor, selecciona un archivo PDF.")
                            setSelectedFile(null)
                          } else if (file.size > 2 * 1024 * 1024) {
                            setError("El archivo excede 2MB. Por favor, selecciona un archivo más pequeño.")
                            setSelectedFile(null)
                          } else {
                            setError(null)
                            setSelectedFile(file)
                          }
                        }
                      }}
                      className={`
                        flex flex-col items-center justify-center gap-3
                        w-full min-h-[120px] p-6
                        border-2 border-dashed rounded-xl
                        cursor-pointer transition-all duration-200
                        ${isDragging
                          ? "border-electric-500 bg-electric-50"
                          : selectedFile
                            ? "border-green-400 bg-green-50"
                            : "border-slate-300 hover:border-electric-400 hover:bg-slate-50"
                        }
                      `}
                    >
                      {selectedFile ? (
                        <>
                          <CheckCircle className="w-10 h-10 text-green-500" />
                          <div className="text-center">
                            <p className="text-green-700 font-semibold break-all px-2">
                              {selectedFile.name}
                            </p>
                            <p className="text-green-600 text-sm mt-1">
                              Listo para clasificar
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <Upload className={`w-10 h-10 ${isDragging ? "text-electric-500" : "text-slate-400"}`} />
                          <div className="text-center">
                            <p className="text-slate-700 font-medium">
                              <span className="hidden sm:inline">Arrastra tu PDF aquí o </span>
                              <span className="text-electric-600 underline">selecciona un archivo</span>
                            </p>
                            <p className="text-slate-500 text-sm mt-1">
                              PDF hasta 2MB
                            </p>
                          </div>
                        </>
                      )}
                    </label>
                    {selectedFile && (
                      <button
                        type="button"
                        onClick={() => setSelectedFile(null)}
                        className="mt-2 text-sm text-slate-500 hover:text-slate-700 underline"
                      >
                        Cambiar archivo
                      </button>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleGestoriaSubmit}
                    disabled={!selectedFile || isLoading}
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Clasificando...
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5" />
                        Clasificar Documento
                      </>
                    )}
                  </button>

                  {/* Result */}
                  {gestoriaResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Documento Clasificado
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium text-green-700">
                            Tipo:
                          </span>{" "}
                          <span className="text-green-900">
                            {gestoriaResult.document_type || "Desconocido"}
                          </span>
                        </p>
                        {typeof gestoriaResult.confidence === "number" && (
                          <p>
                            <span className="font-medium text-green-700">
                              Confianza:
                            </span>{" "}
                            <span className="text-green-900">
                              {gestoriaResult.confidence > 1
                                ? `${Math.round(gestoriaResult.confidence)}%`
                                : `${Math.round(gestoriaResult.confidence * 100)}%`}
                            </span>
                          </p>
                        )}
                        {gestoriaResult.extracted_data && (
                          <details className="mt-2">
                            <summary className="cursor-pointer text-green-700 font-medium">
                              Ver datos extraidos
                            </summary>
                            <pre className="mt-2 p-2 bg-white rounded text-xs overflow-x-auto">
                              {JSON.stringify(
                                gestoriaResult.extracted_data,
                                null,
                                2,
                              )}
                            </pre>
                          </details>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Compras Demo */}
              {activeTab === "compras" && (
                <motion.div
                  key="compras"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      Agente de Compras
                    </h3>
                    <p className="text-slate-600">
                      Describe el producto que necesitas y el agente buscará y
                      comparará proveedores.
                    </p>
                  </div>

                  {/* Simulation Banner */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 p-2 bg-cyan-100 rounded-lg">
                        <Zap className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <p className="text-cyan-800 font-medium text-sm mb-1">
                          Simulación con datos estimados del mercado español
                        </p>
                        <p className="text-cyan-600 text-xs leading-relaxed">
                          Esta demo muestra las capacidades de análisis y recomendación del agente.
                          Un agente en producción conectaría con APIs reales de proveedores para obtener precios actualizados al momento.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Search Input */}
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Producto a buscar
                    </label>
                    <input
                      type="text"
                      value={productQuery}
                      onChange={(e) => setProductQuery(e.target.value)}
                      placeholder="ej: folios A4, tornillos M6 inox, guantes de nitrilo..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none transition-all"
                    />
                  </div>

                  {/* Quantity & Urgency */}
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Cantidad
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={10000}
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(Number(e.target.value))}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Urgencia
                      </label>
                      <select
                        value={productUrgency}
                        onChange={(e) => setProductUrgency(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none transition-all bg-white"
                      >
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgente</option>
                        <option value="very_urgent">Muy urgente</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleComprasSubmit}
                    disabled={!productQuery.trim() || isLoading}
                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Buscando proveedores...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        Buscar Proveedores
                      </>
                    )}
                  </button>

                  {/* Result */}
                  {comprasResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-cyan-50 border border-cyan-200 rounded-xl"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-cyan-800 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Proveedores Encontrados
                        </h4>
                        {comprasResult.estimated_as_of && (
                          <span className="text-[11px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                            Precios est. {comprasResult.estimated_as_of}
                          </span>
                        )}
                      </div>
                      {comprasResult.product_parsed && (
                        <div className="mb-4 p-3 bg-cyan-100/50 rounded-lg">
                          <p className="text-sm text-cyan-800">
                            <strong>{comprasResult.product_parsed.name}</strong>
                            {comprasResult.product_parsed.category && (
                              <span className="ml-2 text-xs bg-cyan-200 text-cyan-700 px-2 py-0.5 rounded-full">
                                {comprasResult.product_parsed.category}
                              </span>
                            )}
                          </p>
                          {comprasResult.product_parsed.specifications && (
                            <p className="text-xs text-cyan-600 mt-1">{comprasResult.product_parsed.specifications}</p>
                          )}
                        </div>
                      )}
                      <div className="space-y-3">
                        {comprasResult.suppliers &&
                        comprasResult.suppliers.length > 0 ? (
                          comprasResult.suppliers.map((supplier, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center p-3 bg-white rounded-lg border border-cyan-100"
                            >
                              <div>
                                <span className="font-medium text-slate-800">
                                  {supplier.name || "Proveedor"}
                                </span>
                                {supplier.in_stock === false && (
                                  <span className="ml-2 text-xs text-orange-600">
                                    (Sin stock)
                                  </span>
                                )}
                              </div>
                              <div className="text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <p className="font-bold text-cyan-700">
                                    {supplier.price_range
                                      ? `${supplier.price_range.low.toFixed(2)} - ${supplier.price_range.high.toFixed(2)} EUR${supplier.unit ? `/${supplier.unit}` : ""}`
                                      : typeof supplier.total_price === "number"
                                        ? `${supplier.total_price.toFixed(2)} EUR${supplier.unit ? `/${supplier.unit}` : ""}`
                                        : typeof supplier.unit_price === "number"
                                          ? `${supplier.unit_price.toFixed(2)} EUR/${supplier.unit || "ud"}`
                                          : "Consultar"}
                                  </p>
                                  {supplier.price_confidence && (
                                    <span className="text-[10px] bg-cyan-100 text-cyan-600 px-1.5 py-0.5 rounded font-medium">
                                      {supplier.price_confidence === "estimated" ? "Est." : "Ref."}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-500">
                                  {typeof supplier.delivery_days === "number"
                                    ? `${supplier.delivery_days} dias`
                                    : "Consultar"}
                                  {typeof supplier.shipping_cost === "number" &&
                                    supplier.shipping_cost > 0 &&
                                    ` (+${supplier.shipping_cost.toFixed(2)} envio)`}
                                  {typeof supplier.min_order === "number" && supplier.min_order > 1 && (
                                    <span className="text-xs text-slate-400 ml-1">· Min: {supplier.min_order} uds</span>
                                  )}
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-cyan-700 text-sm">
                            No se encontraron proveedores para este producto.
                          </p>
                        )}
                      </div>
                      {comprasResult.recommendations && (
                        <div className="mt-4 pt-4 border-t border-cyan-200 space-y-1">
                          {comprasResult.recommendations.best_price && (
                            <p className="text-sm text-cyan-700">
                              <strong>Mejor precio:</strong>{" "}
                              <span className="font-bold">
                                {comprasResult.recommendations.best_price}
                              </span>
                            </p>
                          )}
                          {comprasResult.recommendations.fastest_delivery && (
                            <p className="text-sm text-cyan-700">
                              <strong>Entrega mas rapida:</strong>{" "}
                              <span className="font-bold">
                                {comprasResult.recommendations.fastest_delivery}
                              </span>
                            </p>
                          )}
                          {comprasResult.recommendations.best_value && (
                            <p className="text-sm text-cyan-700">
                              <strong>Mejor relacion calidad-precio:</strong>{" "}
                              <span className="font-bold">
                                {comprasResult.recommendations.best_value}
                              </span>
                            </p>
                          )}
                          {comprasResult.recommendations.reasoning && (
                            <p className="text-xs text-cyan-600 mt-2 italic">
                              {comprasResult.recommendations.reasoning}
                            </p>
                          )}
                        </div>
                      )}
                      {comprasResult.procurement_strategy && (
                        <div className="mt-4 pt-4 border-t border-cyan-200">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 p-2 bg-cyan-100 rounded-lg mt-0.5">
                              <Brain className="w-4 h-4 text-cyan-600" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-cyan-800 mb-2">
                                Estrategia de Compra Recomendada
                              </p>
                              <p className="text-sm text-cyan-700 leading-relaxed">
                                {comprasResult.procurement_strategy}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {comprasResult.procurement_tips && comprasResult.procurement_tips.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-cyan-200">
                          <p className="text-sm font-semibold text-cyan-800 mb-2 flex items-center gap-1">
                            <Lightbulb className="w-4 h-4" />
                            Consejos de compra
                          </p>
                          <ul className="space-y-1">
                            {comprasResult.procurement_tips.map((tip, i) => (
                              <li key={i} className="text-xs text-cyan-700 flex items-start gap-2">
                                <span className="text-cyan-400 mt-0.5">&#8226;</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}
                  {comprasResult && (
                    <>
                      <p className="mt-3 text-[11px] text-slate-400 text-center">
                        Precios orientativos generados por IA · No vinculantes · IVA no incluido
                      </p>

                      {/* Production Pipeline */}
                      <div className="mt-6">
                        <button
                          onClick={() => setIsPipelineOpen(!isPipelineOpen)}
                          className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
                        >
                          <span className="text-sm font-medium text-slate-700">
                            ¿Cómo funcionaría en producción?
                          </span>
                          <motion.div
                            animate={{ rotate: isPipelineOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isPipelineOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 pb-2">
                                <p className="text-xs text-slate-500 mb-4 text-center italic">
                                  Esto es lo que construyo para tu negocio
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                  <div className="flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-3 shadow-sm">
                                      <Search className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-[10px] font-bold text-cyan-600 mb-1">PASO 1</span>
                                    <p className="text-xs font-medium text-slate-700 text-center">Consulta APIs reales</p>
                                    <p className="text-[10px] text-slate-400 text-center mt-1">Lyreco, RAJA, Amazon Business...</p>
                                  </div>

                                  <div className="flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-3 shadow-sm">
                                      <Brain className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-[10px] font-bold text-cyan-600 mb-1">PASO 2</span>
                                    <p className="text-xs font-medium text-slate-700 text-center">Compara en tiempo real</p>
                                    <p className="text-[10px] text-slate-400 text-center mt-1">IA orquesta la comparación</p>
                                  </div>

                                  <div className="flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-3 shadow-sm">
                                      <Cog className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-[10px] font-bold text-cyan-600 mb-1">PASO 3</span>
                                    <p className="text-xs font-medium text-slate-700 text-center">Aplica lógica de negocio</p>
                                    <p className="text-[10px] text-slate-400 text-center mt-1">Reglas deterministas, sin errores</p>
                                  </div>

                                  <div className="flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-3 shadow-sm">
                                      <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-[10px] font-bold text-cyan-600 mb-1">PASO 4</span>
                                    <p className="text-xs font-medium text-slate-700 text-center">Genera recomendación</p>
                                    <p className="text-[10px] text-slate-400 text-center mt-1">Análisis personalizado</p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </>
                  )}
                </motion.div>
              )}

              {/* Explain Demo */}
              {activeTab === "explain" && (
                <motion.div
                  key="explain"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      Generador de Arquitectura de Agentes
                    </h3>
                    <p className="text-slate-600">
                      Describe un proceso de tu negocio y genera automáticamente
                      la arquitectura del agente que lo automatizaría.
                    </p>
                  </div>

                  {/* Textarea */}
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Describe tu proceso
                    </label>
                    <textarea
                      value={processDescription}
                      onChange={(e) => setProcessDescription(e.target.value)}
                      placeholder="ej: Cuando un cliente nuevo se registra, enviar email de bienvenida, crear carpeta en Drive, y agendar llamada de onboarding"
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleExplainSubmit}
                    disabled={!processDescription.trim() || isLoading}
                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Generando arquitectura...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Generar Arquitectura
                      </>
                    )}
                  </button>

                  {/* Result */}
                  {explainResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-xl"
                    >
                      <h4 className="font-semibold text-purple-800 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Arquitectura Generada
                      </h4>
                      <div className="space-y-4">
                        {explainResult.directive && (
                          <details open>
                            <summary className="cursor-pointer text-purple-700 font-medium mb-2">
                              Directiva (SOP)
                            </summary>
                            <pre className="p-3 bg-white rounded-lg text-xs overflow-x-auto border border-purple-100 whitespace-pre-wrap">
                              {explainResult.directive}
                            </pre>
                          </details>
                        )}
                        {explainResult.execution_code && (
                          <details>
                            <summary className="cursor-pointer text-purple-700 font-medium mb-2">
                              Codigo de Ejecucion
                            </summary>
                            <pre className="p-3 bg-slate-900 text-green-400 rounded-lg text-xs overflow-x-auto">
                              {explainResult.execution_code}
                            </pre>
                          </details>
                        )}
                        {explainResult.flowchart && (
                          <details>
                            <summary className="cursor-pointer text-purple-700 font-medium mb-2">
                              Diagrama de Flujo (Mermaid)
                            </summary>
                            <pre className="p-3 bg-white rounded-lg text-xs overflow-x-auto border border-purple-100">
                              {explainResult.flowchart}
                            </pre>
                          </details>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Display */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-red-800 font-medium">Error</p>
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
                <button
                  onClick={() => setError(null)}
                  className="text-red-400 hover:text-red-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500">
            <span>Límite: 5 peticiones/minuto</span>
            <a
              href={`${API_URLS[activeTab]}/docs`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-electric-600 hover:text-electric-700 font-medium"
            >
              Ver documentación API
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DemoSection
