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
import {
  newsContainer,
  newsStoryGrid,
  newsStoryTitle,
  newsSummary,
  newsThumbnail,
} from "../news/layout";
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

const titleStyle =
  "text-balance font-sans font-bold tracking-normal wrap-anywhere";
const articleColumn = "mx-auto w-full max-w-[52rem]";
const linkFocus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A46A]";

function PublishDate({
  publishedOn,
  locale,
}: {
  publishedOn: string;
  locale: keyof Article["content"];
}) {
  return (
    <time
      dateTime={publishedOn}
      className="mt-3 block text-sm text-white/72 sm:text-base"
    >
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
    <figure className="mx-auto mt-6 w-full max-w-[58rem] sm:mt-8">
      <img
        src={src}
        alt={caption}
        width={1448}
        height={1086}
        loading={loading}
        decoding="async"
        className="block h-auto w-full rounded-sm border border-white/10"
      />
      <figcaption className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">
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
          <div className={newsContainer}>
            <div className={articleColumn}>
              <Link
                href="/news"
                className={`mb-5 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-[#C9A46A] transition-colors hover:text-white sm:mb-7 ${linkFocus}`}
              >
                <ArrowLeft
                  aria-hidden="true"
                  className="size-4 shrink-0 rtl:rotate-180"
                />
                {back}
              </Link>
            </div>

            <article lang={locale} dir="ltr">
              <header className={articleColumn}>
                <h1
                  className={`${titleStyle} text-[2rem] leading-tight sm:text-4xl lg:text-5xl`}
                >
                  {content.title}
                </h1>
                <PublishDate
                  publishedOn={article.publishedOn}
                  locale={locale}
                />
                <p className="mt-5 text-xl leading-[1.65] text-white/95 sm:mt-6 sm:text-2xl">
                  {content.lead}
                </p>
              </header>

              <NewsPhoto
                src={article.images[0]}
                caption={content.captions[0]}
              />

              <div className="mt-10 space-y-10 sm:mt-14 sm:space-y-14">
                {content.sections.map((section, index) => (
                  <section key={section.heading}>
                    <div className={articleColumn}>
                      <h2
                        className={`${titleStyle} text-2xl leading-snug sm:text-3xl`}
                      >
                        {section.heading}
                      </h2>
                      {section.paragraphs.map(paragraph => (
                        <p
                          key={paragraph}
                          className="mt-3 text-lg leading-[1.75] text-white/88 sm:mt-4 sm:text-xl"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
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
          <section className={newsContainer}>
            <h1
              className={`${titleStyle} mb-7 text-4xl leading-tight sm:mb-9 sm:text-5xl lg:text-6xl`}
            >
              {title}
            </h1>
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {articles.map(item => {
                const story = item.content[locale];

                return (
                  <li key={item.id} className="py-6 sm:py-8 lg:py-10">
                    <article lang={locale} dir="ltr">
                      <Link
                        href={`/news/${item.id}`}
                        aria-labelledby={`news-title-${item.id}`}
                        className={`group ${item.images[0] ? newsStoryGrid : "block"} ${linkFocus}`}
                      >
                        {item.images[0] && (
                          <img
                            src={item.images[0]}
                            alt=""
                            width={1448}
                            height={1086}
                            decoding="async"
                            className={newsThumbnail}
                          />
                        )}
                        <div className="min-w-0">
                          <h2
                            id={`news-title-${item.id}`}
                            className={`${newsStoryTitle} font-sans transition-colors group-hover:text-[#C9A46A] group-hover:underline group-hover:underline-offset-4`}
                          >
                            {story.title}
                          </h2>
                          <PublishDate
                            publishedOn={item.publishedOn}
                            locale={locale}
                          />
                          <p className={`${newsSummary} text-white/85`}>
                            {story.summary}
                          </p>
                        </div>
                      </Link>
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
