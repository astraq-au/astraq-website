import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage, type Language } from "../i18n/LanguageContext";
import { articles, formatPublicationDate } from "../news/articles";

const labels: Record<Language, { title: string; all: string }> = {
  en: { title: "Latest News", all: "View all news" },
  zh: { title: "最新新闻", all: "查看全部新闻" },
  es: { title: "Últimas noticias", all: "Ver todas las noticias" },
  ar: { title: "آخر الأخبار", all: "عرض كل الأخبار" },
  fr: { title: "Dernières actualités", all: "Voir toutes les actualités" },
  pt: { title: "Últimas notícias", all: "Ver todas as notícias" },
  vi: { title: "Tin mới nhất", all: "Xem tất cả tin tức" },
};

const latestArticle = [...articles].sort((a, b) =>
  b.publishedOn.localeCompare(a.publishedOn)
)[0];
const focusStyle =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#876635]";

export default function HomeNewsSection() {
  const { language, isRTL } = useLanguage();
  if (!latestArticle) return null;

  const locale = language === "zh" ? "zh" : "en";
  const { title, all } = labels[language];
  const story = latestArticle.content[locale];
  const uppercase = language === "zh" || isRTL ? "" : "uppercase";

  return (
    <section
      id="home-news"
      aria-labelledby="home-news-heading"
      dir={isRTL ? "rtl" : "ltr"}
      className="border-t border-black/8 bg-[#F7F6F3] py-10 text-black/88 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-12">
        <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-black/10 pb-4 sm:pb-5">
          <h2
            id="home-news-heading"
            className={`text-[clamp(1.75rem,2.3vw,2.6rem)] leading-tight font-semibold tracking-[-0.025em] [font-family:inherit] ${uppercase}`}
          >
            {title}
          </h2>
          <Link
            href="/news"
            className={`inline-flex min-h-11 items-center gap-2 border border-black/42 px-3.5 text-[clamp(0.8rem,0.8vw,1rem)] font-semibold tracking-[0.04em] transition-colors hover:border-black/75 hover:bg-black/5 ${uppercase} ${focusStyle}`}
          >
            {all}
            <ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" />
          </Link>
        </header>

        <article lang={locale} dir="ltr" className="mt-5 sm:mt-7">
          <Link
            href={`/news/${latestArticle.id}`}
            aria-labelledby="home-news-article-title"
            className={`group grid items-center gap-4 sm:grid-cols-[minmax(0,38%)_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[21rem_minmax(0,1fr)] lg:gap-10 ${focusStyle}`}
          >
            {latestArticle.images[0] && (
              <img
                src={latestArticle.images[0]}
                alt=""
                width={1448}
                height={1086}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full border border-black/10"
              />
            )}
            <div className="min-w-0">
              <h3
                id="home-news-article-title"
                className="text-[clamp(1.2rem,1.65vw,1.6rem)] leading-snug font-semibold tracking-[-0.02em] underline decoration-[#876635]/55 decoration-1 underline-offset-4 transition-colors [font-family:inherit] [overflow-wrap:anywhere] group-hover:text-[#75582E]"
              >
                {story.title}
              </h3>
              <time
                dateTime={latestArticle.publishedOn}
                className="mt-2 block text-sm text-black/60"
              >
                {formatPublicationDate(latestArticle.publishedOn, locale)}
              </time>
              <p className="mt-2.5 max-w-[55ch] text-base leading-relaxed text-black/65">
                {story.summary}
              </p>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}
