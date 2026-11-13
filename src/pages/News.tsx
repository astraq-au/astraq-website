import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";
import Footer from "../components/Footer";
import { useLanguage, type Language } from "../i18n/LanguageContext";
import {
  articles,
  formatPublicationDate,
  type Article,
} from "../news/articles";
import NotFound from "./NotFound";

const labels: Record<Language, { title: string; back: string }> = {
  en: { title: "ASTRAQ News", back: "Back to news" },
  zh: { title: "ASTRAQ 新闻", back: "返回新闻列表" },
  es: { title: "Noticias de ASTRAQ", back: "Volver a las noticias" },
  ar: { title: "أخبار ASTRAQ", back: "العودة إلى الأخبار" },
  fr: { title: "Actualités ASTRAQ", back: "Retour aux actualités" },
  pt: { title: "Notícias da ASTRAQ", back: "Voltar às notícias" },
  vi: { title: "Tin tức ASTRAQ", back: "Quay lại tin tức" },
};

const container = "mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-12";
const titleStyle =
  "text-balance font-sans font-bold tracking-tight [overflow-wrap:anywhere]";
function PublishDate({
  publishedOn,
  locale,
}: {
  publishedOn: string;
  locale: keyof Article["content"];
}) {
  return (
    <time dateTime={publishedOn} className="mt-2.5 block text-sm text-white/65">
      {formatPublicationDate(publishedOn, locale)}
    </time>
  );
}

function NewsPhoto({
  src,
  caption,
  loading,
}: {
  src: string | undefined;
  caption: string;
  loading?: "lazy";
}) {
  if (!src) return null;

  return (
    <figure className="mx-auto mt-4 w-full max-w-[26rem]">
      <img
        src={src}
        alt={caption}
        width={1448}
        height={1086}
        loading={loading}
        decoding="async"
        className="block h-auto w-full border border-white/10"
      />
      <figcaption className="mt-2 text-center text-sm leading-snug text-white/70">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function News() {
  const { id } = useParams<"/news/:id">();
  const { language, isRTL } = useLanguage();
  const locale = language === "zh" ? "zh" : "en";
  const { title, back } = labels[language];
  const article = articles.find(item => item.id === id);
  const content = article?.content[locale];
  const pageTitle = content?.title ?? title;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${pageTitle} | ASTRAQ`;
    return () => {
      document.title = previousTitle;
    };
  }, [pageTitle]);

  if (id && !article) return <NotFound />;

  return (
    <div
      className="min-h-screen bg-[#192326] font-sans text-white"
      style={{
        background: "linear-gradient(180deg, #233032 0%, #192326 640px)",
      }}
    >
      <main
        dir={isRTL ? "rtl" : "ltr"}
        className="pt-[clamp(7rem,9vw,11rem)] pb-[clamp(4rem,7vw,7rem)]"
      >
        {article && content ? (
          <div className="mx-auto w-full max-w-[48rem] px-6 sm:px-10">
            <Link
              href="/news"
              className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A46A] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A46A] sm:mb-6"
            >
              <ArrowLeft aria-hidden="true" className="size-4 rtl:rotate-180" />
              {back}
            </Link>

            <article lang={locale} dir="ltr">
              <header>
                <h1
                  className={`${titleStyle} text-[clamp(1.85rem,3.3vw,3rem)] leading-[1.14]`}
                >
                  {content.title}
                </h1>
                <PublishDate
                  publishedOn={article.publishedOn}
                  locale={locale}
                />
                <p className="mt-4 hyphens-auto text-justify text-base leading-[1.75] text-white/90 sm:text-lg">
                  {content.lead}
                </p>
              </header>

              <NewsPhoto
                src={article.images[0]}
                caption={content.captions[0]}
              />

              <div className="mt-7 space-y-7 sm:mt-8 sm:space-y-8">
                {content.sections.map((section, index) => (
                  <section key={section.heading}>
                    <h2
                      className={`${titleStyle} text-lg leading-snug sm:text-xl`}
                    >
                      {section.heading}
                    </h2>
                    {section.paragraphs.map(paragraph => (
                      <p
                        key={paragraph}
                        className="mt-2 hyphens-auto text-justify text-base leading-[1.75] text-white/80 sm:text-[1.0625rem]"
                      >
                        {paragraph}
                      </p>
                    ))}
                    <NewsPhoto
                      src={article.images[index + 1]}
                      caption={content.captions[index + 1]}
                      loading="lazy"
                    />
                  </section>
                ))}
                {article.images
                  .slice(content.sections.length + 1)
                  .map((src, index) => (
                    <NewsPhoto
                      key={src}
                      src={src}
                      caption={
                        content.captions[content.sections.length + 1 + index]
                      }
                      loading="lazy"
                    />
                  ))}
              </div>
            </article>
          </div>
        ) : (
          <section className={container}>
            <h1
              className={`${titleStyle} mb-7 text-[clamp(2.4rem,4.5vw,4rem)] leading-none sm:mb-10`}
            >
              {title}
            </h1>
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {articles.map(item => {
                const story = item.content[locale];

                return (
                  <li key={item.id} className="py-6 sm:py-8">
                    <article
                      lang={locale}
                      dir="ltr"
                      className="grid items-center gap-5 sm:grid-cols-[minmax(0,30%)_minmax(0,1fr)] sm:gap-8 lg:gap-12"
                    >
                      <img
                        src={item.images[0]}
                        alt=""
                        width={1448}
                        height={1086}
                        decoding="async"
                        className="block aspect-[4/3] w-full max-w-[22rem] border border-white/10 object-cover"
                      />
                      <div>
                        <h2
                          className={`${titleStyle} text-[clamp(1.4rem,2.65vw,2.85rem)] leading-tight`}
                        >
                          <Link
                            href={`/news/${item.id}`}
                            className="underline decoration-[#C9A46A]/65 decoration-1 underline-offset-4 transition-colors hover:text-[#C9A46A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A46A]"
                          >
                            {story.title}
                          </Link>
                        </h2>
                        <PublishDate
                          publishedOn={item.publishedOn}
                          locale={locale}
                        />
                        <p className="mt-3 max-w-[55ch] text-base leading-relaxed text-white/75 sm:text-lg">
                          {story.summary}
                        </p>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
