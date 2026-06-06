// Mock data for Ari Vet On Wheels
import { Stethoscope, Syringe, Heart, ShieldCheck, Sparkles, Calendar, Users, Award } from "lucide-react";

const ASSET_BASE = "https://customer-assets.emergentagent.com/job_mobile-vet-clinic-1/artifacts";

export const photos = {
  pinkBulldog: `${ASSET_BASE}/vz5ykffm_1000149364.jpg`,
  yorkshire: `${ASSET_BASE}/ha6nuleg_1000148555.jpg`,
  whiteDog: `${ASSET_BASE}/o428njd3_1000148554.jpg`,
  beagle: `${ASSET_BASE}/0chjaxcw_20260520_133014.jpg`,
  shepherd: `${ASSET_BASE}/3lo30zfy_20260516_151615.jpg`,
};

export const brand = {
  name: "Ari Vet On Wheels",
  short: "Ari Vet",
  tagline: "Serviços Veterinários ao Domicílio",
  phone: "+351 934 285 159",
  phoneRaw: "+351934285159",
  whatsapp: "https://wa.me/351934285159",
  instagram: "https://www.instagram.com/arivetonwheels/",
  email: "geral@arivetonwheels.pt",
  areas: ["Sintra", "Oeiras", "Cascais", "Moita", "Montijo", "Alcochete"],
};

export const services = [
  {
    id: "consulta",
    icon: Stethoscope,
    title: "Consulta ao domicílio",
    desc: "Cuidados veterinários no conforto de casa, com acompanhamento personalizado.",
  },
  {
    id: "vacinacao",
    icon: Syringe,
    title: "Vacinação",
    desc: "Protocolos vacinais adaptados à idade, estilo de vida e necessidades de cada animal.",
  },
];

export const reasons = [
  {
    id: "menos-ansiedade",
    eyebrow: "MENOS ANSIEDADE",
    title: "Sem transporte. Sem sala de espera.",
    desc: "Removemos as duas maiores fontes de stress de uma consulta. O seu animal permanece no espaço onde se sente seguro.",
    image: photos.pinkBulldog,
  },
  {
    id: "mais-conforto",
    eyebrow: "MAIS CONFORTO",
    title: "O ambiente familiar que eles já conhecem",
    desc: "Em casa, o comportamento é autêntico, os sinais clínicos mais claros, e o tempo da consulta é integralmente do seu animal.",
    image: photos.beagle,
  },
  {
    id: "atencao-personalizada",
    eyebrow: "ATENÇÃO PERSONALIZADA",
    title: "Uma consulta. Um foco.",
    desc: "Sem agendas sobrepostas. Avaliação clínica detalhada, com o tempo necessário para escutar e explicar.",
    image: photos.shepherd,
  },
];

export const steps = [
  {
    n: "01",
    title: "Agendar uma consulta",
    desc: "Preencha o formulário no nosso site ou contacte-nos diretamente por telefone, WhatsApp ou Instagram. A nossa equipa responde em breve.",
  },
  {
    n: "02",
    title: "Enviamos um pré-orçamento",
    desc: "Avaliamos as informações partilhadas e enviamos uma estimativa do valor da consulta, conforme as necessidades do seu animal.",
  },
  {
    n: "03",
    title: "Consulta ao domicílio",
    desc: "O médico veterinário desloca-se até si para realizar a avaliação clínica, aconselhamento, vacinação ou outros cuidados necessários.",
  },
  {
    n: "04",
    title: "Seguimento",
    desc: "Ficamos disponíveis para acompanhar a evolução do seu animal e esclarecer qualquer dúvida nos dias seguintes à consulta.",
  },
];

export const trustItems = [
  { icon: Users, title: "Atendimento personalizado", desc: "Uma consulta dedicada, sem sobreposição de horários." },
  { icon: Heart, title: "Medicina ao domicílio", desc: "Equipamento profissional levado ao espaço do animal." },
  { icon: Sparkles, title: "Ambiente tranquilo", desc: "Reduzimos o ruído, o stress e a pressa do contexto clínico." },
  { icon: Calendar, title: "Acompanhamento contínuo", desc: "Plano partilhado e revisão clínica nos dias seguintes." },
  { icon: ShieldCheck, title: "Foco no bem-estar", desc: "Decisões tomadas em diálogo, com tempo e transparência." },
  { icon: Award, title: "Equipa certificada", desc: "Médicos veterinários inscritos na OMV e em formação contínua." },
];

export const hours = [
  { label: "Segunda a Sexta", value: "9:00 às 20:30" },
  { label: "Sábado", value: "9:30 às 18:00" },
  { label: "Domingos e Feriados", value: "Encerrado" },
];
