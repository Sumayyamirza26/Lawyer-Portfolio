import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20book%20a%20legal%20consultation.'

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 md:right-8 z-50 w-13 h-13 flex items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:bg-[#1ebe5d] hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      style={{ width: '52px', height: '52px' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="text-white" aria-hidden="true" />
    </a>
  )
}
