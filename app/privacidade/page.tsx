import Link from "next/link";

export default function PrivacyPage() {
  return <main className="mx-auto min-h-screen max-w-3xl px-4 py-12 sm:px-6"><Link className="text-blue-700 hover:underline" href="/">Voltar ao início</Link><h1 className="mt-8 text-3xl font-bold">Política de privacidade</h1><p className="mt-6 text-slate-700">Os dados pessoais informados no STAR são utilizados para inscrição, controle de presença e apoio à emissão de certificados pela instituição responsável pelo evento.</p><p className="mt-4 text-slate-700">Para solicitar correção ou exclusão de cadastro, entre em contato pelos canais oficiais que serão divulgados na página do evento.</p></main>;
}
