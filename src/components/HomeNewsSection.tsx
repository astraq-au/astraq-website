import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage, type Language } from "../i18n/LanguageContext";
import { articles, formatPublicationDate } from "../news/articles";
import {
  newsContainer,
  newsStoryGrid,
  newsStoryTitle,
  newsSummary,
  newsThumbnail,
} from "../news/layout";

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
      <div className={newsContainer}>
        <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-black/12 pb-5 sm:pb-6">
          <h2
            id="home-news-heading"
            className={`text-3xl leading-tight font-semibold tracking-normal [font-family:inherit] lg:text-[2.75rem] ${uppercase}`}
          >
            {title}
          </h2>
          <Link
            href="/news"
            className={`inline-flex min-h-11 max-w-full items-center gap-2 border border-black/42 px-4 py-2 text-sm font-semibold transition-colors hover:border-black/75 hover:bg-black/5 sm:text-base ${uppercase} ${focusStyle}`}
          >
            {all}
            <ArrowRight
              aria-hidden="true"
              className="size-4 shrink-0 rtl:rotate-180"
            />
          </Link>
        </header>

        <article lang={locale} dir="ltr" className="mt-6 sm:mt-8">
          <Link
            href={`/news/${latestArticle.id}`}
            aria-labelledby="home-news-article-title"
            className={`group ${latestArticle.images[0] ? newsStoryGrid : "block"} ${focusStyle}`}
          >
            {latestArticle.images[0] && (
              <img
                src={latestArticle.images[0]}
                alt=""
                width={1448}
                height={1086}
                loading="lazy"
                decoding="async"
                className={newsThumbnail}
              />
            )}
            <div className="min-w-0">
              <h3
                id="home-news-article-title"
                className={`${newsStoryTitle} [font-family:inherit] transition-colors group-hover:text-[#75582E] group-hover:underline group-hover:underline-offset-4`}
              >
                {story.title}
              </h3>
              <time
                dateTime={latestArticle.publishedOn}
                className="mt-3 block text-sm text-black/65 sm:text-base"
              >
                {formatPublicationDate(latestArticle.publishedOn, locale)}
              </time>
              <p className={`${newsSummary} text-black/78`}>{story.summary}</p>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}
