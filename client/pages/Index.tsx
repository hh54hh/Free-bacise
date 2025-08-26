export default function Index() {
  return (
    <div className="min-h-screen bg-white text-gray-900" dir="rtl">
      {/* Header */}
      <header className="border-b border-gray-200 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">تكنولوجيا 2025</h1>
          <p className="text-center text-gray-600 mt-1">آخر أخبار التطوير والتكنولوجيا</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Featured Article */}
        <article className="mb-12 pb-8 border-b border-gray-200">
          <h2 className="text-3xl font-bold mb-4 leading-tight">
            الذكاء الاصطناعي في عام 2025: ثورة تقنية جديدة
          </h2>
          <div className="text-sm text-gray-500 mb-4">
            نُشر في 15 يناير 2025
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            يشهد عام 2025 تطورات مذهلة في مجال الذكاء الاصطناعي، حيث تستمر النماذج اللغوية الكبيرة في التطور وتصبح أكثر دقة وفعالية. من المتوقع أن نرى تطبيقات جديدة في التعليم والصحة والأعمال.
          </p>
          <p className="text-gray-700 leading-relaxed">
            تركز الشركات التقنية الكبرى على تطوير ذكاء اصطناعي أكثر أماناً وشفافية، مع التركيز على الاستخدام الأخلاقي للتكنولوجيا وحماية خصوصية المستخدمين.
          </p>
        </article>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          <article className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">
              تطوير الويب في 2025: React 19 والميزات الجديدة
            </h3>
            <div className="text-sm text-gray-500 mb-3">10 يناير 2025</div>
            <p className="text-gray-700 leading-relaxed">
              يقدم React 19 ميزات جديدة مثل Server Components المحسنة والـ Concurrent Features، مما يجعل تطوير التطبيقات أسرع وأكثر كفاءة.
            </p>
          </article>

          <article className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">
              الأمن السيبراني: التحديات الجديدة في عصر الذكاء ��لاصطناعي
            </h3>
            <div className="text-sm text-gray-500 mb-3">8 يناير 2025</div>
            <p className="text-gray-700 leading-relaxed">
              مع تطور الذكاء الاصطناعي، تظهر تحديات أمنية جديدة تتطلب استراتيجيات متقدمة لحماية البيانات والأنظمة من التهديدات المتطورة.
            </p>
          </article>

          <article className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">
              البرمجة بدون كود: مستقبل التطوير السريع
            </h3>
            <div className="text-sm text-gray-500 mb-3">5 يناير 2025</div>
            <p className="text-gray-700 leading-relaxed">
              تتطور منصات البرمجة بدون كود لتصبح أدوات قوية تمكن غير المطورين من إنشاء تطبيقات معقدة بسهولة ودون الحاجة لكتابة كود تقليدي.
            </p>
          </article>

          <article className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">
              البلوك تشين والعملات الرقمية: اتجاهات 2025
            </h3>
            <div className="text-sm text-gray-500 mb-3">3 يناير 2025</div>
            <p className="text-gray-700 leading-relaxed">
              تشهد تقنية البلوك تشين تطورات جديدة في مجال التمويل اللامركزي (DeFi) والرموز غير القابلة للاستبدال (NFTs) مع تركيز أكبر على الاستدامة البيئية.
            </p>
          </article>

          <article className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">
              الحوسبة السحابية: الجيل الجديد من الخدمات
            </h3>
            <div className="text-sm text-gray-500 mb-3">1 يناير 2025</div>
            <p className="text-gray-700 leading-relaxed">
              تقدم خدمات الحوسبة السحابية الجديدة مستويات أعلى من الأداء والأمان، مع تكامل أفضل مع تقنيات الذكاء الاصطناعي والتعلم الآلي.
            </p>
          </article>

          <article className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">
              إنترنت الأشياء (IoT): ثورة الأجهزة المتصلة
            </h3>
            <div className="text-sm text-gray-500 mb-3">28 ديسمبر 2024</div>
            <p className="text-gray-700 leading-relaxed">
              يتوسع إنترنت الأشياء ليشمل المنازل الذكية والمدن الذكية والصناعات، مع تحسينات في الأمان وكفاءة الطاقة والاتصال.
            </p>
          </article>
        </div>

        {/* Categories */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center">الأقسام</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800">البرمجة</h3>
              <p className="text-sm text-blue-600 mt-1">أحدث تقنيات التطوير</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">الذكاء الاصطناعي</h3>
              <p className="text-sm text-green-600 mt-1">مستقبل التكنولوجيا</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800">الأمن السيبراني</h3>
              <p className="text-sm text-purple-600 mt-1">حماية البيانات</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-orange-800">الابتكار</h3>
              <p className="text-sm text-orange-600 mt-1">أحدث الاختراعات</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-16">
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
}
