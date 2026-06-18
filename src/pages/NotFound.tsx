import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "../i18n/LanguageContext";
import { translateVi } from "../i18n/vietnameseFallback";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();

  const isZh = language === "zh";
  const isEs = language === "es";
  const isAr = language === "ar";
  const isFr = language === "fr";
  const isPt = language === "pt";
  const isVi = language === "vi";
  const isRtl = isAr;

  const getLabel = (
    en: string,
    zh: string,
    es: string,
    ar: string,
    fr: string,
    pt: string,
    vi = translateVi(en)
  ) => {
    if (isZh) return zh;
    if (isEs) return es;
    if (isAr) return ar;
    if (isFr) return fr;
    if (isPt) return pt;
    if (isVi) return vi;
    return en;
  };

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <Card className="w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-red-500" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>

          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            {getLabel(
              "Page Not Found",
              "页面未找到",
              "Página no encontrada",
              "الصفحة غير موجودة",
              "Page Introuvable",
              "Página Não Encontrada"
            )}
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            {getLabel(
              "Sorry, the page you are looking for doesn't exist.",
              "抱歉，您访问的页面不存在。",
              "Lo sentimos, la página que busca no existe.",
              "عذرًا، الصفحة التي تبحث عنها غير موجودة.",
              "Désolé, la page que vous recherchez n'existe pas.",
              "Desculpe, a página que você procura não existe."
            )}
            <br />
            {getLabel(
              "It may have been moved or deleted.",
              "该页面可能已被移动或删除。",
              "Es posible que se haya movido o eliminado.",
              "ربما تم نقلها أو حذفها.",
              "Elle a peut-être été déplacée ou supprimée.",
              "Ela pode ter sido movida ou excluída."
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className={isRtl ? "w-4 h-4 ml-2" : "w-4 h-4 mr-2"} />
              {getLabel(
                "Go Home",
                "返回首页",
                "Ir al inicio",
                "العودة إلى الرئيسية",
                "Retour à l'accueil",
                "Voltar ao início"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
