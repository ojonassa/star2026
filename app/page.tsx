import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

import { getPublicEventData } from "@/lib/services/public-event";
import { BannerCarousel } from "@/components/banner-carousel";

function formatDate(value: string | null) {
  if (!value) return "Data a confirmar";
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(new Date(`${value}T12:00:00`));
}

function formatCourseDate(value: string | null) {
  if (!value) return "Horário a confirmar";
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(new Date(value));
}
function mediaUrl(value: string | null | undefined) { return value ? (value.startsWith("http") ? value : `/api/media/${value}`) : null; }

export default async function Home() {
  const { settings, banners, courses } = await getPublicEventData();
  const name = settings?.name ?? "STAR — Semana de Tecnologia de Araguaína";
  const theme = {
    "--star-primary": settings?.primary_color ?? "#111827",
    "--star-secondary": settings?.secondary_color ?? "#2563eb",
    "--star-accent": settings?.accent_color ?? "#22c55e",
  } as CSSProperties;
  const logo = mediaUrl(settings?.logo_url);
  const hero = mediaUrl(settings?.hero_image_url);

  return (
    <main style={theme} className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-star-primary">{logo ? <Image src={logo} alt="Logo do evento" width={128} height={36} unoptimized className="h-9 max-w-32 object-contain"/> : "STAR"}</Link>
          <nav aria-label="Navegação principal" className="flex items-center gap-4 text-sm">
            <a href="#minicursos" className="hidden sm:inline hover:underline">Minicursos</a>
            <Link href="/inscricao" className="rounded-md bg-star-secondary px-4 py-2 font-semibold text-white hover:opacity-90">Inscreva-se</Link>
          </nav>
        </div>
      </header>

      <section style={hero ? { backgroundImage: `linear-gradient(rgba(15,23,42,.82),rgba(15,23,42,.82)),url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined} className="bg-star-primary px-4 py-16 text-white sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-star-accent">Evento de tecnologia</p>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">{name}</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">{settings?.subtitle ?? "Informações oficiais da próxima edição serão divulgadas em breve."}</p>
          <dl className="mt-8 flex flex-col gap-2 text-slate-100 sm:flex-row sm:gap-8">
            <div><dt className="sr-only">Data</dt><dd>{formatDate(settings?.starts_on ?? null)}</dd></div>
            <div><dt className="sr-only">Local</dt><dd>{settings?.venue ?? "Local a confirmar"}</dd></div>
          </dl>
          <Link href="/inscricao" className="mt-8 inline-flex rounded-md bg-star-accent px-5 py-3 font-bold text-slate-950 hover:brightness-95">Fazer inscrição</Link>
        </div>
      </section>

      <section aria-label="Destaques" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {banners.length > 0 ? (
          <BannerCarousel banners={banners} />
        ) : (
          <p className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">Os destaques do evento serão publicados aqui.</p>
        )}
      </section>

      <section id="minicursos" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div><p className="text-sm font-semibold text-star-secondary">Aprendizado prático</p><h2 className="text-3xl font-bold">Minicursos</h2></div>
          <Link className="font-semibold text-star-secondary hover:underline" href="/minicursos">Ver todos</Link>
        </div>
        {courses.length > 0 ? (
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => <li key={course.id} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200"><h3 className="text-lg font-bold">{course.title}</h3><p className="mt-2 line-clamp-3 text-sm text-slate-600">{course.description}</p><dl className="mt-4 space-y-1 text-sm text-slate-700"><div><dt className="inline font-semibold">Ministrante: </dt><dd className="inline">{course.instructor_name}</dd></div><div><dt className="sr-only">Data</dt><dd>{formatCourseDate(course.starts_at)}</dd></div>{course.room && <div><dt className="inline font-semibold">Local: </dt><dd className="inline">{course.room}</dd></div>}</dl><Link href={`/minicursos/${course.slug}`} className="mt-5 inline-flex font-semibold text-star-secondary hover:underline">Detalhes e matrícula</Link></li>)}
          </ul>
        ) : <p className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white p-6 text-slate-600">Nenhum minicurso publicado no momento.</p>}
      </section>

      <section className="bg-white px-4 py-12 sm:px-6"><div className="mx-auto max-w-6xl"><h2 className="text-2xl font-bold">Localização e contato</h2><p className="mt-3 text-slate-600">{settings?.address ?? "Endereço a confirmar."}</p>{settings?.contact_email && <a className="mt-2 inline-block text-star-secondary hover:underline" href={`mailto:${settings.contact_email}`}>{settings.contact_email}</a>}</div></section>
      <footer className="bg-slate-950 px-4 py-8 text-sm text-slate-300 sm:px-6"><div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:justify-between"><span>STAR</span><Link className="hover:underline" href="/privacidade">Política de privacidade</Link></div></footer>
    </main>
  );
}
