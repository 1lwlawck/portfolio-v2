import CERTIFICATES from '@/data/certificates'
import { CertificatesCard } from '@/components/sections/certificates/CertificatesCard'
import { certMetadata } from '@/data/metadata'

export const metadata = certMetadata

export default function Certificates() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-8 text-2xl font-bold sm:text-4xl">Certificates 🏅</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATES.map((cert, index) => (
          <CertificatesCard
            key={index}
            name={cert.name}
            description={cert.description}
            previewImage={cert.previewImage}
            credentialUrl={cert.credentialUrl}
            issued={cert.issued}
            type={cert.type}
          />
        ))}
      </div>
    </div>
  )
}
