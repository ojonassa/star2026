"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SPONSORS = [
  { id: "1", name: "Instituto Federal do Tocantins", category: "Realização", badge: "IFTO", logoUrl: "/patrocinadores/IFTO.png" },
  { id: "2", name: "Cruzeiro Esporte Clube", category: "Patrocinador Master", badge: "CEC", logoUrl: "/patrocinadores/cruzeiro.png" },
  { id: "3", name: "Clube de Regatas Flamengo", category: "Apoio Institucional", badge: "CRF-TO", logoUrl: "/patrocinadores/flamengo.png" },
  { id: "4", name: "Globo", category: "Apoio Oficial", badge: "GLOBO", logoUrl: "/patrocinadores/globo.png" },
  { id: "5", name: "Universidade Federal do Tocantins", category: "Parceiro Estratégico", badge: "UFT", logoUrl: "/patrocinadores/UFT.jpg" },
  { id: "6", name: "UEFA Champions League", category: "Associação Futebolística", badge: "UEFA", logoUrl: "/patrocinadores/champions.png" },
  { id: "7", name: "BETANO", category: "Patrocinador Master", badge: "BETANO", logoUrl: "/patrocinadores/betano.jpg" },
  { id: "8", name: "Copa do Brasil", category: "Apoio Oficial", badge: "COPA DO BRASIL", logoUrl: "/patrocinadores/copa-do-brasil.png" },
  { id: "9", name: "Marvel Rivals", category: "Organização Gamer", badge: "Rivals", logoUrl: "/patrocinadores/rivals.png" },
  { id: "10", name: "Steam", category: "Plataforma de Games", badge: "Steam", logoUrl: "/patrocinadores/steam.jpg" },
];

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState<"day1" | "day2" | "day3">("day1");

  return (
    <div className="dark bg-black text-white min-h-screen overflow-x-hidden">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-black/90 border-b border-slate-200/80 dark:border-zinc-800/80 transition-colors">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          {/* Logo */}
          <Link href="/landing" className="flex items-center gap-1 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            STAR<span className="text-sky-500">2026.</span>
          </Link>

          {/* Nav items */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#evento" className="hover:text-sky-500 transition-colors">O Evento</a>
            <a href="#programacao" className="hover:text-sky-500 transition-colors">Programação</a>
            <a href="#palestrantes" className="hover:text-sky-500 transition-colors">Palestrantes</a>
            <a href="#apoiadores" className="hover:text-sky-500 transition-colors">Apoiadores</a>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => setShowModal(true)}
            className="rounded-lg bg-[#0088A9] hover:bg-[#007491] active:scale-95 transition-all px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md shadow-sky-900/10"
          >
            INSCREVA-SE.
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 space-y-24">
        {/* HERO SECTION */}
        <section id="evento" className="space-y-8 pt-4">
          {/* Pill Badge */}
          <div>
            <span className="inline-flex items-center rounded-full border border-sky-300/60 dark:border-sky-500/30 bg-sky-50 dark:bg-sky-950/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
              6º PERÍODO ADS • IFTO ARAGUAÍNA
            </span>
          </div>

          {/* Title */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-slate-950 dark:text-white leading-none">
              A EVOLUÇÃO DA
            </h1>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-[#0084FF] dark:text-sky-400 leading-none">
              TECNOLOGIA
            </h1>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-slate-950 dark:text-white leading-none">
              NA SOCIEDADE
            </h1>
          </div>

          {/* PILLARS / TOPIC CARDS SECTION */}
          <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-slate-200 dark:md:divide-slate-800">
              {/* Column 01 */}
              <div className="md:px-8 first:pl-0 last:pr-0 space-y-4">
                <div className="w-10 h-10 rounded-lg border border-sky-400 dark:border-sky-500 text-sky-600 dark:text-sky-400 font-bold flex items-center justify-center text-sm bg-sky-50/50 dark:bg-sky-950/30">
                  01
                </div>
                <h3 className="text-2xl font-bold italic tracking-tight text-slate-900 dark:text-white">
                  Inovação
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  As tecnologias emergentes que estão redefinindo os limites do que é possível na computação moderna.
                </p>
              </div>

              {/* Column 02 */}
              <div className="md:px-8 space-y-4">
                <div className="w-10 h-10 rounded-lg border border-sky-400 dark:border-sky-500 text-sky-600 dark:text-sky-400 font-bold flex items-center justify-center text-sm bg-sky-50/50 dark:bg-sky-950/30">
                  02
                </div>
                <h3 className="text-2xl font-bold italic tracking-tight text-slate-900 dark:text-white">
                  Segurança
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Protegendo o amanhã: estratégias avançadas de cibersegurança em um mundo hiperconectado.
                </p>
              </div>

              {/* Column 03 */}
              <div className="md:px-8 last:pr-0 space-y-4">
                <div className="w-10 h-10 rounded-lg border border-sky-400 dark:border-sky-500 text-sky-600 dark:text-sky-400 font-bold flex items-center justify-center text-sm bg-sky-50/50 dark:bg-sky-950/30">
                  03
                </div>
                <h3 className="text-2xl font-bold italic tracking-tight text-slate-900 dark:text-white">
                  Empreendedorismo
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Do código ao mercado: como transformar ideias tecnológicas em modelos de negócios sustentáveis.
                </p>
              </div>
            </div>
          </section>

          {/* Subtitle & Details Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2 items-start">
            <p className="md:col-span-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore o impacto da inovação, a importância da segurança digital e as novas fronteiras do empreendedorismo no cenário tecnológico atual.
            </p>

            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 md:border-l md:border-slate-200 dark:md:border-slate-800 md:pl-8">
              {/* Bloco DATA */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>DATA DO EVENTO</span>
                </div>
                <p className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                  03 a 05 de Dezembro
                </p>
                <p className="text-s text-slate-500 dark:text-slate-400 font-medium">
                  Edição 2026
                </p>
              </div>

              {/* Bloco LOCAL */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>LOCALIZAÇÃO</span>
                </div>
                <p className="text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                  IFTO — Campus Araguaína
                </p>
                <p className="text-s text-slate-500 dark:text-slate-400 leading-normal">
                  Av. Amazonas, Esq. c/ Av. Paraguai, Bairro Cimba
                </p>
              </div>
            </div>
          </div>



          {/* Main Hero Image */}
          <div className="relative rounded-3xl overflow-hidden bg-black group">
            <img
              src="/hero_tech_banner.jpg"
              alt="A Evolução da Tecnologia Banner"
              className="w-full h-[320px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_98%)]"
            />
          </div>
        </section>



        {/* O FUTURO DA SOCIEDADE SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
              O Futuro da Sociedade
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              A <span className="text-sky-500 font-bold">STAR 2026</span> surge como uma iniciativa acadêmica para integrar estudantes, profissionais e entusiastas em um diálogo profundo sobre as transformações digitais.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Organizada pelos concluintes do curso de <span className="text-sky-500 font-bold">Análise e Desenvolvimento de Sistemas</span> do <span className="text-sky-500 font-bold">IFTO - Campus Araguaína</span>, a jornada traz palestrantes de renome regional para discutir o papel social do desenvolvedor e as novas tendências do mercado.
            </p>
          </div>

          {/* Right Images */}

        </section>

        {/* PROGRAMAÇÃO / SCHEDULE PREVIEW */}
        <section id="programacao" className="space-y-8 border-t border-slate-200 dark:border-slate-800 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-1">
                Programação
              </p>
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Agenda do Evento
              </h2>
            </div>
            <span className="text-sm font-semibold text-slate-500">Pátio & Laboratórios de Informática</span>
          </div>

          {/* Seletor de Dias (Tabs dos 3 Dias do Evento) */}
          <div className="flex flex-wrap items-center gap-3 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-fit">
            {[
              { key: "day1", dayNum: "DIA 01", dateStr: "03 DEZ (Quinta-Feira)" },
              { key: "day2", dayNum: "DIA 02", dateStr: "04 DEZ (Sexta-Feira)" },
              { key: "day3", dayNum: "DIA 03", dateStr: "05 DEZ (Sábado)" }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedDay(tab.key as "day1" | "day2" | "day3")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${selectedDay === tab.key
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20 font-extrabold scale-105"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                  }`}
              >
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${selectedDay === tab.key ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400"}`}>
                  {tab.dayNum}
                </span>
                <span>{tab.dateStr}</span>
              </button>
            ))}
          </div>

          {/* Grade de Atividades por Dia */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">
            {selectedDay === "day1" && (
              <>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm hover:border-sky-400 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                    <span>19:30 - 20:30 • Bloco 2 - Pátio</span>
                    <span className="bg-sky-50 dark:bg-sky-950 px-2.5 py-1 rounded-full border border-sky-200 dark:border-sky-800">Abertura do Evento</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Abertura Ofical do STAR</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Boas-vindas aos participantes e apresentação da programação do evento.</p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Presentes: Equipe Organizadora do STAR e IFTO</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Entrada Livre</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm hover:border-indigo-600 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    <span>20:30 - 21:30 • Bloco 2 - Pátio</span>
                    <span className="bg-indigo-50 dark:bg-indigo-950 px-2.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">Palestra</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">[Título da Palestra]</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">[Descrição da Palestra]</p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Palestrante: [Nome do Palestrante]</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Entrada Livre</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm hover:border-emerald-400 transition-colors md:col-span-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    <span>22:00 • Bloco 2 - Pátio</span>
                    <span className="bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">Coffe Break</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Encerramento do Dia 1 - STAR 2026</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Encerramento do primeiro dia do evento.</p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Presentes: Equipe Organizadora do STAR e IFTO</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Entrada Livre</span>
                  </div>
                </div>
              </>
            )}

            {selectedDay === "day2" && (
              <>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm hover:border-yellow-400 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-yellow-600 dark:text-yellow-400 uppercase tracking-wider">
                    <span>08:30 - 12:00 • Lab 01</span>
                    <span className="bg-yellow-50 dark:bg-yellow-950 px-2.5 py-1 rounded-full border border-yellow-200 dark:border-yellow-800">Mini Curso</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Introdução ao Básico de Bussiness Intelligence e Análise de Dados</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Noções introdutórias sobre Business Intelligence e Análise de Dados, com foco em ferramentas e metodologias que auxiliam na tomada de decisão.</p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Instrutor: [A definir]</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Vagas Limitadas</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm hover:border-red-400 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                    <span>08:30 - 12:00 • Lab 02</span>
                    <span className="bg-red-50 dark:bg-red-950 px-2.5 py-1 rounded-full border border-red-200 dark:border-red-800">Minicurso</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Desenvolvimento Mobile com MIT App Inventor - Parte 01</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Desenvolva aplicativos móveis para Android utilizando a plataforma MIT App Inventor, uma ferramenta de programação visual baseada em blocos.</p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Instrutor: [A definir]</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Vagas Limitadas</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm hover:border-sky-400 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                    <span>14:30 - 18:00 • Lab 02</span>
                    <span className="bg-sky-50 dark:bg-sky-950 px-2.5 py-1 rounded-full border border-sky-200 dark:border-sky-800">Minicurso</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Desenvolvimento Web - Introdução aos códigos do mundo Web</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Neste minicurso, apresentaremos os pilares fundamentais da programação web, explorando HTML, CSS e JavaScript de forma prática e acessível.</p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Instrutor: [A definir]</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Vagas Limitadas</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm hover:border-red-400 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                    <span>14:30 - 18:00 • Lab 02</span>
                    <span className="bg-red-50 dark:bg-red-950 px-2.5 py-1 rounded-full border border-red-200 dark:border-red-800">Minicurso</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Desenvolvimento Mobile com MIT App Inventor - Parte 02</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Desenvolva aplicativos móveis para Android utilizando a plataforma MIT App Inventor, uma ferramenta de programação visual baseada em blocos.</p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Instrutor: [A definir]</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Vagas Limitadas</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm hover:border-emerald-400 transition-colors md:col-span-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    <span>19:30 - 22:00 • Bloco 2 - Pátio</span>
                    <span className="bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">Workshops - Stands de Patrocinadores</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tecnologias e Inovações</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Venha conhecer as mais recentes inovações em tecnologia e descobrir como elas podem transformar o seu futuro. Empresas parceiras estarão apresentando suas soluções e oportunidades em primeira mão.</p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Mediador: Apoiadores do Eventos</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Entrada Livre</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm hover:border-purple-400 transition-colors md:col-span-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                    <span>19:30 - 22:00 • Bloco 2 - Pátio</span>
                    <span className="bg-purple-50 dark:bg-purple-950 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800">Gamer</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Campeonato de Farmar Lei Auréa</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">[Lorem ipsum]</p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Organização: [A definir]</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Vagas Limitas [Pagas talvez]</span>
                  </div>
                </div>
              </>
            )}

            {selectedDay === "day3" && (
              <>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm hover:border-sky-400 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                    <span>08:30 - 11:30 • Bloco 2 - Pátio</span>
                    <span className="bg-sky-50 dark:bg-sky-950 px-2.5 py-1 rounded-full border border-sky-200 dark:border-sky-800">Mesa Redonda</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Carreira Pós Formação</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Bate papo com egressos e profissionais da área de tecnologia formados no IFTO</p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Participantes: [A definir]</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Vagas Limitadas</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm hover:border-purple-400 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                    <span>14:00 - 16:30 • Auditório Central</span>
                    <span className="bg-purple-50 dark:bg-purple-950 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800">Palestra de Encerramento</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Empreendedorismo Tech: Da Ideia ao MVP Escalável</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Como transformar projetos acadêmicos em startups reais e produtos validados no mercado.</p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Palestrante: Luiz do Lago Azul</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Entrada Livre</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm hover:border-amber-400 transition-colors md:col-span-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                    <span>16:30 - 18:00 • Auditório Central</span>
                    <span className="bg-amber-50 dark:bg-amber-950 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">Encerramento do Evento</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Finalização da STAR 2026</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Agradecimentos aos apoiadores, participantes e demais envolvidos.</p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Organização: Turma 6º Período ADS</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Sessão de Encerramento</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* PALESTRANTES SECTION */}
        <section id="palestrantes" className="space-y-8 border-t border-slate-200 dark:border-slate-800 pt-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-1">
              Convidado(a)s
            </p>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Palestrantes Confirmados
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Paulo Enzo",
                role: "Especialista em gHigiene Pessoal e Autocuidado",
                bio: "CEO e Founder da SkinCorps Cosméticos.",
                initials: "PE",
                photoUrl: "/palestrantes/pelos.jpg", // Preencha com o caminho da imagem ou deixe null/vazio ""
                colorTheme: "border-sky-400 bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400"
              },
              {
                name: "Samuel Mota",
                role: "Especialista",
                bio: "Aluno do IFTO ADS 6° Período",
                initials: "SM",
                photoUrl: "/palestrantes/gpi.jpg", // Sem foto -> exibe texto pré-definido / iniciais
                colorTheme: "border-emerald-400 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400"
              },
              {
                name: "Luiz do Lago Azul",
                role: "Empreendedor Autônomo",
                bio: "Rapaz que trabalha com amor.",
                initials: "ML",
                photoUrl: "/palestrantes/lagoazul.jpg", // Sem foto -> exibe texto pré-definido / iniciais
                colorTheme: "border-purple-400 bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400"
              }
            ].map((speaker, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-center space-y-4 hover:border-sky-500/50 transition-colors shadow-sm">
                <div className={`w-28 h-28 rounded-full border-4 ${speaker.colorTheme} flex items-center justify-center mx-auto overflow-hidden shadow-lg`}>
                  {speaker.photoUrl ? (
                    <img src={speaker.photoUrl} alt={speaker.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-black text-3xl">{speaker.initials}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{speaker.name}</h3>
                  <p className="text-xs text-sky-600 dark:text-sky-400 font-medium mt-0.5">{speaker.role}</p>
                  <p className="text-xs text-slate-500 mt-2">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SPONSORS / APOIADORES CAROUSEL SECTION */}
        <section id="apoiadores" className="space-y-8 border-t border-slate-200 dark:border-slate-800 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-1">
                Parcerias
              </p>
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Apoiadores & Patrocinadores
              </h2>
            </div>
            <span className="text-sm font-semibold text-slate-500">Instituições e Marcas Parceiras</span>
          </div>

          {/* Carousel Slider Automático de Ponta a Ponta (Full Screen Bleed) */}
          <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden group py-4 space-y-6">
            {/* Sombras de degradê mais largas nas extremidades da tela */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

            {/* Fileira 1: Sentido Normal (Rolagem Contínua) */}
            <div className="flex gap-8 w-max animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...SPONSORS, ...SPONSORS].map((sponsor, idx) => (
                <div
                  key={`r1-${sponsor.id}-${idx}`}
                  className="shrink-0 w-80 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex flex-col items-center text-center space-y-5 hover:border-sky-500/80 transition-all shadow-md cursor-pointer hover:scale-105"
                >
                  <div className="w-20 h-20 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-sky-600 dark:text-sky-400 text-base tracking-wider border border-slate-200 dark:border-slate-700 shadow-inner overflow-hidden">
                    {sponsor.logoUrl ? (
                      <img src={sponsor.logoUrl} alt={sponsor.name} className="w-full h-full object-contain p-2" />
                    ) : (
                      <span>{sponsor.badge}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-lg leading-snug">{sponsor.name}</h4>
                    <span className="inline-block mt-3 text-xs uppercase tracking-wider font-extrabold px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
                      {sponsor.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Fileira 2: Sentido Inverso (Ordem de Patrocinadores Invertida) */}
            <div className="flex gap-8 w-max animate-[marquee-reverse_45s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...SPONSORS].reverse().concat([...SPONSORS].reverse()).map((sponsor, idx) => (
                <div
                  key={`r2-${sponsor.id}-${idx}`}
                  className="shrink-0 w-80 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex flex-col items-center text-center space-y-5 hover:border-sky-500/80 transition-all shadow-md cursor-pointer hover:scale-105"
                >
                  <div className="w-20 h-20 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-sky-600 dark:text-sky-400 text-base tracking-wider border border-slate-200 dark:border-slate-700 shadow-inner overflow-hidden">
                    {sponsor.logoUrl ? (
                      <img src={sponsor.logoUrl} alt={sponsor.name} className="w-full h-full object-contain p-2" />
                    ) : (
                      <span>{sponsor.badge}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-lg leading-snug">{sponsor.name}</h4>
                    <span className="inline-block mt-3 text-xs uppercase tracking-wider font-extrabold px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
                      {sponsor.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <style jsx>{`
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              @keyframes marquee-reverse {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(0%); }
              }
            `}</style>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-black mt-28 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-slate-200 dark:md:divide-slate-800/80">

            {/* Bloco 1: Copyright & Marca */}
            <div className="flex flex-col items-center justify-center text-center md:px-8 space-y-3">
              <div className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                STAR<span className="text-sky-500">2026.</span>
              </div>
              <p className="text-xs leading-relaxed uppercase tracking-wider text-slate-400 dark:text-slate-500 max-w-xs">
                © 2026 STAR. Curso de Análise e Desenvolvimento de Sistemas — IFTO Campus Araguaína.<br />Todos os direitos reservados.
              </p>
            </div>

            {/* Bloco 2: Links Úteis (Coluna Vertical) */}
            <div className="flex flex-col items-center justify-center text-center md:px-8 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                LINKS ÚTEIS
              </h4>
              <nav aria-label="Navegação do rodapé" className="flex flex-col items-center space-y-2">
                {[
                  { href: "#evento", label: "O Evento" },
                  { href: "#programacao", label: "Programação" },
                  { href: "#palestrantes", label: "Palestrantes" },
                  { href: "#apoiadores", label: "Apoiadores" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:scale-105 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bloco 3: Créditos & Desenvolvedores */}
            <div className="flex flex-col items-center justify-center text-center md:px-8 space-y-3">
              <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Desenvolvido por:
              </p>
              <p
                className="inline-block px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-extrabold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:border-sky-500/80 hover:text-sky-500 dark:hover:text-sky-400 transition-all shadow-sm"
              >
                Turma 6º Período ADS-IFTO
              </p>
            </div>

          </div>
        </div>
      </footer>



      {/* Modal Inscrição Rápida */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Inscrição no STAR</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert("Inscrição simulada com sucesso!"); setShowModal(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">Nome Completo</label>
                <input required type="text" placeholder="Seu nome" className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">E-mail</label>
                <input required type="email" placeholder="seu@email.com" className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">CPF (apenas números)</label>
                <input required type="text" maxLength={11} placeholder="00000000000" className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white" />
              </div>

              <button type="submit" className="w-full rounded-xl bg-[#0088A9] hover:bg-[#007491] py-3 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-sky-900/20 active:scale-95 transition-all">
                Confirmar Inscrição
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
