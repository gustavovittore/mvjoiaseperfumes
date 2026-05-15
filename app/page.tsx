import Image from "next/image";

const whatsappHref =
  "https://wa.me/5547999545051?text=Olá,%20vim%20pela%20landing%20page%20da%20MV%20Jóias%20%26%20Perfumes%20e%20gostaria%20de%20conhecer%20a%20coleção.";

const brand = {
  logo: "/brand/logotipo-principal2.png",
  heroBackground: "/brand/hero-background-premium-mv.png.png",
  essence: "/brand/institucional-marca-mv2.png.png",
  jewelry: "/brand/sessao-joias-premium-mv.png.png",
  perfume: "/brand/sessao-perfumes-premium-mv.png.png",
  bags: "/brand/sessao-bolsas-premium-mv.png.png",
  watches: "/brand/sessao-relogios-premium-mv.png.png",
  founders: "/brand/foto-socias-vanessa-e-maristela.png.png",
};

const reference = {
  experience: "/reference/12-background-experiencia-mv-section.png.png",
  bags: "/reference/13-background-bolsas-section.png.png",
  founders: "/reference/13-background-sobre-as-sócias.png.png",
  finalCta: "/reference/10-background-cta-final-section.png.png",
};

const icons = {
  whatsapp: "/icons/whatsapp-icon-rodape.png.png",
  productWhatsapp: "/icons/whatsapp-icon-produtos.png.png",
  heroJewelry: "/icons/joias-selecionadas.png.png",
  heroPerfumes: "/icons/perfumes-marcantes-2.png.png",
  heroAccessories: "/icons/acessórios-refinados.png.png",
  curation: "/icons/curadoria-premium.png.png",
  attendance: "/icons/atendimento-personalizado.png.png",
  products: "/icons/produtos-selecionados.png.png",
  experience: "/icons/experiência-sofisticada.png.png",
  eleganceDetail: "/icons/elegância-em-cada-detalhe.png.png",
  essence: "/icons/essência-2.png.png",
  purpose: "/icons/propósito-2.png.png",
  instagram: "/icons/instagram-icon-rodape.png.png",
  tiktok: "/icons/tiktok-icon.png",
  facebook: "/icons/facebook-icon.png",
};

const heroHighlights = [
  {
    label: "Joias selecionadas",
    icon: icons.heroJewelry,
    iconAlt: "Ícone de joias selecionadas",
  },
  {
    label: "Perfumes marcantes",
    icon: icons.heroPerfumes,
    iconAlt: "Ícone de perfumes marcantes",
  },
  {
    label: "Acessórios refinados",
    icon: icons.heroAccessories,
    iconAlt: "Ícone de acessórios refinados",
  },
];

const features = [
  {
    number: "01",
    icon: icons.curation,
    iconAlt: "Ícone de curadoria premium",
    title: "Curadoria premium",
    text: "Cada peça é escolhida com atenção ao design, acabamento e sofisticação, criando uma seleção pensada para mulheres que valorizam beleza, presença e exclusividade.",
  },
  {
    number: "02",
    icon: icons.attendance,
    iconAlt: "Ícone de atendimento personalizado",
    title: "Atendimento personalizado",
    text: "Um atendimento próximo, elegante e cuidadoso, pensado para entender o estilo de cada cliente e orientar escolhas que combinem com sua essência.",
  },
  {
    number: "03",
    icon: icons.products,
    iconAlt: "Ícone de produtos selecionados",
    title: "Produtos selecionados",
    text: "Joias, perfumes, bolsas e acessórios escolhidos para transmitir qualidade, bom gosto e alto valor percebido em cada detalhe.",
  },
  {
    number: "04",
    icon: icons.experience,
    iconAlt: "Ícone de experiência sofisticada",
    title: "Experiência sofisticada",
    text: "Da primeira descoberta ao contato final, a MV busca oferecer uma jornada refinada, acolhedora e alinhada ao universo feminino premium.",
  },
  {
    number: "05",
    icon: icons.eleganceDetail,
    iconAlt: "Ícone de elegância em cada detalhe",
    iconClass: "scale-110",
    title: "Elegância em cada detalhe",
    text: "Cada escolha visual, cada peça e cada atendimento refletem o compromisso da marca com sofisticação, feminilidade e presença.",
  },
];

const faqs = [
  {
    question: "Vocês trabalham com atendimento personalizado?",
    answer:
      "Sim. O atendimento da MV é pensado para entender o estilo, o momento e a preferência de cada cliente, orientando escolhas com cuidado e sofisticação.",
  },
  {
    question: "Como funciona o atendimento pelo WhatsApp?",
    answer:
      "Ao clicar no botão de WhatsApp, você será direcionada para conversar com a equipe MV, conhecer produtos disponíveis, tirar dúvidas e receber orientação personalizada.",
  },
  {
    question: "A MV envia para outras cidades?",
    answer:
      "Sim. A loja pode orientar sobre formas de envio e disponibilidade conforme a localização da cliente.",
  },
  {
    question: "Como escolher a peça ideal?",
    answer:
      "A equipe MV pode ajudar a escolher peças, fragrâncias e acessórios que combinem com seu estilo, ocasião e personalidade.",
  },
  {
    question: "Vocês possuem peças selecionadas?",
    answer:
      "Sim. A MV trabalha com uma curadoria refinada de joias, perfumes, bolsas e acessórios pensados para mulheres que valorizam sofisticação e exclusividade.",
  },
];

