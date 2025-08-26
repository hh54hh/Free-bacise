import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-gray-900" dir="rtl">
      {/* Header */}
      <header className="border-b border-gray-200 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">تكنولوجيا 2025</h1>
          <p className="text-center text-gray-600 mt-1">آخر أخبار التطوير والتكنولوجيا</p>
        </div>
      </header>

      {/* 404 Content */}
      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-6xl font-bold text-gray-300 mb-4">404</h2>
        <h3 className="text-2xl font-bold mb-4">الصفحة غير موجودة</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو قد تكون قد تم نقلها إلى مكان آخر.
        </p>
        <a 
          href="/" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          العودة إلى الصفحة الرئيسية
        </a>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 absolute bottom-0 w-full">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">
            © 2025 تكنولوجيا 2025 - موقع متخصص في أخبار التطوير والتكنولوجيا
          </p>
          <p className="text-sm text-gray-500 mt-2">
            متوافق مع Free Basics • سريع وخفيف
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
