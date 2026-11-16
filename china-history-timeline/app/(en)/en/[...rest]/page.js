import { notFound } from "next/navigation";

// Unknown /en/... URLs render the English 404 inside the English layout.
export default function EnglishCatchAll() {
  notFound();
}
