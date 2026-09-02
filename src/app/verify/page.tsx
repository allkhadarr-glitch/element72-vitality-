import { permanentRedirect } from 'next/navigation'

// The QR code printed on every carton and jar encodes
// https://element72vitality.com/verify
//
// That URL is permanent — it is on physical packaging and cannot be changed
// once printed. This route exists so the printed code can never 404, and so
// the destination can be moved later without reprinting anything.

export default function VerifyPage() {
  permanentRedirect('/lab/MSRB03')
}