function Spark() {
  return <span className="inline-block h-2 w-2 shrink-0 rotate-45 bg-[#D1AF66]" />;
}

function IconImage({
  src,
  alt,
  className,
  size = 32,
}: {
  src: string;
  alt: string;
  className: string;
  size?: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}

function DecorLine({ center = true }: { center?: boolean }) {
  return (
    <div
      className={`my-7 flex items-center gap-5 text-[#D1AF66] ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-20 bg-[#D1AF66]/70 sm:w-24" />
      <Spark />
      <span className="h-px w-20 bg-[#D1AF66]/70 sm:w-24" />
    </div>
  );
}

function PrimaryButton({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[3.75rem] max-w-full items-center justify-center gap-3 rounded-xl border border-[#D1AF66] bg-transparent px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#D1AF66] transition duration-300 hover:-translate-y-1 hover:bg-[#D1AF66]/12 focus:outline-none focus:ring-2 focus:ring-[#D1AF66] focus:ring-offset-2 focus:ring-offset-[#010F1B] sm:px-10 sm:tracking-[0.24em] ${className}`}
    >
      <IconImage
        src={icons.whatsapp}
        alt="Ícone de WhatsApp"
        size={22}
        className="h-5 w-5"
      />
      {children}
    </a>
  );
}

function SecondaryButton({ children }: { children: string }) {
  return (
    <a
      href="#joias"
      className="inline-flex min-h-[3.75rem] items-center justify-center rounded-xl border border-[#D1AF66] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#D1AF66]/12 sm:px-10 sm:tracking-[0.24em]"
    >
      {children}
    </a>
  );
}

function ReferenceLabel({
  children,
  dark = false,
}: {
  children: string;
  dark?: boolean;
}) {
  return (
    <p
      className={`mb-6 flex max-w-full flex-wrap items-center gap-4 text-[0.72rem] font-semibold uppercase tracking-[0.32em] sm:tracking-[0.38em] ${
        dark ? "text-[#D1AF66]" : "text-[#9A783E]"
      }`}
    >
      <span className="h-px w-12 bg-[#D1AF66]/75" />
      {children}
      <Spark />
    </p>
  );
}

function ReferenceDivider({ dark = false }: { dark?: boolean }) {
  return (
    <div className="my-8 flex items-center gap-4 text-[#D1AF66]">
      <span className={`h-px w-20 ${dark ? "bg-[#D1AF66]/60" : "bg-[#D1AF66]/75"}`} />
      <Spark />
      <span className={`h-px w-20 ${dark ? "bg-[#D1AF66]/60" : "bg-[#D1AF66]/75"}`} />
    </div>
  );
}

function ReferenceButton({
  children,
  filled = false,
  dark = false,
}: {
  children: string;
  filled?: boolean;
  dark?: boolean;
}) {
  const whatsappIcon = filled ? icons.whatsapp : icons.productWhatsapp;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-[4.25rem] max-w-full items-center justify-between gap-5 rounded-full border border-[#D1AF66] px-5 py-3 text-left text-[0.72rem] font-bold uppercase tracking-[0.22em] transition duration-300 sm:px-7 ${
        filled
          ? "bg-transparent text-[#D1AF66] shadow-[0_22px_55px_rgba(1,15,27,0.22)] hover:bg-[#D1AF66] hover:text-[#010F1B]"
          : dark
            ? "text-white hover:bg-[#D1AF66] hover:text-[#010F1B]"
            : "text-[#010F1B] hover:bg-[#D1AF66] hover:text-[#010F1B]"
      }`}
    >
      <span className="flex max-w-[14rem] items-center gap-3">
        <IconImage
          src={whatsappIcon}
          alt="Ícone de WhatsApp"
          size={22}
          className="h-4 w-4 sm:h-5 sm:w-5"
        />
        <span>{children}</span>
      </span>
      <span className="text-xl transition duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}

function FloatingProduct({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative mx-auto w-full ${className}`}>
      <div className="absolute left-1/2 top-1/2 h-[54%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D1AF66]/10 blur-3xl" />
      <div className="absolute inset-x-[10%] bottom-[5%] h-px bg-gradient-to-r from-transparent via-[#D1AF66]/55 to-transparent" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 z-10 h-full w-full object-contain drop-shadow-[0_36px_48px_rgba(1,15,27,0.18)]"
      />
    </div>
  );
}

