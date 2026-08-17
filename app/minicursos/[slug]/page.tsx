import { notFound } from "next/navigation";
import Link from "next/link";
import { CourseEnrollmentForm } from "@/components/course-enrollment-form";
import { getPublicEventData } from "@/lib/services/public-event";
export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const { courses } = await getPublicEventData(); const course = courses.find(c => c.slug === slug); if (!course) notFound(); return <main className="mx-auto min-h-screen max-w-2xl px-4 py-10"><Link href="/minicursos" className="text-blue-700 hover:underline">Voltar aos minicursos</Link><h1 className="mt-6 text-3xl font-bold">{course.title}</h1><p className="mt-4 text-slate-700">{course.description}</p><p className="mt-4"><strong>Ministrante:</strong> {course.instructor_name}</p><p><strong>Vagas:</strong> {course.capacity}</p><CourseEnrollmentForm courseId={course.id} /></main>; }
