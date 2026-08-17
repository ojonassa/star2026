-- Fase 1: bucket privado para logo, banners e imagens de minicursos.
-- Arquivos são acessados por URLs assinadas geradas em handlers administrativos.
insert into storage.buckets (id, name, public)
values ('event-media', 'event-media', false)
on conflict (id) do update set public = excluded.public;

create policy "admins manage event media" on storage.objects
for all to authenticated
using (bucket_id = 'event-media' and public.is_admin())
with check (bucket_id = 'event-media' and public.is_admin());

-- Seed mínimo, sem datas, locais ou pessoas fictícias apresentados como reais.
insert into public.event_settings (name, privacy_notice)
select
  'STAR — Semana de Tecnologia de Araguaína',
  'Seus dados serão utilizados para inscrição, controle de presença e apoio à emissão de certificados.'
where not exists (select 1 from public.event_settings);