function ReferenceLightSection({
  id,
  label,
  title,
  italicWord,
  text,
  complement,
  image,
  imageAlt,
  cta,
  imageSide = "right",
  imageClass = "",
  mobileProductLayout = false,
}: {
  id?: string;
  label: string;
  title: string;
  italicWord?: string;
  text: string;
  complement?: string;
  image: string;
  imageAlt: string;
  cta?: string;
  imageSide?: "left" | "right";
  imageClass?: string;
  mobileProductLayout?: boolean;
}) {
  const imageFirst = imageSide === "left";
  const titleParts = italicWord ? title.split(italicWord) : [title];

  return (
    <section id={id} className="relative overflow-hidden bg-[#F4EFE6] px-4 py-8 sm:px-8 sm:py-12 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_22%,rgba(209,175,102,0.14),transparent_30%),linear-gradient(180deg,#F8F5EF_0%,#F4EFE6_100%)]" />
      <div className="relative mx-auto max-w-[1500px] rounded-[30px] border border-[#D1AF66]/70 px-6 py-14 sm:px-10 sm:py-18 lg:px-20 lg:py-20">
        <div
          className={`grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20 ${
            imageFirst ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          <div className={`min-w-0 ${imageFirst ? "lg:col-start-2" : ""}`}>
            <ReferenceLabel>{label}</ReferenceLabel>
            <h2 className="max-w-full text-balance text-[2.35rem] font-light leading-[1.03] text-[#010F1B] sm:max-w-[42rem] sm:text-[3.25rem] lg:text-[3.7rem]">
              {titleParts[0]}
              {italicWord ? <span className="italic text-[#9A783E]">{italicWord}</span> : null}
              {titleParts[1] ?? null}
            </h2>
            <ReferenceDivider />
            {mobileProductLayout ? (
              <div className="mb-8 lg:hidden">
                <FloatingProduct
                  src={image}
                  alt={imageAlt}
                  className={`aspect-[0.92/1] max-w-[820px] ${imageClass}`}
                />
              </div>
            ) : null}
            <div className="max-w-full space-y-6 text-[1.13rem] leading-9 text-[#31404A] sm:max-w-[42rem] sm:text-[1.24rem] sm:leading-10">
              <p>{text}</p>
              {complement ? <p>{complement}</p> : null}
            </div>
            {cta ? (
              <div className="mt-10">
                <ReferenceButton>{cta}</ReferenceButton>
              </div>
            ) : null}
          </div>

          <div className={`min-w-0 ${mobileProductLayout ? "hidden lg:block" : ""} ${imageFirst ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            <FloatingProduct
              src={image}
              alt={imageAlt}
              className={`aspect-[0.92/1] max-w-[820px] ${imageClass}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferenceExperience() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010F1B] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-36">
      <Image
        src={reference.experience}
        alt=""
        fill
        aria-hidden="true"
        className="-z-30 object-cover object-center opacity-76"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(1,15,27,0.50)_0%,rgba(1,15,27,0.74)_42%,rgba(1,15,27,0.94)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(1,15,27,0.36),transparent_28%),linear-gradient(180deg,rgba(1,15,27,0.20)_0%,rgba(1,15,27,0.55)_100%)]" />

      <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[0.46fr_0.54fr] lg:items-start lg:gap-16">
        <div className="pt-2 lg:sticky lg:top-12">
          <ReferenceLabel dark>Experiência MV</ReferenceLabel>
          <h2 className="max-w-[40rem] text-[2rem] font-light leading-[1.05] text-white sm:text-[2.7rem] lg:text-[2.95rem]">
            <span className="block">Uma experiência</span>
            <span className="block whitespace-nowrap">pensada para valorizar</span>
            <span className="block">cada escolha.</span>
          </h2>
          <ReferenceDivider dark />
          <p className="max-w-[31rem] text-[1.18rem] leading-9 text-white/84 sm:text-[1.3rem] sm:leading-10">
            Na MV, cada detalhe importa. Da curadoria das peças ao atendimento,
            tudo é pensado para que cada cliente se sinta acolhida, elegante e única.
          </p>
        </div>

        <div className="relative">
          {features.map((item) => (
            <article
              key={item.number}
              className="grid gap-5 border-b border-[#D1AF66]/34 py-9 last:border-b-0 sm:grid-cols-[92px_46px_1fr] sm:gap-7 lg:py-10"
            >
              <span className="font-serif text-[2.35rem] font-light leading-none text-[#D1AF66] sm:text-[4rem]">
                {item.number}
              </span>
              <span className="relative hidden min-h-32 justify-center sm:flex">
                <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#D1AF66]/62" />
                <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#D1AF66]" />
              </span>
              <div>
                <h3 className="flex items-center gap-3 font-serif text-[1.62rem] font-light leading-tight text-[#D1AF66] sm:gap-4 sm:text-[1.9rem]">
                  <IconImage
                    src={item.icon}
                    alt={item.iconAlt}
                    size={56}
                    className={`h-11 w-11 sm:h-12 sm:w-12 ${item.iconClass ?? ""}`}
                  />
                  <span>{item.title}</span>
                </h3>
                <p className="mt-5 max-w-[34rem] text-[1.12rem] leading-9 text-white/82 sm:text-[1.22rem] sm:leading-10">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferenceBags() {
  return (
    <section id="bolsas" className="relative overflow-hidden bg-[#F4EFE6] px-4 py-8 sm:px-8 sm:py-12 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_34%,rgba(209,175,102,0.13),transparent_34%),linear-gradient(180deg,#F8F5EF_0%,#F4EFE6_100%)]" />
      <div className="relative mx-auto max-w-[1500px] rounded-[30px] border border-[#D1AF66]/70 px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <div className="absolute right-8 top-24 hidden h-32 w-px bg-[#D1AF66]/55 lg:block" />
        <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:gap-10">
          <div className="min-w-0">
            <ReferenceLabel>Bolsas premium</ReferenceLabel>
            <h2 className="max-w-[36rem] text-[2.55rem] font-light leading-[1.02] text-[#010F1B] sm:text-[3.55rem] lg:text-[4.25rem]">
              Elegância que acompanha sua{" "}
              <span className="italic text-[#9A783E]">presença.</span>
            </h2>
            <ReferenceDivider />
            <div className="mb-8 lg:hidden">
              <FloatingProduct
                src={brand.bags}
                alt="Bolsas premium selecionadas pela MV Jóias & Perfumes"
                className="aspect-[1.18/0.84] max-w-[1220px] scale-[1.58] sm:scale-[1.08] lg:translate-x-12 lg:scale-[1.42] xl:scale-[1.5]"
              />
            </div>
            <div className="max-w-[39rem] space-y-6 text-[1.13rem] leading-9 text-[#31404A] sm:text-[1.24rem] sm:leading-10">
              <p>Bolsas selecionadas para mulheres que valorizam sofisticação, estilo refinado e detalhes que elevam sua imagem.</p>
              <p>Mais do que um acessório, a bolsa certa comunica presença, bom gosto e intenção. Cada escolha revela uma mulher que entende o valor dos detalhes.</p>
            </div>
            <div className="mt-10">
              <ReferenceButton>Conhecer Bolsas</ReferenceButton>
            </div>
          </div>

          <div className="hidden min-w-0 lg:block">
            <FloatingProduct
              src={brand.bags}
              alt="Bolsas premium selecionadas pela MV Jóias & Perfumes"
              className="aspect-[1.18/0.84] max-w-[1220px] scale-[1.58] sm:scale-[1.08] lg:translate-x-12 lg:scale-[1.42] xl:scale-[1.5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferenceFounders() {
  const pillars = [
    {
      title: "Propósito",
      text: "Valorizar mulheres em cada escolha, oferecendo uma experiência pensada para despertar confiança, beleza e presença.",
      icon: icons.purpose,
      iconAlt: "Ícone de propósito",
      iconClass: "scale-110",
    },
    {
      title: "Curadoria",
      text: "Seleção refinada para momentos únicos, com peças escolhidas pelo cuidado, acabamento e sofisticação.",
      icon: icons.curation,
      iconAlt: "Ícone de curadoria premium",
    },
    {
      title: "Essência",
      text: "Beleza, significado e autoestima em detalhes que traduzem feminilidade, elegância e autenticidade.",
      icon: icons.essence,
      iconAlt: "Ícone de essência",
      iconClass: "scale-110",
    },
  ];

  return (
    <section id="sobre" className="relative isolate overflow-hidden bg-[#010F1B] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <Image src={reference.founders} alt="" fill aria-hidden="true" className="-z-30 object-cover opacity-88" sizes="100vw" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(1,15,27,0.94)_0%,rgba(1,15,27,0.84)_48%,rgba(1,15,27,0.68)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_18%,rgba(209,175,102,0.16),transparent_32%),linear-gradient(180deg,rgba(1,15,27,0.12)_0%,rgba(1,15,27,0.66)_100%)]" />

      <div className="mx-auto max-w-[1420px]">
        <div className="grid gap-14 lg:grid-cols-[0.55fr_0.45fr] lg:items-center lg:gap-20">
          <div>
            <ReferenceLabel dark>Sobre as sócias</ReferenceLabel>
            <h2 className="max-w-[39rem] text-balance text-[2.5rem] font-light leading-[1.04] text-white sm:text-[3.45rem] lg:text-[4.05rem]">
              Duas mulheres, <span className="italic text-[#D1AF66]">um propósito:</span>
            </h2>
            <p className="mt-5 font-serif text-[2rem] font-light italic leading-tight text-[#D1AF66] sm:text-[2.75rem]">
              Muito mais que joias.
            </p>
            <ReferenceDivider dark />
            <div className="max-w-[44rem] space-y-6 text-[1.13rem] leading-9 text-white/78 sm:text-[1.24rem] sm:leading-10">
              <p>
                Antes da MV existir, existia um propósito compartilhado por duas mulheres:
                fazer outras mulheres se sentirem mais confiantes, bonitas e únicas.
                <span className="text-[#D1AF66]"> Vanessa Pereira</span> e{" "}
                <span className="text-[#D1AF66]">Maristela Amorim</span> construíram
                uma marca onde cada escolha carrega beleza, significado e autoestima.
              </p>
              <p>
                Com olhar sensível e curadoria refinada, elas transformaram a MV em
                uma experiência feminina premium, onde cada detalhe é pensado para{" "}
                <span className="text-[#D1AF66]">
                  valorizar presença, elegância e autenticidade.
                </span>
              </p>
            </div>
            <div className="mt-10 border-l border-[#D1AF66] pl-6">
              <p className="font-serif text-[1.75rem] font-light italic leading-tight text-white sm:text-[2.2rem]">
                Beleza que inspira. Escolhas que transformam.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] rounded-[28px] border border-[#D1AF66]/75 p-3">
            <div className="relative aspect-[0.78/1] overflow-hidden rounded-[22px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.founders}
                alt="Vanessa Pereira e Maristela Amorim, sócias da MV Jóias & Perfumes"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-[#D1AF66]/30 pt-9 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className={`relative ${index > 0 ? "sm:border-l sm:border-[#D1AF66]/30 sm:pl-7" : ""}`}>
              <h3 className="flex items-center gap-3 font-serif text-[1.65rem] font-light text-[#D1AF66] sm:text-[1.9rem]">
                <IconImage
                  src={pillar.icon}
                  alt={pillar.iconAlt}
                  size={56}
                  className={`h-9 w-9 sm:h-12 sm:w-12 ${pillar.iconClass ?? ""}`}
                />
                <span>{pillar.title}</span>
              </h3>
              <p className="mt-3 max-w-sm text-[1.04rem] leading-8 text-white/70 sm:text-[1.1rem]">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferenceFAQ() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE6] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(209,175,102,0.12),transparent_32%),linear-gradient(180deg,#F8F5EF_0%,#EEE7DA_100%)]" />
      <div className="relative mx-auto grid max-w-[1420px] gap-14 lg:grid-cols-[0.38fr_1px_0.62fr] lg:gap-14">
        <div>
          <ReferenceLabel>Dúvidas frequentes</ReferenceLabel>
          <h2 className="max-w-md text-balance text-[2.7rem] font-light leading-[1.02] text-[#010F1B] sm:text-[3.8rem] lg:text-[4.35rem]">
            Dúvidas <span className="italic text-[#9A783E]">frequentes</span>
          </h2>
          <ReferenceDivider />
          <p className="max-w-md text-[1.13rem] leading-9 text-[#31404A] sm:text-[1.24rem] sm:leading-10">
            Informações para tornar sua experiência com a MV ainda mais clara, segura
            e sofisticada.
          </p>
        </div>

        <div className="relative hidden bg-[#D1AF66]/45 lg:block">
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#D1AF66]" />
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[24px] border border-[#D1AF66]/55 bg-[#F8F5EF]/60 px-5 py-5 transition duration-300 open:bg-white/45 sm:px-7 sm:py-6">
              <summary className="flex cursor-pointer list-none items-center gap-5 text-left">
                <Spark />
                <span className="flex-1 font-serif text-[1.45rem] font-light leading-tight text-[#010F1B] sm:text-[1.85rem]">
                  {faq.question}
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D1AF66]/65 text-xl text-[#9A783E] transition duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-3xl pl-8 pt-5 text-[1.08rem] leading-8 text-[#31404A] sm:pl-12 sm:text-[1.16rem] sm:leading-9">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferenceFinalCTA() {
  return (
    <section id="contato" className="relative isolate overflow-hidden bg-[#010F1B] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <Image src={reference.finalCta} alt="" fill aria-hidden="true" className="-z-30 object-cover opacity-88" sizes="100vw" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(1,15,27,0.74)_0%,rgba(1,15,27,0.86)_100%)]" />
      <div className="absolute inset-x-[6%] top-8 -z-10 h-px bg-gradient-to-r from-transparent via-[#D1AF66]/65 to-transparent" />
      <div className="absolute inset-x-[6%] bottom-8 -z-10 h-px bg-gradient-to-r from-transparent via-[#D1AF66]/45 to-transparent" />

      <div className="mx-auto flex max-w-[1160px] flex-col items-center text-center">
        <ReferenceLabel dark>Atendimento MV</ReferenceLabel>
        <h2 className="max-w-[48rem] text-balance text-[2.45rem] font-light leading-[1.04] sm:text-[3.6rem] lg:text-[4.25rem]">
          Sua presença merece detalhes exclusivos.
        </h2>
        <DecorLine />
        <p className="max-w-3xl text-[1.18rem] leading-9 text-white/82 sm:text-[1.36rem] sm:leading-10">
          Fale com a MV Jóias & Perfumes e conheça uma curadoria feita para mulheres sofisticadas.
        </p>
        <div className="mt-10">
          <ReferenceButton filled>Falar no WhatsApp</ReferenceButton>
        </div>
      </div>
    </section>
  );
}

function ReferenceFooter() {
  const contacts = [
    {
      text: "(47) 99954-5051",
      href: whatsappHref,
      featured: true,
      icon: icons.whatsapp,
      iconAlt: "Ícone de WhatsApp",
    },
    {
      text: "@mvjoiaseperfumes",
      href: "https://www.instagram.com/mvjoiaseperfumes",
      icon: icons.instagram,
      iconAlt: "Ícone do Instagram",
    },
    {
      text: "@mvjoiaseperfumes",
      href: "https://www.tiktok.com/@mvjoiaseperfumes",
      icon: icons.tiktok,
      iconAlt: "Ícone do TikTok",
    },
    {
      text: "MV Jóias & Perfumes",
      href: "https://www.facebook.com/search/top?q=MV%20J%C3%B3ias%20%26%20Perfumes",
      icon: icons.facebook,
      iconAlt: "Ícone do Facebook",
    },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-[#010F1B] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-18">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_36%,rgba(8,44,66,0.34),transparent_44%),radial-gradient(circle_at_16%_22%,rgba(209,175,102,0.07),transparent_30%)]" />
      <div className="ml-0 mr-auto max-w-[1360px] 2xl:ml-6">
        <div className="flex items-center gap-7 text-[#D1AF66]">
          <span className="h-px flex-1 bg-[#D1AF66]/44" />
          <Spark />
          <span className="h-px flex-1 bg-[#D1AF66]/44" />
        </div>

        <div className="grid gap-14 py-14 lg:grid-cols-[0.88fr_52px_0.64fr_52px_0.7fr] lg:items-center lg:gap-6 lg:py-20 xl:gap-8">
          <div className="flex min-w-0 flex-col items-center text-center">
            <div className="relative h-64 w-[40rem] max-w-full sm:h-72">
              <Image
                src={brand.logo}
                alt="MV Jóias & Perfumes"
                fill
                className="object-contain"
                sizes="640px"
              />
            </div>
            <div className="-mt-10 flex w-72 max-w-[72%] items-center gap-4 text-[#D1AF66]">
              <span className="h-px flex-1 bg-[#D1AF66]/70" />
              <Spark />
              <span className="h-px flex-1 bg-[#D1AF66]/70" />
            </div>
            <p className="mt-5 max-w-[38rem] text-center text-[1.18rem] leading-[1.45] text-white/74 sm:text-[1.24rem]">
              <span className="block lg:whitespace-nowrap">
                Joias, perfumes e acessórios para mulheres que
              </span>{" "}
              <span className="block lg:whitespace-nowrap">
                valorizam sofisticação, presença e autenticidade.
              </span>
            </p>
          </div>

          <div className="relative hidden h-full min-h-80 lg:block" aria-hidden="true">
            <span className="absolute inset-y-10 left-1/2 w-px -translate-x-1/2 bg-[#D1AF66]/28" />
            <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#D1AF66]" />
          </div>

          <div className="w-full min-w-0 max-w-[27rem] px-3 text-left lg:px-4">
            <div className="mx-auto w-fit lg:mx-0">
              <p className="text-center text-sm font-semibold uppercase tracking-[0.42em] text-[#D1AF66]">
                Contato
              </p>
              <div className="my-6 flex items-center justify-center gap-4 text-[#D1AF66]">
                <span className="h-px w-20 bg-[#D1AF66]/62" />
                <Spark />
                <span className="h-px w-20 bg-[#D1AF66]/62" />
              </div>
            </div>
            <div className="space-y-4 border-y border-[#D1AF66]/20 py-6">
              {contacts.map((contact) => (
                <a
                  key={`${contact.text}-${contact.href}`}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 leading-8 transition duration-300 hover:text-[#D1AF66] ${
                    contact.featured
                      ? "text-[1.16rem] text-white/86"
                      : "text-[1.16rem] text-white/80"
                  }`}
                >
                  <IconImage
                    src={contact.icon}
                    alt={contact.iconAlt}
                    size={20}
                    className="h-4 w-4 opacity-90 sm:h-5 sm:w-5"
                  />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative hidden h-full min-h-80 lg:block" aria-hidden="true">
            <span className="absolute inset-y-10 left-1/2 w-px -translate-x-1/2 bg-[#D1AF66]/28" />
            <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#D1AF66]" />
          </div>

          <div className="min-w-0 px-3 text-left lg:px-4">
            <div className="mx-auto w-fit lg:mx-0">
              <p className="text-center text-sm font-semibold uppercase tracking-[0.42em] text-[#D1AF66]">
                Endereço
              </p>
              <div className="my-6 flex items-center justify-center gap-4 text-[#D1AF66]">
                <span className="h-px w-20 bg-[#D1AF66]/62" />
                <Spark />
                <span className="h-px w-20 bg-[#D1AF66]/62" />
              </div>
            </div>
            <div className="space-y-2 border-y border-[#D1AF66]/20 py-6 text-[1.1rem] leading-7 text-white/78 sm:text-[1.16rem] sm:leading-8">
              <p className="whitespace-nowrap">R. Gov. Celso Ramos, 605 - Sala 1</p>
              <p className="whitespace-nowrap">Centro, Itapema - SC | CEP: 88220-000</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-7 text-[#D1AF66]">
          <span className="h-px flex-1 bg-[#D1AF66]/44" />
          <Spark />
          <span className="h-px flex-1 bg-[#D1AF66]/44" />
        </div>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 text-center text-[0.96rem] leading-8 text-white/58 sm:flex-row sm:gap-5">
          <p>© 2026 MV Joias & Perfumes. Todos os direitos reservados.</p>
          <Spark />
          <p>Políticas de Privacidade | Termos de uso</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#010F1B] text-[#1B1B1B]">
      <section
        id="inicio"
        className="relative isolate flex min-h-[88vh] flex-col overflow-hidden bg-[#010F1B] text-white lg:min-h-[860px]"
      >
        <div className="absolute inset-0 -z-30 bg-[#010F1B]" />
        <div className="absolute inset-0 -z-20 lg:left-[30%] lg:[mask-image:linear-gradient(90deg,transparent_0%,black_18%,black_100%)]">
          <Image
            src={brand.heroBackground}
            alt=""
            fill
            priority
            aria-hidden="true"
            className="object-cover object-[58%_center] opacity-95 sm:object-[62%_center] lg:object-fill"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(1,15,27,0.995)_0%,rgba(1,15,27,0.985)_28%,rgba(1,15,27,0.86)_46%,rgba(1,15,27,0.38)_66%,rgba(1,15,27,0.11)_84%,rgba(1,15,27,0.03)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(1,15,27,0.22)_0%,rgba(1,15,27,0.07)_42%,rgba(1,15,27,0.48)_100%)]" />
        <div className="absolute inset-y-0 left-0 -z-10 w-[58%] bg-[radial-gradient(circle_at_20%_18%,rgba(209,175,102,0.10),transparent_24%)]" />

        <header className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-start gap-5 px-5 py-5 sm:grid-cols-[auto_auto] sm:items-center sm:px-8 lg:grid-cols-[405px_auto_auto] lg:gap-6 lg:py-5 lg:pl-6 lg:pr-20">
          <div className="flex shrink-0 flex-col items-start">
            <a
              href="#inicio"
              className="relative h-60 w-[28rem] max-w-[calc(100vw-2rem)] shrink-0 overflow-hidden sm:h-44 sm:w-[22rem] sm:max-w-full lg:h-[15.75rem] lg:w-[450px]"
            >
              <Image
                src={brand.logo}
                alt="MV Jóias & Perfumes"
                fill
                priority
                className="origin-left -translate-x-8 scale-[1.46] object-contain object-left sm:translate-x-0 sm:scale-100 lg:-translate-x-16 lg:scale-[1.18]"
                sizes="(max-width: 640px) 320px, 450px"
              />
            </a>
            <div className="-mt-9 hidden w-52 items-center gap-4 text-[#D1AF66] sm:flex lg:-mt-12 lg:w-72">
              <span className="h-px flex-1 bg-[#D1AF66]/70" />
              <Spark />
              <span className="h-px flex-1 bg-[#D1AF66]/70" />
            </div>
          </div>

          <nav className="hidden items-center justify-start gap-8 text-lg font-medium text-white/88 lg:flex">
            {[
              ["Início", "#inicio"],
              ["Joias", "#joias"],
              ["Perfumes", "#perfumes"],
              ["Bolsas", "#bolsas"],
              ["Relógios", "#relogios"],
              ["Sobre", "#sobre"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={`${label}-${href}`}
                href={href}
                className="pb-3 transition hover:text-[#D1AF66]"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-14 w-full items-center justify-center gap-2.5 rounded-full border border-[#D1AF66] bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-[0.24em] text-[#D1AF66] transition hover:-translate-y-0.5 hover:bg-[#D1AF66]/12 sm:inline-flex sm:w-auto sm:px-8"
          >
            <IconImage
              src={icons.whatsapp}
              alt="Ícone de WhatsApp"
              size={22}
              className="h-[18px] w-[18px] sm:h-5 sm:w-5"
            />
            WhatsApp
          </a>
        </header>

        <div className="mx-auto flex w-full max-w-[1500px] flex-1 items-center px-5 pb-8 pt-0 sm:px-8 lg:px-12 lg:pb-8">
          <div className="max-w-[680px]">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.52em] text-[#D1AF66] sm:text-base">
              MV Jóias & Perfumes
            </p>
            <h1 className="max-w-[680px] text-[clamp(2.75rem,10.5vw,5rem)] font-light leading-[1.02] text-[#F8F5EF] lg:text-[clamp(4rem,5.1vw,5.35rem)]">
              Elegância que revela sua presença.
            </h1>
            <DecorLine center={false} />
            <p className="max-w-[650px] text-[1.08rem] leading-8 text-white/88 sm:text-[1.25rem] sm:leading-[1.62] lg:text-[1.35rem]">
              Joias, semijoias, perfumes e acessórios selecionados para mulheres
              que valorizam sofisticação, exclusividade e beleza em cada detalhe.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton>Falar no WhatsApp</PrimaryButton>
              <SecondaryButton>Explorar Coleção</SecondaryButton>
            </div>

            <div className="mt-12 grid w-full max-w-[calc(100vw-2.5rem)] gap-0 border-t border-[#D1AF66]/35 pt-6 text-white sm:w-[760px] sm:grid-cols-3 lg:w-[840px]">
              {heroHighlights.map(
                (item, index) => (
                  <div
                    key={item.label}
                    className={`relative px-0 py-3 sm:px-6 lg:px-8 ${
                      index > 0 ? "sm:border-l sm:border-[#D1AF66]/45" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 sm:justify-center sm:gap-5">
                      <IconImage
                        src={item.icon}
                        alt={item.iconAlt}
                        size={56}
                        className="h-10 w-10 sm:h-12 sm:w-12"
                      />
                      <span className="block max-w-[8.75rem] text-[0.88rem] font-bold uppercase leading-7 tracking-[0.24em] text-white lg:max-w-[9.25rem] lg:text-[0.94rem]">
                        {item.label}
                      </span>
                    </div>
                    <span className="mt-4 block h-px w-16 bg-[#D1AF66]" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <ReferenceLightSection
        label="Essência da marca"
        title="Uma curadoria para mulheres que entendem o valor da presença."
        italicWord="presença"
        text="Na MV Jóias & Perfumes, cada escolha nasce de uma curadoria pensada para mulheres que valorizam beleza, presença e sofisticação. Mais do que acessórios, nossas peças traduzem autoestima, elegância e autenticidade."
        complement="A marca une joias, perfumes e acessórios em uma experiência feminina premium, feita para quem entende que os detalhes também comunicam poder, delicadeza e bom gosto."
        image={brand.essence}
        imageAlt="Colar de pérolas em composição institucional da MV Jóias & Perfumes"
        imageClass="-translate-x-5 scale-[1.76] sm:translate-x-0 sm:scale-[1.45] lg:max-w-[800px] lg:scale-[1.65]"
      />

      <ReferenceLightSection
        id="joias"
        label="Joias premium"
        title="Peças que revelam sua essência."
        text="Uma seleção sofisticada de joias e semijoias para mulheres que transformam detalhes em presença, elegância e autenticidade."
        complement="Cada peça foi pensada para valorizar a feminilidade com brilho, delicadeza e refinamento. Joias que não apenas completam o visual, mas traduzem personalidade, autoestima e sofisticação."
        image={brand.jewelry}
        imageAlt="Joias premium selecionadas pela MV Jóias & Perfumes"
        cta="Conhecer Joias"
        imageSide="left"
        imageClass="scale-[1.32] sm:scale-100 lg:max-w-[900px] lg:scale-[1.1]"
        mobileProductLayout
      />

      <ReferenceLightSection
        id="perfumes"
        label="Perfumes premium"
        title="Fragrâncias que marcam presença."
        text="Perfumes selecionados para mulheres que desejam expressar personalidade, elegância e sofisticação em cada detalhe."
        complement="Uma fragrância é mais do que um aroma. É memória, presença e identidade. Na MV, os perfumes são escolhidos para mulheres que desejam deixar uma impressão refinada antes mesmo de dizer uma palavra."
        image={brand.perfume}
        imageAlt="Perfumes premium selecionados pela MV Jóias & Perfumes"
        cta="Conhecer Perfumes"
        imageSide="right"
        imageClass="-translate-x-5 scale-[1.32] sm:translate-x-0 sm:scale-100 lg:max-w-[880px] lg:scale-[1.09]"
        mobileProductLayout
      />

      <ReferenceExperience />

      <ReferenceBags />

      <ReferenceLightSection
        id="relogios"
        label="Relógios premium"
        title="Detalhes que traduzem sofisticação."
        text="Relógios sofisticados para mulheres que valorizam presença, elegância e exclusividade em cada escolha."
        complement="O relógio é mais do que um marcador de tempo. É um detalhe de estilo, personalidade e refinamento, capaz de transformar a composição com discrição e elegância."
        image={brand.watches}
        imageAlt="Relógios premium selecionados pela MV Jóias & Perfumes"
        cta="Conhecer Relógios"
        imageSide="left"
        imageClass="-translate-x-5 scale-[1.3] sm:translate-x-0 sm:scale-100 lg:max-w-[860px] lg:scale-[1.08]"
        mobileProductLayout
      />

      <ReferenceFounders />
      <ReferenceFAQ />
      <ReferenceFinalCTA />
      <ReferenceFooter />
    </main>
  );
}
