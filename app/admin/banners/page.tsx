import { requireAdmin } from "@/lib/services/admin-auth";
import BannerManager from "./manager";
export default async function Banners() { const { supabase } = await requireAdmin(); const { data } = await supabase.from("banners").select("id,title,subtitle,image_url,link_url,open_in_new_tab,sort_order,active").order("sort_order"); return <main><h1 className="text-3xl font-bold">Banners</h1><p className="mt-2 text-slate-600">Destaques exibidos na página pública do evento.</p><BannerManager initial={data ?? []}/></main>; }
